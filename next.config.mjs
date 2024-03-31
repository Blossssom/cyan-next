/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: "export",
  distDir: "dist",
  images: { unoptimized: true },

  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "photocyan.com",
  //       port: "8000",
  //     },
  //     {
  //       protocol: "http",
  //       hostname: "localhost",
  //     },
  //   ],
  // },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/:path*",
  //       destination: "https://photocyan.com:8000/:path*",
  //     },
  //   ];
  // },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
