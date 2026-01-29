"use client";

import { Section } from "@/components/section";
import { FounderCard } from "@/components/founder-card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PageNavigation } from "@/components/page-navigation";
import { motion } from "framer-motion";

export default function SociosPage() {
  const founders = [
    {
      name: "Nome do Sócio 1",
      role: "Co-Founder & CEO",
      bio: "Acredita que a tecnologia deve nos aproximar, não nos isolar. Construindo o Atlas Unite para criar encontros reais.",
    },
    {
      name: "Nome do Sócio 2",
      role: "Co-Founder & CTO",
      bio: "Visionário em tecnologia geolocalizada. Transformando conexões digitais em experiências físicas.",
    },
    {
      name: "Nome do Sócio 3",
      role: "Co-Founder & CXO",
      bio: "Apixonada por experiências humanas autênticas. Criando comunidades que realmente importam.",
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
              Equipe
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Conheça os{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8B5A] dark:from-[#FF6B35] dark:to-[#FF8B5A]">
                sócios
              </span>
            </h1>
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
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Navigation */}
      <PageNavigation
        prev={{
          href: "/missao",
          label: "Nossa Missão",
        }}
        next={{
          href: "/contato",
          label: "Contato",
        }}
      />
    </main>
  );
}
