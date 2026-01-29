import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  tag: string;
  description: string[];
  featured?: boolean;
}

export function PricingCard({
  title,
  tag,
  description,
  featured = false,
}: PricingCardProps) {
  return (
    <Card
      className={cn(
        "relative transition-all duration-300 hover:-translate-y-1 h-full",
        featured
          ? "border-[#FF6B35] dark:border-[#FF8B5A] shadow-xl shadow-[#FF6B35]/10 bg-gradient-to-br from-[#FFE8DC] to-[#FFE8DC] dark:from-[#FF6B35]/10 dark:to-[#FF8B5A]/10"
          : "border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 bg-white dark:bg-black"
      )}
    >
      <CardContent className="p-8">
        {featured && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="px-4 py-1.5 text-xs font-medium bg-gradient-to-r from-[#FF6B35] to-[#FF8B5A] text-white rounded-full shadow-lg">
              Recomendado
            </span>
          </div>
        )}

        <div className="mb-6">
          <span
            className={cn(
              "text-sm font-medium",
              featured
                ? "text-[#FF6B35] dark:text-[#FF8B5A]"
                : "text-gray-600 dark:text-gray-400"
            )}
          >
            {tag}
          </span>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>

        <ul className="space-y-3">
          {description.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check
                className={cn(
                  "h-5 w-5 shrink-0 mt-0.5",
                  featured
                    ? "text-[#FF6B35] dark:text-[#FF8B5A]"
                    : "text-gray-600 dark:text-gray-400"
                )}
              />
              <span className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
