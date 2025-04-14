/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config: any) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      use: ["graphql-tag/loader"],
    });
    return config;
  },
  images: {
    remotePatterns: [
      { hostname: "s3-alpha-sig.figma.com" },
      { hostname: "picsum.photos" },
      { hostname: "s2.coinmarketcap.com" },
      { hostname: "somnia.network", protocol: "https" },
      { hostname: "smithii.io", protocol: "https" },
    ],
  },
};

export default nextConfig;
