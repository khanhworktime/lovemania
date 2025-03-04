import { Viewport } from "next";
import Onboarding from "./components/onboarding";

export const viewport: Viewport = {
  themeColor: "#FDF7FD",
};

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-6 h-full bg-[#FDF7FD]">
      <Onboarding>{children}</Onboarding>
    </div>
  );
}
