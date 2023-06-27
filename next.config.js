/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["avatars.githubusercontent.com", "lh3.googleusercontent.com"],
  },
  modularizeImports: {
    "react-icons": {
      transform: "react-icons/{{member}}",
    },
  },
};

module.exports = nextConfig;
