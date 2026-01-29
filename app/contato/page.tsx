"use client";

import { Section } from "@/components/section";
import Link from "next/link";
import { ArrowLeft, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { PageNavigation } from "@/components/page-navigation";

export default function ContatoPage() {
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

        <div className="max-w-3xl mx-auto space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6"
          >
            <div className="inline-block px-4 py-2 bg-[#FFE8DC] dark:bg-[#FF6B35]/10 text-[#FF6B35] dark:text-[#FF8B5A] rounded-full text-sm font-medium mb-4">
              Contato
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Entre em{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8B5A] dark:from-[#FF6B35] dark:to-[#FF8B5A]">
                contato
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Quer conversar sobre parcerias, investimentos ou apenas dizer oi?
              Estamos sempre abertos a novas conexões.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 hover:border-[#FFE8DC] dark:hover:border-[#FF6B35] transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#FF8B5A] flex items-center justify-center shrink-0 shadow-lg shadow-[#FF6B35]/20">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    Email
                  </h3>
                  <a
                    href="mailto:primeatlas.comunic@gmail.com"
                    className="text-[#FF6B35] dark:text-[#FF8B5A] hover:underline"
                  >
                    primeatlas.comunic@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center pt-8">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Responderemos o mais breve possível. Cada conexão é importante
                para nós.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Navigation */}
      <PageNavigation
        prev={{
          href: "/socios",
          label: "Sócios",
        }}
      />
    </main>
  );
}
