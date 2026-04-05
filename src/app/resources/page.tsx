"use client";

import { PageContainer } from "@/components/layout/PageContainer";
import { ButtonLink } from "@/components/ui/Button";
import { useI18n } from "@/lib/i18n/context";

const LINKS = [
  {
    key: "hpd" as const,
    href: "https://www.nyc.gov/site/hpd/index.page",
  },
  {
    key: "metcouncil" as const,
    href: "https://www.metcouncilonhousing.org/",
  },
  {
    key: "justfix" as const,
    href: "https://www.justfix.org/",
  },
  {
    key: "lawhelp" as const,
    href: "https://www.lawhelpny.org/",
  },
];

export default function ResourcesPage() {
  const { messages: m, t } = useI18n();

  return (
    <PageContainer as="article">
      <header className="mb-12 space-y-5 border-b border-border-strong pb-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
          {m.resources.eyebrow}
        </p>
        <h1 className="font-heading text-3xl leading-tight text-text md:text-4xl">
          {m.resources.title}
        </h1>
        <p className="max-w-prose text-lg font-medium leading-relaxed text-text md:text-xl">
          {m.resources.lead}
        </p>
        <p className="max-w-prose text-base leading-relaxed text-muted md:text-lg">
          {m.resources.intro}
        </p>
      </header>

      <ul className="space-y-6">
        {LINKS.map(({ key, href }) => (
          <li key={key}>
            <a
              href={href}
              className="group block rounded-xl border border-border-strong bg-surface-2 p-5 no-underline transition-colors hover:border-accent md:p-6"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="font-heading text-lg text-accent group-hover:underline md:text-xl">
                {href.replace(/^https?:\/\//, "").split("/")[0]}
              </span>
              <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
                {t(`resources.links.${key}`)}
              </p>
              <span className="mt-3 inline-block text-xs font-semibold uppercase tracking-wide text-muted">
                {m.resources.openExternal} →
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="mt-14 border-t border-border-strong pt-10">
        <ButtonLink href="/report" className="w-full text-center md:w-auto">
          {m.resources.ctaReport}
        </ButtonLink>
      </div>
    </PageContainer>
  );
}
