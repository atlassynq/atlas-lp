"use client";

import { Section } from "@/components/section";
import Link from "next/link";
import { ArrowLeft, Lightbulb, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function PedroMascarenhasPage() {
  const initials = "PM";

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

        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Photo/Initials Section */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-[#FF6B35] to-[#FF8B5A] flex items-center justify-center">
              <span className="text-9xl font-bold text-white">
                {initials}
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Content Section */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg mb-6">
                  <Lightbulb className="w-4 h-4 text-[#FF6B35]" />
                  <span className="text-sm font-semibold text-black">
                    Co-Founder
                  </span>
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                  Pedro Mascarenhas
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                  Empreendedor com mentalidade global, apaixonado por comunicação, história e pessoas.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="space-y-4"
              >
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Sobre
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Empreendedor com mentalidade global, sou apaixonado por comunicação, história e pessoas, com referências que vão de Jesus aos Beatles e Walt Disney. Gosto de observar como conexões moldam culturas, negócios e o mundo real.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  O Atlas nasce dessa visão: um radar social criado para transformar encontros presenciais em conexões reais, simples e naturais.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Como cofundador, atuo na visão do produto, estratégia e crescimento do Atlas, sempre com foco em experiência, inovação e conexão entre pessoas.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic">
                  "Verás que um filho teu não foge à luta."
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium bg-gradient-to-r from-[#FF6B35] to-[#FF8B5A] hover:from-[#FF8B5A] hover:to-[#FF6B35] text-white rounded-full shadow-lg shadow-[#FF6B35]/20 hover:shadow-xl hover:shadow-[#FF6B35]/30 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  Entre em contato
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Section>
    </main>
  );
}
