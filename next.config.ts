import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  turbopack: {
    root: __dirname,
    // NOTE: dev.log / *.log are gitignored — Turbopack's watcher respects
    // .gitignore in Next 16, so the tee'd dev.log can't trigger Fast Refresh
    // loops (the old `watchOptions.ignore` key was removed in 16.1 — it was
    // rejected as an unrecognized option on every startup).
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
