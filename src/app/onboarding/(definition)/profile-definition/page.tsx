"use client";

import { FemaleIcon, GenderIcon, MaleIcon, RocketIcon } from "@/assets/icons";
import { Button } from "@heroui/react";
import { useOnboarding } from "../../components/onboarding.provider";
import GenderSelection from "../components/GenderSelection";
import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@/assets/icons";
import { onboardingSteps } from "../../steps";
import { useTransitionRouter } from "next-view-transitions";

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
    label: "Enter your Gender",
    value: "genderCustom",
    icon: <GenderIcon color="white" className="w-6 h-6" />,
    isAbleToModify: true,
  },
  {
    label: "You can be everything",
    value: "anything",
    icon: <RocketIcon className="w-12 h-12" />,
    isAbleToModify: true,
  },
];

export default function ProfileDefinitionPage() {
  const router = useTransitionRouter();
  const { profileData, updateProfileData } = useOnboarding();

  const [currentSelection, setCurrentSelection] = useState<{
    value: string;
    description: string;
  }>({
    value: "",
    description: "",
  });

  useEffect(() => {
    setCurrentSelection({
      value: profileData.definition,
      description: profileData.definitionDescription,
    });
  }, [profileData.definition]);

  const syncProfileData = () => {
    updateProfileData({
      definition: currentSelection.value,
      definitionDescription: currentSelection.description,
    });
  };

  return (
    <>
      <h1 className="text-2xl font-medium font-chalet text-center mb-6">
        You Define Who You Are
      </h1>
      <div className="grid grid-cols-2 gap-x-4 gap-y-6">
        {definitionOptions.map((option) => {
          return (
            <GenderSelection
              key={option.value}
              onChange={(value) => {
                setCurrentSelection((prev) => ({
                  ...prev,
                  description: value,
                }));
              }}
              active={option.value === currentSelection.value}
              setActive={() => {
                setCurrentSelection({
                  value: option.value,
                  description: option.isAbleToModify ? "" : option.value,
                });
              }}
              icon={option.icon}
              isAbleToModify={option.isAbleToModify}
              placeholder={option.label}
              defaultValue={
                option.value === currentSelection.value
                  ? currentSelection.description
                  : ""
              }
            />
          );
        })}
      </div>
      <Button
        size="lg"
        radius="full"
        isIconOnly
        className="bg-primary shadow absolute bottom-4 right-4 translate-y-[calc(24px+85%)] z-20"
        onPress={() => {
          syncProfileData();
          router.push(`/onboarding/${onboardingSteps[4]}`);
        }}
        isDisabled={profileData.definition === ""}
      >
        <ArrowRightIcon color="#fff" />
      </Button>
    </>
  );
}
