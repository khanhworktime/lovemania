import { useGSAP } from "@gsap/react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CircularProgress,
  cn,
} from "@heroui/react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { Heart, Instagram, StarIcon, Twitter, XIcon } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

const testProfile = {
  image:
    "https://s3-alpha-sig.figma.com/img/f108/994f/df80102efce40452125cc5746b8fbc47?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Jpy1zjcRbs~gNMFCZEvyPmIDgg1CAs0VM0yRQ6XqxbsgrVtnUFclnbbczv4w6D3nu3USm2zkWCkzMfu4B1NWdOHQeNvmRL4cC5BBgGNzQFimFkmpyckjZIK-NhcpIL-o56HKEQ0EvZOo~GpiSh4wnS7HKimWu3lvBY~H0qHQxXKIHjyAbv08davmGcIY2YgqAUJY4v8dJJpuKIhXpQlc308deeMMgKmw9J~~GmDDb-mMFKOx1tMEYfbhjxnnW6cFXJOWQVjLrXRNsr7yMRRxM6MnX8eV3u7eGdONhJu1vLCBR8YjRTeeqY304scycdAbPO2NBLRWe8z8zQwAyZrOwA__",
  name: "John Doe",
  age: 25,
  location: "New York, NY",
  interests: ["reading", "traveling", "cooking"],
};

interface MatcherCardProps {
  currentDisplay: boolean;
  setCurrentDisplay: (state: boolean) => void;
}

gsap.registerEase("cardSuperLike", (progress) => {
  return Math.pow(progress, 2) * (3 - 2 * progress);
});

