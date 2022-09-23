/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["leonardo.osnova.io"],
  },
  swcMinify: true,
};

module.exports = nextConfig;
