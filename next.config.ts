import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
