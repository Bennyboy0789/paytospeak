import { createHash } from "node:crypto";

export type SubscribeResult =
  | { ok: true; pending: boolean }
  | { ok: false; reason: "not-configured" | "invalid" | "failed" };

/**
 * Adds an email to the MailChimp audience and tags it.
 *
 * Upserts by email: new contacts get `pending` (double opt-in, MailChimp sends the
 * confirmation email) or `subscribed`; existing contacts keep their status, so
 * someone who unsubscribed is never silently re-subscribed.
 *
 * TODO(kc): confirm the audience ID and single vs double opt-in. Double opt-in is
 * the default until told otherwise (MAILCHIMP_DOUBLE_OPT_IN=false to switch).
 */
export async function subscribe(email: string, tags: string[]): Promise<SubscribeResult> {
  const key = process.env.MAILCHIMP_API_KEY;
  const server = process.env.MAILCHIMP_SERVER_PREFIX;
  const audience = process.env.MAILCHIMP_AUDIENCE_ID;
  if (!key || !server || !audience) return { ok: false, reason: "not-configured" };

  const doubleOptIn = process.env.MAILCHIMP_DOUBLE_OPT_IN !== "false";
  const member = `https://${server}.api.mailchimp.com/3.0/lists/${audience}/members/${createHash("md5")
    .update(email.toLowerCase())
    .digest("hex")}`;
  const headers = {
    Authorization: `Basic ${Buffer.from(`anystring:${key}`).toString("base64")}`,
    "Content-Type": "application/json",
  };

  const res = await fetch(member, {
    method: "PUT",
    headers,
    body: JSON.stringify({ email_address: email, status_if_new: doubleOptIn ? "pending" : "subscribed" }),
  });
  if (!res.ok) {
    const body: { title?: string; detail?: string } | null = await res.json().catch(() => null);
    if (res.status === 400 && body?.title === "Invalid Resource") return { ok: false, reason: "invalid" };
    console.error("MailChimp subscribe failed", res.status, body?.title, body?.detail);
    return { ok: false, reason: "failed" };
  }

  if (tags.length) {
    const tagged = await fetch(`${member}/tags`, {
      method: "POST",
      headers,
      body: JSON.stringify({ tags: tags.map((name) => ({ name, status: "active" })) }),
    });
    // The contact is already saved; a tagging failure shouldn't fail the sign-up.
    if (!tagged.ok) console.error("MailChimp tagging failed", tagged.status);
  }

  return { ok: true, pending: doubleOptIn };
}
