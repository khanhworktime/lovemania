"use client";

import {
  ArrowRightIcon,
  FemaleIcon,
  MaleIcon,
  RocketIcon,
} from "@/assets/icons";
import { EGenderDefine } from "@/enum/EGenderDefine.enum";
import { Button, Card, CardBody, cn } from "@heroui/react";
import { Check } from "lucide-react";
import { useTransitionRouter } from "next-view-transitions";
import { useOnboarding } from "../../components/onboarding.provider";
import { onboardingSteps } from "../../steps";

export default function ProfileLookingForPage() {
  const router = useTransitionRouter();
  const { profileData, updateProfileData } = useOnboarding();

  return (
    <>
      <h1 className="text-2xl font-medium font-chalet text-center mb-6">
        What kind of people are you looking for?
      </h1>
      <div className="grid grid-cols-2 gap-x-4 gap-y-6">
        <Card
          shadow="sm"
          className={cn(
            "flex items-center gap-2 transition-all duration-300 py-3 ",
            profileData.lookingFor === EGenderDefine.MALE &&
              "outline outline-2 outline-primary-300 focus-visible:outline-2"
          )}
          onPress={() => {
            updateProfileData({
              lookingFor: EGenderDefine.MALE,
            });
          }}
          isPressable
        >
          <CardBody className="grid grid-rows-2 gap-4 items-center justify-center cursor-pointer">
            <div
              className={cn(
                "transition-all duration-300 self-end justify-self-center w-12 h-12 flex items-center justify-center gap-2 bg-primary rounded-full",
                profileData.lookingFor === EGenderDefine.MALE &&
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
              profileData.lookingFor === EGenderDefine.MALE &&
                "opacity-100 scale-100",
              profileData.lookingFor !== EGenderDefine.MALE &&
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
            profileData.lookingFor === EGenderDefine.FEMALE &&
              "outline outline-2 outline-primary-300 focus-visible:outline-2"
          )}
          onPress={() => {
            updateProfileData({
              lookingFor: EGenderDefine.FEMALE,
            });
          }}
          isPressable
        >
          <CardBody className="grid grid-rows-2 gap-4 items-center justify-center cursor-pointer">
            <div
              className={cn(
                "transition-all duration-300 self-end justify-self-center w-12 h-12 flex items-center justify-center gap-2 bg-primary rounded-full",
                profileData.lookingFor === EGenderDefine.FEMALE &&
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
              profileData.lookingFor === EGenderDefine.FEMALE &&
                "opacity-100 scale-100",
              profileData.lookingFor !== EGenderDefine.FEMALE &&
                "opacity-0 scale-0"
            )}
          >
            <Check size={12} />
          </div>
        </Card>

        <Card
          shadow="sm"
          className={cn(
            "flex items-center gap-2 transition-all duration-300 py-3 col-span-full",
            profileData.lookingFor === EGenderDefine.ANYTHING &&
              "outline outline-2 outline-primary-300 focus-visible:outline-2"
          )}
          onPress={() => {
            updateProfileData({
              lookingFor: EGenderDefine.ANYTHING,
            });
          }}
          isPressable
        >
          <CardBody className="grid grid-rows-2 gap-4 items-center justify-center cursor-pointer">
            <div
              className={cn(
                "transition-all duration-300 self-end justify-self-center w-12 h-12 flex items-center justify-center gap-2 bg-primary rounded-full",
                profileData.lookingFor === EGenderDefine.ANYTHING &&
                  "bg-primary-300"
              )}
            >
              <RocketIcon color="white" className="w-12 h-12" />
            </div>

            <div className="flex flex-col items-center space-y-1">
              <p className="text-center font-semibold text-base">
                Everyone/Anything
              </p>
            </div>
          </CardBody>

          <div
            className={cn(
              "absolute top-4 right-4 text-white bg-primary-300 rounded-full p-0.5 transition-all duration-300",
              profileData.lookingFor === EGenderDefine.ANYTHING &&
                "opacity-100 scale-100",
              profileData.lookingFor !== EGenderDefine.ANYTHING &&
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
          router.push(`/onboarding/${onboardingSteps[5]}`);
        }}
      >
        <ArrowRightIcon color="#fff" />
      </Button>
    </>
  );
}
