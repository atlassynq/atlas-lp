"use client";

import { Section } from "@/components/section";
import Link from "next/link";
import { ArrowLeft, Users } from "lucide-react";
import { motion } from "framer-motion";
import { PageNavigation } from "@/components/page-navigation";

export default function ComunidadesPage() {
  const communities = [
    {
      name: "Corridas Urbanas",
      category: "Esporte",
      description: "Grupos de corrida no seu bairro. Encontre parceiros para correr.",
      gradient: "from-green-600 to-emerald-600",
    },
    {
      name: "Coworking SP",
      category: "Trabalho",
      description: "Coworking espontâneo em cafés. Trabalhe junto com outros profissionais.",
      gradient: "from-[#FF6B35] to-[#FF8B5A]",
    },
    {
      name: "Meditação Matinal",
      category: "Bem-estar",
      description: "Sessões de meditação e mindfulness em grupos pela manhã.",
      gradient: "from-purple-600 to-pink-600",
    },
    {
      name: "Dev Meetups",
      category: "Networking",
      description: "Encontros de desenvolvedores para trocar experiências.",
      gradient: "from-orange-600 to-red-600",
    },
    {
      name: "Clube de Leitura",
      category: "Cultura",
      description: "Grupos de leitura que se reúnem para discutir livros.",
      gradient: "from-indigo-600 to-violet-600",
    },
    {
      name: "Aulões de Estudo",
      category: "Educação",
      description: "Encontros de estudo colaborativo para provas e concursos.",
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
              Comunidades
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Comunidades &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8B5A] dark:from-[#FF6B35] dark:to-[#FF8B5A]">
                eventos
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Descubra grupos locais e eventos que estão acontecendo agora,
              próximos de você.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communities.map((community, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="space-y-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FF6B35] group-hover:to-[#FF8B5A] dark:group-hover:from-[#FF6B35] dark:group-hover:to-[#FF8B5A] transition-all">
                        {community.name}
                      </h3>
                      <span className={`text-xs font-medium bg-gradient-to-r ${community.gradient} text-transparent bg-clip-text`}>
                        {community.category}
                      </span>
                    </div>
                    <Users className="h-5 w-5 text-gray-400 dark:text-gray-600 group-hover:text-[#FF6B35] dark:group-hover:text-[#FF8B5A] transition-colors" />
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {community.description}
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
          href: "/planos",
          label: "Planos",
        }}
        next={{
          href: "/eventos",
          label: "Eventos",
        }}
      />
    </main>
  );
}
