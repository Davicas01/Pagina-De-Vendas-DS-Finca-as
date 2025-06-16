"use client";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black to-gray-900 py-20 border-t border-yellow-400/20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-400/3 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8 text-center relative z-10">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 heading-modern">
            DS <span className="gradient-text">CHECKOUT</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-lg leading-relaxed text-modern">
            Transformando a forma como você vende online
          </p>
        </div>

        {/* Decorative line */}
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto mb-12 rounded-full"></div>

        {/* Copyright */}
        <div className="glass p-6 rounded-2xl border border-yellow-400/20 max-w-2xl mx-auto">
          <p className="text-white/70 text-lg font-medium text-modern">
            &copy; {new Date().getFullYear()} <span className="gradient-text font-bold">DS AGENCY DEV</span> • Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
