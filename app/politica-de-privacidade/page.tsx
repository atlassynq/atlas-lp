"use client";

import { Section } from "@/components/section";
import Link from "next/link";
import { ArrowLeft, FileText, Shield, Database, Globe, Lock, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function PoliticaDePrivacidadePage() {
  const sections = [
    {
      id: "coleta",
      icon: Database,
      title: "1. Coleta de Dados Pessoais",
      content: [
        "Coletamos informações que você nos fornece diretamente e dados coletados automaticamente através do uso do aplicativo.",
        "",
        "Informações Fornecidas por Você:",
        "• Dados de Identificação: Nome e sobrenome, endereço de e-mail, número de telefone.",
        "• Dados de Localização e Contato: Endereço completo, Estado, Província, CEP e Cidade.",
        "• Redes Sociais: Se você optar por conectar-se via Facebook, Twitter ou outras redes, poderemos coletar informações de perfil associadas a essas contas.",
        "",
        "Informações do Dispositivo:",
        "Para o funcionamento de recursos específicos, solicitamos acesso a:",
        "• Localização (GPS): Para serviços baseados em geolocalização.",
        "• Câmera e Galeria de Fotos: Para captura e upload de imagens no app.",
        "• Agenda Telefônica: Para integração e busca de contatos (conforme sua permissão).",
      ],
    },
    {
      id: "uso-dados",
      icon: FileText,
      title: "2. Uso de Dados e Ferramentas de Terceiros",
      content: [
        "Análise e Rastreamento",
        "Utilizamos ferramentas como o Google Analytics para monitorar e analisar o uso do nosso serviço, visando melhorias na experiência do usuário.",
        "",
        "E-mail Marketing",
        "Enviamos comunicações e e-mails informativos. Você pode optar por não receber essas mensagens a qualquer momento através do link de \"descadastro\" presente nos e-mails.",
        "",
        "Publicidade e Remarketing",
        "• Exibição de Anúncios: O app exibe anúncios de parceiros.",
        "• Remarketing: Utilizamos serviços de remarketing para anunciar nossa empresa em sites de terceiros após você ter visitado ou usado nosso app.",
        "",
        "Pagamentos",
        "Para produtos ou serviços pagos, utilizamos processadores de pagamento de terceiros. Não armazenamos os detalhes do seu cartão de crédito em nossos servidores.",
      ],
    },
    {
      id: "conformidade",
      icon: Globe,
      title: "3. Conformidade Internacional e Regional",
      content: [
        "GDPR (União Europeia)",
        "Se você reside no Espaço Econômico Europeu (EEE), seus direitos incluem o acesso, retificação, exclusão e portabilidade de seus dados, sob a base legal do consentimento ou execução de contrato.",
        "",
        "CCPA / CPRA (Califórnia, EUA)",
        "De acordo com a Lei de Privacidade do Consumidor da Califórnia, os residentes têm o direito de saber quais dados pessoais são coletados, solicitar a exclusão e optar por não permitir a \"venda\" de suas informações pessoais.",
        "",
        "CalOPPA (Califórnia, EUA)",
        "Em conformidade com a CalOPPA, concordamos que os usuários podem visitar nosso aplicativo de forma anônima (onde aplicável) e que o link para esta política está visível na interface do app.",
      ],
    },
    {
      id: "seguranca",
      icon: Lock,
      title: "4. Segurança dos Dados",
      content: [
        "A segurança dos seus dados é importante para nós, mas lembre-se de que nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro. Esforçamo-nos para usar meios comercialmente aceitáveis para proteger seus dados pessoais.",
      ],
    },
    {
      id: "alteracoes",
      icon: FileText,
      title: "5. Alterações nesta Política",
      content: [
        "Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicando a nova política nesta página e atualizando a \"Data de última atualização\".",
      ],
    },
    {
      id: "contato",
      icon: Mail,
      title: "6. Contato",
      content: [
        "Se você tiver alguma dúvida sobre esta Política de Privacidade, entre em contato conosco:",
        "",
        "Por e-mail: primeatlas.comunic@gmail.com",
      ],
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
              Legal
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 dark:text-white">
              Política de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8B5A] dark:from-[#FF6B35] dark:to-[#FF8B5A]">Privacidade</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
              Última atualização: 01/04/2026
            </p>
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Esta Política de Privacidade descreve como o Atlas Unite coleta, usa e compartilha suas informações pessoais. Ao utilizar nosso aplicativo, você concorda com a coleta e o uso de informações de acordo com esta política.
            </p>
          </motion.div>

          {/* Policy Sections */}
          <div className="space-y-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.02 }}
                id={section.id}
                className="scroll-mt-32"
              >
                <div className="p-6 sm:p-8 rounded-2xl bg-gray-50 dark:bg-gray-950 border border-gray-200 dark:border-gray-800 hover:border-[#FFE8DC] dark:hover:border-[#FF6B35]/30 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6B35] to-[#FF8B5A] flex items-center justify-center flex-shrink-0">
                      <section.icon className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white pt-2">
                      {section.title}
                    </h2>
                  </div>
                  <div className="space-y-2 pl-16">
                    {section.content.map((paragraph, pIndex) => (
                      <p
                        key={pIndex}
                        className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#FFE8DC] to-[#FFE8DC] dark:from-[#FF6B35]/10 dark:to-[#FF8B5A]/10 border border-gray-200 dark:border-gray-800"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
              Ainda com dúvidas?
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Entre em contato conosco e teremos prazer em ajudar.
            </p>
            <a
              href="mailto:primeatlas.comunic@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#FF6B35] to-[#FF8B5A] text-white rounded-full font-medium hover:shadow-lg hover:shadow-[#FF6B35]/20 transition-all"
            >
              <Mail className="h-4 w-4" />
              Fale conosco
            </a>
          </motion.div>
        </div>
      </Section>
    </main>
  );
}
