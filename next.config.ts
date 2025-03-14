/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // webpack: (config: any) => {
  //   config.resolve.fallback = { fs: false, net: false, tls: false };
  //   config.externals.push("pino-pretty", "lokijs", "encoding");
  //   return config;
  // },
  images: {
    remotePatterns: [{ hostname: "s3-alpha-sig.figma.com" }],
  },
};

export default nextConfig;
