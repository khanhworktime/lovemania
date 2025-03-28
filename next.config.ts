/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // webpack: (config: any) => {
  //   config.externals.push("pino-pretty", "lokijs", "encoding");
  //   return config;
  // },
  images: {
    remotePatterns: [
      { hostname: "s3-alpha-sig.figma.com" },
      { hostname: "s2.coinmarketcap.com" },
      { hostname: "somnia.network", protocol: "https" },
      { hostname: "smithii.io", protocol: "https" },
    ],
  },
};

export default nextConfig;
