"use client";

import { PageContainer } from "@/components/layout/PageContainer";
import { useI18n } from "@/lib/i18n/context";

export default function PrivacyPage() {
  const { messages: m } = useI18n();

  return (
    <PageContainer as="article">
      <header className="mb-10 space-y-4 border-b border-border-strong pb-10">
        <h1 className="font-heading text-3xl text-text md:text-4xl">
          {m.privacy.title}
        </h1>
        <p className="max-w-prose text-lg text-muted">{m.privacy.lead}</p>
      </header>
      <div className="space-y-10">
        {m.privacy.sections.map((section) => (
          <section key={section.title} className="space-y-3">
            <h2 className="font-heading text-xl text-text">{section.title}</h2>
            <p className="max-w-prose text-sm leading-relaxed text-muted md:text-base">
              {section.body}
            </p>
          </section>
        ))}
      </div>
    </PageContainer>
  );
}
