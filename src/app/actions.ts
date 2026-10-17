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

  const f = apply.fields;
  const one = (key: string) => String(formData.get(key) ?? "").trim();
  // Only answers that are one of the form's own options; multi-selects travel as one per line.
  const pick = (key: string, allowed: readonly string[]) =>
    formData
      .getAll(key)
      .map(String)
      .filter((x) => allowed.includes(x));

  const name = one("name");
  const email = one("email");
  const phone = one("phone");
  const level = pick("level", f.level.options)[0] ?? "";
  const vision = pick("vision", f.vision.options);
  const programs = pick(
    "programs",
    f.programs.options.map((o) => o.value),
  );
  const challenge = one("challenge");
  const year = one("year");
  const years = one("years");
  const investment = pick("investment", f.investment.options)[0] ?? "";
  const notes = one("notes");
  const from = one("from").slice(0, 40);

  const fieldErrors: Record<string, string> = {};
  if (!name) fieldErrors.name = "Tell Kevin your name.";
  if (!EMAIL.test(email)) fieldErrors.email = "Enter a valid email address.";
  if (!level) fieldErrors.level = "Choose the one that fits best.";
  if (!vision.length) fieldErrors.vision = "Choose at least one.";
  if (!programs.length) fieldErrors.programs = "Choose at least one. “Not sure yet” is fine.";
  if (!challenge) fieldErrors.challenge = "A sentence or two is enough.";
  if (!year) fieldErrors.year = "Where would you like to be in a year?";
  if (!years) fieldErrors.years = "And in three years?";
  if (!investment) fieldErrors.investment = "Choose the one that fits best.";
  const values = { name, email, phone, level, vision: vision.join("\n"), programs: programs.join("\n"), challenge, year, years, investment, notes };
  if (Object.keys(fieldErrors).length) {
    return { status: "error", message: "A few questions need another look.", fieldErrors, values };
  }

  const programLabels = programs.map((p) => f.programs.options.find((o) => o.value === p)?.label ?? p);
  const result = await sendApplication({
    name,
    email,
    summary: programLabels.join(", "),
    answers: [
      [f.name, name],
      [f.email, email],
      [f.phone, phone || "(not given)"],
      [f.level.label, level],
      [f.vision.label, vision.join("; ")],
      [f.programs.label, programLabels.join("; ")],
      ["Came from the button for", from || "(the general Apply button)"],
      [f.challenge, challenge],
      [`${f.success.label} ${f.success.year}`, year],
      [`${f.success.label} ${f.success.threeYears}`, years],
      [f.investment.label, investment],
      [f.notes, notes || "(nothing)"],
    ],
  });
  if (result.ok) {
    return { status: "success", message: `Thanks, ${name}. Your application is with Kevin, and his team will respond within one business day.` };
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
