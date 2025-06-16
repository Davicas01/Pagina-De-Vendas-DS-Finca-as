'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-black text-white">
              DS <span className="text-yellow-400">FINANÇAS</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#sobre" className="text-white hover:text-yellow-400 transition-colors font-medium">
              Sobre
            </a>
            <a href="#recursos" className="text-white hover:text-yellow-400 transition-colors font-medium">
              Recursos
            </a>
            <a href="#beneficios" className="text-white hover:text-yellow-400 transition-colors font-medium">
              Benefícios
            </a>
            <a href="#acesso-antecipado" className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-xl font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all">
              Acesso Antecipado
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col space-y-3">
              <a href="#sobre" className="text-white hover:text-yellow-400 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Sobre
              </a>
              <a href="#recursos" className="text-white hover:text-yellow-400 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Recursos
              </a>
              <a href="#beneficios" className="text-white hover:text-yellow-400 transition-colors py-2" onClick={() => setIsMenuOpen(false)}>
                Benefícios
              </a>
              <a href="#acesso-antecipado" className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-xl text-center font-bold mt-4" onClick={() => setIsMenuOpen(false)}>
                Acesso Antecipado
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
