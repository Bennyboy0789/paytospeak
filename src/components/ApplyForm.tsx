"use client";

import { useActionState, useId, type ReactNode } from "react";
import { applyAction, type FormState } from "@/app/actions";
import { apply } from "@/content/apply";

const initial: FormState = { status: "idle", message: "" };
const { fields } = apply;

const inputClass =
  "w-full rounded-xl border border-input bg-muted px-5 py-3.5 text-base text-foreground placeholder:text-muted-foreground transition duration-300 hover:border-white/25 focus:border-primary focus:shadow-[0_0_0_4px_rgb(0_168_230/0.15)] focus:outline-none aria-invalid:border-red-400";

export function ApplyForm() {
  const [state, action, pending] = useActionState(applyAction, initial);
  const id = useId();
  const err = state.fieldErrors ?? {};
  const v = state.values ?? {};

  if (state.status === "success") {
    return (
      <p role="status" className="rounded-2xl border border-accent/40 bg-accent/10 px-6 py-5">
        {state.message}
      </p>
    );
  }

  return (
    <form action={action} noValidate className="space-y-7">
      <div aria-hidden="true" className="hidden">
        <label>
          Company <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-7 sm:grid-cols-2">
        <Field id={`${id}-name`} label={fields.name} error={err.name}>
          <input id={`${id}-name`} name="name" defaultValue={v.name} autoComplete="name" required className={inputClass} {...invalid(err.name, `${id}-name`)} />
        </Field>
        <Field id={`${id}-email`} label={fields.email} error={err.email}>
          <input id={`${id}-email`} name="email" type="email" defaultValue={v.email} autoComplete="email" required className={inputClass} {...invalid(err.email, `${id}-email`)} />
        </Field>
      </div>

      <Field id={`${id}-stage`} label={fields.stage} hint={fields.stageHint} error={err.stage}>
        <textarea id={`${id}-stage`} name="stage" defaultValue={v.stage} rows={6} required className={inputClass} {...invalid(err.stage, `${id}-stage`, true)} />
      </Field>

      <Field id={`${id}-link`} label={fields.link} hint={fields.linkHint} error={err.link}>
        <input id={`${id}-link`} name="link" defaultValue={v.link} type="url" inputMode="url" placeholder="https://" className={inputClass} {...invalid(err.link, `${id}-link`, true)} />
      </Field>

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={pending}
          className="btn-shine cursor-pointer rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wide text-accent-foreground shadow-amber transition duration-500 ease-out-expo hover:-translate-y-0.5 hover:shadow-amber-lg disabled:opacity-60"
        >
          {pending ? "Sending…" : fields.submit}
        </button>
        <p role="status" className="text-sm text-muted-foreground">
          {state.status === "error" ? state.message : ""}
        </p>
      </div>
    </form>
  );
}

function invalid(error: string | undefined, fieldId: string, hasHint = false) {
  const describedBy = [hasHint && `${fieldId}-hint`, error && `${fieldId}-error`].filter(Boolean).join(" ");
  return {
    "aria-invalid": error ? true : undefined,
    "aria-describedby": describedBy || undefined,
  };
}

function Field({ id, label, hint, error, children }: { id: string; label: string; hint?: string; error?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold">
        {label}
      </label>
      {hint && (
        <p id={`${id}-hint`} className="mt-1 text-sm text-muted-foreground">
          {hint}
        </p>
      )}
      <div className="mt-3">{children}</div>
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}
