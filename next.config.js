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
  env: {
    NEXT_PUBLIC_FIREBASE_API_KEY: "AIzaSyC9r_UDT0Kxojpa97mRl351KgSf1RTMGB0",
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: "blog-4c582.firebaseapp.com",
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: "blog-4c582",
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: "blog-4c582.appspot.com",
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: "499047306375",
    NEXT_PUBLIC_FIREBASE_APP_ID: "1:499047306375:web:f021d61efdb11ac80e1422",
    GENERATE_SOURCEMAP: false,
  },
});
