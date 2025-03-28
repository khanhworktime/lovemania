"use client";

import { ArrowRightIcon } from "@/assets/icons";
import { Button, Input } from "@heroui/react";
import { useTransitionRouter } from "next-view-transitions";
import { useOnboarding } from "../components/onboarding.provider";
import { onboardingSteps } from "../steps";

export default function ProfileNamePage() {
  const router = useTransitionRouter();

  const { profileData, updateProfileData } = useOnboarding();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateProfileData({ name: e.target.value });
  };

  return (
    <>
      <h1 className="text-2xl font-medium font-chalet text-center mb-6">
        What&apos;s your name?
      </h1>
      <Input
        placeholder="Enter your name"
        variant="bordered"
        radius="lg"
        size="lg"
        color="primary"
        classNames={{
          inputWrapper: "bg-white",
        }}
        isClearable
        value={profileData.name}
        onChange={handleNameChange}
      />
      <Button
        size="lg"
        radius="full"
        isIconOnly
        className="bg-primary shadow absolute bottom-4 right-4 translate-y-[calc(24px+85%)] z-20"
        onPress={() => {
          router.push(`/onboarding/${onboardingSteps[2]}`);
        }}
        isDisabled={profileData.name.length === 0}
      >
        <ArrowRightIcon color="#fff" />
      </Button>
    </>
  );
}
