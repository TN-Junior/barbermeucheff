import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Adicione seus domínios
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
