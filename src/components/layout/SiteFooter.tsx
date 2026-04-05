"use client";

import { PageContainer } from "@/components/layout/PageContainer";
import { useTranslations } from "@/lib/i18n/context";

export function SiteFooter() {
  const t = useTranslations();

  return (
    <footer className="mt-auto border-t border-border-strong bg-surface">
      <PageContainer as="div" className="py-12 md:py-16">
        <div className="space-y-10">
          <div className="rounded-lg border border-accent/30 bg-surface-2 p-6 md:p-8">
            <h2 className="font-heading text-xl text-text md:text-2xl">
              {t("footer.builtTitle")}
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-text md:text-lg">
              {t("footer.builtBody")}
            </p>
          </div>
          <p className="text-sm leading-relaxed text-muted">{t("footer.disclaimer")}</p>
        </div>
      </PageContainer>
    </footer>
  );
}
