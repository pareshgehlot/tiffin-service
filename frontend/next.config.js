/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/tiffin-service',
  assetPrefix: '/tiffin-service/',
  trailingSlash: true,
  reactStrictMode: true
};

module.exports = nextConfig;
