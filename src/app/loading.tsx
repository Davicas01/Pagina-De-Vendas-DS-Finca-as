export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-gray-300 border-t-yellow-400 rounded-full animate-spin mx-auto mb-4"></div>
        </div>
        <p className="text-gray-600 text-lg font-medium">Carregando DS-Finanças...</p>
        <p className="text-gray-400 text-sm mt-2">Preparando sua experiência financeira</p>
      </div>
    </div>
  )
}
