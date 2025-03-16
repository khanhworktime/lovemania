"use client";

import { Button, CalendarDate, DateInput } from "@heroui/react";
import { useOnboarding } from "../components/onboarding.provider";
import { ArrowRightIcon } from "lucide-react";
import { onboardingSteps } from "../steps";
import { useTransitionRouter } from "next-view-transitions";
import moment from "moment";

export default function ProfileAgePage() {
  const router = useTransitionRouter();

  const { profileData, updateProfileData } = useOnboarding();

  const handleAgeChange = (dob: CalendarDate | null) => {
    if (!dob) return;

    updateProfileData({ dob });
  };

  const isAgeValid = profileData.dob
    ? moment().diff(moment(profileData.dob), "years") >= 18 &&
      moment().diff(moment(profileData.dob), "years") <= 100
    : false;

  return (
    <>
      <h1 className="text-2xl font-medium font-chalet text-center mb-6">
        Your Age?
      </h1>
      <DateInput
        aria-label="Date of birth"
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
      <Button
        size="lg"
        radius="full"
        isIconOnly
        className="bg-primary shadow absolute bottom-4 right-4 translate-y-[calc(24px+85%)]"
        onPress={() => {
          router.push(`/onboarding/${onboardingSteps[3]}`);
        }}
        isDisabled={!isAgeValid}
      >
        <ArrowRightIcon color="#fff" />
      </Button>
    </>
  );
}
