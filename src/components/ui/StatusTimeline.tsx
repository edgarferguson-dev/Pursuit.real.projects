"use client";

import type { CaseTimeline, TimelineStepId } from "@/lib/mock/case-status";
import { getStepIndex } from "@/lib/mock/case-status";
import { useTranslations } from "@/lib/i18n/context";

type StepCopy = {
  id: TimelineStepId;
  title: string;
  hint: string;
  timestamp: string | null;
};

type Props = {
  data: CaseTimeline;
  steps: StepCopy[];
};

export function StatusTimeline({ data, steps }: Props) {
  const t = useTranslations();
  const activeIndex = getStepIndex(data.activeStepId);

  return (
    <ol className="relative space-y-0 pl-2">
      <span
        aria-hidden
        className="absolute left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-accent via-border-strong to-border"
      />
      {steps.map((step, index) => {
        const state =
          index < activeIndex
            ? "complete"
            : index === activeIndex
              ? "active"
              : "upcoming";
        const isActive = state === "active";
        const isComplete = state === "complete";

        return (
          <li
            key={step.id}
            className={`relative grid grid-cols-[32px_1fr] gap-4 pb-10 last:pb-0 ${isActive ? "scroll-mt-24" : ""}`}
          >
            <div className="relative z-10 flex justify-center pt-1">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full border-2 text-xs font-bold ${
                  isActive
                    ? "border-accent bg-accent text-bg shadow-active-glow scale-110"
                    : isComplete
                      ? "border-success/60 bg-success/20 text-success"
                      : "border-border bg-bg text-muted"
                }`}
                aria-current={isActive ? "step" : undefined}
              >
                {isComplete ? "✓" : index + 1}
              </span>
            </div>
            <div
              className={`rounded-xl border px-4 py-4 md:px-5 md:py-5 ${
                isActive
                  ? "border-accent bg-surface-2 shadow-active-glow"
                  : "border-border bg-surface"
              }`}
            >
              <div className="flex flex-wrap items-center gap-2">
                <h3
                  className={`font-heading text-base md:text-lg ${
                    isActive ? "text-text" : "text-muted"
                  }`}
                >
                  {step.title}
                </h3>
                {isActive && (
                  <span className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
                    {t("status.nowLabel")}
                  </span>
                )}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {step.hint}
              </p>
              {step.timestamp && (
                <p className="mt-3 text-xs font-medium uppercase tracking-wide text-muted">
                  {step.timestamp}
                </p>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
