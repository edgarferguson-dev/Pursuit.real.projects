type Variant = "neutral" | "accent" | "warning" | "escalation" | "success";

type Props = {
  children: React.ReactNode;
  variant?: Variant;
};

const map: Record<Variant, string> = {
  neutral: "border-border-strong bg-surface text-text",
  accent: "border-accent/50 bg-accent/15 text-text shadow-[0_0_20px_-8px_rgba(77,124,254,0.5)]",
  warning: "border-warning/40 bg-warning/15 text-warning",
  escalation: "border-escalation/40 bg-escalation/15 text-escalation",
  success: "border-success/40 bg-success/15 text-success",
};

export function StatusPill({ children, variant = "neutral" }: Props) {
  return (
    <span
      className={`inline-flex min-h-9 items-center rounded-full border px-4 py-1 text-xs font-semibold uppercase tracking-wide ${map[variant]}`}
    >
      {children}
    </span>
  );
}
