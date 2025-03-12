import { Viewport } from "next";
import Onboarding from "./components/onboarding";
import { OnboardingProvider } from "./components/onboarding.provider";

export const viewport: Viewport = {
  themeColor: "#FDF7FD",
};

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-6 h-svh bg-secondary-50">
      <OnboardingProvider>
        <Onboarding>{children}</Onboarding>
      </OnboardingProvider>
    </div>
  );
}
