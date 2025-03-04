"use client";

import { ArrowRightIcon, ChevronLeftIcon } from "@/assets/icons";
import { Button, Progress } from "@heroui/react";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { onboardingSteps } from "../steps";

export default function Onboarding({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const currentStep =
    onboardingSteps[pathname.split("/").pop() as keyof typeof onboardingSteps];

  const router = useTransitionRouter();

  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Return action */}
      <div>
        <Button
          variant="bordered"
          size="md"
          className="aspect-square w-auto"
          radius="full"
          isIconOnly
          onPress={() => router.back()}
        >
          <ChevronLeftIcon />
        </Button>
      </div>
      <div className="flex-grow">{children}</div>
      <div className="space-y-4">
        <div className="flex justify-between items-end gap-2">
          <span className="font-bold text-lg font-chalet">
            {currentStep}
            <span className="text-secondary-300">/5</span>
          </span>
          {currentStep !== 5 && (
            <Button
              size="lg"
              radius="full"
              isIconOnly
              className="bg-primary shadow"
              onPress={() => {
                router.push(
                  `/onboarding/${onboardingSteps[Math.min(currentStep + 1, 5)]}`
                );
              }}
            >
              <ArrowRightIcon color="#fff" />
            </Button>
          )}
        </div>
        <Progress
          value={(currentStep / 5) * 100}
          classNames={{
            indicator: "bg-secondary",
            track: "bg-secondary-200",
          }}
        />
      </div>
    </div>
  );
}
