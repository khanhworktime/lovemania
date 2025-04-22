"use client";
import { OnboardingProvider } from "@/app/(protected-app)/onboarding/components/onboarding.provider";
import { useBodyAppColor } from "@/hooks/UseBodyAppColor";

export default function ProfileTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  useBodyAppColor("#F9FAFB");

  return <OnboardingProvider>{children}</OnboardingProvider>;
}
