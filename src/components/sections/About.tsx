export default function About() {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mb-6">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
            SOBRE O DS FINANÇAS
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6">
            Transforme sua relação com o 
            <span className="relative inline-block mx-3">
              <span className="relative z-10 text-black">dinheiro</span>
              <div className="absolute bottom-2 left-0 w-full h-4 bg-yellow-400/30 -skew-x-12"></div>
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Uma plataforma completa que simplifica o controle financeiro pessoal, 
            oferecendo ferramentas intuitivas para organizar suas finanças de forma eficiente.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Controle Simples</h3>
              <p className="text-gray-600">Interface intuitiva que torna o controle financeiro acessível para todos.</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Automação Inteligente</h3>
              <p className="text-gray-600">Automatize tarefas repetitivas e foque no que realmente importa.</p>
            </div>

            <div className="p-6 bg-gray-50 rounded-2xl">
              <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">100% Seguro</h3>
              <p className="text-gray-600">Seus dados financeiros protegidos com a mais alta segurança.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
