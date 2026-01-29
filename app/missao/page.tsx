"use client";

import { Section } from "@/components/section";
import Link from "next/link";
import { ArrowLeft, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { PageNavigation } from "@/components/page-navigation";

export default function MissaoPage() {
  const values = [
    "Menos scroll infinito, mais encontros reais.",
    "Menos ruído, mais conexões que fazem sentido.",
    "Tecnologia a serviço da presença, não da distração.",
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <Section className="pt-32">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para home
        </Link>

        <div className="max-w-4xl mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <div className="inline-block px-4 py-2 bg-[#FFE8DC] dark:bg-[#FF6B35]/10 text-[#FF6B35] dark:text-[#FF8B5A] rounded-full text-sm font-medium mb-4">
              Nossa Visão
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Nossa{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8B5A] dark:from-[#FF6B35] dark:to-[#FF8B5A]">
                missão
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
              Acreditamos na presença no mundo físico e em conexões humanas de
              qualidade. Menos ruído digital, mais encontros reais. Tecnologia
              como meio para encontros reais, não como fim.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF8B5A] flex items-center justify-center shrink-0 mt-1 shadow-lg shadow-[#FF6B35]/20">
                  <Heart className="h-5 w-5 text-white" />
                </div>
                <p className="text-sm font-medium text-gray-900 dark:text-white leading-relaxed">
                  {value}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Navigation */}
      <PageNavigation
        prev={{
          href: "/comunidades",
          label: "Comunidades",
        }}
        next={{
          href: "/socios",
          label: "Sócios",
        }}
      />
    </main>
  );
}
