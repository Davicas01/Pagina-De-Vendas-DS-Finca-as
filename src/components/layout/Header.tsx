"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-black/90 backdrop-blur-xl text-white border-b border-yellow-400/20">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="text-2xl font-black heading-modern">
            <span className="text-white">DS </span>
            <span className="gradient-text">CHECKOUT</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#recursos" className="text-white hover:text-yellow-400 transition-all duration-300 font-semibold text-modern relative group">
            Recursos
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#beneficios" className="text-white hover:text-yellow-400 transition-all duration-300 font-semibold text-modern relative group">
            Benefícios
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#acesso-antecipado"
            className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-xl font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl heading-modern"
          >
            Acesso Antecipado
          </a>
        </nav>        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white p-2 rounded-xl hover:bg-yellow-400/10 transition-all duration-300 border border-transparent hover:border-yellow-400/30"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          <svg className="h-6 w-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-yellow-400/20">
          <div className="container mx-auto px-6 py-6 flex flex-col space-y-4">
            <a 
              href="#recursos" 
              className="text-white hover:text-yellow-400 transition-all duration-300 py-3 font-semibold text-modern border-b border-white/10 last:border-b-0"
              onClick={() => setIsMenuOpen(false)}
            >
              Recursos
            </a>
            <a 
              href="#beneficios" 
              className="text-white hover:text-yellow-400 transition-all duration-300 py-3 font-semibold text-modern border-b border-white/10 last:border-b-0"
              onClick={() => setIsMenuOpen(false)}
            >
              Benefícios
            </a>
            <a
              href="#acesso-antecipado"
              className="px-6 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-xl text-center font-bold mt-4 heading-modern hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Acesso Antecipado
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
