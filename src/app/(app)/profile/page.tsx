"use client";

import { currentUser } from "@/exampleData/data";
import { Avatar, Button, CircularProgress } from "@heroui/react";
import {
  ChevronRightIcon,
  Languages,
  Settings,
  UserIcon,
  Wallet2Icon,
  XIcon,
} from "lucide-react";

import { Link, useTransitionRouter } from "next-view-transitions";

const profileDonePercentage = 70;

export default function ProfilePage() {
  const router = useTransitionRouter();

  return (
    <div className="flex flex-col gap-y-4 px-4 ">
      <div className="flex items-center justify-between gap-x-2 pt-4 pb-2 sticky top-0 inset-x-0 z-50 bg-white/20 backdrop-blur-sm">
        <Button
          variant="bordered"
          className="size-10 border-1"
          radius="full"
          isIconOnly
          onPress={() => router.back()}
        >
          <XIcon />
        </Button>
      </div>

      {/* Avatar */}

      <div className="flex flex-col gap-y-2 items-center justify-center">
        <div className="flex items-center gap-x-2 relative">
          <Avatar
            src={currentUser.image}
            className="size-24 border-2 border-white"
          />
          <CircularProgress
            aria-label={`Avatar profile progress`}
            value={profileDonePercentage}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square justify-items-stretch"
            classNames={{
              indicator: "stroke-primary-500",
              svg: "size-32 stroke-1",
              track: "stroke-transparent",
            }}
          />
        </div>
        <h1 className="text-2xl font-medium font-chalet">
          {currentUser.name} {currentUser.age}
        </h1>
        <p className="text-sm font-medium text-gray-500">
          {currentUser.location}
        </p>
      </div>

      {/* Alert */}
      <div className="flex items-center gap-x-2 py-3 px-4 rounded-xl bg-secondary-500">
        <CircularProgress
          aria-label={`Avatar profile progress`}
          value={profileDonePercentage}
          showValueLabel
          classNames={{
            indicator: "stroke-primary-500",
            svg: "size-10 stroke-3",
            track: "stroke-transparent",
            value: "text-xs rounded-full",
            svgWrapper: "bg-white rounded-full",
          }}
        />

        <div className="text-sm font-medium text-white flex-grow">
          Complete your profile to stand out
        </div>

        <Button
          color="primary"
          radius="full"
          className="text-white font-chalet"
          onPress={() => router.push("/profile/edit")}
        >
          Edit profile
        </Button>
      </div>

      {/* Profile info */}
      <div className="flex flex-col gap-y-4 py-4">
        <Button
          variant="solid"
          className="bg-white gap-x-4"
          size="lg"
          onPress={() => router.push("/profile/edit")}
        >
          <UserIcon className="text-secondary-600" />
          <div className="flex-grow text-left font-chalet">My Account</div>
          <ChevronRightIcon className="text-gray-400" />
        </Button>
        <Button variant="solid" className="bg-white gap-x-4" size="lg">
          <Wallet2Icon className="text-secondary-600" />
          <div className="flex-grow text-left font-chalet">My Wallet</div>
          <ChevronRightIcon className="text-gray-400" />
        </Button>
        <Button variant="solid" className="bg-white gap-x-4" size="lg">
          <Languages className="text-secondary-600" />
          <div className="flex-grow text-left font-chalet">Language</div>
          <ChevronRightIcon className="text-gray-400" />
        </Button>
        <Button variant="solid" className="bg-white gap-x-4" size="lg">
          <Settings color="#d16bc0" />
          <div className="flex-grow text-left font-chalet">Settings</div>
          <ChevronRightIcon className="text-gray-400" />
        </Button>
      </div>

      <div className="flex flex-col justify-center items-center p-4 bg-white rounded-xl gap-y-2">
        <span className="text-xl font-medium font-chalet">
          Get more matches
        </span>

        <span className="text-sm text-gray-500">
          Be seen by more people in Encounters
        </span>

        <Link href="#" className="text-secondary-500 font-bold">
          Upgrade to Premium
        </Link>
      </div>
    </div>
  );
}
