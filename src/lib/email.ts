/*
 * Coaching applications, emailed to Kevin through Resend (https://resend.com), by its HTTP API
 * so there's no SDK to install. Needs RESEND_API_KEY in Vercel, and the sending domain
 * (paidtospeak.biz by default) verified in Resend. Without the key, /apply shows the
 * strategy-session booking instead of the form (src/app/apply/page.tsx).
 */

// Ben, 2026-10-16: every application goes to Kevin.
const TO = process.env.APPLY_TO || "kevin@kevincsnyder.com";
const FROM = process.env.APPLY_FROM || "Paid to $peak <applications@paidtospeak.biz>";

/** Whether applications can be sent. Read at build time by /apply, which is a static page. */
export function applicationsOpen() {
  return Boolean(process.env.RESEND_API_KEY);
}

export type Application = { name: string; email: string; program: string; stage: string; link: string };

export async function sendApplication(a: Application): Promise<{ ok: true } | { ok: false; reason: "not-configured" | "failed" }> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return { ok: false, reason: "not-configured" };

  const text = [
    `Name: ${a.name}`,
    `Email: ${a.email}`,
    `Interested in: ${a.program}`,
    `Link: ${a.link || "(none)"}`,
    "",
    "Where they are with speaking right now:",
    a.stage,
    "",
    "Reply to this email to answer them directly.",
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: a.email,
      subject: `Coaching application: ${a.name} (${a.program})`,
      text,
    }),
  });
  if (!res.ok) {
    const body: { name?: string; message?: string } | null = await res.json().catch(() => null);
    console.error("Application email failed", res.status, body?.name, body?.message);
    return { ok: false, reason: "failed" };
  }
  return { ok: true };
}
