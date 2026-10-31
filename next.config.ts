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
  // Hide the floating Next.js dev-tools indicator (dark circle with the "N"
  // logo, bottom-left): it overlapped Library chapter cards in the preview.
  // Compile status is still visible in dev.log, so nothing is lost.
  devIndicators: false,
};

export default nextConfig;
