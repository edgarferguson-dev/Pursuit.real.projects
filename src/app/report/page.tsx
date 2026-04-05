"use client";

import { PageContainer } from "@/components/layout/PageContainer";
import { ReportForm } from "@/components/report/ReportForm";
import { useTranslations } from "@/lib/i18n/context";

export default function ReportPage() {
  const t = useTranslations();
  return (
    <PageContainer as="article">
      <header className="mb-12 space-y-4 border-b border-border-strong pb-10 md:mb-16 md:pb-12">
        <h1 className="font-heading text-3xl leading-tight text-text md:text-4xl">
          <span className="sr-only">On Record NYC — </span>
          {t("report.pageTitle")}
        </h1>
        <p className="max-w-prose text-base leading-relaxed text-muted md:text-lg">
          {t("report.pageIntro")}
        </p>
      </header>
      <ReportForm />
    </PageContainer>
  );
}
