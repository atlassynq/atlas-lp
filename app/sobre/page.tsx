"use client";

import { Section } from "@/components/section";
import Link from "next/link";
import { ArrowLeft, Users, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { PageNavigation } from "@/components/page-navigation";

export default function SobrePage() {
  const features = [
    {
      icon: Users,
      title: "Pessoas Próximas",
      description: "Conecta você com pessoas que estão realmente por perto e querem fazer novas conexões.",
    },
    {
      icon: Calendar,
      title: "Eventos em Tempo Real",
      description: "Mostra eventos que estão acontecendo agora, na vida real, perto de você.",
    },
    {
      icon: MapPin,
      title: "Comunidades Locais",
      description: "Ajuda você a descobrir comunidades locais que combinam com você.",
    },
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
            className="space-y-6"
          >
            <div className="inline-block px-4 py-2 bg-[#FFE8DC] dark:bg-[#FF6B35]/10 text-[#FF6B35] dark:text-[#FF8B5A] rounded-full text-sm font-medium mb-4">
              Sobre o Atlas Unite
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white">
              O que é o <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8B5A] dark:from-[#FF6B35] dark:to-[#FF8B5A]">Atlas Unite</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
              Atlas Unite é uma rede social baseada em localização que funciona como
              um "radar social", conectando você ao que acontece ao seu redor em
              tempo real.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 hover:border-[#FFE8DC] dark:hover:border-[#FF6B35] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#FF8B5A] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Navigation */}
      <PageNavigation
        next={{
          href: "/como-funciona",
          label: "Como funciona",
        }}
      />
    </main>
  );
}
