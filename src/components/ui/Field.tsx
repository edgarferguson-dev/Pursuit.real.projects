import {
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";

/**
 * Props merged onto the single child control (input, select, textarea).
 * Kept explicit so `cloneElement` stays type-safe under strict builds.
 */
export type FieldControlProps = {
  id: string;
  "aria-describedby"?: string;
  "aria-invalid"?: boolean;
};

type Props = {
  id: string;
  label: string;
  hint?: string;
  error?: string;
  children: ReactNode;
};

export function Field({ id, label, hint, error, children }: Props) {
  const hintId = hint ? `${id}-hint` : undefined;
  const errId = error ? `${id}-error` : undefined;
  const describedBy = [hintId, errId].filter(Boolean).join(" ") || undefined;

  const controlProps: FieldControlProps = {
    id,
    "aria-describedby": describedBy,
    "aria-invalid": error ? true : undefined,
  };

  const control =
    isValidElement(children)
      ? cloneElement(
          children as ReactElement<Record<string, unknown>>,
          controlProps,
        )
      : children;

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-text">
        {label}
      </label>
      <div className="[&_input]:min-h-11 [&_input]:w-full [&_input]:rounded-md [&_input]:border [&_input]:border-border-strong [&_input]:bg-surface-2 [&_input]:px-3 [&_input]:py-2 [&_input]:text-text [&_select]:min-h-11 [&_select]:w-full [&_select]:rounded-md [&_select]:border [&_select]:border-border-strong [&_select]:bg-surface-2 [&_select]:px-3 [&_select]:py-2 [&_select]:text-text [&_textarea]:min-h-[120px] [&_textarea]:w-full [&_textarea]:rounded-md [&_textarea]:border [&_textarea]:border-border-strong [&_textarea]:bg-surface-2 [&_textarea]:px-3 [&_textarea]:py-2 [&_textarea]:text-text">
        {control}
      </div>
      {hint && (
        <p id={hintId} className="text-xs text-muted">
          {hint}
        </p>
      )}
      {error && (
        <p id={errId} className="text-sm text-escalation" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
