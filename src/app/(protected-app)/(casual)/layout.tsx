import { Viewport } from "next";
import { Navbar } from "../components/navbar";

export const viewport: Viewport = {
  themeColor: "#fcf5fa",
};

export default function CasualLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-secondary-50 h-svh overflow-y-auto pb-4 flex flex-col">
      <div className="flex-1">{children}</div>
      <Navbar />
    </div>
  );
}
