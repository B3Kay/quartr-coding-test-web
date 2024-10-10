/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'files.quartr.com', // Add the domain from which images are fetched
    ],
  },
}

module.exports = nextConfig
