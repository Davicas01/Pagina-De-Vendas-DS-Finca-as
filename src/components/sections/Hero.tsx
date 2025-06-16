"use client";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black"></div>
        
        {/* Geometric patterns */}
        <div className="absolute top-20 right-20 w-4 h-4 bg-yellow-400 rounded-full opacity-80 animate-float"></div>
        <div className="absolute top-40 left-20 w-3 h-3 bg-yellow-400 rounded-full opacity-60 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 right-40 w-6 h-6 bg-yellow-400 rounded-full opacity-70 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-60 left-60 w-2 h-2 bg-yellow-400 rounded-full opacity-50 animate-float" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-1/2 left-10 w-3 h-3 bg-yellow-400 rounded-full opacity-40 animate-float" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 right-10 w-5 h-5 bg-yellow-400 rounded-full opacity-60 animate-float" style={{animationDelay: '0.8s'}}></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="container px-6 md:px-8 text-center relative z-10 max-w-6xl mx-auto">
        <div className="space-y-12 animate-fade-in-up">
          {/* Enhanced Badge */}
          <div className="inline-flex items-center px-8 py-4 glass rounded-full text-sm font-semibold text-white mb-8 border border-yellow-400/30 backdrop-blur-xl animate-glow">
            <span className="w-3 h-3 bg-yellow-400 rounded-full mr-3 animate-pulse"></span>
            Desenvolvido por <span className="gradient-text ml-2 font-bold">DS AGENCY DEV</span>
          </div>

          {/* Main Title */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none text-white heading-modern tracking-tighter">
              DS <span className="gradient-text animate-glow">CHECKOUT</span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Enhanced Description */}
          <p className="text-xl md:text-3xl lg:text-4xl text-white/90 max-w-5xl mx-auto leading-relaxed font-medium text-modern">
            Checkout próprio. <span className="text-yellow-400 font-bold">Zero taxas escondidas.</span> Controle total.
          </p>
          
          {/* CTA Button */}
          <div className="flex justify-center pt-8">
            <a 
              href="#acesso-antecipado" 
              className="group inline-flex items-center px-12 py-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black rounded-2xl font-black text-xl shadow-2xl hover:shadow-yellow-400/20 transition-all duration-500 transform hover:scale-110 heading-modern animate-glow"
            >
              🚀 <span className="ml-3">Acesso Antecipado</span>
              <svg className="ml-3 w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
