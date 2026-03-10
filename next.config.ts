import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.GITHUB_PAGES === 'true' ? '/wc-con-platform' : '',
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'wc-con.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
};

export default nextConfig;
