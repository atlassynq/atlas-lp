"use client";

import { Section } from "@/components/section";
import Link from "next/link";
import { ArrowLeft, FileText, Shield, Users, AlertCircle, Mail, Calendar, Lock } from "lucide-react";
import { motion } from "framer-motion";
import React from "react";

// Helper function to convert markdown bold to JSX
function formatText(text: string): React.ReactNode {
  // Replace **text** with <strong>text</strong>
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, index) =>
    index % 2 === 1 ? <strong key={index}>{part}</strong> : part
  );
}

export default function TermosDeUsoPage() {
  const sections = [
    {
      id: "intro",
      icon: FileText,
      title: "1. Introdução",
      content: [
        "Bem-vindo ao Atlas Unite! Estes Termos de Uso regem o uso do nosso aplicativo e serviços relacionados. Ao acessar e utilizar o Atlas Unite, você concorda com estes termos.",
        "O Atlas Unite é uma plataforma de rede social com base em localização que permite aos usuários compartilhar sua localização, descobrir eventos próximos, conectar-se com outros usuários e participar de uma comunidade geograficamente vinculada.",
      ],
    },
    {
      id: "definicoes",
      icon: FileText,
      title: "2. Definições",
      content: [
        "• Aplicativo: O software móvel Atlas Unite, incluindo todas as suas funcionalidades e serviços.",
        "• Empresa: A entidade proprietária e operadora do Atlas Unite.",
        "• Usuário: Qualquer pessoa que utilize o Aplicativo, tenha ou não criado uma conta.",
        "• Conta: O cadastro do Usuário no Aplicativo, composto por email, senha e informações de perfil.",
        "• Conteúdo: Qualquer informação, texto, imagens, fotos, vídeos, sons, dados ou outros materiais compartilhados.",
        "• Localização: Dados geográficos compartilhados pelo Usuário, incluindo coordenadas GPS e informações de localização aproximada.",
        "• Eventos: Compromissos, encontros ou atividades criados por SuperAdmins.",
        "• Conexões: Relações de seguir/seguidor estabelecidas entre Usuários.",
      ],
    },
    {
      id: "servicos",
      icon: Users,
      title: "3. Descrição dos Serviços",
      content: [
        "Perfil de Usuário: Criação de perfil pessoal com foto, nome e informações opcionais, configuração de preferências de privacidade e gerenciamento de credenciais de acesso.",
        "",
        "Localização: Compartilhamento de localização em tempo real, controle sobre a visibilidade, configuração de precisão (exata, aproximada ou apenas cidade) e expiração automática após 24 horas.",
        "",
        "Eventos: Visualização de eventos próximos à sua localização, confirmação de presença e recebimento de notificações.",
        "",
        "Conexões Sociais: Seguir outros usuários, visualizar seguidores, descobrir usuários através de conexões mútuas, bloquear usuários e gerenciar solicitações.",
        "",
        "SuperAdmin: Usuários com privilégios especiais podem criar, editar e excluir eventos.",
      ],
    },
    {
      id: "responsabilidades",
      icon: Shield,
      title: "4. Responsabilidades do Usuário",
      content: [
        "Cadastro e Segurança:",
        "• Fornecer informações verdadeiras, precisas e completas",
        "• Manter sua senha segura e confidencial",
        "• Notificar imediatamente sobre qualquer uso não autorizado",
        "• Ser responsável por todas as atividades em sua conta",
        "",
        "Conduta:",
        "• Utilizar o Aplicativo apenas para fins legais e legítimos",
        "• Respeitar os direitos de outros usuários",
        "• Não compartilhar conteúdo ofensivo, difamatório ou ilegal",
        "• Não realizar atividades fraudulentas ou maliciosas",
        "• Não tentar obter acesso não autorizado aos sistemas",
        "",
        "Localização:",
        "• Compreender que o compartilhamento é opcional e controlado por você",
        "• Respeitar a privacidade de localização de outros usuários",
      ],
    },
    {
      id: "lgpd",
      icon: Shield,
      title: "5. Coleta e Uso de Dados (LGPD/GDPR)",
      content: [
        "O Atlas Unite está em conformidade com a Lei Geral de Proteção de Dados (LGPD) e o Regulamento Geral sobre a Proteção de Dados (GDPR).",
        "",
        "Dados Coletados:",
        "• Dados Pessoais: Nome, e-mail, foto de perfil e informações opcionais",
        "• Localização: Coordenadas GPS, timestamp e histórico (sujeito a expiração)",
        "• Uso: Interações, confirmações de presença e logs de atividades",
        "",
        "Finalidades: Fornecer serviços, personalizar experiência, facilitar conexões, sugerir eventos e garantir segurança.",
        "",
        "Base Legal: Consentimento, execução de contrato, interesse legítimo e obrigação legal.",
        "",
        "Direitos do Titular: Acesso, correção, eliminação, portabilidade, oposição e restrição de dados. Contato: primeatlas.comunic@gmail.com",
        "",
        "Retenção: Localizações expiram em 24 horas; conta mantida enquanto ativa; logs por até 180 dias após encerramento.",
      ],
    },
    {
      id: "privacidade",
      icon: Lock,
      title: "6. Privacidade e Localização",
      content: [
        "Controles de Privacidade:",
        "",
        "Compartilhamento de Localização:",
        "• LIGADO: Sua localização é compartilhada conforme suas configurações",
        "• DESLIGADO: Sua localização não é compartilhada",
        "",
        "Visibilidade:",
        "• PÚBLICA: Qualquer usuário pode visualizar",
        "• APENAS CONEXÕES: Apenas quem você segue ou te segue",
        "• OCULTA: Ninguém pode visualizar",
        "",
        "Precisão:",
        "• EXATA: ~10 metros",
        "• APROXIMADA: ~500 metros",
        "• APENAS CIDADE: ~10 km",
        "",
        "Expiração: Todas as localizações expiram automaticamente após 24 horas.",
        "",
        "Uso de Terceiros: É estritamente proibido coletar, armazenar ou comercializar dados de localização de outros usuários fora do Aplicativo.",
      ],
    },
    {
      id: "conteudo",
      icon: FileText,
      title: "7. Conteúdo do Usuário",
      content: [
        "Propriedade: Você mantém a propriedade de todo o Conteúdo que compartilha. Ao compartilhar, você concede à Empresa uma licença mundial para hospedar, reproduzir e distribuir seu Conteúdo.",
        "",
        "Responsabilidade: Você é o único responsável por todo o Conteúdo que compartilha e por garantir que possui todos os direitos necessários.",
        "",
        "Conteúdo Proibido:",
        "• Conteúdo que viole direitos autorais ou marcas registradas",
        "• Conteúdo ilegal, prejudicial, ameaçador, abusivo ou difamatório",
        "• Conteúdo que promova discriminação, violência ou ódio",
        "• Conteúdo sexualmente explícito ou pornográfico",
        "• Informações pessoais de terceiros sem consentimento",
        "• Malware, vírus ou código destrutivo",
        "",
        "Moderação: A Empresa reserva-se o direito de remover conteúdo que viole estes Termos e suspender contas de usuários que violem repetidamente.",
      ],
    },
    {
      id: "conexoes",
      icon: Users,
      title: "8. Conexões e Interações Sociais",
      content: [
        "Seguir Usuários: Você pode seguir qualquer usuário público e deixar de seguir a qualquer momento.",
        "",
        "Solicitações de Comunidades: O Aplicativo permite que comunidades restritas solicitem a entrada de usuários. Você pode visualizar, aceitar ou recusar solicitações.",
        "",
        "Bloqueio: Você pode bloquear qualquer usuário. Usuários bloqueados não podem ver seu perfil, seguir você ou interagir com seu conteúdo.",
        "",
        "Cutucar (Poke): Funcionalidade para notificar outros usuários. Deve ser usada de forma respeitosa; o abuso pode resultar em suspensão.",
        "",
        "Conduta: Respeite os limites e a privacidade de outros usuários. Não utilize funcionalidades para assediar ou perseguir.",
      ],
    },
    {
      id: "eventos",
      icon: Calendar,
      title: "9. Eventos",
      content: [
        "Criação de Eventos: Apenas usuários com função SUPER_ADMIN podem criar, editar e excluir eventos. Usuários regulares podem visualizar, confirmar presença e cancelar confirmação.",
        "",
        "Confirmação de Presença: Ao confirmar, você autoriza a divulgação de sua participação. Você pode cancelar a qualquer momento antes do evento.",
        "",
        "Responsabilidade: A Empresa não se responsabiliza por danos, lesões ou prejuízos ocorridos durante eventos, cancelamento ou mudanças de data/local, ou interações entre participantes.",
      ],
    },
    {
      id: "propriedade-intelectual",
      icon: Shield,
      title: "10. Propriedade Intelectual",
      content: [
        "Direitos da Empresa: Todos os direitos sobre o Atlas Unite (design, interface, código, marcas, documentação) são de propriedade exclusiva da Empresa.",
        "",
        "Uso Permitido: Licença limitada para acessar e utilizar o Aplicativo em dispositivos pessoais e visualizar Conteúdo dentro do Aplicativo.",
        "",
        "Restrições: Você não pode copiar, modificar, realizar engenharia reversa, utilizar bots ou scrapers, ou remover avisos de direitos autorais.",
      ],
    },
    {
      id: "limitacao",
      icon: AlertCircle,
      title: "11. Limitação de Responsabilidade",
      content: [
        "Sem Garantias: O Aplicativo é fornecido 'COMO ESTÁ', sem garantias de comercialização, adequação a propósito específico, não violação de direitos, disponibilidade ou segurança.",
        "",
        "Exclusão de Responsabilidade: A Empresa não será responsável por danos indiretos, incidentais ou consequenciais; perda de lucros, dados ou negócios; interrupção do serviço; ações de terceiros; uso indevido de localização; ou falhas técnicas.",
        "",
        "Responsabilidade Máxima: A responsabilidade total não excederá o valor pago por você (se houver) nos últimos 12 meses de uso.",
      ],
    },
    {
      id: "suspencao",
      icon: AlertCircle,
      title: "12. Suspensão e Encerramento",
      content: [
        "Pela Empresa: A Empresa pode suspender ou encerrar sua conta a qualquer momento. Motivos incluem violação dos Termos, uso indevido, atividades fraudulentas, contas falsas ou assédio.",
        "",
        "Pelo Usuário: Você pode encerrar sua conta através do Aplicativo ou pelo e-mail primeatlas.comunic@gmail.com.",
        "",
        "Após encerramento: dados pessoais serão excluídos em até 30 dias; conteúdo pode permanecer para fins estatísticos (anonimizado); você não poderá recuperar sua conta.",
      ],
    },
    {
      id: "disposicoes",
      icon: FileText,
      title: "13. Disposições Gerais",
      content: [
        "Modificações: A Empresa pode modificar estes Termos a qualquer momento. Mudanças significativas serão notificadas através do Aplicativo ou e-mail.",
        "",
        "Lei Aplicável: Regido pelas leis da República Federativa do Brasil. Disputas serão resolvidas no foro da comarca de sua residência.",
        "",
        "Idade Mínima: O Atlas Unite é destinado a usuários com 16 anos ou mais.",
        "",
        "Acordo Integral: Estes Termos constituem o acordo integral entre você e a Empresa.",
        "",
        "Renúncia: A falha em exercer qualquer direito não constitui renúncia.",
        "",
        "Separabilidade: Se qualquer disposição for considerada inválida, as demais permanecem em vigor.",
      ],
    },
    {
      id: "contato",
      icon: Mail,
      title: "14. Contato e Suporte",
      content: [
        "Para dúvidas, sugestões, reclamações ou exercício de direitos LGPD/GDPR:",
        "",
        "E-mail: primeatlas.comunic@gmail.com",
        "",
        "Responderemos sua solicitação em até 15 dias úteis.",
      ],
    },
    {
      id: "consentimento",
      icon: Shield,
      title: "15. Consentimento",
      content: [
        "Ao utilizar o Atlas Unite, você declara ter lido, compreendido e concordado com estes Termos de Uso, bem como com nossa Política de Privacidade.",
        "",
        "Você reconhece que:",
        "• Leu e entendeu estes Termos de Uso",
        "• Concorda em cumprir todas as disposições",
        "• Compreende que o compartilhamento de localização é opcional",
        "• Autoriza a coleta e uso de seus dados conforme descrito",
      ],
    },
    {
      id: "responsavel-legal",
      icon: Shield,
      title: "16. Responsável Legal",
      content: [
        "Nos termos da legislação brasileira aplicável, designamos o seguinte responsável legal pelo Atlas Unite:",
        "",
        "Nome: Pedro Mascarenhas do Nascimento",
        "CPF: 201.883.567-03",
        "",
        "O responsável legal pode ser contatado através do e-mail: primeatlas.comunic@gmail.com",
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
              Termos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B35] to-[#FF8B5A] dark:from-[#FF6B35] dark:to-[#FF8B5A]">Uso</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
              Última atualização: 09 de fevereiro de 2026 • Versão 1.0
            </p>
            <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              Leia atentamente estes termos antes de utilizar nossa plataforma.
            </p>
          </motion.div>

          {/* Terms Sections */}
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
