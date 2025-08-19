/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    ignoreBuildErrors: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/sanjays2402' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/sanjays2402/' : '',
}

module.exports = nextConfig