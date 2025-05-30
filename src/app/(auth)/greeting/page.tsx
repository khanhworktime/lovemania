"use client";

import Thumbnail01 from "@/assets/backgrounds/login-1.background.png";
import Thumbnail02 from "@/assets/backgrounds/login-2.background.png";
import { useGSAP } from "@gsap/react";
import { Button } from "@heroui/react";
import gsap from "gsap";
import { useTransitionRouter } from "next-view-transitions";
import Image from "next/image";
import { useRef, useState } from "react";

export default function GreetingPage() {
  const router = useTransitionRouter();
  const [isFinal, setIsFinal] = useState(false);

  const handleForward = () => {
    if (isFinal) {
      router.push("/login");
    } else {
      playAnimation();
    }
  };

  const containerRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP();

  const playAnimation = contextSafe(() => {
    const timeline = gsap.timeline();
    timeline.to(".thumbnail", {
      opacity: 0,
      scale: 0.5,
      x: "-100%",
      duration: 0.5,
      ease: "power2.inOut",
    });
    timeline.set(".thumbnail", {
      opacity: 0,
      scale: 0.5,
      x: "100%",
      onComplete: () => {
        setIsFinal(true);
      },
    });
    timeline.to(".thumbnail", {
      opacity: 1,
      scale: 1,
      x: "0%",
      duration: 0.5,
      ease: "power2.inOut",
    });
  });

  return (
    <div
      ref={containerRef}
      className="relative flex flex-col items-center justify-center gap-y-10 h-full pb-4"
    >
      <div className="p-8 relative aspect-square flex items-center justify-center">
        <Image
          src={isFinal ? Thumbnail02 : Thumbnail01}
          alt="Login Background"
          className="thumbnail object-cover w-full h-full"
        />
      </div>

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
          onPress={handleForward}
        >
          Continue
        </Button>
        <Button
          radius="full"
          className="w-full bg-secondary-50 text-secondary-800"
          size="lg"
          onPress={() => router.push("/login")}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}
