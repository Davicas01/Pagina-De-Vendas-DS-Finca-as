export default function Features() {
  const features = [
    {
      title: "Controle de Gastos",
      description: "Acompanhe todos os seus gastos em tempo real com categorização automática.",
      icon: "💰"
    },
    {
      title: "Metas Financeiras",
      description: "Defina e acompanhe suas metas de economia e investimento.",
      icon: "🎯"
    },
    {
      title: "Relatórios Visuais",
      description: "Gráficos e relatórios claros sobre sua situação financeira.",
      icon: "📊"
    },
    {
      title: "Lembretes Inteligentes",
      description: "Nunca mais esqueça de pagar uma conta importante.",
      icon: "⏰"
    },
    {
      title: "Análise de Padrões",
      description: "Identifique padrões nos seus gastos e otimize seu orçamento.",
      icon: "📈"
    },
    {
      title: "Sincronização Multi-dispositivo",
      description: "Acesse seus dados em qualquer dispositivo, a qualquer hora.",
      icon: "📱"
    }
  ];

  return (
    <section id="recursos" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-white mb-6">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
            RECURSOS PRINCIPAIS
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Tudo que você precisa para
            <span className="relative inline-block mx-3">
              <span className="relative z-10 text-white">organizar</span>
              <div className="absolute bottom-2 left-0 w-full h-4 bg-yellow-400/30 -skew-x-12"></div>
            </span>
            suas finanças
          </h2>
          
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Ferramentas poderosas e simples para você ter controle total sobre seu dinheiro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-8 bg-white/5 rounded-3xl hover:bg-white/10 transition-all duration-300 border border-white/10 hover:border-yellow-400/50 hover:scale-105"
            >
              <div className="text-4xl mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
