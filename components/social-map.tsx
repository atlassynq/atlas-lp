"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import Image from "next/image";

interface Person {
  id: number;
  image: string;
  initialPosition: { top?: string; bottom?: string; left?: string; right?: string };
}

export function SocialMap() {
  const people = useMemo<Person[]>(
    () => [
      {
        id: 1,
        image: "/persons/1.jpg",
        initialPosition: { top: "18%", left: "22%" },
      },
      {
        id: 2,
        image: "/persons/2.jpg",
        initialPosition: { top: "32%", right: "18%" },
      },
      {
        id: 3,
        image: "/persons/3.jpg",
        initialPosition: { bottom: "28%", left: "28%" },
      },
      {
        id: 4,
        image: "/persons/4.jpg",
        initialPosition: { bottom: "18%", right: "22%" },
      },
      {
        id: 5,
        image: "/persons/5.jpg",
        initialPosition: { top: "55%", left: "12%" },
      },
    ],
    []
  );

  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      {/* Map Background - Urban streets pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Grid pattern for city blocks */}
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-[#FF6B35]"
            />
          </pattern>
        </defs>
        <rect width="400" height="400" fill="url(#grid)" />

        {/* Main streets - thicker lines */}
        <path
          d="M 0 200 L 400 200"
          stroke="currentColor"
          strokeWidth="2"
          className="text-[#FF6B35]/30"
        />
        <path
          d="M 200 0 L 200 400"
          stroke="currentColor"
          strokeWidth="2"
          className="text-[#FF6B35]/30"
        />

        {/* Secondary streets */}
        <path
          d="M 0 100 L 400 100"
          stroke="currentColor"
          strokeWidth="1"
          className="text-[#FF6B35]/20"
        />
        <path
          d="M 0 300 L 400 300"
          stroke="currentColor"
          strokeWidth="1"
          className="text-[#FF6B35]/20"
        />
        <path
          d="M 100 0 L 100 400"
          stroke="currentColor"
          strokeWidth="1"
          className="text-[#FF6B35]/20"
        />
        <path
          d="M 300 0 L 300 400"
          stroke="currentColor"
          strokeWidth="1"
          className="text-[#FF6B35]/20"
        />

        {/* Diagonal streets */}
        <path
          d="M 0 0 L 400 400"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-[#FF6B35]/15"
        />
        <path
          d="M 400 0 L 0 400"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-[#FF6B35]/15"
        />
      </svg>

      {/* Subtle glow background */}
      <div className="absolute inset-0 bg-gradient-radial from-[#FF6B35]/5 via-transparent to-transparent" />

      {/* Radar circles - subtle */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{
            duration: 3,
            delay: i * 0.15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 rounded-full border border-[#FF6B35]/20"
          style={{
            transform: `scale(${1 - i * 0.2})`,
          }}
        />
      ))}

      {/* Walking people */}
      {people.map((person, index) => (
        <motion.div
          key={person.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            top: [
              person.initialPosition.top || "auto",
              person.initialPosition.bottom
                ? `calc(${person.initialPosition.bottom} + 5%)`
                : `calc(${person.initialPosition.top} - 5%)`,
              person.initialPosition.top || "auto",
            ],
            left: [
              person.initialPosition.left || "auto",
              person.initialPosition.right
                ? `calc(${person.initialPosition.right} + 5%)`
                : `calc(${person.initialPosition.left} + 5%)`,
              person.initialPosition.left || "auto",
            ],
          }}
          transition={{
            opacity: { duration: 0.5, delay: index * 0.1 + 0.3 },
            scale: { duration: 0.5, delay: index * 0.1 + 0.3 },
            top: {
              duration: 8 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            },
            left: {
              duration: 8 + index * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            },
          }}
          style={{
            bottom: person.initialPosition.bottom,
            right: person.initialPosition.right,
          }}
          className="absolute"
        >
          {/* Pulsing aura */}
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0.2, 0.5],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 rounded-full bg-gradient-radial from-[#FF6B35]/50 via-[#FF8B5A]/20 to-transparent blur-lg -z-10"
          />

          {/* Outer ring */}
          <div className="absolute -inset-1 rounded-full border-2 border-[#FF6B35]/30" />

          {/* Avatar container */}
          <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-xl shadow-[#FF6B35]/40 border-2 border-[#FF6B35] bg-white dark:bg-gray-800">
            <Image
              src={person.image}
              alt={`Person ${person.id}`}
              fill
              className="object-cover"
              sizes="56px"
            />
          </div>
        </motion.div>
      ))}

      {/* Legend */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-2 bg-black/60 dark:bg-black/80 backdrop-blur-md rounded-full text-xs text-white/90 shadow-lg border border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[#FF6B35]" />
          <span>Pessoas próximas</span>
        </div>
        <div className="w-px h-3 bg-white/20" />
        <div className="flex items-center gap-1.5">
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full bg-white/60"
          />
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            className="w-1 h-1 rounded-full bg-white/60"
          />
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="w-1 h-1 rounded-full bg-white/60"
          />
          <span>Em movimento</span>
        </div>
      </div>
    </div>
  );
}
