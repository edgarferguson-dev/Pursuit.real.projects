"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Field } from "@/components/ui/Field";
import {
  IssueTypeCard,
  type IssueId,
} from "@/components/ui/IssueTypeCard";
import { PhotoUploader } from "@/components/ui/PhotoUploader";
import { generateCaseId, saveCase } from "@/lib/case-storage";
import { useTranslations } from "@/lib/i18n/context";

export function ReportForm() {
  const t = useTranslations();
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [issueType, setIssueType] = useState<IssueId | null>(null);
  const [consent, setConsent] = useState({
    accurate: false,
    notLegal: false,
    process: false,
  });

  const issues = useMemo(
    () =>
      (
        [
          "noHeat",
          "noHotWater",
          "leak",
          "pests",
          "electrical",
          "mold",
          "structural",
          "gas",
          "sewage",
          "other",
        ] as const
      ).map((id) => ({ id, label: t(`report.issues.${id}`) })),
    [t],
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!issueType) {
      return;
    }
    if (!consent.accurate || !consent.notLegal || !consent.process) {
      return;
    }
    setSubmitting(true);
    const caseId = generateCaseId();
    const filedAt = new Date().toISOString();
    saveCase({ caseId, filedAt });
    router.push(`/status?case=${encodeURIComponent(caseId)}&welcome=1`);
  };

  const consentReady =
    consent.accurate && consent.notLegal && consent.process && issueType;

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-12 md:space-y-16"
      noValidate
    >
      <div
        aria-live="polite"
        className="rounded-lg border border-warning/30 bg-warning/10 px-4 py-3 text-sm text-text"
      >
        {t("report.previewBanner")}
      </div>

      <Card className="border-accent/25 bg-surface-2/90">
        <p className="font-heading text-xl leading-snug text-text md:text-2xl">
          {t("report.section5Lead")}
        </p>
        <p className="mt-3 text-sm text-muted md:text-base">
          {t("report.section5Hint")}
        </p>
      </Card>

      <fieldset className="space-y-6 rounded-lg border border-border bg-surface p-5 md:p-6">
        <legend className="font-heading text-lg text-text md:text-xl">
          {t("report.section1Title")}
        </legend>
        <Field id="fullName" label={t("report.labels.fullName")}>
          <input
            name="fullName"
            required
            autoComplete="name"
            placeholder={t("report.placeholders.fullName")}
          />
        </Field>
        <Field id="phone" label={t("report.labels.phone")}>
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder={t("report.placeholders.phone")}
          />
        </Field>
        <Field id="email" label={t("report.labels.email")}>
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder={t("report.placeholders.email")}
          />
        </Field>
        <Field id="contactPref" label={t("report.labels.contactPref")}>
          <select name="contactPref" required defaultValue="">
            <option value="" disabled>
              —
            </option>
            <option value="phone">{t("report.labels.contactPrefPhone")}</option>
            <option value="email">{t("report.labels.contactPrefEmail")}</option>
            <option value="text">{t("report.labels.contactPrefText")}</option>
          </select>
        </Field>
      </fieldset>

      <fieldset className="space-y-6 rounded-lg border border-border bg-surface p-5 md:p-6">
        <legend className="font-heading text-lg text-text md:text-xl">
          {t("report.section2Title")}
        </legend>
        <Field id="street" label={t("report.labels.street")}>
          <input
            name="street"
            required
            autoComplete="street-address"
            placeholder={t("report.placeholders.street")}
          />
        </Field>
        <Field id="unit" label={t("report.labels.unit")}>
          <input
            name="unit"
            required
            placeholder={t("report.placeholders.unit")}
          />
        </Field>
        <Field id="borough" label={t("report.labels.borough")}>
          <select name="borough" required defaultValue="">
            <option value="" disabled>
              —
            </option>
            <option value="manhattan">{t("report.boroughs.manhattan")}</option>
            <option value="brooklyn">{t("report.boroughs.brooklyn")}</option>
            <option value="queens">{t("report.boroughs.queens")}</option>
            <option value="bronx">{t("report.boroughs.bronx")}</option>
            <option value="staten">{t("report.boroughs.staten")}</option>
          </select>
        </Field>
        <Field id="zip" label={t("report.labels.zip")}>
          <input
            name="zip"
            required
            autoComplete="postal-code"
            inputMode="numeric"
            pattern="[0-9]{5}"
            placeholder="10001"
          />
        </Field>
      </fieldset>

      <fieldset className="space-y-6 rounded-lg border border-border bg-surface p-5 md:p-6">
        <legend className="font-heading text-lg text-text md:text-xl">
          {t("report.section3Title")}
        </legend>
        <Field id="landlordName" label={t("report.labels.landlordName")}>
          <input
            name="landlordName"
            required
            placeholder={t("report.placeholders.landlordName")}
          />
        </Field>
        <Field
          id="landlordContact"
          label={t("report.labels.landlordContact")}
        >
          <textarea
            name="landlordContact"
            required
            placeholder={t("report.placeholders.landlordContact")}
          />
        </Field>
      </fieldset>

      <fieldset className="space-y-6 rounded-lg border border-border bg-surface p-5 md:p-6">
        <legend className="font-heading text-lg text-text md:text-xl">
          {t("report.section4Title")}
        </legend>
        <IssueTypeCard
          issues={issues}
          value={issueType}
          onChange={setIssueType}
          groupLabel={t("report.section4Title")}
        />
        <Field
          id="issueDescription"
          label={t("report.labels.issueDescription")}
        >
          <textarea
            name="issueDescription"
            required
            placeholder={t("report.placeholders.issueDescription")}
          />
        </Field>
        <Field id="dateNoticed" label={t("report.labels.dateNoticed")}>
          <input name="dateNoticed" type="date" required />
        </Field>
      </fieldset>

      <section aria-labelledby="evidence-heading" className="space-y-4">
        <h2
          id="evidence-heading"
          className="font-heading text-2xl tracking-tight text-text md:text-3xl"
        >
          {t("report.section5Title")}
        </h2>
        <PhotoUploader
          max={3}
          addLabel={t("report.photoAdd")}
          removeLabel={t("report.photoRemove")}
          sectionLabel={t("report.section5Title")}
          emptySlotLabel={t("report.photoSlotEmpty")}
        />
      </section>

      <fieldset className="space-y-4 rounded-lg border border-border bg-surface p-5 md:p-6">
        <legend className="font-heading text-lg text-text md:text-xl">
          {t("report.section6Title")}
        </legend>
        <label className="flex cursor-pointer gap-3 text-sm text-text">
          <input
            type="checkbox"
            className="mt-1 h-5 w-5 shrink-0 rounded border-border-strong bg-surface-2"
            checked={consent.accurate}
            onChange={(e) =>
              setConsent((c) => ({ ...c, accurate: e.target.checked }))
            }
          />
          <span>{t("report.consent.accurate")}</span>
        </label>
        <label className="flex cursor-pointer gap-3 text-sm text-text">
          <input
            type="checkbox"
            className="mt-1 h-5 w-5 shrink-0 rounded border-border-strong bg-surface-2"
            checked={consent.notLegal}
            onChange={(e) =>
              setConsent((c) => ({ ...c, notLegal: e.target.checked }))
            }
          />
          <span>{t("report.consent.notLegal")}</span>
        </label>
        <label className="flex cursor-pointer gap-3 text-sm text-text">
          <input
            type="checkbox"
            className="mt-1 h-5 w-5 shrink-0 rounded border-border-strong bg-surface-2"
            required
            checked={consent.process}
            onChange={(e) =>
              setConsent((c) => ({ ...c, process: e.target.checked }))
            }
          />
          <span>{t("report.consent.process")}</span>
        </label>
      </fieldset>

      <div className="flex flex-col gap-4 border-t border-border-strong pt-8">
        <Button
          type="submit"
          disabled={!consentReady || submitting}
          className="w-full text-base md:min-h-12"
        >
          {submitting ? t("report.submitting") : t("report.submit")}
        </Button>
        {!issueType && (
          <p className="text-center text-sm text-muted" role="status">
            {t("report.selectIssueHint")}
          </p>
        )}
        {issueType && !consentReady && (
          <p className="text-center text-sm text-muted" role="status">
            {t("report.checkConsentHint")}
          </p>
        )}
      </div>
    </form>
  );
}
