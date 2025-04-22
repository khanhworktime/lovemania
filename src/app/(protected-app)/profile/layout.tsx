import { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#fcf5fa",
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="">{children}</div>;
}
