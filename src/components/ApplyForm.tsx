"use client";

import { type ReactNode, useActionState, useEffect, useId, useRef, useSyncExternalStore } from "react";
import { applyAction, type FormState } from "@/app/actions";
import { apply } from "@/content/apply";
import { calendly } from "@/content/programs/types";
import { track } from "@/lib/track";

const initial: FormState = { status: "idle", message: "" };
const { fields } = apply;

const inputClass =
  "w-full rounded-xl border border-input bg-muted px-5 py-3.5 text-base text-foreground placeholder:text-muted-foreground transition duration-300 hover:border-white/25 focus:border-primary focus:shadow-[0_0_0_4px_rgb(0_168_230/0.15)] focus:outline-none aria-invalid:border-red-400";

const noSubscribe = () => () => {};
const programFromUrl = () => new URLSearchParams(window.location.search).get("program") ?? "";

/** Multi-select answers travel as one value per line (see applyAction). */
const many = (value?: string) => (value ? value.split("\n") : []);

/** Kevin's coaching application: the same questions as kevincsnyder.com/coaching/apply. */
export function ApplyForm() {
  const [state, action, pending] = useActionState(applyAction, initial);
  const id = useId();
  const err = state.fieldErrors ?? {};
  const v = state.values ?? {};
  const form = useRef<HTMLFormElement>(null);
  // The `?program=` the visitor arrived with. Read in the browser so /apply stays a static page.
  const from = useSyncExternalStore(noSubscribe, programFromUrl, () => "");

  // After a failed submit, take the reader to the first field that needs another look,
  // which on a phone is often above the screen.
  useEffect(() => {
    if (state.fieldErrors) form.current?.querySelector<HTMLElement>("[aria-invalid=true]")?.focus();
  }, [state]);

  useEffect(() => {
    if (state.status === "success") track("apply_submit", { program: from });
  }, [state.status, from]);

  if (state.status === "success") {
    return (
      <div role="status" className="rounded-2xl border border-accent/40 bg-accent/10 px-6 py-5">
        <p>{state.message}</p>
        <p className="mt-3 text-sm text-muted-foreground">
          {fields.sooner}{" "}
          <a href={calendly.strategy} target="_blank" rel="noopener" className="link-draw font-semibold text-primary">
            {apply.contact.callCta}
          </a>
        </p>
      </div>
    );
  }

  const preselected = fields.programs.fromLink[from];
  const programs = v.programs !== undefined ? many(v.programs) : preselected ? [preselected] : [];

  return (
    // key: a link-preselected program appears once `from` is read after hydration.
    <form key={from} ref={form} action={action} noValidate className="space-y-9">
      <div aria-hidden="true" className="hidden">
        <label>
          Company <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <input type="hidden" name="from" value={from} />

      <fieldset className="space-y-6">
        <legend className="font-display text-xl font-black tracking-[-0.01em]">{fields.contactHeading}</legend>
        <div className="grid gap-6 sm:grid-cols-2">
          <Field id={`${id}-name`} label={`${fields.name} *`} error={err.name}>
            <input
              id={`${id}-name`}
              name="name"
              defaultValue={v.name}
              autoComplete="name"
              required
              className={inputClass}
              {...invalid(err.name, `${id}-name`)}
            />
          </Field>
          <Field id={`${id}-email`} label={`${fields.email} *`} error={err.email}>
            <input
              id={`${id}-email`}
              name="email"
              type="email"
              defaultValue={v.email}
              autoComplete="email"
              required
              className={inputClass}
              {...invalid(err.email, `${id}-email`)}
            />
          </Field>
        </div>
        <Field id={`${id}-phone`} label={fields.phone} hint={fields.optional}>
          <input
            id={`${id}-phone`}
            name="phone"
            type="tel"
            defaultValue={v.phone}
            autoComplete="tel"
            className={inputClass}
            aria-describedby={`${id}-phone-hint`}
          />
        </Field>
      </fieldset>

      <Choices
        id={`${id}-level`}
        name="level"
        type="radio"
        label={fields.level.label}
        options={fields.level.options}
        checked={[v.level ?? ""]}
        error={err.level}
      />

      <Choices
        id={`${id}-vision`}
        name="vision"
        type="checkbox"
        label={fields.vision.label}
        hint={fields.vision.hint}
        options={fields.vision.options}
        checked={many(v.vision)}
        error={err.vision}
      />

      <Choices
        id={`${id}-programs`}
        name="programs"
        type="checkbox"
        label={fields.programs.label}
        hint={fields.programs.hint}
        options={fields.programs.options}
        checked={programs}
        error={err.programs}
      />

      <Field id={`${id}-challenge`} label={`${fields.challenge} *`} error={err.challenge}>
        <textarea
          id={`${id}-challenge`}
          name="challenge"
          defaultValue={v.challenge}
          rows={4}
          required
          className={inputClass}
          {...invalid(err.challenge, `${id}-challenge`)}
        />
      </Field>

      <fieldset>
        <legend className="block text-sm font-semibold">{fields.success.label} *</legend>
        <div className="mt-3 grid gap-6 sm:grid-cols-2">
          <Field id={`${id}-year`} label={fields.success.year} error={err.year} small>
            <textarea id={`${id}-year`} name="year" defaultValue={v.year} rows={4} required className={inputClass} {...invalid(err.year, `${id}-year`)} />
          </Field>
          <Field id={`${id}-years`} label={fields.success.threeYears} error={err.years} small>
            <textarea id={`${id}-years`} name="years" defaultValue={v.years} rows={4} required className={inputClass} {...invalid(err.years, `${id}-years`)} />
          </Field>
        </div>
      </fieldset>

      <Choices
        id={`${id}-investment`}
        name="investment"
        type="radio"
        label={fields.investment.label}
        options={fields.investment.options}
        checked={[v.investment ?? ""]}
        error={err.investment}
      />

      <Field id={`${id}-notes`} label={fields.notes} hint={fields.optional}>
        <textarea id={`${id}-notes`} name="notes" defaultValue={v.notes} rows={4} className={inputClass} aria-describedby={`${id}-notes-hint`} />
      </Field>

      <div>
        <p className="text-sm text-muted-foreground">{fields.required}</p>
        <div className="mt-4 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <button
            type="submit"
            disabled={pending}
            className="cursor-pointer rounded-full bg-accent px-8 py-4 text-sm font-semibold uppercase tracking-wide text-accent-foreground shadow-amber transition duration-500 ease-out-expo hover:-translate-y-0.5 hover:shadow-amber-lg disabled:opacity-60"
          >
            {pending ? "Sending…" : fields.submit}
          </button>
          <p role="status" className="text-sm text-muted-foreground">
            {state.status === "error" ? state.message : ""}
          </p>
        </div>
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

function Field({
  id,
  label,
  hint,
  error,
  small,
  children,
}: {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  small?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className={`block text-sm ${small ? "text-muted-foreground" : "font-semibold"}`}>
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

type Option = string | { value: string; label: string };

/** A required group of radio buttons or checkboxes. */
function Choices({
  id,
  name,
  type,
  label,
  hint,
  options,
  checked,
  error,
}: {
  id: string;
  name: string;
  type: "radio" | "checkbox";
  label: string;
  hint?: string;
  options: readonly Option[];
  checked: string[];
  error?: string;
}) {
  const describedBy = [hint && `${id}-hint`, error && `${id}-error`].filter(Boolean).join(" ") || undefined;
  return (
    <fieldset aria-describedby={describedBy}>
      <legend className="block text-sm font-semibold">{label} *</legend>
      {hint && (
        <p id={`${id}-hint`} className="mt-1 text-sm text-muted-foreground">
          {hint}
        </p>
      )}
      <div className="mt-3 grid gap-2">
        {options.map((o, i) => {
          const value = typeof o === "string" ? o : o.value;
          const text = typeof o === "string" ? o : o.label;
          return (
            <label
              key={value}
              className="flex cursor-pointer items-start gap-3 rounded-xl border border-input bg-muted px-4 py-3 text-base leading-snug transition duration-300 hover:border-white/25 has-checked:border-primary has-checked:bg-primary/10 has-focus-visible:shadow-[0_0_0_4px_rgb(0_168_230/0.15)]"
            >
              <input
                type={type}
                name={name}
                value={value}
                defaultChecked={checked.includes(value)}
                aria-invalid={error && i === 0 ? true : undefined}
                className="mt-0.5 size-4.5 shrink-0 cursor-pointer accent-[var(--color-primary)]"
              />
              <span>{text}</span>
            </label>
          );
        })}
      </div>
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-red-300">
          {error}
        </p>
      )}
    </fieldset>
  );
}
