/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URL: process.env.URL,
  },
  images: {
    deviceSizes: [380, 640, 768, 1024, 1280, 1920, 2048, 3840],
  },
}

module.exports = nextConfig
