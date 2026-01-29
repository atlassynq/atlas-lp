"use client";

import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import Link from "next/link";
import { ArrowRight, Users, Calendar, MapPin, Heart, Sparkles, Shield } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const sections = [
    {
      title: "O que é o Atlas Unite",
      description: "Conheça o radar social que conecta você ao mundo real.",
      href: "/sobre",
      icon: Users,
      gradient: "from-[#FF6B35] to-[#FF8B5A]",
      bgGradient: "from-[#FFE8DC] to-[#FFE8DC] dark:from-[#FF6B35]/10 dark:to-[#FF8B5A]/10",
    },
    {
      title: "Como Funciona",
      description: "Descubra como o Atlas Unite transforma seu redor em conexões.",
      href: "/como-funciona",
      icon: Sparkles,
      gradient: "from-purple-600 to-pink-600",
      bgGradient: "from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20",
    },
    {
      title: "Planos",
      description: "Essential ou Elite: escolha como quer se conectar.",
      href: "/planos",
      icon: Shield,
      gradient: "from-green-600 to-emerald-600",
      bgGradient: "from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
    },
    {
      title: "Comunidades & Eventos",
      description: "Explore grupos locais e eventos acontecendo agora.",
      href: "/comunidades",
      icon: Calendar,
      gradient: "from-orange-600 to-red-600",
      bgGradient: "from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20",
    },
    {
      title: "Nossa Missão",
      description: "Menos scroll infinito, mais encontros reais.",
      href: "/missao",
      icon: Heart,
      gradient: "from-indigo-600 to-violet-600",
      bgGradient: "from-indigo-50 to-violet-50 dark:from-indigo-950/20 dark:to-violet-950/20",
    },
    {
      title: "Conheça os Sócios",
      description: "As pessoas por trás da visão do Atlas Unite.",
      href: "/socios",
      icon: Users,
      gradient: "from-teal-600 to-cyan-600",
      bgGradient: "from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20",
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Hero />

      {/* Section Overview */}
      <Section id="explore" className="bg-gray-50/50 dark:bg-gray-950/50">
        <div className="max-w-7xl mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-4"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Explore o <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8B5A] dark:from-[#FF6B35] dark:to-[#FF8B5A]">Atlas Unite</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Descubra como estamos reconectando o mundo físico, uma conexão de cada vez.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={section.href}
                  className="group relative block h-full"
                >
                  <div className={`relative p-8 rounded-2xl bg-gradient-to-br ${section.bgGradient} border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full`}>
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${section.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <section.icon className="h-7 w-7 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FF6B35] group-hover:to-[#FF8B5A] dark:group-hover:from-[#FF6B35] dark:group-hover:to-[#FF8B5A] transition-all">
                      {section.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {section.description}
                    </p>

                    {/* CTA */}
                    <div className="flex items-center text-sm font-medium text-[#FF6B35] dark:text-[#FF8B5A] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                      Explorar
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center pt-8"
          >
            <Link
              href="/contato"
              className="inline-flex items-center gap-2 px-10 py-5 text-base font-medium bg-gradient-to-r from-[#FF6B35] to-[#FF8B5A] hover:from-[#FF8B5A] hover:to-[#FF6B35] text-white rounded-full shadow-lg shadow-[#FF6B35]/20 hover:shadow-xl hover:shadow-[#FF6B35]/30 transition-all transform hover:-translate-y-0.5"
            >
              Entre em contato
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </Section>
    </main>
  );
}
