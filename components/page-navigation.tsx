import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PageNavigationProps {
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
  className?: string;
}

export function PageNavigation({ prev, next, className }: PageNavigationProps) {
  return (
    <div className={cn("border-t border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/50", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between gap-4">
          {prev ? (
            <Link
              href={prev.href}
              className={cn(
                "group flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#FF6B35] dark:hover:text-[#FF8B5A] transition-all px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900",
                !prev && "invisible"
              )}
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
              {prev.label}
            </Link>
          ) : (
            <div />
          )}

          {next && (
            <Link
              href={next.href}
              className="group flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#FF6B35] dark:hover:text-[#FF8B5A] transition-all px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 ml-auto"
            >
              {next.label}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
