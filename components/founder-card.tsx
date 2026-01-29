import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FounderCardProps {
  name: string;
  role: string;
  bio: string;
  imageSrc?: string;
  className?: string;
}

export function FounderCard({
  name,
  role,
  bio,
  imageSrc,
  className,
}: FounderCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <Card className={cn("border-gray-200 dark:border-gray-800 hover:border-[#FFE8DC] dark:hover:border-[#FF6B35] transition-all duration-300 hover:shadow-lg h-full", className)}>
      <CardContent className="p-8">
        <div className="flex flex-col items-center text-center space-y-6">
          {/* Avatar */}
          <div className="relative">
            <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF8B5A] flex items-center justify-center text-2xl font-semibold text-white shadow-lg shadow-[#FF6B35]/20">
              {initials}
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF8B5A] opacity-20 blur-xl" />
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              {name}
            </h3>
            <p className="text-sm text-[#FF6B35] dark:text-[#FF8B5A] font-medium">
              {role}
            </p>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {bio}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
