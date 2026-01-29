"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SocialMap } from "@/components/social-map";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-white dark:bg-black">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFE8DC]/50 via-transparent to-transparent dark:from-[#FF6B35]/10" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFE8DC] dark:bg-[#FF6B35]/10 text-[#FF6B35] dark:text-[#FF8B5A] rounded-full text-sm font-medium"
              >
                <Image
                  src="/logos/icon.png"
                  alt="Atlas Unite"
                  width={16}
                  height={16}
                  className="rounded-sm"
                  priority
                />
                Radar Social
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-tight tracking-tight text-gray-900 dark:text-white">
                Não é sobre estar{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8B5A] dark:from-[#FF6B35] dark:to-[#FF8B5A]">
                  online
                </span>
                . É sobre estar{" "}
                <span className="relative">
                  presente
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    height="8"
                    viewBox="0 0 200 8"
                    fill="none"
                  >
                    <path
                      d="M0 4C50 2 150 6 200 4"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      className="text-[#FF6B35] dark:text-[#FF8B5A]"
                    />
                  </svg>
                </span>
                .
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0"
              >
                Atlas Unite é o radar social que aproxima você de pessoas, eventos e
                comunidades que existem ao seu redor.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                size="lg"
                className="text-base px-8 py-6 rounded-full h-auto bg-gradient-to-r from-[#FF6B35] to-[#FF8B5A] hover:from-[#FF8B5A] hover:to-[#FF6B35] text-white shadow-lg shadow-[#FF6B35]/20 hover:shadow-xl hover:shadow-[#FF6B35]/30 transition-all"
              >
                Entre no movimento
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 rounded-full h-auto border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 transition-all"
                asChild
              >
                <Link href="#explore">
                  Saiba mais
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Visual - Social Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <SocialMap />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
