"use client";

import { CalendarDate, DateInput } from "@heroui/react";
import { useOnboarding } from "../components/onboarding.provider";

export default function ProfileAgePage() {
  const { profileData, updateProfileData } = useOnboarding();

  const handleAgeChange = (dob: CalendarDate | null) => {
    if (!dob) return;

    updateProfileData({ dob });
  };

  return (
    <div>
      <h1 className="text-2xl font-medium font-chalet text-center mb-6">
        Your Age?
      </h1>
      <DateInput
        variant="bordered"
        radius="lg"
        size="lg"
        color="primary"
        classNames={{
          inputWrapper: "bg-white",
        }}
        value={profileData.dob}
        onChange={handleAgeChange}
      />
    </div>
  );
}
