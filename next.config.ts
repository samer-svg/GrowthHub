import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "leetcode.com",
      },
      {
        protocol: "https",
        hostname: "neetcode.io",
      },
    ],
  },
};

export default nextConfig;
