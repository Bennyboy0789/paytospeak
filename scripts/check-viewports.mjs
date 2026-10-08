// Definition-of-done check: every route at 375 / 768 / 1440 with no horizontal scroll.
// Drives a local Chrome over the DevTools protocol (Node 22+, no extra deps).
//
//   npm run build && npx next start -p 3100
//   npm run check:viewports -- [--base http://localhost:3100] [--shots ./shots] [/route ...]
//
// Set CHROME_PATH if Chrome isn't in the default location.
import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const i = args.indexOf(name);
  return i === -1 ? fallback : args.splice(i, 2)[1];
};
const base = flag("--base", "http://localhost:3100");
const shots = flag("--shots", null);
const routes = args.length ? args : ["/"];
const widths = [375, 768, 1440];

const chromePath =
  process.env.CHROME_PATH ??
  {
    win32: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    darwin: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  }[process.platform] ??
  "google-chrome";

const profile = fs.mkdtempSync(path.join(os.tmpdir(), "viewports-"));
const port = 9300 + Math.floor(Math.random() * 500);
const chrome = spawn(chromePath, [
  "--headless=new",
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${profile}`,
  "--hide-scrollbars",
  "about:blank",
]);

async function connect() {
  for (let i = 0; i < 50; i++) {
    try {
      const targets = await (await fetch(`http://127.0.0.1:${port}/json`)).json();
      const page = targets.find((t) => t.type === "page");
      if (page) return page.webSocketDebuggerUrl;
    } catch {}
    await new Promise((r) => setTimeout(r, 200));
  }
  throw new Error("Chrome did not start");
}

const ws = new WebSocket(await connect());
await new Promise((r) => ws.addEventListener("open", r, { once: true }));
let nextId = 0;
const pending = new Map();
const waiters = [];
ws.addEventListener("message", ({ data }) => {
  const msg = JSON.parse(data);
  if (msg.id && pending.has(msg.id)) {
    pending.get(msg.id)(msg);
    pending.delete(msg.id);
  } else if (msg.method) {
    waiters.filter((w) => w.method === msg.method).forEach((w) => w.resolve(msg));
  }
});
const send = (method, params = {}) =>
  new Promise((resolve, reject) => {
    const id = ++nextId;
    pending.set(id, (msg) => (msg.error ? reject(new Error(msg.error.message)) : resolve(msg.result)));
    ws.send(JSON.stringify({ id, method, params }));
  });
const once = (method) =>
  new Promise((resolve) => {
    const w = { method, resolve: (m) => (waiters.splice(waiters.indexOf(w), 1), resolve(m)) };
    waiters.push(w);
  });

await send("Page.enable");
let failures = 0;
for (const route of routes) {
  for (const width of widths) {
    await send("Emulation.setDeviceMetricsOverride", { width, height: 900, deviceScaleFactor: 1, mobile: width < 768 });
    const loaded = once("Page.loadEventFired");
    await send("Page.navigate", { url: base + route });
    await loaded;
    await send("Runtime.evaluate", { expression: "document.fonts.ready", awaitPromise: true });
    const { result } = await send("Runtime.evaluate", {
      returnByValue: true,
      expression: `(() => {
        const vw = document.documentElement.clientWidth;
        const offenders = [...document.querySelectorAll("body *")]
          .filter((el) => el.getBoundingClientRect().right > vw + 1 && getComputedStyle(el).position !== "fixed")
          .filter((el) => !el.closest("[aria-hidden=true]"))
          .slice(0, 5)
          .map((el) => el.tagName.toLowerCase() + (el.id ? "#" + el.id : "") + "." + [...el.classList].slice(0, 3).join("."));
        return { scrollWidth: document.documentElement.scrollWidth, vw, offenders };
      })()`,
    });
    const { scrollWidth, vw, offenders } = result.value;
    const ok = scrollWidth <= vw;
    if (!ok) failures++;
    console.log(`${ok ? "ok  " : "FAIL"} ${route} @ ${width}px  scrollWidth=${scrollWidth}${ok ? "" : "  " + offenders.join(", ")}`);
    if (shots) {
      const { cssContentSize } = await send("Page.getLayoutMetrics");
      const { data } = await send("Page.captureScreenshot", {
        captureBeyondViewport: true,
        clip: { x: 0, y: 0, width, height: Math.ceil(cssContentSize.height), scale: 1 },
      });
      fs.mkdirSync(shots, { recursive: true });
      const name = (route === "/" ? "home" : route.replace(/^\//, "").replace(/\//g, "_")) + `-${width}.png`;
      fs.writeFileSync(path.join(shots, name), Buffer.from(data, "base64"));
    }
  }
}

ws.close();
chrome.kill();
process.exit(failures ? 1 : 0);
