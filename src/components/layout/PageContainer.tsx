import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
};

export function PageContainer({
  children,
  className = "",
  as: Tag = "div",
}: Props) {
  return (
    <Tag
      className={`mx-auto w-full max-w-content px-4 py-10 md:py-14 ${className}`}
    >
      {children}
    </Tag>
  );
}
