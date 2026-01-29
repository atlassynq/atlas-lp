"use client";

import { Section } from "@/components/section";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Users, Mail, Sparkles, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { PageNavigation } from "@/components/page-navigation";
import Image from "next/image";

export default function EventosPage() {
  const steps = [
    {
      icon: Mail,
      title: "Entre em Contato",
      description: "Envie um email para nossa equipe contando sobre seu evento. Share ideias, datas e expectativas.",
    },
    {
      icon: Sparkles,
      title: "Discutimos os Termos",
      description: "Nossa equipe vai analisar sua proposta e retornar para conversar sobre parceria e condições.",
    },
    {
      icon: MapPin,
      title: "Evento no Mapa",
      description: "Após fechar parceria, seu evento aparece no radar do Atlas Unite, visível para pessoas próximas.",
    },
    {
      icon: Users,
      title: "Pessoas Comparecem",
      description: "Usuários do Atlas veem seu evento no mapa e podem confirmar presença, aumentando seu alcance.",
    },
  ];

  const benefits = [
    "Alcance local preciso - pessoas realmente próximas",
    "Público engajado que busca conexões reais",
    "Análise de dados e métricas do evento",
    "Suporte dedicado da equipe Atlas",
    "Integração nativa com o mapa social",
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

        <div className="max-w-6xl mx-auto space-y-24">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFE8DC] dark:bg-[#FF6B35]/10 text-[#FF6B35] dark:text-[#FF8B5A] rounded-full text-sm font-medium">
              <Calendar className="h-4 w-4" />
              Eventos
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Leve seu evento para o{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8B5A] dark:from-[#FF6B35] dark:to-[#FF8B5A]">
                mapa social
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Eventos no Atlas Unite funcionam de forma única. Nós conectamos seu evento
              às pessoas que estão realmente próximas, criando oportunidades reais de
              conexão presencial.
            </p>
          </motion.div>

          {/* How It Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">
                Como Funciona
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Um processo simples para transformar seu evento em uma experiência
                geolocalizada
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="h-full p-8 rounded-2xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 hover:border-[#FF6B35] dark:hover:border-[#FF8B5A] transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#FF8B5A] flex items-center justify-center shrink-0 shadow-lg shadow-[#FF6B35]/20 group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="h-7 w-7 text-white" />
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#FF6B35] dark:bg-[#FF8B5A] text-white text-sm font-bold flex items-center justify-center">
                            {index + 1}
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Por que promover seu evento{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8B5A] dark:from-[#FF6B35] dark:to-[#FF8B5A]">
                  no Atlas Unite
                </span>
                ?
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Não somos mais uma plataforma de eventos. Conectamos seu evento a
                pessoas que estão fisicamente próximas agora, interessadas em participar
                de experiências presenciais.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="h-6 w-6 text-[#FF6B35] dark:text-[#FF8B5A] shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {benefit}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Map visualization */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FFE8DC] to-[#FFE8DC] dark:from-[#FF6B35]/10 dark:to-[#FF8B5A]/10 border border-gray-200 dark:border-gray-800 overflow-hidden">
                  {/* Map pattern */}
                  <svg
                    className="absolute inset-0 w-full h-full opacity-10"
                    viewBox="0 0 400 400"
                    fill="none"
                  >
                    <defs>
                      <pattern
                        id="grid-event"
                        width="40"
                        height="40"
                        patternUnits="userSpaceOnUse"
                      >
                        <path
                          d="M 40 0 L 0 0 0 40"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="0.5"
                          className="text-[#FF6B35]"
                        />
                      </pattern>
                    </defs>
                    <rect width="400" height="400" fill="url(#grid-event)" />
                    <path
                      d="M 0 200 L 400 200"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-[#FF6B35]/30"
                    />
                    <path
                      d="M 200 0 L 200 400"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-[#FF6B35]/30"
                    />
                  </svg>

                  {/* Event marker */}
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [1, 0.8, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  >
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF8B5A] flex items-center justify-center shadow-2xl shadow-[#FF6B35]/40">
                        <Calendar className="w-10 h-10 text-white" />
                      </div>
                      <motion.div
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeOut",
                        }}
                        className="absolute inset-0 rounded-full bg-gradient-radial from-[#FF6B35]/60 to-transparent blur-xl -z-10"
                      />
                    </div>
                  </motion.div>

                  {/* People around event */}
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: i * 0.15 + 0.5,
                      }}
                      className={`absolute w-10 h-10 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#FF8B5A] flex items-center justify-center shadow-lg ${
                        i === 1
                          ? "top-1/4 left-1/4"
                          : i === 2
                          ? "top-1/4 right-1/4"
                          : i === 3
                          ? "bottom-1/4 left-1/3"
                          : "bottom-1/3 right-1/3"
                      }`}
                    >
                      <Users className="w-5 h-5 text-white" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 dark:text-white mb-6">
                Pronto para transformar seu evento?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Entre em contato com nossa equipe e vamos conversar sobre como o Atlas
                Unite pode ajudar seu evento a alcançar as pessoas certas.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20">
                <a
                  href="mailto:primeatlas.comunic@gmail.com"
                  className="group inline-flex items-center gap-3 px-10 py-5 text-base font-medium bg-gradient-to-r from-[#FF6B35] to-[#FF8B5A] hover:from-[#FF8B5A] hover:to-[#FF6B35] text-white rounded-full shadow-lg shadow-[#FF6B35]/20 hover:shadow-xl hover:shadow-[#FF6B35]/30 transition-all hover:-translate-y-0.5"
                >
                  <Mail className="w-5 h-5" />
                  Contatar Equipe Atlas
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="pt-16 border-t border-gray-200 dark:border-gray-800">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Respondemos em até 24 horas úteis. Prepare suas ideias!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Navigation */}
      <PageNavigation
        prev={{
          href: "/comunidades",
          label: "Comunidades",
        }}
        next={{
          href: "/missao",
          label: "Nossa Missão",
        }}
      />
    </main>
  );
}
