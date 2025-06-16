export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900/50 to-black"></div>
        <div className="absolute top-20 right-20 w-4 h-4 bg-yellow-400 rounded-full opacity-80"></div>
        <div className="absolute top-40 left-20 w-3 h-3 bg-yellow-400 rounded-full opacity-60"></div>
        <div className="absolute bottom-32 right-32 w-2 h-2 bg-yellow-400 rounded-full opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-8 max-w-7xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white mb-8 border border-white/20">
          <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
          EM BREVE - ACESSO ANTECIPADO
        </div>
        
        {/* Title */}
        <div className="space-y-4 mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white leading-none tracking-tight">
            DS <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">FINANÇAS</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-yellow-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Description */}
        <p className="text-xl md:text-3xl lg:text-4xl text-white/90 max-w-5xl mx-auto leading-relaxed font-medium">
          Controle financeiro <span className="text-yellow-400 font-bold">simples e inteligente</span> para sua vida.
        </p>
        
        {/* CTA Button */}
        <div className="pt-8">
          <a 
            href="#acesso-antecipado" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-2xl text-xl font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 transform hover:scale-105"
          >
            Garantir Acesso Antecipado
            <svg className="ml-2 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
