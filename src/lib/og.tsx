import fs from "node:fs";
import { readFile } from "node:fs/promises";
import path from "node:path";
import type { StaticImageData } from "next/image";
import { ImageResponse } from "next/og";
import sharp from "sharp";
import type { Program } from "@/content/programs/types";
import type { Headline } from "@/content/shared";

/*
 * The card a page shows when its link is shared (LinkedIn, iMessage, Slack, X).
 * Every route's opengraph-image.tsx calls ogCard(). Same layout as the site: the page's own
 * headline in Inter Tight with its highlight in brand blue, the logo, and a photo of Kevin
 * fading into the stage dark on the right.
 */

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";
export const ogAlt = "Paid to $peak: speaker coaching with Dr. Kevin C. Snyder";

const PHOTO_W = 580;

/**
 * The photo's file on disk. Accepts a path under src/assets/images, or an imported image:
 * its built name ("workshop-room.40b76tqb4hut2.jpg") is matched back to the source file.
 */
function photoFile(photo: string | StaticImageData) {
  if (typeof photo === "string") return path.join(process.cwd(), "src/assets/images", photo);
  const name = path.basename(photo.src).replace(/\.[^.]+(\.\w+)$/, "$1");
  const found = ["", "stage"].map((dir) => path.join(process.cwd(), "src/assets/images", dir, name)).find((f) => fs.existsSync(f));
  if (!found) throw new Error(`og: no source file for ${photo.src}`);
  return found;
}

/**
 * Fonts, logo and the photo cropped to its panel (`focusX`, 0 to 1, picks which part of a wide
 * photo stays). Cached, so every card is drawn once at build time instead of on each request.
 */
async function cardAssets(file: string, focusX: number) {
  "use cache";
  const img = sharp(file);
  const { width = 1, height = 1 } = await img.metadata();
  const cropW = Math.min(width, Math.round((height * PHOTO_W) / ogSize.height));
  const left = Math.round(Math.min(width - cropW, Math.max(0, focusX * width - cropW / 2)));
  const [display, text, logo, photo] = await Promise.all([
    readFile(path.join(process.cwd(), "src/assets/fonts", "inter-tight-latin-900.woff"), "base64"),
    readFile(path.join(process.cwd(), "src/assets/fonts", "inter-latin-600.woff"), "base64"),
    readFile(path.join(process.cwd(), "public", "logo-paidtospeak.svg"), "base64"),
    img.extract({ left, top: 0, width: cropW, height }).resize(PHOTO_W, ogSize.height).jpeg({ quality: 80, mozjpeg: true }).toBuffer(),
  ]);
  return { display, text, logoSrc: `data:image/svg+xml;base64,${logo}`, photoSrc: `data:image/jpeg;base64,${photo.toString("base64")}` };
}

/** First percentage of a CSS object-position, e.g. "62% 50%" gives 0.62. */
export function focusFrom(position?: string) {
  const m = position?.match(/(\d+(?:\.\d+)?)%/);
  return m ? Number(m[1]) / 100 : 0.5;
}

export async function ogCard({
  eyebrow,
  headline,
  photo,
  focusX = 0.5,
}: {
  eyebrow: string;
  headline: Headline;
  photo: string | StaticImageData;
  focusX?: number;
}) {
  const { display, text, logoSrc, photoSrc } = await cardAssets(photoFile(photo), focusX);
  const length = headline.lead.length + (headline.highlight?.length ?? 0);
  const fontSize = length > 70 ? 52 : length > 48 ? 60 : 72;

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        background: "#010407",
        fontFamily: "Inter",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img> */}
      <img src={photoSrc} alt="" width={PHOTO_W} height={ogSize.height} style={{ position: "absolute", right: 0, top: 0 }} />
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          width: PHOTO_W,
          height: ogSize.height,
          display: "flex",
          backgroundImage:
            "linear-gradient(to right, #010407 0%, rgba(1,4,7,0.55) 38%, rgba(1,4,7,0) 70%), linear-gradient(to top, rgba(1,4,7,0.6) 0%, rgba(1,4,7,0) 40%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          backgroundImage: "radial-gradient(circle at 12% -10%, rgba(0,168,230,0.2), rgba(0,168,230,0) 55%)",
        }}
      />
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: 680,
          height: "100%",
          padding: "68px 0 60px 72px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 20,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#f7a224",
            fontWeight: 600,
          }}
        >
          {eyebrow}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Inter Tight",
            fontWeight: 900,
            fontSize,
            lineHeight: 1,
            letterSpacing: "-0.005em",
            color: "#f6f9fc",
          }}
        >
          <span>{headline.lead}</span>
          {headline.highlight && <span style={{ color: "#00a8e6", marginTop: 6 }}>{headline.highlight}</span>}
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img> */}
        <img src={logoSrc} alt="" height={52} width={Math.round((52 * 931.65) / 134)} />
      </div>
    </div>,
    {
      ...ogSize,
      fonts: [
        { name: "Inter Tight", data: Buffer.from(display, "base64"), weight: 900, style: "normal" },
        { name: "Inter", data: Buffer.from(text, "base64"), weight: 600, style: "normal" },
      ],
    },
  );
}

/** A program page's card: its own hero eyebrow, headline and photo. */
export function programCard(program: Program) {
  return ogCard({
    eyebrow: program.eyebrow,
    headline: program.headline,
    photo: program.photo?.src ?? "stage/stage-wave.jpg",
    focusX: focusFrom(program.photo?.position),
  });
}
