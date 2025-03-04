"use client";

import Thumbnail from "@/assets/backgrounds/login-1.background.png";
import { Button } from "@heroui/react";
import { useTransitionRouter } from "next-view-transitions";
import Image from "next/image";

export default function LoginPage() {
  const router = useTransitionRouter();

  return (
    <div className="relative flex flex-col items-center justify-center gap-y-10 h-full">
      <Image
        src={Thumbnail}
        alt="Login Background"
        className="object-cover w-full"
      />

      {/* Description */}
      <div className="px-12">
        <h1 className="text-2xl font-chalet text-center">
          Where blockchain meets true connections
        </h1>
        <p className="text-sm text-center text-secondary-800 font-medium">
          Interact with people with the same interest like you
        </p>
      </div>

      {/* Actions */}
      <div className="flex flex-col items-center justify-center gap-y-4 font-chalet w-full px-10">
        <Button
          radius="full"
          className="w-full bg-primary text-primary-foreground"
          size="lg"
          onPress={() => router.push("/onboarding/profile-name")}
        >
          Continue
        </Button>
        <Button
          radius="full"
          className="w-full bg-secondary-50 text-secondary-800"
          size="lg"
          onPress={() => router.push("/signup")}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}
