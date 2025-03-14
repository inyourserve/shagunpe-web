// /** @type {import('next').NextConfig} */
// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "shagunpe.in",
//         pathname: "/asset/**",
//       },
//       {
//         protocol: "https",
//         hostname: "bloggervikash.com",
//         pathname: "/wp-content/uploads/**",
//       },
//       {
//         protocol: "https",
//         hostname: "img.freepik.com",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "api.dicebear.com",
//         pathname: "/**",
//       },
      
//       {
//         protocol: "https",
//         hostname: "sjc.microlink.io",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "images.unsplash.com",
//         pathname: "/photo-**",
//       },
//     ],
//   },
// }

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "shagunpe.in",
        pathname: "/asset/**",
      },
      {
        protocol: "https",
        hostname: "bloggervikash.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.dicebear.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "sjc.microlink.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/photo-**",
      },
    ],
  },
  env: {
    VAR_ORIGINAL_PATHNAME: process.env.VAR_ORIGINAL_PATHNAME || "/", // ✅ Fix missing variable issue
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
