"use server";

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

  const result = await subscribe(email, [TAGS[list]]);
  if (result.ok) {
    return {
      status: "success",
      message: result.pending ? "Almost done — check your inbox to confirm." : "You’re on the list.",
    };
  }
  switch (result.reason) {
    case "invalid":
      return { status: "error", message: "MailChimp didn’t accept that address. Check it and try again.", fieldErrors: { email: "Check this address." }, values: { email } };
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

  const fieldErrors: Record<string, string> = {};
  if (!name) fieldErrors.name = "Tell Kevin your name.";
  if (!EMAIL.test(email)) fieldErrors.email = "Enter a valid email address.";
  if (stage.length < 20) fieldErrors.stage = "A few sentences, please — it helps Kevin read where you are.";
  if (link && !URL.canParse(link.startsWith("http") ? link : `https://${link}`)) fieldErrors.link = "That doesn’t look like a link.";
  const values = { name, email, stage, link };
  if (Object.keys(fieldErrors).length) {
    return { status: "error", message: "A couple of fields need another look.", fieldErrors, values };
  }

  // TODO(kc): where do applications go — email, MailChimp, or a form service?
  // Until that's decided, say so honestly instead of pretending it was sent.
  return {
    status: "error",
    message: "Online applications aren’t switched on yet. Please check back soon.",
    values,
  };
}
