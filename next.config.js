/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configuração estável e otimizada
  reactStrictMode: false, // Desabilitar para evitar re-renders duplos
  swcMinify: true,
  
  // Configurações de otimização
  compiler: {
    removeConsole: false,
  },
  
  // Webpack otimizado para desenvolvimento local
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Configurações específicas para desenvolvimento
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
        ignored: ['**/node_modules', '**/.next'],
      }
      
      // Otimizar carregamento
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
          },
        },
      }
    }
    
    return config
  },
  
  // Headers otimizados para desenvolvimento
  async headers() {
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'no-cache, no-store, must-revalidate',
            },
            {
              key: 'Pragma',
              value: 'no-cache',
            },
            {
              key: 'Expires',
              value: '0',
            },
          ],
        },
      ]
    }
    return []
  },
  
  // Configurações experimentais desabilitadas para estabilidade
  experimental: {
    optimizeCss: false,
    turbo: undefined,
  },
  
  // Configurações de output para garantir compatibilidade
  output: 'standalone',
}

module.exports = nextConfig
