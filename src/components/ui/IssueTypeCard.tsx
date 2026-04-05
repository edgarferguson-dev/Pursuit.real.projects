"use client";

type IssueId =
  | "noHeat"
  | "noHotWater"
  | "leak"
  | "pests"
  | "electrical"
  | "mold"
  | "structural"
  | "gas"
  | "sewage"
  | "other";

type Props = {
  issues: { id: IssueId; label: string }[];
  value: IssueId | null;
  onChange: (id: IssueId) => void;
  groupLabel: string;
};

export function IssueTypeCard({ issues, value, onChange, groupLabel }: Props) {
  return (
    <fieldset className="space-y-3">
      <legend className="text-sm font-medium text-text">{groupLabel}</legend>
      <div
        role="radiogroup"
        aria-label={groupLabel}
        className="grid grid-cols-1 gap-3 sm:grid-cols-2"
      >
        {issues.map((issue) => {
          const selected = value === issue.id;
          return (
            <button
              key={issue.id}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => onChange(issue.id)}
              className={`min-h-[52px] rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors ${
                selected
                  ? "border-accent bg-surface-2 text-text shadow-active-glow"
                  : "border-border bg-surface text-muted hover:border-border-strong hover:text-text"
              }`}
            >
              {issue.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

export type { IssueId };
