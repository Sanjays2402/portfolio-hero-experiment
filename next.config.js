/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // For username.github.io repositories, no basePath needed
  // basePath: process.env.NODE_ENV === 'production' ? '/sanjays2402' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/sanjays2402/' : '',
}

module.exports = nextConfig