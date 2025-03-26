"use client";

import { Button, Chip, cn } from "@heroui/react";
import { useOnboarding } from "../components/onboarding.provider";
import { useEffect, useState } from "react";

import { ArrowRightIcon } from "@/assets/icons";
import { onboardingSteps } from "../steps";
import { useTransitionRouter } from "next-view-transitions";

const interests = [
  {
    label: "🎮 GameFi",
    value: "gamefi",
  },
  {
    label: "💃🏻 Dancing",
    value: "dancing",
  },
  {
    label: "🗣 Language",
    value: "language",
  },
  {
    label: "🎵 Music",
    value: "music",
  },
  {
    label: "🎬 Movie",
    value: "movie",
  },
  {
    label: "📸 Photography",
    value: "photography",
  },
  {
    label: "🏛 Architecture",
    value: "architecture",
  },
  {
    label: "👗 Fashion",
    value: "fashion",
  },
  {
    label: "📚 Books",
    value: "books",
  },
  {
    label: "✍🏻 Blog",
    value: "blog",
  },
  {
    label: "🍃 Nature",
    value: "nature",
  },
  {
    label: "🍔 Food",
    value: "food",
  },
  {
    label: "🎨 NFTs",
    value: "nfts",
  },
  {
    label: "⚽️ Football",
    value: "football",
  },
  {
    label: "🙂 KOLs",
    value: "kols",
  },
  {
    label: "🐼 Animals",
    value: "animals",
  },
  {
    label: "💪 Gym & Fitness",
    value: "gym",
  },
];

export default function ProfileInterestPage() {
  const router = useTransitionRouter();

  const { profileData, updateProfileData } = useOnboarding();
  const [selectedInterests, setSelectedInterests] = useState<string[]>(
    profileData.interests || []
  );

  useEffect(() => {
    updateProfileData({ interests: selectedInterests });
  }, [selectedInterests]);

  const handleInterestChange = (value: string) => {
    if (selectedInterests.includes(value)) {
      setSelectedInterests(
        selectedInterests.filter((interest) => interest !== value)
      );
    } else {
      if (selectedInterests.length < 5) {
        setSelectedInterests([...selectedInterests, value]);
      }
    }
  };

  return (
    <>
      <h1 className="text-2xl font-medium font-chalet text-center mb-6">
        Select up to 5 interests
      </h1>
      <div className="flex flex-wrap justify-center gap-2">
        {interests.map((interest) => {
          return (
            <Chip
              key={interest.value}
              className="transition-all duration-300"
              classNames={{
                content: cn("font-chalet text-medium"),
                base: cn(
                  "h-fit py-2 px-3 bg-white border border-primary-300 cursor-pointer",
                  selectedInterests.includes(interest.value) &&
                    "bg-primary-300 text-white border-primary-500"
                ),
              }}
              variant="faded"
              onClick={() => handleInterestChange(interest.value)}
            >
              <div>{interest.label}</div>
            </Chip>
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
        isDisabled={selectedInterests.length === 0}
      >
        <ArrowRightIcon color="#fff" />
      </Button>
    </>
  );
}
