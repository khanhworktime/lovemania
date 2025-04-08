"use client";

import {
  ArrowRightIcon,
  FemaleIcon,
  MaleIcon,
  RocketIcon,
} from "@/assets/icons";
import { Button, cn } from "@heroui/react";
import { useTransitionRouter } from "next-view-transitions";
import { useOnboarding } from "../../components/onboarding.provider";
import { onboardingSteps } from "../../steps";
import GenderSelection from "../components/GenderSelection";

const definitionOptions = [
  {
    label: "Man",
    value: "man",
    icon: <MaleIcon color="white" className="w-8 h-8" />,
    isAbleToModify: false,
  },
  {
    label: "Woman",
    value: "woman",
    icon: <FemaleIcon color="white" className="w-8 h-8" />,
    isAbleToModify: false,
  },
  {
    label: "Everyone/Anything",
    value: "everyone",
    icon: <RocketIcon className="w-12 h-12" />,
    isAbleToModify: false,
  },
];

export default function ProfileLookingForPage() {
  const router = useTransitionRouter();
  const { profileData, updateProfileData } = useOnboarding();

  return (
    <>
      <h1 className="text-2xl font-medium font-chalet text-center mb-6">
        What kind of people are you looking for?
      </h1>
      <div className="grid grid-cols-2 gap-x-4 gap-y-6">
        {definitionOptions.map((option, index, arr) => {
          return (
            <div
              key={option.value}
              className={cn(
                "col-span-1",
                index === arr.length - 1 && "col-span-2"
              )}
            >
              <GenderSelection
                onChange={(value) => {
                  updateProfileData({
                    lookingFor: value,
                  });
                }}
                active={option.value === profileData.lookingFor}
                setActive={() => {
                  updateProfileData({
                    lookingFor: option.value,
                  });
                }}
                icon={option.icon}
                isAbleToModify={option.isAbleToModify}
                placeholder={option.label}
              />
            </div>
          );
        })}
      </div>
      <Button
        size="lg"
        radius="full"
        isIconOnly
        className="bg-primary shadow absolute bottom-4 right-4 translate-y-[calc(24px+85%)] z-20"
        onPress={() => {
          router.push(`/onboarding/${onboardingSteps[5]}`);
        }}
        isDisabled={profileData.lookingFor === ""}
      >
        <ArrowRightIcon color="#fff" />
      </Button>
    </>
  );
}
