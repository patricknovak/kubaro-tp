import type { NextConfig } from 'next';

const isGitHubPages = process.env.GITHUB_PAGES === 'true';
const siteBasePath = isGitHubPages ? '/kubaro-tp' : '';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: siteBasePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: siteBasePath,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'wc-con.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
};

export default nextConfig;
