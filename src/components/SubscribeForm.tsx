"use client";

import { useActionState, useEffect, useId } from "react";
import { subscribeAction, type FormState } from "@/app/actions";
import { track } from "@/lib/track";

const initial: FormState = { status: "idle", message: "" };

type SubscribeFormProps = {
  list: "newsletter" | "book";
  submitLabel: string;
  /** Where the form sits, e.g. "blog-post". Sent to MailChimp as a tag and to analytics. */
  source: string;
};

export function SubscribeForm({ list, submitLabel, source }: SubscribeFormProps) {
  const [state, action, pending] = useActionState(subscribeAction, initial);
  const id = useId();
  const emailError = state.fieldErrors?.email;

  useEffect(() => {
    if (state.status === "success") track("subscribe", { list, source });
  }, [state.status, list, source]);

  if (state.status === "success") {
    return (
      <p role="status" className="rounded-2xl border border-accent/40 bg-accent/10 px-6 py-5 text-foreground">
        {state.message}
      </p>
    );
  }

  return (
    <form action={action} noValidate className="@container w-full">
      <input type="hidden" name="list" value={list} />
      <input type="hidden" name="source" value={source} />
      <div aria-hidden="true" className="hidden">
        <label>
          Company <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      {/* Side by side only when the form itself has room, wherever it is placed. */}
      <div className="flex flex-col gap-3 @sm:flex-row">
        <label htmlFor={`${id}-email`} className="sr-only">
          Email address
        </label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          defaultValue={state.values?.email}
          placeholder="you@example.com"
          aria-invalid={emailError ? true : undefined}
          aria-describedby={`${id}-status`}
          className="min-h-13 min-w-0 flex-1 rounded-full border border-input bg-muted px-6 text-base text-foreground placeholder:text-muted-foreground transition duration-300 hover:border-white/25 focus:border-primary focus:shadow-[0_0_0_4px_rgb(0_168_230/0.15)] focus:outline-none aria-invalid:border-red-400"
        />
        <button
          type="submit"
          disabled={pending}
          className="min-h-13 shrink-0 cursor-pointer whitespace-nowrap rounded-full bg-accent px-7 text-sm font-semibold uppercase tracking-wide text-accent-foreground shadow-amber transition duration-500 ease-out-expo hover:-translate-y-0.5 hover:shadow-amber-lg disabled:opacity-60"
        >
          {pending ? "Sending…" : submitLabel}
        </button>
      </div>
      <p id={`${id}-status`} role="status" className="mt-3 min-h-6 text-sm text-muted-foreground">
        {state.status === "error" ? state.message : ""}
      </p>
    </form>
  );
}
