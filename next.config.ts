import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // distDir: 'build',
  output: 'export',
  // basePath: '/TIP',
  // assetPrefix: '/TIP/',
  trailingSlash: true,
  images:{
    unoptimized:true
  }
};

export default nextConfig;
