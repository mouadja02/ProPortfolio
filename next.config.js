/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/MJEngi' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/MJEngi' : '',
}

module.exports = nextConfig 