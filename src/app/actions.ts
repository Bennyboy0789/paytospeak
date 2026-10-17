"use server";

import { apply } from "@/content/apply";
import { sendApplication } from "@/lib/email";
import { subscribe } from "@/lib/mailchimp";

export type FormState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: Partial<Record<string, string>>;
  /** Echoed back on error: React resets the form after an action, so inputs use these as defaults. */
  values?: Partial<Record<string, string>>;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// MailChimp tags, so Kevin can tell the lists apart inside one audience.
const TAGS = {
  newsletter: "speaker-tips",
  book: "paid-to-speak-2-notify",
} as const;

export async function subscribeAction(_prev: FormState, formData: FormData): Promise<FormState> {
  // Honeypot: real people never see or fill this field.
  if (formData.get("company")) return { status: "success", message: "Thanks." };

  const email = String(formData.get("email") ?? "").trim();
  if (!EMAIL.test(email)) {
    return { status: "error", message: "Check the email address.", fieldErrors: { email: "Enter a valid email address." }, values: { email } };
  }
  const list = formData.get("list") === "book" ? "book" : "newsletter";
  // Which form it came from (home, blog, blog-post, resources, book), so Kevin can see what works.
  const source = String(formData.get("source") ?? "").toLowerCase();
  const tags: string[] = [TAGS[list]];
  if (/^[a-z-]{1,24}$/.test(source)) tags.push(`signup-${source}`);

  const result = await subscribe(email, tags);
  if (result.ok) {
    return {
      status: "success",
      message: result.pending ? "Almost done. Check your inbox to confirm." : "You’re on the list.",
    };
  }
  switch (result.reason) {
    case "invalid":
      return {
        status: "error",
        message: "MailChimp didn’t accept that address. Check it and try again.",
        fieldErrors: { email: "Check this address." },
        values: { email },
      };
    case "not-configured":
      return { status: "error", message: "Sign-up isn’t connected yet. Please check back soon.", values: { email } };
    default:
      return { status: "error", message: "Something went wrong on our end. Please try again in a minute.", values: { email } };
  }
}

export async function applyAction(_prev: FormState, formData: FormData): Promise<FormState> {
  if (formData.get("company")) return { status: "success", message: "Thanks." };

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const stage = String(formData.get("stage") ?? "").trim();
  const link = String(formData.get("link") ?? "").trim();
  const program = String(formData.get("program") ?? "").trim();

  const fieldErrors: Record<string, string> = {};
  if (!name) fieldErrors.name = "Tell Kevin your name.";
  if (!EMAIL.test(email)) fieldErrors.email = "Enter a valid email address.";
  if (stage.length < 20) fieldErrors.stage = "A few sentences, please. It helps Kevin read where you are.";
  if (link && !URL.canParse(link.startsWith("http") ? link : `https://${link}`)) fieldErrors.link = "That doesn’t look like a link.";
  const values = { name, email, stage, link, program };
  if (Object.keys(fieldErrors).length) {
    return { status: "error", message: "A couple of fields need another look.", fieldErrors, values };
  }

  const programLabel = apply.fields.programs.find((p) => p.value === program)?.label ?? "Not sure yet";
  const result = await sendApplication({ name, email, program: programLabel, stage, link });
  if (result.ok) {
    return { status: "success", message: `Thanks, ${name}. Your application is with Kevin, and he’ll reply by email.` };
  }
  return {
    status: "error",
    message:
      result.reason === "not-configured"
        ? "Online applications aren’t switched on yet. Please email Kevin instead."
        : "Something went wrong on our end and your application didn’t send. Please try again in a minute, or email Kevin.",
    values,
  };
}
