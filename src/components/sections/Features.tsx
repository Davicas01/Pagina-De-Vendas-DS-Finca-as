"use client";

export default function Features() {
  const features = [
    {
      title: "Performance",
      description: "Checkout otimizado para máxima velocidade e conversão.",
      icon: "🚀",
      gradient: "from-yellow-400 to-yellow-600"
    },
    {
      title: "Zero Taxas",
      description: "Transparência total. Sem taxas escondidas.",
      icon: "💰",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Controle",
      description: "Customização completa. Suas regras, sem limites.",
      icon: "⚙️",
      gradient: "from-yellow-300 to-yellow-500"
    }
  ];

  return (
    <section id="recursos" className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/3 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-6 py-3 bg-yellow-400/10 text-yellow-400 rounded-full text-sm font-bold heading-modern border border-yellow-400/20">
              PRINCIPAIS RECURSOS
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 heading-modern tracking-tight">
            Principais <span className="gradient-text">Recursos</span>
          </h2>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed text-modern">
            Descubra as funcionalidades que fazem do DS Checkout a escolha perfeita para seu negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group card-modern p-8 hover:scale-105 transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white heading-modern">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed text-lg text-modern">{feature.description}</p>
              </div>

              {/* Decorative border */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
