import Link from "next/link";
import { Mail } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/logos/icon.png"
                  alt="Atlas Unite"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Não é sobre estar online. É sobre estar presente.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-900 dark:text-white">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/sobre"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#FF6B35] dark:hover:text-[#FF8B5A] transition-colors"
                >
                  O que é
                </Link>
              </li>
              <li>
                <Link
                  href="/como-funciona"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#FF6B35] dark:hover:text-[#FF8B5A] transition-colors"
                >
                  Como funciona
                </Link>
              </li>
              <li>
                <Link
                  href="/planos"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#FF6B35] dark:hover:text-[#FF8B5A] transition-colors"
                >
                  Planos
                </Link>
              </li>
              <li>
                <Link
                  href="/contato"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-[#FF6B35] dark:hover:text-[#FF8B5A] transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-900 dark:text-white">
              Contato
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:primeatlas.comunic@gmail.com"
                  className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-[#FF6B35] dark:hover:text-[#FF8B5A] transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  primeatlas.comunic@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Atlas Unite. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
