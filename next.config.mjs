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
  transpilePackages: ["lucide-react"],
};

export default nextConfig;
