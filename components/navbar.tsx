"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "O que é", href: "/sobre" },
    { name: "Como funciona", href: "/como-funciona" },
    { name: "Planos", href: "/planos" },
    { name: "Comunidades", href: "/comunidades" },
    { name: "Missão", href: "/missao" },
    { name: "Sócios", href: "/socios" },
    { name: "Contato", href: "/contato" },
  ];

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-black backdrop-blur-md border-b border-gray-800 shadow-sm"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative w-10 h-10">
                <Image
                  src="/logos/icon.png"
                  alt="Atlas Unite"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors relative",
                      isActive
                        ? "text-[#FF6B35]"
                        : "text-gray-300 hover:text-white"
                    )}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-gradient-to-r from-[#FF6B35] to-[#FF8B5A]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
              <Link
                href="/contato"
                className="px-5 py-2.5 text-sm font-medium bg-gradient-to-r from-[#FF6B35] to-[#FF8B5A] hover:from-[#E55A2B] hover:to-[#FF6B35] text-white rounded-full shadow-lg shadow-[#FF6B35]/20 hover:shadow-xl hover:shadow-[#FF6B35]/30 transition-all"
              >
                Entre no movimento
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white dark:bg-black z-50 md:hidden shadow-2xl overflow-y-auto"
            >
              <div className="p-6">
                {/* Close button */}
                <div className="flex justify-end mb-8">
                  <button
                    className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Logo */}
                <div className="mb-8 pb-6 border-b border-gray-200 dark:border-gray-800">
                  <Link
                    href="/"
                    className="flex items-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="relative w-12 h-12">
                      <Image
                        src="/logos/icon.png"
                        alt="Atlas Unite"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </Link>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col space-y-2">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "text-lg font-medium transition-colors py-3 px-4 rounded-lg",
                          isActive
                            ? "text-[#FF6B35] dark:text-[#FF8B5A] bg-[#FFE8DC] dark:bg-[#FF6B35]/10"
                            : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-900"
                        )}
                      >
                        {link.name}
                      </Link>
                    );
                  })}
                </div>

                {/* CTA Button */}
                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
                  <Link
                    href="/contato"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full px-5 py-3 text-center text-sm font-medium bg-gradient-to-r from-[#FF6B35] to-[#FF8B5A] text-white rounded-full shadow-lg shadow-[#FF6B35]/20"
                  >
                    Entre no movimento
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
