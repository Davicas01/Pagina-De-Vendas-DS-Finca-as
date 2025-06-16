"use client";

import { useState } from "react";

export default function CTA() {
  const [name, setName] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Por favor, preencha todos os campos obrigatórios.");
      setMessageType("error");
      return;
    }

    setIsSubmitting(true);
    setMessage("");
    
    // Simulando envio para API
    setTimeout(() => {
      setMessage("Cadastro realizado! Você será notificado quando estiver disponível.");
      setMessageType("success");
      setName("");
      setWhatsapp("");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };  return (
    <section id="acesso-antecipado" className="py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-yellow-400/3 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="container mx-auto px-6 md:px-8 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 bg-yellow-400/10 text-yellow-400 rounded-full text-sm font-bold heading-modern border border-yellow-400/20 animate-glow">
                ACESSO EXCLUSIVO
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 heading-modern tracking-tight">
              🚀 <span className="gradient-text">Acesso Antecipado</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-white/80 mb-16 max-w-3xl mx-auto leading-relaxed text-modern">
              Seja notificado quando estiver disponível
            </p>
          </div>
          
          <div className="glass p-12 rounded-3xl border border-yellow-400/30 max-w-3xl mx-auto shadow-2xl backdrop-blur-xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              {message && (
                <div className={`p-6 rounded-2xl ${
                  messageType === "success" 
                    ? "bg-yellow-400/20 text-yellow-400 border border-yellow-400/40" 
                    : "bg-red-400/20 text-red-400 border border-red-400/40"
                } text-lg font-semibold text-modern animate-fade-in-up`}>
                  {message}
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="Nome *" 
                  className="w-full px-6 py-5 bg-white/5 border-2 border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 focus:bg-white/10 transition-all duration-300 font-medium text-modern backdrop-blur-sm" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  disabled={isSubmitting}
                />
                <input 
                  type="text" 
                  placeholder="WhatsApp" 
                  className="w-full px-6 py-5 bg-white/5 border-2 border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 focus:bg-white/10 transition-all duration-300 font-medium text-modern backdrop-blur-sm" 
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  disabled={isSubmitting}
                />
              </div>
              
              <input 
                type="email" 
                placeholder="E-mail *" 
                className="w-full px-6 py-5 bg-white/5 border-2 border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-yellow-400 focus:bg-white/10 transition-all duration-300 font-medium text-modern backdrop-blur-sm" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
              
              <button 
                type="submit" 
                className="w-full px-10 py-6 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-black rounded-2xl font-black hover:from-yellow-300 hover:via-yellow-400 hover:to-yellow-300 transition-all duration-500 disabled:opacity-70 text-xl shadow-2xl hover:shadow-yellow-400/20 transform hover:scale-105 heading-modern animate-glow"
                disabled={isSubmitting}
              >
                {isSubmitting ? "📧 Enviando..." : "📢 Quero ser notificado!"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
