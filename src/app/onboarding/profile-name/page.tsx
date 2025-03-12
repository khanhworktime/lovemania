"use client";

import { Input } from "@heroui/react";
import { useOnboarding } from "../components/onboarding.provider";

export default function ProfileNamePage() {
  const { profileData, updateProfileData } = useOnboarding();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateProfileData({ name: e.target.value });
  };

  return (
    <div>
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
    </div>
  );
}
