export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl font-bold text-gray-600">404</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Página não encontrada</h2>
        <p className="text-gray-600 mb-6">
          A página que você está procurando não existe.
        </p>
        <a
          href="/"
          className="inline-flex items-center px-6 py-3 bg-black text-yellow-400 rounded-xl font-semibold hover:bg-gray-900 transition-colors"
        >
          Voltar ao início
        </a>
      </div>
    </div>
  )
}
