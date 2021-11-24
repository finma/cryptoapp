/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 */
const nextConfig = {
  rewrites: async () => {
    return [{ source: "/", destination: "/index" }];
  },
  future: { strictPostcssConfiguratio: true },
  pageExtensions: ["page.tsx", "page.ts"],
  reactStrictMode: true,
  typescript: { ignoreDevErrors: true },
  poweredByHeader: false,
  images: {
    domains: ["assets.coingecko.com"],
  },
};

module.exports = nextConfig;
