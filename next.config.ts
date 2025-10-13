process.env.OPEN_TELEMETRY_DISABLED = '1'

import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'i.postimg.cc', port: '', pathname: '/**' },
      { protocol: 'https', hostname: 'picsum.photos', port: '', pathname: '/**' },
    ],
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
}

export default nextConfig
