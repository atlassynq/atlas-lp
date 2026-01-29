"use client";

import { Section } from "@/components/section";
import { PricingCard } from "@/components/pricing-card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageNavigation } from "@/components/page-navigation";
import { motion } from "framer-motion";

export default function PlanosPage() {
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

        <div className="max-w-5xl mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <div className="inline-block px-4 py-2 bg-[#FFE8DC] dark:bg-[#FF6B35]/10 text-[#FF6B35] dark:text-[#FF8B5A] rounded-full text-sm font-medium mb-4">
              Planos
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Escolha sua{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8B5A] dark:from-[#FF6B35] dark:to-[#FF8B5A]">
                experiência
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comece observando o mundo ao seu redor. Evolua para participar
              ativamente das conexões e comunidades.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <PricingCard
                title="Atlas Essential"
                tag="Modo observador"
                description={[
                  "Visualização limitada de pessoas e eventos ao redor.",
                  "Para quem quer sentir o pulso da cidade com mais discrição.",
                ]}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <PricingCard
                title="Atlas Elite"
                tag="Conexão completa"
                featured
                description={[
                  "Crie e participe de comunidades exclusivas.",
                  "Conecte-se diretamente com pessoas, confirme presença em eventos e participe ativamente da rede.",
                ]}
              />
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Navigation */}
      <PageNavigation
        prev={{
          href: "/como-funciona",
          label: "Como funciona",
        }}
        next={{
          href: "/comunidades",
          label: "Comunidades",
        }}
      />
    </main>
  );
}
