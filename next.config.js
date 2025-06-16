/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração para GitHub Pages
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  
  // Configuração estável e otimizada
  reactStrictMode: false,
  swcMinify: true,
  
  // Configurações de otimização
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Webpack otimizado
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: ['**/node_modules', '**/.next'],
      }
    }
    
    return config
  },
  
  // Configurações experimentais desabilitadas para estabilidade
  experimental: {
    optimizeCss: false,
  },
}

module.exports = nextConfig
