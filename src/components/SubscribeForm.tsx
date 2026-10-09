"use client";

import { useActionState, useId } from "react";
import { subscribeAction, type FormState } from "@/app/actions";

const initial: FormState = { status: "idle", message: "" };

type SubscribeFormProps = {
  list: "newsletter" | "book";
  submitLabel: string;
};

export function SubscribeForm({ list, submitLabel }: SubscribeFormProps) {
  const [state, action, pending] = useActionState(subscribeAction, initial);
  const id = useId();
  const emailError = state.fieldErrors?.email;

  if (state.status === "success") {
    return (
      <p role="status" className="rounded-2xl border border-accent/40 bg-accent/10 px-6 py-5 text-foreground">
        {state.message}
      </p>
    );
  }

  return (
    <form action={action} noValidate className="w-full">
      <input type="hidden" name="list" value={list} />
      <div aria-hidden="true" className="hidden">
        <label>
          Company <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row">
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
          className="min-h-13 flex-1 rounded-full border border-input bg-muted px-6 text-base text-foreground placeholder:text-muted-foreground transition duration-300 hover:border-white/25 focus:border-primary focus:shadow-[0_0_0_4px_rgb(0_168_230/0.15)] focus:outline-none aria-invalid:border-red-400"
        />
        <button
          type="submit"
          disabled={pending}
          className="btn-shine min-h-13 cursor-pointer rounded-full bg-accent px-7 text-sm font-semibold uppercase tracking-wide text-accent-foreground shadow-amber transition duration-500 ease-out-expo hover:-translate-y-0.5 hover:shadow-amber-lg disabled:opacity-60"
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
