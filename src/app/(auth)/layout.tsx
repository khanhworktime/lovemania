import { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: "#fff",
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-svh">{children}</div>;
}
