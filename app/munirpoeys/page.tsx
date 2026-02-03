"use client";

import { Section } from "@/components/section";
import Link from "next/link";
import { ArrowLeft, Sparkles, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function MunirPoeysPage() {
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
            {/* Photo Section */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800">
              <Image
                src="/founders/munir.jpeg"
                alt="Munir Poeys"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
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
                  <Sparkles className="w-4 h-4 text-[#FF6B35]" />
                  <span className="text-sm font-semibold text-black">
                    Co-Founder
                  </span>
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                  Munir Poeys
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                  Acredita que a tecnologia deve nos aproximar, não nos isolar. Construindo o Atlas Unite para criar encontros reais.
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
                  Empreendedor desde criança, sempre fui movido por negociações, estratégia e pela construção de oportunidades. Desde cedo, enxergava valor onde outros viam apenas situações comuns — transformando ideias em iniciativas e conversas em possibilidades reais.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Tenho interesse genuíno por pessoas e pela capacidade de transformar boas conexões em acordos inteligentes. Acredito que grandes projetos nascem de relações sólidas e de uma visão clara de longo prazo.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Meu foco está em empreendedorismo e inovação, buscando constantemente criar, estruturar e evoluir projetos com mentalidade estratégica e ambição sustentável.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  No Atlas, carrego um propósito claro: transmitir conexão, visão estratégica e crescimento por meio de relacionamentos reais.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Influenciado por princípios como os de Dale Carnegie, acredito que influência verdadeira nasce do interesse genuíno pelas pessoas. Para mim, construir um projeto é, acima de tudo, construir relações, visão de futuro e impacto consistente.
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
