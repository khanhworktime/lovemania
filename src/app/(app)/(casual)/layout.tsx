import { Viewport } from "next";
import { Navbar } from "./components/navbar";

export const viewport: Viewport = {
  themeColor: "#fcf5fa",
};

export default function CasualLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-secondary-50 min-h-svh max-h-svh h-svh overflow-y-auto relative pb-4">
      {children}
      <Navbar />
    </div>
  );
}
