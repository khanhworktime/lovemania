import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lovemania",
    short_name: "Lovemania",
    description: "Lovemania",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#fcf5fa",
    icons: [
      {
        src: "/192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/256.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
