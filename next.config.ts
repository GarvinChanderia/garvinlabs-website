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
        destination: "/demos/threadwave",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
