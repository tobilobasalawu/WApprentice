// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // Temporarily disable ESLint
  },
  typescript: {
    ignoreBuildErrors: true, // Temporarily disable TypeScript errors
  },
  experimental: {
    serverComponentsExternalPackages: ['firebase-admin'], // For Firebase
    esmExternals: 'loose', // Helps with some module issues
  },

};

export default nextConfig;
