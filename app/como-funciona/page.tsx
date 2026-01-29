"use client";

import { Section } from "@/components/section";
import Link from "next/link";
import { ArrowLeft, Eye, Sparkles, MapPin, Users, MessageCircle, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { PageNavigation } from "@/components/page-navigation";

export default function ComoFuncionaPage() {
  const features = [
    {
      icon: Eye,
      title: "Veja quem está por perto",
      description: "Pessoas próximas que decidiram compartilhar localização",
      gradient: "from-[#FF6B35] to-[#FF8B5A]",
    },
    {
      icon: Sparkles,
      title: "Reviva quem você cruzou",
      description: "Conceito de reencontro com pessoas que você encontrou",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      icon: MapPin,
      title: "Mapa de eventos ativos",
      description: "Eventos geolocalizados com horário e distância",
      gradient: "from-orange-600 to-red-600",
    },
    {
      icon: Users,
      title: "Comunidades locais",
      description: "Grupos por interesse e região na sua área",
      gradient: "from-green-600 to-emerald-600",
    },
    {
      icon: MessageCircle,
      title: "Conexão via convite",
      description: "Siga, envie convites e controle sua privacidade",
      gradient: "from-indigo-600 to-violet-600",
    },
    {
      icon: Shield,
      title: "Privacidade primeiro",
      description: "Você decide quando e como compartilhar sua localização",
      gradient: "from-teal-600 to-cyan-600",
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

        <div className="max-w-6xl mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <div className="inline-block px-4 py-2 bg-[#FFE8DC] dark:bg-[#FF6B35]/10 text-[#FF6B35] dark:text-[#FF8B5A] rounded-full text-sm font-medium mb-4">
              Como Funciona
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Como funciona
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Atlas Unite transforma o seu redor em possibilidades de conexão.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-8 rounded-2xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
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
        prev={{
          href: "/sobre",
          label: "O que é",
        }}
        next={{
          href: "/planos",
          label: "Planos",
        }}
      />
    </main>
  );
}
