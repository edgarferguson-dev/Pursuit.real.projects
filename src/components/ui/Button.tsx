import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: Variant;
};

export const buttonClass = (variant: Variant = "primary") => {
  const base =
    "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-3 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50";
  const variants: Record<Variant, string> = {
    primary:
      "bg-accent text-bg hover:bg-accent/90 shadow-[0_0_24px_-8px_rgba(77,124,254,0.55)]",
    secondary:
      "border border-border-strong bg-surface text-text hover:border-accent hover:text-text",
    ghost: "text-muted hover:bg-surface hover:text-text",
  };
  return `${base} ${variants[variant]}`;
};

export function Button({
  children,
  variant = "primary",
  className = "",
  type = "button",
  ...rest
}: Props) {
  return (
    <button
      type={type}
      className={`${buttonClass(variant)} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}

type LinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className = "" }: LinkProps) {
  return (
    <Link
      href={href}
      className={`${buttonClass(variant)} no-underline ${className}`}
    >
      {children}
    </Link>
  );
}
