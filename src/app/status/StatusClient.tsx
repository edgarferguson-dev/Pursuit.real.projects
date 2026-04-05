"use client";

import { useMemo, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { PageContainer } from "@/components/layout/PageContainer";
import { StatusPill } from "@/components/ui/StatusPill";
import { StatusTimeline } from "@/components/ui/StatusTimeline";
import { readCase } from "@/lib/case-storage";
import { useTranslations } from "@/lib/i18n/context";
import {
  buildLiveCase,
  demoCase,
  type CaseTimeline,
  type SecondaryState,
  type TimelineStepId,
} from "@/lib/mock/case-status";

function resolveTimeline(caseParam: string | null): CaseTimeline {
  if (!caseParam) return demoCase;
  const stored = readCase();
  const filedAt =
    stored && stored.caseId === caseParam
      ? new Date(stored.filedAt)
      : new Date();
  return buildLiveCase(caseParam, filedAt);
}

function secondaryVariant(
  s: SecondaryState,
): "accent" | "warning" | "escalation" {
  if (s === "paused") return "warning";
  if (s === "expired") return "escalation";
  return "accent";
}

const secondaryKey: Record<SecondaryState, string> = {
  in_progress: "status.states.inProgress",
  paused: "status.states.paused",
  expired: "status.states.expired",
};

export function StatusClient() {
  const t = useTranslations();
  const searchParams = useSearchParams();
  const caseParam = searchParams.get("case");
  const welcomeParam = searchParams.get("welcome") === "1";

  const [showWelcome, setShowWelcome] = useState(welcomeParam);

  useEffect(() => {
    setShowWelcome(welcomeParam);
  }, [welcomeParam]);

  const data = useMemo(() => resolveTimeline(caseParam), [caseParam]);

  const steps = useMemo(() => {
    const ids: TimelineStepId[] = [
      "submitted",
      "notified",
      "followup1",
      "followup2",
      "escalation",
      "resolved",
    ];
    return ids.map((id) => ({
      id,
      title: t(`status.steps.${id}`),
      hint: t(`status.stepHints.${id}`),
      timestamp: data.stepTimestamps[id],
    }));
  }, [data.stepTimestamps, t]);

  const secondaryLabel = t(secondaryKey[data.secondaryState]);

  const isLive = data.mode === "live";

  return (
    <PageContainer as="article">
      {showWelcome && isLive && (
        <div
          role="status"
          className="mb-10 rounded-lg border border-success/40 bg-success/10 px-4 py-4 text-sm text-text md:text-base"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p className="font-medium leading-snug">{t("status.welcomeBanner")}</p>
            <button
              type="button"
              onClick={() => setShowWelcome(false)}
              className="shrink-0 text-left text-xs font-semibold uppercase tracking-wide text-success underline-offset-2 hover:underline md:text-right"
            >
              {t("status.dismissWelcome")}
            </button>
          </div>
        </div>
      )}

      <header className="space-y-6 border-b border-border-strong pb-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
          {isLive ? t("status.liveKicker") : t("status.demoKicker")}
        </p>
        <h1 className="font-heading text-3xl leading-[1.08] text-text md:text-[2.75rem] md:leading-[1.05]">
          {isLive ? t("status.liveHeading") : t("status.demoTitle")}
        </h1>
        <p className="max-w-prose text-base leading-relaxed text-muted md:text-lg">
          {isLive ? t("status.liveSubtitle") : t("status.demoSubtitle")}
        </p>
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-end">
          <div className="min-w-[min(100%,280px)] rounded-xl border border-border-strong bg-surface-2 px-5 py-4 shadow-evidence">
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted">
              {t("status.caseLabel")}
            </p>
            <p className="mt-1 font-mono text-xl font-semibold tracking-tight text-text md:text-2xl">
              {data.caseId}
            </p>
            <p className="mt-2 text-xs text-muted">
              {t("status.filed")}: {data.filedAtLabel}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted">
              {t("status.secondaryLabel")}
            </p>
            <StatusPill variant={secondaryVariant(data.secondaryState)}>
              {secondaryLabel}
            </StatusPill>
          </div>
        </div>
        {!isLive && (
          <p className="text-sm text-muted">{t("status.sampleNote")}</p>
        )}
      </header>

      <section className="mt-14 space-y-6" aria-label={t("status.pageTitle")}>
        <StatusTimeline data={data} steps={steps} />
      </section>

      <section className="mt-16 space-y-4 rounded-xl border border-accent/20 bg-surface-2/90 p-6 md:p-8">
        <h2 className="font-heading text-xl text-text md:text-2xl">
          {t("status.nextActionsTitle")}
        </h2>
        <p className="max-w-prose text-sm leading-relaxed text-muted md:text-base">
          {t("status.nextActionsBody")}
        </p>
      </section>
    </PageContainer>
  );
}
