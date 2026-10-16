import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  turbopack: {
    root: __dirname,
    // dev.log is written on every request by `bun run dev` (tee) — watching it
    // would trigger a Fast Refresh loop that wipes client state mid-session.
    watchOptions: {
      ignore: ["/dev.log/**", "dev.log", "/auto-library/**"],
    },
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
