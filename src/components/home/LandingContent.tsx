"use client";

import { PageContainer } from "@/components/layout/PageContainer";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { TextLink } from "@/components/ui/TextLink";
import { useI18n } from "@/lib/i18n/context";

export function LandingContent() {
  const { messages: m, locale } = useI18n();

  return (
    <PageContainer as="article">
      <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
        {m.landing.kicker}
      </p>
      <h1 className="mt-5 font-heading text-4xl leading-[1.05] tracking-tight text-text md:text-6xl md:leading-[1.02]">
        {m.landing.title}
      </h1>
      <p className="mt-8 max-w-prose text-lg leading-relaxed text-muted md:text-xl md:leading-relaxed">
        {m.landing.subtitle}
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
        <ButtonLink
          href="/report"
          className="w-full text-center sm:w-auto sm:min-w-[200px]"
        >
          {m.landing.ctaPrimary}
        </ButtonLink>
        <ButtonLink
          href="/status"
          variant="secondary"
          className="w-full text-center sm:w-auto sm:min-w-[200px]"
        >
          {m.landing.ctaSecondary}
        </ButtonLink>
      </div>
      <p className="mt-6 text-sm text-muted">{m.landing.disclaimerShort}</p>

      <div
        className="my-16 h-px w-full bg-gradient-to-r from-transparent via-border-strong to-transparent"
        aria-hidden
      />
      <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted">
        {m.landing.dividerLabel}
      </p>

      <div className="mt-10 grid grid-cols-1 gap-5 md:gap-6">
        <Card elevated className="border-border-strong">
          <h2 className="font-heading text-xl text-text md:text-2xl">
            {m.landing.valueDocTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
            {m.landing.valueDocBody}
          </p>
        </Card>
        <Card elevated className="border-border-strong">
          <h2 className="font-heading text-xl text-text md:text-2xl">
            {m.landing.valueNoticeTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
            {m.landing.valueNoticeBody}
          </p>
        </Card>
        <Card elevated className="border-border-strong">
          <h2 className="font-heading text-xl text-text md:text-2xl">
            {m.landing.valueFollowTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
            {m.landing.valueFollowBody}
          </p>
        </Card>
        <Card elevated className="border-border-strong">
          <h2 className="font-heading text-xl text-text md:text-2xl">
            {m.landing.valuePacketTitle}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
            {m.landing.valuePacketBody}
          </p>
        </Card>
      </div>

      {locale === "en" && (
        <p className="mt-14 text-center text-sm text-muted">
          Español disponible en la navegación —{" "}
          <TextLink href="/report">{m.landing.ctaPrimary}</TextLink>
        </p>
      )}
      {locale === "es" && (
        <p className="mt-14 text-center text-sm text-muted">
          English available in the nav —{" "}
          <TextLink href="/report">{m.landing.ctaPrimary}</TextLink>
        </p>
      )}
    </PageContainer>
  );
}
