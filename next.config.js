/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["leonardo.osnova.io"],
  },
  swcMinify: true,
};

module.exports = nextConfig;
