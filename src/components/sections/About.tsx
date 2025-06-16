"use client";

export default function About() {
  const benefits = [
    {
      title: "Conversões Mais Altas",
      description: "Interface otimizada que reduz abandono de carrinho e aumenta suas vendas significativamente.",
      icon: "�",
      stats: "+47% conversão"
    },
    {
      title: "Economia Real",
      description: "Elimine taxas desnecessárias e mantenha mais lucro com nossa solução transparente.",
      icon: "💎",
      stats: "Zero taxas ocultas"
    },
    {
      title: "Implementação Rápida",
      description: "Configure em minutos e comece a vender imediatamente com nossa documentação simples.",
      icon: "⚡",
      stats: "5 min setup"
    },
    {
      title: "Suporte Dedicado",
      description: "Equipe especializada pronta para ajudar você a maximizar seus resultados.",
      icon: "🛡️",
      stats: "24/7 suporte"
    }
  ];

  return (
    <section id="beneficios" className="py-24 md:py-32 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-yellow-400/10 text-yellow-400 rounded-full text-sm font-bold heading-modern border border-yellow-400/20">
              BENEFÍCIOS COMPROVADOS
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 heading-modern tracking-tight">
            Benefícios <span className="gradient-text">Reais</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed text-modern">
            Veja como o DS Checkout pode transformar seu negócio e multiplicar seus resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group card-modern p-8 hover:scale-105 transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="flex items-start space-x-6 relative z-10">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <div className="text-yellow-400 font-bold text-sm heading-modern">
                    {benefit.stats}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white heading-modern">{benefit.title}</h3>
                  <p className="text-white/70 leading-relaxed text-lg text-modern">{benefit.description}</p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-yellow-400/5 rounded-full blur-xl group-hover:bg-yellow-400/10 transition-colors duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
