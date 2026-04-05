import type { HTMLAttributes, ReactNode } from "react";

type Props = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  elevated?: boolean;
};

export function Card({
  children,
  className = "",
  elevated = false,
  ...rest
}: Props) {
  return (
    <div
      className={`rounded-lg border border-border bg-surface p-5 md:p-6 ${
        elevated ? "shadow-evidence" : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
