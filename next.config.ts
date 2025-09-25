import type { NextConfig } from "next";
import i18nConfig from "./next-i18next.config";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@mdxeditor/editor"],

  // ✅ i18n harus punya typing benar
  i18n: i18nConfig.i18n,

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn-icons-png.flaticon.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  webpack: (config) => {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

export default nextConfig;
