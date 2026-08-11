import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@fundable/sdk": path.resolve(
        __dirname,
        "../stellar_client_core/packages/sdk/src/index.ts"
      ),
    };
    return config;
  },
};

export default nextConfig;
