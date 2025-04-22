"use client";

import { Button, DateInput, DateValue } from "@heroui/react";
import { useOnboarding } from "../components/onboarding.provider";
import { ArrowRightIcon } from "lucide-react";
import { onboardingSteps } from "../steps";
import { useTransitionRouter } from "next-view-transitions";
import moment from "moment";
import { CalendarDate } from "@internationalized/date";

export default function ProfileAgePage() {
  const router = useTransitionRouter();

  const { profileData, updateProfileData } = useOnboarding();

  const handleAgeChange = (dob: DateValue | null) => {
    if (!dob || !dob.year || !dob.month || !dob.day) return;

    try {
      const dateStr = moment({
        year: dob.year,
        month: dob.month - 1,
        day: dob.day,
      }).format("YYYY-MM-DD");

      updateProfileData({
        dob: dateStr,
      });
    } catch (error) {
      // Invalid date, do nothing
      return;
    }
  };

  const isAgeValid = profileData.dob
    ? moment().diff(moment(profileData.dob), "years") >= 18 &&
      moment().diff(moment(profileData.dob), "years") <= 100
    : false;

  const transformedDob = profileData.dob
    ? {
        year: moment(profileData.dob).year(),
        month: moment(profileData.dob).month() + 1,
        day: moment(profileData.dob).date(),
      }
    : null;

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
        value={
          transformedDob
            ? new CalendarDate(
                transformedDob.year,
                transformedDob.month,
                transformedDob.day
              )
            : null
        }
        onChange={handleAgeChange}
      />
      <Button
        size="lg"
        radius="full"
        isIconOnly
        className="bg-primary shadow absolute bottom-4 right-4 translate-y-[calc(24px+85%)] z-20"
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
