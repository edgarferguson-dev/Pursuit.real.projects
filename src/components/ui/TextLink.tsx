import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function TextLink({ href, children, className = "" }: Props) {
  return (
    <Link
      href={href}
      className={`font-semibold text-accent underline-offset-4 hover:underline ${className}`}
    >
      {children}
    </Link>
  );
}
