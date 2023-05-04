/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    secret: "secret",
  },
};

module.exports = nextConfig;
