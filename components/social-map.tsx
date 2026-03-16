"use client";

import { motion } from "framer-motion";
import { useMemo } from "react";
import Image from "next/image";
import { Home, Map, User, SlidersHorizontal } from "lucide-react";

interface Person {
  id: number;
  name: string;
  image: string;
  top: string;
  left: string;
}

export function SocialMap() {
  const people = useMemo<Person[]>(
    () => [
      { id: 1, name: "Ana",     image: "/persons/1.jpg", top: "20%", left: "22%" },
      { id: 2, name: "Lucas",   image: "/persons/2.jpg", top: "30%", left: "60%" },
      { id: 3, name: "Mariana", image: "/persons/3.jpg", top: "54%", left: "28%" },
      { id: 4, name: "Rafael",  image: "/persons/4.jpg", top: "46%", left: "62%" },
      { id: 5, name: "Juliana", image: "/persons/5.jpg", top: "70%", left: "42%" },
    ],
    []
  );

  return (
    <div className="flex items-center justify-center w-full py-4">
      {/* Phone outer frame */}
      <div className="relative w-[260px] h-[540px] rounded-[3rem] bg-gradient-to-b from-gray-800 to-gray-900 border-2 border-gray-700/80 shadow-2xl shadow-black/60">

        {/* Subtle inner highlight */}
        <div className="absolute inset-0 rounded-[3rem] shadow-[inset_0_1px_1px_rgba(255,255,255,0.08)]" />

        {/* Volume buttons — left */}
        <div className="absolute -left-[3px] top-[98px] w-[3px] h-7 bg-gray-600 rounded-l-sm" />
        <div className="absolute -left-[3px] top-[138px] w-[3px] h-7 bg-gray-600 rounded-l-sm" />

        {/* Power button — right */}
        <div className="absolute -right-[3px] top-[118px] w-[3px] h-12 bg-gray-600 rounded-r-sm" />

        {/* Screen */}
        <div className="absolute inset-[6px] rounded-[2.5rem] overflow-hidden flex flex-col bg-black">

          {/* Status bar + Dynamic Island */}
          <div className="relative flex-shrink-0 h-10 bg-[#1C1C1E] flex items-center px-5">
            <span className="text-[10px] font-semibold text-white/80 tracking-wide">9:41</span>

            {/* Dynamic Island */}
            <div className="absolute left-1/2 -translate-x-1/2 top-2 w-[72px] h-[20px] bg-black rounded-full" />

            <div className="ml-auto flex items-center gap-[5px]">
              {/* Signal bars */}
              <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                <rect x="0"  y="7" width="2.5" height="3" rx="0.5" fill="white" fillOpacity="0.85" />
                <rect x="3.5" y="5" width="2.5" height="5" rx="0.5" fill="white" fillOpacity="0.85" />
                <rect x="7"  y="2.5" width="2.5" height="7.5" rx="0.5" fill="white" fillOpacity="0.85" />
                <rect x="10.5" y="0" width="2.5" height="10" rx="0.5" fill="white" fillOpacity="0.85" />
              </svg>
              {/* Wifi */}
              <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
                <circle cx="6.5" cy="8.5" r="1.2" fill="white" fillOpacity="0.85" />
                <path d="M3 5.8C4 4.8 5.2 4.2 6.5 4.2S9 4.8 10 5.8" stroke="white" strokeOpacity="0.85" strokeWidth="1.2" strokeLinecap="round" />
                <path d="M0.8 3.2C2.3 1.7 4.3 0.8 6.5 0.8S10.7 1.7 12.2 3.2" stroke="white" strokeOpacity="0.85" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              {/* Battery */}
              <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
                <rect x="0.5" y="0.5" width="14" height="9" rx="2" stroke="white" strokeOpacity="0.85" strokeWidth="0.8" />
                <rect x="2" y="2" width="9" height="6" rx="1" fill="white" fillOpacity="0.85" />
                <path d="M15.5 3.5V6.5" stroke="white" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* App header */}
          <div className="flex-shrink-0 h-11 bg-[#1C1C1E] flex items-center px-4 border-b border-white/8">
            <div className="flex items-center gap-2 flex-1">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#FF6B35] to-[#FF8B5A] flex items-center justify-center shadow-sm shadow-[#FF6B35]/30">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <circle cx="6.5" cy="5" r="2" stroke="white" strokeWidth="1.3" />
                  <path d="M6.5 13C6.5 13 2 8.5 2 5a4.5 4.5 0 019 0c0 3.5-4.5 8-4.5 8z" stroke="white" strokeWidth="1.3" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-[13px] font-semibold text-white tracking-tight">Atlas Unite</span>
            </div>
            <button className="p-1.5 rounded-lg bg-[#FFE8DC]">
              <SlidersHorizontal size={13} color="#FF6B35" strokeWidth={2.5} />
            </button>
          </div>

          {/* Map area */}
          <div className="relative flex-1 overflow-hidden">

            {/* Map SVG — city grid with warm map colors */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 248 398"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
            >
              {/* Base */}
              <rect width="248" height="398" fill="#141418" />

              {/* City blocks */}
              {/* Row 0 */}
              <rect x="0"   y="0"   width="58"  height="62"  fill="#1C1C22" />
              <rect x="66"  y="0"   width="50"  height="62"  fill="#18181E" />
              <rect x="124" y="0"   width="58"  height="62"  fill="#1C1C22" />
              <rect x="190" y="0"   width="58"  height="62"  fill="#18181E" />
              {/* Row 1 */}
              <rect x="0"   y="70"  width="58"  height="58"  fill="#18181E" />
              <rect x="66"  y="70"  width="50"  height="58"  fill="#1C1C22" />
              <rect x="124" y="70"  width="58"  height="58"  fill="#18181E" />
              <rect x="190" y="70"  width="58"  height="58"  fill="#1C1C22" />
              {/* Row 2 */}
              <rect x="0"   y="136" width="58"  height="58"  fill="#1C1C22" />
              <rect x="66"  y="136" width="50"  height="58"  fill="#18181E" />
              <rect x="124" y="136" width="58"  height="58"  fill="#1C1C22" />
              <rect x="190" y="136" width="58"  height="58"  fill="#18181E" />
              {/* Row 3 */}
              <rect x="0"   y="202" width="58"  height="58"  fill="#18181E" />
              <rect x="66"  y="202" width="50"  height="58"  fill="#1C1C22" />
              <rect x="124" y="202" width="58"  height="58"  fill="#18181E" />
              <rect x="190" y="202" width="58"  height="58"  fill="#1C1C22" />
              {/* Row 4 */}
              <rect x="0"   y="268" width="58"  height="58"  fill="#1C1C22" />
              <rect x="66"  y="268" width="50"  height="58"  fill="#18181E" />
              <rect x="124" y="268" width="58"  height="58"  fill="#1C1C22" />
              <rect x="190" y="268" width="58"  height="58"  fill="#18181E" />
              {/* Row 5 */}
              <rect x="0"   y="334" width="58"  height="64"  fill="#18181E" />
              <rect x="66"  y="334" width="50"  height="64"  fill="#1C1C22" />
              <rect x="124" y="334" width="58"  height="64"  fill="#18181E" />
              <rect x="190" y="334" width="58"  height="64"  fill="#1C1C22" />

              {/* Secondary streets — vertical */}
              <rect x="58"  y="0" width="8"  height="398" fill="#2A2A32" />
              <rect x="116" y="0" width="8"  height="398" fill="#2A2A32" />
              <rect x="182" y="0" width="8"  height="398" fill="#2A2A32" />

              {/* Secondary streets — horizontal */}
              <rect x="0" y="62"  width="248" height="8"  fill="#2A2A32" />
              <rect x="0" y="128" width="248" height="8"  fill="#2A2A32" />
              <rect x="0" y="194" width="248" height="8"  fill="#2A2A32" />
              <rect x="0" y="260" width="248" height="8"  fill="#2A2A32" />
              <rect x="0" y="326" width="248" height="8"  fill="#2A2A32" />

              {/* Main avenue — horizontal */}
              <rect x="0" y="190" width="248" height="14" fill="#323240" />
              {/* Main avenue — vertical */}
              <rect x="114" y="0"  width="12" height="398" fill="#323240" />
            </svg>

            {/* "Você está aqui" — blue dot */}
            <div className="absolute top-[42%] left-[47%] -translate-x-1/2 -translate-y-1/2 z-10">
              <motion.div
                animate={{ scale: [1, 2.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-full bg-blue-400/50"
              />
              <div className="w-[14px] h-[14px] rounded-full bg-blue-500 border-2 border-white shadow-md shadow-blue-500/40" />
            </div>

            {/* Walking people */}
            {people.map((person, index) => (
              <motion.div
                key={person.id}
                className="absolute z-20"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  top: [
                    person.top,
                    `calc(${person.top} - 8%)`,
                    `calc(${person.top} + 5%)`,
                    `calc(${person.top} - 3%)`,
                    person.top,
                  ],
                  left: [
                    person.left,
                    `calc(${person.left} + 7%)`,
                    `calc(${person.left} - 4%)`,
                    `calc(${person.left} + 5%)`,
                    person.left,
                  ],
                }}
                style={{ top: person.top, left: person.left }}
                transition={{
                  opacity: { duration: 0.4, delay: index * 0.15 + 0.6 },
                  scale:   { duration: 0.4, delay: index * 0.15 + 0.6, type: "spring", stiffness: 200 },
                  top:  { duration: 28 + index * 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.9 },
                  left: { duration: 28 + index * 4, repeat: Infinity, ease: "easeInOut", delay: index * 0.9 },
                }}
              >
                <div className="flex flex-col items-center gap-0.5" style={{ transform: "translate(-50%, -50%)" }}>
                  {/* Name pill */}
                  <div className="whitespace-nowrap bg-white shadow-md rounded-full px-2 py-[2px] text-[9px] font-bold text-gray-800 border border-gray-100 mb-0.5">
                    {person.name}
                  </div>

                  {/* Aura + avatar */}
                  <div className="relative flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale:   [1, 1.5, 1],
                        opacity: [0.35, 0.08, 0.35],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.35,
                      }}
                      className="absolute w-10 h-10 rounded-full bg-[#FF6B35]/40 blur-sm"
                    />
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#FF6B35] shadow-lg shadow-[#FF6B35]/30 bg-white">
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                  </div>

                  {/* Location dot */}
                  <div className="w-[6px] h-[6px] rounded-full bg-[#FF6B35] border-[1.5px] border-white shadow-sm mt-0.5" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom nav */}
          <div className="flex-shrink-0 h-[50px] bg-[#1C1C1E] border-t border-white/8 flex items-center justify-around px-6">
            <div className="flex flex-col items-center gap-[3px]">
              <Home size={17} color="#FF6B35" strokeWidth={2.5} />
              <div className="w-1 h-1 rounded-full bg-[#FF6B35]" />
            </div>
            <div className="flex flex-col items-center gap-[3px] opacity-35">
              <Map size={17} color="#9CA3AF" strokeWidth={2} />
            </div>
            <div className="flex flex-col items-center gap-[3px] opacity-35">
              <User size={17} color="#9CA3AF" strokeWidth={2} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
