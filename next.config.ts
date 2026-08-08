import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "i.ytimg.com" },
    ],
  },
  async redirects() {
    return [
      {
        source: "/demo",
        destination: "/demos",
        permanent: true,
      },
      {
        source: "/demos/threadwave",
        destination: "/demos",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
