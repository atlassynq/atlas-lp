import { cn } from "@/lib/utils";
import { Code, Lightbulb, Sparkles, ArrowRight } from "lucide-react";
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
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-900 hover:shadow-2xl hover:shadow-[#FF6B35]/20 hover:-translate-y-1 transition-all duration-500 h-full aspect-[3/4]",
        className
      )}
    >
      {/* Background Photo */}
      {photo ? (
        <Image
          src={photo}
          alt={name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="400px"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#FF6B35] to-[#FF8B5A]">
          <span className="text-8xl font-bold text-white">
            {initials}
          </span>
        </div>
      )}

      {/* Gradient Overlay - Always visible for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70" />

      {/* Content Overlay - Top */}
      <div className="absolute top-0 left-0 right-0 p-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg">
          <IconComponent className="w-4 h-4 text-[#FF6B35]" />
          <span className="text-sm font-semibold text-black">
            {role}
          </span>
        </div>
      </div>

      {/* Content Overlay - Bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4">
        {/* Name - Always visible */}
        <h3 className="text-3xl font-bold tracking-tight text-white">
          {name}
        </h3>

        {/* Hover Content - Bio and CTA */}
        <div className="space-y-4">
          {/* Bio - Hidden by default, shows on hover */}
          <p className="text-sm text-gray-200 leading-relaxed line-clamp-3 max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
            {bio}
          </p>

          {/* CTA Button - Hidden by default, shows on hover */}
          {linkedin && (
            <Link
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-0 group-hover:opacity-100 inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-gradient-to-r from-[#FF6B35] to-[#FF8B5A] hover:from-[#FF8B5A] hover:to-[#FF6B35] text-white rounded-full shadow-lg shadow-[#FF6B35]/30 hover:shadow-xl hover:shadow-[#FF6B35]/40 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0"
            >
              Me conheça
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
