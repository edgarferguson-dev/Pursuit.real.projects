export type TimelineStepId =
  | "submitted"
  | "notified"
  | "followup1"
  | "followup2"
  | "escalation"
  | "resolved";

export type SecondaryState = "in_progress" | "paused" | "expired";

export type CaseTimeline = {
  caseId: string;
  mode: "demo" | "live";
  filedAtLabel: string;
  activeStepId: TimelineStepId;
  secondaryState: SecondaryState;
  stepTimestamps: Record<TimelineStepId, string | null>;
};

const STEP_ORDER: TimelineStepId[] = [
  "submitted",
  "notified",
  "followup1",
  "followup2",
  "escalation",
  "resolved",
];

export function buildLiveCase(caseId: string, filedAt: Date): CaseTimeline {
  const fmt = filedAt.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return {
    caseId,
    mode: "live",
    filedAtLabel: fmt,
    activeStepId: "submitted",
    secondaryState: "in_progress",
    stepTimestamps: {
      submitted: fmt,
      notified: null,
      followup1: null,
      followup2: null,
      escalation: null,
      resolved: null,
    },
  };
}

export const demoCase: CaseTimeline = {
  caseId: "ORN-DEMO-7K2M",
  mode: "demo",
  filedAtLabel: "Mar 12, 2026",
  activeStepId: "followup1",
  secondaryState: "in_progress",
  stepTimestamps: {
    submitted: "Mar 12, 2026 · 9:14 a.m.",
    notified: "Mar 13, 2026 · 8:02 a.m.",
    followup1: "Mar 20, 2026 · 10:41 a.m.",
    followup2: null,
    escalation: null,
    resolved: null,
  },
};

export function getStepIndex(id: TimelineStepId): number {
  return STEP_ORDER.indexOf(id);
}

export { STEP_ORDER };
