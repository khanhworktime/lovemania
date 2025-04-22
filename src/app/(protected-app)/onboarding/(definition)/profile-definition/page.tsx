"use client";

import {
  ArrowRightIcon,
  FemaleIcon,
  GenderIcon,
  MaleIcon,
  RocketIcon,
} from "@/assets/icons";
import { EGenderDefine } from "@/enum/EGenderDefine.enum";
import { Button, Card, CardBody, cn } from "@heroui/react";
import { Check } from "lucide-react";
import { useTransitionRouter } from "next-view-transitions";
import { useEffect, useState } from "react";
import { useOnboarding } from "../../components/onboarding.provider";
import { onboardingSteps } from "../../steps";

export default function ProfileDefinitionPage() {
  const router = useTransitionRouter();
  const { profileData, updateProfileData } = useOnboarding();

  const [currentSelection, setCurrentSelection] = useState<{
    value: EGenderDefine;
    description: string;
  }>({
    value: EGenderDefine.MALE,
    description: "Male",
  });

  const [nonBinaryDescription, setNonBinaryDescription] = useState("");
  const [anythingDescription, setAnythingDescription] = useState("");

  useEffect(() => {
    if (profileData.genderType === EGenderDefine.MALE) {
      setCurrentSelection({
        value: EGenderDefine.MALE,
        description: "Male",
      });
    }
    if (profileData.genderType === EGenderDefine.FEMALE) {
      setCurrentSelection({
        value: EGenderDefine.FEMALE,
        description: "Female",
      });
    }

    if (profileData.genderType === EGenderDefine.NON_BINARY) {
      setNonBinaryDescription(profileData.genderValue);
      setCurrentSelection({
        value: EGenderDefine.NON_BINARY,
        description: profileData.genderValue,
      });
    }
    if (profileData.genderType === EGenderDefine.ANYTHING) {
      setAnythingDescription(profileData.genderValue);
      setCurrentSelection({
        value: EGenderDefine.ANYTHING,
        description: profileData.genderValue,
      });
    }
  }, [profileData.genderType]);

  const handleGenderSelection = () => {
    updateProfileData({
      genderType: currentSelection.value,
      genderValue: currentSelection.description,
    });
  };

  return (
    <>
      <h1 className="text-2xl font-medium font-chalet text-center mb-6">
        You Define Who You Are
      </h1>
      <div className="grid grid-cols-2 gap-x-4 gap-y-6">
        <Card
          shadow="sm"
          className={cn(
            "flex items-center gap-2 transition-all duration-300 py-3 ",
            currentSelection.value === EGenderDefine.MALE &&
              "outline outline-2 outline-primary-300 focus-visible:outline-2"
          )}
          onPress={() => {
            setCurrentSelection({
              value: EGenderDefine.MALE,
              description: "Male",
            });
          }}
          isPressable
        >
          <CardBody className="grid grid-rows-2 gap-4 items-center justify-center cursor-pointer">
            <div
              className={cn(
                "transition-all duration-300 self-end justify-self-center w-12 h-12 flex items-center justify-center gap-2 bg-primary rounded-full",
                currentSelection.value === EGenderDefine.MALE &&
                  "bg-primary-300"
              )}
            >
              <MaleIcon color="white" className="w-8 h-8" />
            </div>

            <div className="flex flex-col items-center space-y-1">
              <p className="text-center font-semibold text-base">Male</p>
            </div>
          </CardBody>

          <div
            className={cn(
              "absolute top-4 right-4 text-white bg-primary-300 rounded-full p-0.5 transition-all duration-300",
              currentSelection.value === EGenderDefine.MALE &&
                "opacity-100 scale-100",
              currentSelection.value !== EGenderDefine.MALE &&
                "opacity-0 scale-0"
            )}
          >
            <Check size={12} />
          </div>
        </Card>
        <Card
          shadow="sm"
          className={cn(
            "flex items-center gap-2 transition-all duration-300 py-3 ",
            currentSelection.value === EGenderDefine.FEMALE &&
              "outline outline-2 outline-primary-300 focus-visible:outline-2"
          )}
          onPress={() => {
            setCurrentSelection({
              value: EGenderDefine.FEMALE,
              description: "Female",
            });
          }}
          isPressable
        >
          <CardBody className="grid grid-rows-2 gap-4 items-center justify-center">
            <div
              className={cn(
                "transition-all duration-300 self-end justify-self-center w-12 h-12 flex items-center justify-center gap-2 bg-primary rounded-full",
                currentSelection.value === EGenderDefine.FEMALE &&
                  "bg-primary-300"
              )}
            >
              <FemaleIcon color="white" className="w-8 h-8" />
            </div>

            <div className="flex flex-col items-center space-y-1">
              <p className="text-center font-semibold text-base">Female</p>
            </div>
          </CardBody>

          <div
            className={cn(
              "absolute top-4 right-4 text-white bg-primary-300 rounded-full p-0.5 transition-all duration-300",
              currentSelection.value === EGenderDefine.FEMALE &&
                "opacity-100 scale-100",
              currentSelection.value !== EGenderDefine.FEMALE &&
                "opacity-0 scale-0"
            )}
          >
            <Check size={12} />
          </div>
        </Card>

        <Card
          shadow="sm"
          className={cn(
            "flex items-center gap-2 transition-all duration-300 py-3 ",
            currentSelection.value === EGenderDefine.NON_BINARY &&
              "outline outline-2 outline-primary-300 focus-visible:outline-2"
          )}
        >
          <CardBody
            onClick={() => {
              setCurrentSelection({
                value: EGenderDefine.NON_BINARY,
                description: nonBinaryDescription,
              });
            }}
            className="grid grid-rows-2 gap-4 items-center justify-center"
          >
            <div
              className={cn(
                "transition-all duration-300 self-end justify-self-center w-12 h-12 flex items-center justify-center gap-2 bg-primary rounded-full",
                currentSelection.value === EGenderDefine.NON_BINARY &&
                  "bg-primary-300"
              )}
            >
              <GenderIcon color="white" className="w-6 h-6" />
            </div>

            <div className="relative w-full">
              <textarea
                value={nonBinaryDescription}
                onChange={(e) => {
                  setNonBinaryDescription(e.target.value);
                  setCurrentSelection({
                    value: EGenderDefine.NON_BINARY,
                    description: e.target.value,
                  });
                }}
                placeholder={"Define your gender"}
                rows={2}
                className={cn(
                  "w-full text-center font-semibold bg-transparent outline-none placeholder:text-primary-300 resize-none overflow-hidden",
                  "focus:ring-0 focus:outline-none"
                )}
                maxLength={24}
                aria-label="Enter your gender"
              />
            </div>
          </CardBody>

          <div
            className={cn(
              "absolute top-4 right-4 text-white bg-primary-300 rounded-full p-0.5 transition-all duration-300",
              currentSelection.value === EGenderDefine.NON_BINARY &&
                "opacity-100 scale-100",
              currentSelection.value !== EGenderDefine.NON_BINARY &&
                "opacity-0 scale-0"
            )}
          >
            <Check size={12} />
          </div>
        </Card>

        <Card
          shadow="sm"
          className={cn(
            "flex items-center gap-2 transition-all duration-300 py-3 ",
            currentSelection.value === EGenderDefine.ANYTHING &&
              "outline outline-2 outline-primary-300 focus-visible:outline-2"
          )}
        >
          <CardBody
            onClick={() => {
              setCurrentSelection({
                value: EGenderDefine.ANYTHING,
                description: anythingDescription,
              });
            }}
            className="grid grid-rows-2 gap-4 items-center justify-center"
          >
            <div
              className={cn(
                "transition-all duration-300 self-end justify-self-center w-12 h-12 flex items-center justify-center gap-2 bg-primary rounded-full",
                currentSelection.value === EGenderDefine.ANYTHING &&
                  "bg-primary-300"
              )}
            >
              <RocketIcon color="white" className="w-14 h-14" />
            </div>

            <div className="relative w-full">
              <textarea
                value={anythingDescription}
                onChange={(e) => {
                  setAnythingDescription(e.target.value);
                  setCurrentSelection({
                    value: EGenderDefine.ANYTHING,
                    description: e.target.value,
                  });
                }}
                placeholder={"You can be everything"}
                rows={2}
                className={cn(
                  "w-full text-center font-semibold bg-transparent outline-none placeholder:text-primary-300 resize-none overflow-hidden",
                  "focus:ring-0 focus:outline-none"
                )}
                maxLength={24}
                aria-label="Enter your gender"
              />
            </div>
          </CardBody>

          <div
            className={cn(
              "absolute top-4 right-4 text-white bg-primary-300 rounded-full p-0.5 transition-all duration-300",
              currentSelection.value === EGenderDefine.ANYTHING &&
                "opacity-100 scale-100",
              currentSelection.value !== EGenderDefine.ANYTHING &&
                "opacity-0 scale-0"
            )}
          >
            <Check size={12} />
          </div>
        </Card>
      </div>

      <Button
        size="lg"
        radius="full"
        isIconOnly
        className="bg-primary shadow absolute bottom-4 right-4 translate-y-[calc(24px+85%)] z-20"
        onPress={() => {
          handleGenderSelection();
          router.push(`/onboarding/${onboardingSteps[4]}`);
        }}
      >
        <ArrowRightIcon color="#fff" />
      </Button>
    </>
  );
}
