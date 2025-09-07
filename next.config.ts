import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "neetcode.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "leetcode.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;