import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/home", destination: "/" },
      { source: "/terms-of-service", destination: "/legal" },
      { source: "/contact", destination: "/#contact" },
    ].map((route) => ({
      ...route,
      permanent: true,
      has: [{ type: "host" as const, value: "(www\\.)?hossainconsulting\\.com" }],
    }));
  },
};

export default nextConfig;
