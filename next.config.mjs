/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
  },
  rewrites: async () => {
    return [
      {
        source: "/anthropic/:path*",
        destination: "https://api.anthropic.com/:path*",
      },
    ];
  },
  redirects: async () => {
    return [
      {
        source: "/solanized/:path*",
        destination: "/solanized/:path*/dashboard",
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['api.microlink.io'],
  },
  transpilePackages: ["lucide-react"],
};

export default nextConfig;