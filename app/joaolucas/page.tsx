"use client";

import { Section } from "@/components/section";
import Link from "next/link";
import { ArrowLeft, Code, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function JoaoLucasPage() {
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
                src="/founders/joaolucas.jpeg"
                alt="João Lucas"
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
                  <Code className="w-4 h-4 text-[#FF6B35]" />
                  <span className="text-sm font-semibold text-black">
                    Co-Founder
                  </span>
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                  João Lucas
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                  Desenvolvedor apaixonado por construir soluções que fazem a diferença. Transformando código em conexões humanas.
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
                  Me chamo João Lucas, sou desenvolvedor e vejo tecnologia como a melhor forma de transformar ideias em algo que realmente impacta a vida das pessoas. Gosto de encarar cada projeto como um desafio intelectual e criativo, unindo lógica, design e empatia para construir soluções que façam sentido no dia a dia de quem usa.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Minha base vem de valores simples: disciplina, consistência e vontade de melhorar um pouco todos os dias. O basquete e referências como Michael Jordan reforçaram em mim essa mentalidade focada em evolução constante, enquanto a música e artistas como o Mike Shinoda influenciaram meu processo criativo, ajudando a experimentar, iterar e não ter medo de refazer até chegar na melhor versão da ideia.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Gosto de estudar, testar possibilidades e, nas horas vagas, mergulhar em filmes que me inspiram a contar histórias melhores também no mundo digital. No fundo, minha carreira é guiada por aprender, construir e ter coragem de atravessar as divisões que surgem no caminho. "So give me reason to prove me wrong, to wash this memory clean, let the floods cross the distance in your eyes, across this new divide."
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link
                  href="https://www.linkedin.com/in/joaolucascordeiro/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium bg-gradient-to-r from-[#FF6B35] to-[#FF8B5A] hover:from-[#FF8B5A] hover:to-[#FF6B35] text-white rounded-full shadow-lg shadow-[#FF6B35]/20 hover:shadow-xl hover:shadow-[#FF6B35]/30 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Section>
    </main>
  );
}
