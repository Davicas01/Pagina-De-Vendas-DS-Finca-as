'use client'

import { useState } from 'react'

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email) {
      alert('Por favor, preencha pelo menos o nome e e-mail.')
      return
    }

    setIsSubmitting(true)
    
    // Simular envio (aqui você pode integrar com sua API)
    setTimeout(() => {
      setSubmitted(true)
      setIsSubmitting(false)
      setFormData({ name: '', phone: '', email: '' })
    }, 1000)
  }

  const scrollToEarlyAccess = () => {
    document.getElementById('early-access')?.scrollIntoView({ 
      behavior: 'smooth' 
    })
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-black to-yellow-900/30"></div>
      
      {/* Geometric background elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-yellow-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-yellow-800/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Header/Navigation */}
        <header className="border-b border-gray-800/50 backdrop-blur-sm">
          <div className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between">              <div className="text-2xl font-bold text-white">
                DS <span className="text-yellow-400">FINANÇAS</span>
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="#features" className="text-gray-300 hover:text-white transition-colors">Recursos</a>
                <a href="#benefits" className="text-gray-300 hover:text-white transition-colors">Benefícios</a>
                <a href="#early-access" className="text-gray-300 hover:text-white transition-colors">Acesso Antecipado</a>
              </div>
            </div>
          </div>
        </header>        <div className="container mx-auto px-6 py-20">          {/* Ecosystem Badge */}
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-gray-800/50 to-gray-700/30 border border-gray-600/30 text-gray-300 text-sm rounded-full">
              🏢 Desenvolvido por <span className="text-blue-400 font-semibold">DS AGENCY DEV</span>
            </div>
          </div>

          {/* Hero Section */}
          <div className="text-center max-w-4xl mx-auto mb-20">            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              DS
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600"> FINANÇAS</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Chatbot financeiro inteligente. Zero complicações. Controle total.
            </p>              <button 
              onClick={scrollToEarlyAccess}
              className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-500 hover:to-yellow-600 text-black px-10 py-4 rounded-xl font-semibold transition-all duration-300 shadow-2xl shadow-yellow-600/25 transform hover:scale-105 border border-yellow-500/30"
            >
              🚀 Acesso Antecipado
            </button>
          </div>          {/* Features Section */}
          <section id="features" className="mb-20">
            <div className="text-center mb-12">              <h2 className="text-3xl font-bold text-white mb-4">
                <span className="text-yellow-400">Principais</span> Recursos
              </h2>
            </div>
              <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50">
                <div className="text-3xl mb-4">🤖</div>
                <h3 className="text-lg font-bold text-white mb-3">Chatbot IA</h3>
                <p className="text-gray-400 text-sm">
                  Assistente financeiro com inteligência artificial avançada.
                </p>
              </div>
              
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50">
                <div className="text-3xl mb-4">�</div>
                <h3 className="text-lg font-bold text-white mb-3">Análises</h3>
                <p className="text-gray-400 text-sm">
                  Relatórios detalhados e insights financeiros personalizados.
                </p>
              </div>
              
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-700/50">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="text-lg font-bold text-white mb-3">Gestão</h3>
                <p className="text-gray-400 text-sm">
                  Controle completo das suas finanças pessoais e empresariais.
                </p>
              </div>
            </div>
          </section>          {/* Early Access Form */}
          <section id="early-access" className="mb-20">
            <div className="max-w-2xl mx-auto">
              <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-700/50">
                {submitted ? (
                  <div className="text-center">
                    <div className="text-6xl mb-4">✅</div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Cadastro realizado com sucesso!
                    </h3>                    <p className="text-gray-400 mb-6">
                      Você será notificado quando o DS FINANÇAS estiver disponível.
                    </p>                    <button 
                      onClick={() => setSubmitted(false)}
                      className="text-yellow-400 hover:text-yellow-300 transition-colors"
                    >
                      Fazer novo cadastro
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        🚀 Acesso Antecipado
                      </h3>
                      <p className="text-gray-400">
                        Seja notificado quando estiver disponível
                      </p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Nome *"
                          required
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="WhatsApp"
                          className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        />
                      </div>
                        <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="E-mail *"
                        required
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      />
                        <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-500 hover:to-yellow-600 disabled:from-gray-600 disabled:to-gray-700 text-black px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                      >
                        {isSubmitting ? '📤 Enviando...' : '📧 Quero ser notificado!'}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </section>{/* Footer */}
          <footer className="text-center py-8 border-t border-gray-800/50">            <div className="text-2xl font-bold text-white mb-2">
              DS <span className="text-yellow-400">FINANÇAS</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Revolucionando a gestão financeira com inteligência artificial
            </p>
            <p className="text-gray-500 text-xs">
              © 2025 DS AGENCY DEV • Todos os direitos reservados
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}