export function MatcherCard({
  currentDisplay,
  setCurrentDisplay,
}: MatcherCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // This is the context for the card
  const { contextSafe: thisContext } = useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(containerRef.current, {
        scale: 0.9,
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    },
    { scope: containerRef }
  );

  // This is the timeline for the card when it is the first card
  useGSAP(
    () => {
      const tl = gsap.timeline();
      if (currentDisplay) {
        tl.set(containerRef.current, {
          zIndex: 10,
        });
        tl.to(
          containerRef.current,
          {
            scale: 1,
            rotateZ: 0,
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "power2.inOut",
          },
          "<+1"
        );

        tl.to(
          ".overlay",
          {
            opacity: 0,
            display: "none",
            duration: 0.5,
            ease: "power2.inOut",
            onComplete: () => {
              setCurrentEmotion("unset");
            },
          },
          "<"
        );
      }
    },
    { scope: containerRef, dependencies: [currentDisplay] }
  );

  // Currently shown Emotion
  const [currentEmotion, setCurrentEmotion] = useState<
    "love" | "dislike" | "superLike" | "unset"
  >("unset");

  const currentEmotionIcon = () => {
    switch (currentEmotion) {
      case "love":
        return (
          <div className="rounded-full flex items-center justify-center size-14 bg-primary-500 text-white shadow-lg">
            <Heart fill="white" />
          </div>
        );

      case "dislike":
        return (
          <div className="rounded-full flex items-center justify-center size-14 bg-white shadow-lg">
            <XIcon />
          </div>
        );

      case "superLike":
        return (
          <div className="rounded-full flex items-center justify-center size-14 bg-primary-800 text-white shadow-lg">
            <StarIcon fill="white" />
          </div>
        );

      default:
        return null;
    }
  };

  // Click love action
  const loveAction = thisContext(() => {
    const tl = gsap.timeline();
    setCurrentDisplay(!currentDisplay);
    setCurrentEmotion("love");

    tl.set(containerRef.current, {
      zIndex: 50,
    });
    tl.to(
      ".emotion-overlay",
      {
        opacity: 1,
        display: "flex",
      },
      "<"
    );
    tl.to(
      containerRef.current,
      {
        x: "140%",
        rotateZ: 30,
        duration: 0.5,
        ease: "in",
      },
      "<+1s"
    );

    tl.set(containerRef.current, {
      x: "0",
      rotateZ: 0,
      zIndex: 0,
      scale: 0.5,
      duration: 0,
    });
    tl.set(".overlay", {
      display: "block",
      opacity: 1,
    });

    tl.set(".emotion-overlay", {
      opacity: 0,
      display: "none",
    });

    tl.to(containerRef.current, {
      scale: 0.8,
      y: "15%",
      duration: 0.5,
      ease: "out",
    });
  });

  // Click dislike action
  const dislikeAction = thisContext(() => {
    const tl = gsap.timeline();
    setCurrentDisplay(!currentDisplay);
    setCurrentEmotion("dislike");

    tl.set(containerRef.current, {
      zIndex: 50,
    });
    tl.to(
      ".emotion-overlay",
      {
        opacity: 1,
        display: "flex",
      },
      "<"
    );
    tl.to(
      containerRef.current,
      {
        x: "-140%",
        rotateZ: -30,
        duration: 0.5,
        ease: "in",
      },
      "<+1s"
    );

    tl.set(containerRef.current, {
      x: "0",
      rotateZ: 0,
      zIndex: 0,
      scale: 0.5,
      duration: 0,
    });
    tl.set(".overlay", {
      display: "block",
      opacity: 1,
    });

    tl.set(".emotion-overlay", {
      opacity: 0,
      display: "none",
    });

    tl.to(containerRef.current, {
      scale: 0.8,
      y: "15%",
      duration: 0.5,
      ease: "out",
    });
  });

  // Click super like action
  const superLikeAction = thisContext(() => {
    const tl = gsap.timeline();
    setCurrentDisplay(!currentDisplay);
    setCurrentEmotion("superLike");

    tl.set(containerRef.current, {
      zIndex: 50,
    });
    tl.to(
      ".emotion-overlay",
      {
        opacity: 1,
        display: "flex",
      },
      "<"
    );
    tl.to(containerRef.current, {
      y: "-100svh",
      zIndex: 50,
      duration: 1,
      ease: CustomEase.create(
        "custom",
        "M0,0 C0.271,-0.476 0.403,0.924 1,0.924 "
      ),
    });

    tl.set(containerRef.current, {
      x: "0",
      y: "0",
      rotateZ: 0,
      zIndex: 0,
      scale: 0.5,
      duration: 0,
    });
    tl.set(".overlay", {
      display: "block",
      opacity: 1,
    });

    tl.set(".emotion-overlay", {
      opacity: 0,
      display: "none",
    });

    tl.to(containerRef.current, {
      scale: 0.8,
      y: "15%",
      duration: 0.5,
      ease: "out",
    });
  });

  return (
    <div
      className={cn(
        "absolute top-0 left-0 w-full h-full will-change-transform"
      )}
      ref={containerRef}
    >
      <Card
        className="w-full h-fit rounded-3xl"
        as={"div"}
        aria-label="Matcher Card"
      >
        <CardBody>
          {/* Card main */}
          <div className="relative w-full h-auto aspect-[0.9] overflow-hidden rounded-2xl ">
            <Image
              src={testProfile.image}
              alt="Profile"
              fill
              className="object-cover object-center aspect-[0.9] w-full h-full"
            />

            <div className="absolute z-0 inset-0 bg-gradient-to-b from-transparent to-primary-800/95 rounded-2xl" />

            {/* Progress match */}
            <div className="absolute z-10 top-0 right-0 p-4">
              <CircularProgress
                value={80}
                size="lg"
                showValueLabel
                classNames={{
                  base: "bg-white/30 rounded-full w-fit h-fit",
                  indicator: "text-white",
                  value: "text-white text-xs",
                }}
              />
            </div>

            {/* Profile info */}
            <div className="absolute z-10 bottom-0 left-0 right-0 p-4">
              <div className="flex gap-1 justify-center">
                <Button
                  isIconOnly
                  variant="light"
                  className="text-white"
                  radius="full"
                >
                  <Twitter />
                </Button>
                <Button
                  isIconOnly
                  variant="light"
                  className="text-white"
                  radius="full"
                >
                  <Instagram />
                </Button>
              </div>
              <h3 className="text-white text-2xl font-bold font-chalet text-center">
                {testProfile.name}
              </h3>
              <p className="text-white/80 font-semibold text-sm text-center tracking-[0.1rem]">
                {testProfile.location}
              </p>
            </div>

            {/* Emotion Overlay */}
            <div
              className={cn(
                "emotion-overlay flex items-center justify-center absolute inset-0 z-20",
                currentEmotion === "love" && "bg-primary-500/60",
                currentEmotion === "dislike" && "bg-gray-800/40",
                currentEmotion === "superLike" && "bg-orange-500/60"
              )}
            >
              {currentEmotionIcon()}
            </div>
          </div>
        </CardBody>
        <CardFooter className="flex flex-row gap-8 pb-6 justify-center items-center">
          <Button
            isIconOnly
            variant="solid"
            className="size-14 bg-white shadow-lg"
            radius="full"
            onPress={dislikeAction}
            isDisabled={currentEmotion !== "unset"}
          >
            <XIcon />
          </Button>
          <Button
            isIconOnly
            variant="solid"
            className="size-14 bg-primary-800 text-white shadow-lg"
            radius="full"
            onPress={superLikeAction}
            isDisabled={currentEmotion !== "unset"}
          >
            <StarIcon fill="white" />
          </Button>
          <Button
            isIconOnly
            variant="solid"
            className="size-14 bg-primary-500 text-white shadow-lg"
            radius="full"
            onPress={loveAction}
            isDisabled={currentEmotion !== "unset"}
          >
            <Heart fill="white" />
          </Button>
        </CardFooter>

        {/* Overlay */}
        <div className="overlay absolute top-0 left-0 h-full w-full bg-gradient-to-b to-secondary-800 from-primary-800 rounded-3xl" />
      </Card>
    </div>
  );
}
