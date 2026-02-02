"use client";

import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { FounderCard } from "@/components/founder-card";
import Link from "next/link";
import { ArrowRight, Users, Calendar, MapPin, Heart, Sparkles, Shield, Mail } from "lucide-react";
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
      title: "Comunidades",
      description: "Explore grupos locais e faça novas conexões.",
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
  ];

  const founders = [
    {
      name: "Munir Poeys",
      role: "Co-Founder",
      bio: "Acredita que a tecnologia deve nos aproximar, não nos isolar. Construindo o Atlas Unite para criar encontros reais.",
      icon: "sparkles" as const,
      linkedin: "https://www.linkedin.com/in/munir",
      photo: "/founders/munir.jpeg",
    },
    {
      name: "Pedro Mascarenhas",
      role: "Co-Founder",
      bio: "Visionário em criar conexões significativas. Transformando ideias em experiências que unem pessoas no mundo físico.",
      icon: "bulb" as const,
      linkedin: "https://www.linkedin.com/in/pedromascarenhas",
    },
    {
      name: "João Lucas",
      role: "Co-Founder",
      bio: "Desenvolvedor apaixonado por construir soluções que fazem a diferença. Transformando código em conexões humanas.",
      icon: "code" as const,
      linkedin: "https://www.linkedin.com/in/joaolucas",
      photo: "/founders/joaolucas.png",
    },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Hero />

      {/* Fundadores Section */}
      <Section>
        <div className="max-w-6xl mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <div className="inline-block px-4 py-2 bg-[#FFE8DC] dark:bg-[#FF6B35]/10 text-[#FF6B35] dark:text-[#FF8B5A] rounded-full text-sm font-medium mb-4">
              Equipe
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Conheça os{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8B5A] dark:from-[#FF6B35] dark:to-[#FF8B5A]">
                Fundadores
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              As pessoas por trás da visão de reconectar o mundo físico.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <FounderCard
                  name={founder.name}
                  role={founder.role}
                  bio={founder.bio}
                  icon={founder.icon}
                  linkedin={founder.linkedin}
                  photo={founder.photo}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Section Overview */}
      <Section id="explore">
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

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8"
          >
            <Link
              href="/contato"
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#FFE8DC] to-[#FFE8DC] dark:from-[#FF6B35]/10 dark:to-[#FF8B5A]/10 border border-gray-200 dark:border-gray-800 hover:border-[#FF6B35] dark:hover:border-[#FF8B5A] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#FF8B5A] flex items-center justify-center shadow-lg shadow-[#FF6B35]/20">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Entre em Contato
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Tem dúvidas ou quer saber mais? Fale com a gente!
              </p>
              <div className="flex items-center text-sm font-medium text-[#FF6B35] dark:text-[#FF8B5A] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                Conversar
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>

            <Link
              href="/eventos"
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#FFE8DC] to-[#FFE8DC] dark:from-[#FF6B35]/10 dark:to-[#FF8B5A]/10 border border-gray-200 dark:border-gray-800 hover:border-[#FF6B35] dark:hover:border-[#FF8B5A] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#FF8B5A] flex items-center justify-center shadow-lg shadow-[#FF6B35]/20">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Crie seu Evento
                </h3>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Leve seu evento para o mapa social do Atlas.
              </p>
              <div className="flex items-center text-sm font-medium text-[#FF6B35] dark:text-[#FF8B5A] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                Saiba mais
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </Link>
          </motion.div>
        </div>
      </Section>
    </main>
  );
}
