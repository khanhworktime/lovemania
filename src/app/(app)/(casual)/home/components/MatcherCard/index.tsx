import { IUser } from "@/interfaces/user.model";
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
import { useRef, useState, useEffect } from "react";

gsap.registerPlugin(CustomEase);

interface MatcherCardProps {
  user: IUser;
  nextUser: () => void;
}

gsap.registerEase("cardSuperLike", (progress) => {
  return Math.pow(progress, 2) * (3 - 2 * progress);
});

export function MatcherCard({ user, nextUser }: MatcherCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const pseudoCardRef = useRef<HTMLDivElement>(null);

  // Update pseudo card height when container height changes
  useEffect(() => {
    const updatePseudoHeight = () => {
      if (containerRef.current && pseudoCardRef.current) {
        pseudoCardRef.current.style.height = `${containerRef.current.offsetHeight}px`;
      }
    };

    updatePseudoHeight();
    // Update on window resize as well
    window.addEventListener("resize", updatePseudoHeight);
    return () => window.removeEventListener("resize", updatePseudoHeight);
  }, []);

  // This is the context for the card
  const { contextSafe: thisContext } = useGSAP({
    scope: containerRef,
  });

  // Currently shown Emotion
  const [currentEmotion, setCurrentEmotion] = useState<
    "love" | "dislike" | "superLike" | "unset"
  >("unset");

  // This is the timeline for the card when it is the first card
  useGSAP(
    () => {
      const tl = gsap.timeline();
      if (currentEmotion === "unset") {
        tl.to(".overlay", {
          opacity: 0,

          display: "none",
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: () => {
            setCurrentEmotion("unset");
          },
        });
        tl.set(pseudoCardRef.current, {
          opacity: 1,
          zIndex: 0,
        });
        tl.to(pseudoCardRef.current, {
          scale: 0.8,
          y: "15%",
          duration: 0.5,
          ease: "out",
        });
      }
    },
    { scope: containerRef, dependencies: [currentEmotion] }
  );

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
    setCurrentEmotion("love");

    tl.set(containerRef.current, {
      zIndex: 20,
    });
    tl.to(
      ".emotion-overlay",
      {
        opacity: 1,
        display: "flex",
        duration: 0.4,
      },
      "<"
    );
    tl.to(
      containerRef.current,
      {
        x: "300%",
        rotateZ: 30,
        duration: 0.7,
        opacity: 0,
        ease: "power2.inOut",
        onComplete: () => {
          nextUser();
        },
      },
      "<+0.2"
    );

    tl.to(
      pseudoCardRef.current,
      {
        scale: 1,
        y: 0,
        duration: 0.5,
        zIndex: 60,
        ease: "power2.inOut",
      },
      "<"
    );

    tl.set(".overlay", {
      display: "block",
      opacity: 0,
    });
    tl.set(".emotion-overlay", {
      opacity: 0,
      display: "none",
    });

    tl.set(containerRef.current, {
      x: "0",
      y: "0",
      opacity: 1,
      rotateZ: 0,
      zIndex: 20,
    });

    tl.to(
      pseudoCardRef.current,
      {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          setCurrentEmotion("unset");
        },
      },
      "<"
    );
  });

  // Click dislike action
  const dislikeAction = thisContext(() => {
    const tl = gsap.timeline();
    setCurrentEmotion("dislike");

    tl.set(containerRef.current, {
      zIndex: 50,
    });
    tl.to(
      ".emotion-overlay",
      {
        opacity: 1,
        display: "flex",
        duration: 0.4,
      },
      "<"
    );
    tl.to(
      containerRef.current,
      {
        x: "-300%",
        rotateZ: -30,
        duration: 0.7,
        opacity: 0,
        ease: "power2.inOut",
        onComplete: () => {
          nextUser();
        },
      },
      "<+0.2"
    );
    tl.to(
      pseudoCardRef.current,
      {
        scale: 1,
        y: 0,
        duration: 0.5,
        zIndex: 60,
        ease: "power2.inOut",
      },
      "<"
    );

    tl.set(".overlay", {
      display: "block",
      opacity: 0,
    });
    tl.set(".emotion-overlay", {
      opacity: 0,
      display: "none",
    });

    tl.set(containerRef.current, {
      x: "0",
      y: "0",
      opacity: 1,
      rotateZ: 0,
      zIndex: 20,
    });

    tl.to(
      pseudoCardRef.current,
      {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          setCurrentEmotion("unset");
        },
      },
      "<"
    );
  });

  // Click super like action
  const superLikeAction = thisContext(() => {
    const tl = gsap.timeline();
    setCurrentEmotion("superLike");

    tl.set(containerRef.current, {
      zIndex: 50,
    });
    tl.to(
      ".emotion-overlay",
      {
        opacity: 1,
        display: "flex",
        duration: 0.4,
      },
      "<"
    );
    tl.to(
      containerRef.current,
      {
        y: "-150svh",
        zIndex: 50,
        duration: 0.7,
        opacity: 0,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0.271,-0.476 0.403,0.924 1,0.924 "
        ),
        onComplete: () => {
          nextUser();
        },
      },
      "<+0.2"
    );
    tl.to(
      pseudoCardRef.current,
      {
        scale: 1,
        y: 0,
        duration: 0.5,
        zIndex: 60,
        ease: "power2.inOut",
      },
      "<"
    );

    tl.set(".overlay", {
      display: "block",
      opacity: 0,
    });
    tl.set(".emotion-overlay", {
      opacity: 0,
      display: "none",
    });

    tl.set(containerRef.current, {
      x: "0",
      y: "0",
      opacity: 1,
      rotateZ: 0,
      zIndex: 20,
    });

    tl.to(
      pseudoCardRef.current,
      {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        onComplete: () => {
          setCurrentEmotion("unset");
        },
      },
      "<"
    );
  });

  return (
    <>
      <div className={cn("w-full h-fit relative")}>
        <div
          ref={containerRef}
          className="absolute top-0 left-0 w-full h-fit will-change-transform rounded-3xl z-10"
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
                  src={user.image}
                  alt="Profile"
                  fill
                  className="object-cover object-center aspect-[0.9] w-full h-full"
                />

                <div className="absolute z-0 inset-0 bg-gradient-to-b from-transparent to-primary-800/95 rounded-2xl" />

                {/* Progress match */}
                <div className="absolute z-10 top-0 right-0 p-4">
                  <CircularProgress
                    aria-label="Progress match"
                    value={user.matchesPercentage}
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
                    {user.name}
                  </h3>
                  <p className="text-white/80 font-semibold text-sm text-center tracking-[0.1rem]">
                    {user.location}
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
            <div className="overlay absolute top-0 left-0 h-full w-full bg-gradient-to-b to-secondary-800 from-primary-800 rounded-3xl z-50" />
          </Card>
        </div>
        <div
          ref={pseudoCardRef}
          className="absolute top-0 left-0 w-full h-full rounded-3xl bg-gradient-to-b to-secondary-800 from-primary-800"
        />
      </div>
    </>
  );
}
