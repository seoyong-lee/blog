/** @type {import('next').NextConfig} */

const removeImports = require("next-remove-imports");

module.exports = removeImports()({
  webpack: function (config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "firebasestorage.googleapis.com",
      },
    ],
  },
});

// const nextConfig = {
//   reactStrictMode: true,
//   images: {
//     remotePatterns: [
//       {
//         hostname: "firebasestorage.googleapis.com",
//       },
//     ],
//   },
// };

// module.exports = nextConfig;
