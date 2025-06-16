'use client';

import { useState } from 'react';

export default function CTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email) {
      setMessage("Por favor, preencha todos os campos.");
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      setMessage("Cadastro realizado! Você será notificado quando estiver disponível.");
      setName("");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="acesso-antecipado" className="py-20 md:py-32 bg-gradient-to-br from-black to-gray-900">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <div className="inline-flex items-center px-4 py-2 bg-yellow-400/20 rounded-full text-sm font-medium text-yellow-400 mb-6">
            <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
            ACESSO ANTECIPADO
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Seja um dos <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">primeiros</span>
          </h2>
          
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-12">
            Cadastre-se agora e tenha acesso exclusivo ao DS Finanças antes do lançamento oficial.
          </p>

          {/* Form */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Seu nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 backdrop-blur-sm"
                required
              />
              
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/60 focus:outline-none focus:border-yellow-400 backdrop-blur-sm"
                required
              />
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-xl text-lg font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 disabled:opacity-50"
              >
                {isSubmitting ? "Cadastrando..." : "Garantir Acesso Antecipado"}
              </button>
            </form>
            
            {message && (
              <p className="mt-4 text-green-400 font-medium">{message}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
