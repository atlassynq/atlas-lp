import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Code, Lightbulb, Sparkles, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface FounderCardProps {
  name: string;
  role: string;
  bio: string;
  linkedin?: string;
  photo?: string;
  icon?: "code" | "bulb" | "sparkles";
  className?: string;
}

export function FounderCard({
  name,
  role,
  bio,
  linkedin,
  photo,
  icon,
  className,
}: FounderCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const IconComponent = icon === "code" ? Code : icon === "bulb" ? Lightbulb : Sparkles;

  return (
    <Card
      className={cn(
        "group relative overflow-hidden bg-white dark:bg-black hover:shadow-2xl hover:shadow-[#FF6B35]/10 hover:-translate-y-1 transition-all duration-500 h-full",
        className
      )}
    >
      <CardContent className="p-0 h-full">
        <div className="flex flex-col h-full">
          {/* Photo Section - Top */}
          <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800">
            {/* Overlay gradient on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

            {/* Photo or Initials */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              {photo ? (
                <Image
                  src={photo}
                  alt={name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="400px"
                />
              ) : (
                <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-[#FF6B35] to-[#FF8B5A] flex items-center justify-center shadow-2xl shadow-[#FF6B35]/30">
                  <span className="text-6xl font-bold text-white">
                    {initials}
                  </span>
                </div>
              )}
            </div>

            {/* Role Badge - overlay */}
            <div className="absolute top-4 right-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-white/20 shadow-lg">
                <IconComponent className="w-4 h-4 text-[#FF8B5A]" />
                <span className="text-xs font-semibold text-white">
                  {role}
                </span>
              </div>
            </div>
          </div>

          {/* Content Section - Bottom */}
          <div className="flex-1 p-6 flex flex-col justify-between bg-white dark:bg-black">
            <div className="space-y-3">
              {/* Name */}
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {name}
              </h3>

              {/* Bio */}
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                {bio}
              </p>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent my-4" />

            {/* LinkedIn Button */}
            {linkedin && (
              <Link
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium bg-gradient-to-r from-[#FF6B35] to-[#FF8B5A] hover:from-[#FF8B5A] hover:to-[#FF6B35] text-white rounded-xl shadow-lg shadow-[#FF6B35]/20 hover:shadow-xl hover:shadow-[#FF6B35]/30 hover:-translate-y-0.5 transition-all"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </Link>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
