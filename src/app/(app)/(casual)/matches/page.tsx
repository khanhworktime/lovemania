"use client";

import { FilterIcon } from "@/assets/icons";
import { Button, Card } from "@heroui/react";
import { ChevronLeft } from "lucide-react";
import { UserPersonalStatistic } from "./components/PersonalStatistic";
import { userTestData } from "@/exampleData/data";
import Image from "next/image";

export default function MatchesPage() {
  return (
    <div className="pb-16">
      <div className="flex items-center justify-between gap-x-2 px-4 pt-4 pb-2 sticky top-0 inset-x-0 z-50 bg-white/20 backdrop-blur-sm">
        {/* Logo */}
        <div className="flex items-center gap-x-2">
          <Button
            variant="bordered"
            className="size-10 border"
            radius="full"
            isIconOnly
          >
            <ChevronLeft />
          </Button>
        </div>

        <h1 className="text-2xl font-medium font-chalet">Matches</h1>

        {/* Notifications */}
        <div className="flex items-center gap-x-2">
          <Button
            variant="bordered"
            className="size-10 border"
            radius="full"
            isIconOnly
          >
            <FilterIcon />
          </Button>
        </div>
      </div>

      <div className="flex gap-8 mt-6">
        <UserPersonalStatistic />
      </div>

      <div className="px-4 mt-6">
        <h2 className="text-2xl font-medium font-chalet">
          Your Matches <strong className="text-secondary-500">47</strong>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 px-4 mt-6">
        {userTestData.map((user) => (
          <div
            key={user.id}
            className="w-full aspect-[0.7] rounded-3xl overflow-hidden relative border-5 border-secondary-500"
          >
            <Image
              src={user.image}
              alt={user.name}
              fill
              className="object-cover"
            />
            {/* Match percentage */}
            <div className="absolute -top-[4px] font-medium left-1/2 -translate-x-1/2 text-sm rounded-b-full px-5 bg-secondary-500 text-white text-center text-nowrap z-50">
              {user.matchesPercentage}% Match
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/0" />

            {/* Profile info */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex flex-col items-center gap-x-2">
                <div className="text-white text-small tracking-wide font-bold font-chalet">
                  {user.name}
                  {user.age ? `, ${user.age}` : ""}
                </div>
                <div className="text-white/60 text-sm font-chalet font-medium tracking-wider">
                  {user.location}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
