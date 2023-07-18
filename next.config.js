/** @type {import('next').NextConfig} */

const nextConfig = {
  
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    nextScriptWorkers: true,
  },
  fontLoaders: [ 
    { loader: "@next/font/google", options: { subsets: ["latin"] } },
  ],
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.dummyjson.com',
        port: '',
        pathname: '/data/**',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig

