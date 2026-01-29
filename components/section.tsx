import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  container?: boolean;
}

export function Section({
  children,
  className,
  id,
  container = true,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-32",
        container && "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </section>
  );
}
