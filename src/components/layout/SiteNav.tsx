"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LOCALES, type Locale } from "@/lib/i18n/config";
import { useI18n } from "@/lib/i18n/context";

const navPaths = [
  { href: "/", key: "nav.home" },
  { href: "/report", key: "nav.report" },
  { href: "/status", key: "nav.status" },
  { href: "/resources", key: "nav.resources" },
  { href: "/privacy", key: "nav.privacy" },
] as const;

export function SiteNav() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useI18n();

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-content flex-col gap-4 px-4 py-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link
            href="/"
            className="font-heading text-lg tracking-tight text-text no-underline"
          >
            {t("landing.title")}
          </Link>
          <div className="flex items-center gap-2 md:hidden">
            <label htmlFor="lang-select" className="sr-only">
              {t("nav.language")}
            </label>
            <select
              id="lang-select"
              value={locale}
              onChange={(e) => setLocale(e.target.value as Locale)}
              className="min-h-11 rounded-md border border-border-strong bg-surface px-3 py-2 text-sm text-text"
              aria-label={t("nav.language")}
            >
              {LOCALES.map((loc) => (
                <option key={loc} value={loc}>
                  {loc === "en" ? t("nav.langEn") : t("nav.langEs")}
                </option>
              ))}
            </select>
          </div>
        </div>
        <nav
          aria-label="Primary"
          className="flex flex-wrap items-center gap-1 md:gap-2"
        >
          {navPaths.map(({ href, key }) => {
            const active =
              href === "/"
                ? pathname === "/"
                : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`min-h-11 rounded-md px-3 py-2 text-sm font-medium no-underline transition-colors ${
                  active
                    ? "bg-surface-2 text-text"
                    : "text-muted hover:bg-surface hover:text-text"
                }`}
              >
                {t(key)}
              </Link>
            );
          })}
          <div className="ml-1 hidden items-center gap-2 md:flex">
            <span className="text-xs uppercase tracking-wider text-muted">
              {t("nav.language")}
            </span>
            <div
              role="group"
              aria-label={t("nav.language")}
              className="flex rounded-md border border-border bg-surface p-1"
            >
              {LOCALES.map((loc) => (
                <button
                  key={loc}
                  type="button"
                  onClick={() => setLocale(loc)}
                  className={`min-h-9 min-w-[4.5rem] rounded px-3 text-sm font-medium ${
                    locale === loc
                      ? "bg-accent text-bg"
                      : "text-muted hover:text-text"
                  }`}
                >
                  {loc === "en" ? t("nav.langEn") : t("nav.langEs")}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
