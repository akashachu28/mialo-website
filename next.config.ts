import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  compress: true, // Enable gzip compression
  experimental: {
    optimizePackageImports: ['lucide-react'], // Tree-shake icons
  },
};

export default nextConfig;
