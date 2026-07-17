/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: "/home", destination: "/" },
      { source: "/about", destination: "/" },
      { source: "/skills", destination: "/" },
      { source: "/work", destination: "/" },
      { source: "/experience", destination: "/" },
      { source: "/contact", destination: "/" },
    ];
  },
};

module.exports = nextConfig;
