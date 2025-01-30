// next.config.js
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    serverComponentsExternalPackages: ['firebase-admin'],
    esmExternals: 'loose',
  },
  // Add these settings to enforce HTTPS and non-www domain
  trailingSlash: true, // Match your URL structure
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          }
        ],
      },
    ];
  },
  // Remove www redirects
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.wapprentice.app', // Catch www requests
          },
        ],
        destination: 'https://wapprentice.app/:path*', // Redirect to non-www
        permanent: true,
      },
    ];
  },
};

export default nextConfig;