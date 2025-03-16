import { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#F9FAFB",
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-[#fcf5fa] h-svh">{children}</div>;
}
