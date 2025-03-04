import { MainProvider } from "@/providers/index.provider";
import type { Metadata } from "next";
import { ViewTransitions } from "next-view-transitions";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
const poppinsFont = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const chaletFont = localFont({
  src: "./font/Chalet.ttf",
  variable: "--font-chalet",
});

export const metadata: Metadata = {
  title: "Lovemania",
  description: "Where blockchain meets true connections",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${poppinsFont.variable} ${chaletFont.variable} antialiased transform-gpu`}
        >
          <MainProvider>{children}</MainProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
