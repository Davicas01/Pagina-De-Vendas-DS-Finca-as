"use client";

export default function Problems() {
  const problems = [
    {
      title: "Desorganização Financeira",
      description: "Perder o controle de onde o dinheiro está indo e não saber exatamente quanto está gastando em cada categoria.",
    },
    {
      title: "Dificuldade com Planejamento",
      description: "Não conseguir visualizar o futuro financeiro e planejar gastos ou economias de forma eficiente.",
    },
    {
      title: "Falta de Disciplina para Poupar",
      description: "Dificuldade em manter o hábito de economizar regularmente e separar parte do dinheiro para objetivos futuros.",
    },
    {
      title: "Jargões Complicados",
      description: "Sentir-se intimidado pela linguagem técnica e complexa que geralmente acompanha assuntos financeiros.",
    },
    {
      title: "Contas Esquecidas",
      description: "Deixar de pagar contas por esquecimento ou falta de um sistema organizado de alertas.",
    },
    {
      title: "Decisões Emocionais",
      description: "Tomar decisões financeiras baseadas em impulsos ou emoções, sem considerar o impacto no longo prazo.",
    },
  ];
  return (
    <section id="problems" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-6">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
            Problemas que Resolvemos
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            Diga adeus aos
            <span className="relative inline-block mx-3">
              <span className="relative z-10 text-black">problemas</span>
              <div className="absolute bottom-2 left-0 w-full h-4 bg-yellow-400/30 -skew-x-12"></div>
            </span>
            financeiros
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            O DS-Finanças foi desenvolvido para superar os desafios mais comuns 
            no gerenciamento financeiro pessoal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={problem.title}
              className="group p-8 bg-gray-50 rounded-3xl hover:bg-gray-100 transition-all duration-300 border border-gray-200 hover:border-yellow-400/50 hover:scale-105"
            >
              <div className="mb-6">
                <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center mb-4 group-hover:bg-gray-900 transition-colors">
                  <svg 
                    className="w-6 h-6 text-yellow-400" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-black mb-3">{problem.title}</h3>
                <p className="text-gray-600 leading-relaxed">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
