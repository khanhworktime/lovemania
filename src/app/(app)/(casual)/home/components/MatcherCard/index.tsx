import { useGSAP } from "@gsap/react";
import { Button, Card, CardBody, CardFooter, cn } from "@heroui/react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { Heart, StarIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(CustomEase);

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

  useGSAP(
    () => {
      if (currentDisplay) {
        const tl = gsap.timeline();
        tl.to(containerRef.current, {
          zIndex: 10,
          scale: 1,
          rotateZ: 0,
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "power2.inOut",
        });

        tl.to(
          ".overlay",
          {
            opacity: 0,
            display: "none",
            duration: 0.5,
            ease: "power2.inOut",
          },
          "<"
        );
      }
    },
    { scope: containerRef, dependencies: [currentDisplay] }
  );

  const loveAction = thisContext(() => {
    const tl = gsap.timeline();
    setCurrentDisplay(!currentDisplay);
    tl.to(containerRef.current, {
      x: "140%",
      rotateZ: 30,
      duration: 0.5,
      ease: "in",
    });

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

    tl.to(containerRef.current, {
      scale: 0.8,
      y: "15%",
      duration: 0.5,
      ease: "out",
    });
  });

  const dislikeAction = thisContext(() => {
    const tl = gsap.timeline();
    setCurrentDisplay(!currentDisplay);
    tl.to(containerRef.current, {
      x: "-140%",
      rotateZ: -30,
      duration: 0.5,
      ease: "in",
    });

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

    tl.to(containerRef.current, {
      scale: 0.8,
      y: "15%",
      duration: 0.5,
      ease: "out",
    });
  });

  const superLikeAction = thisContext(() => {
    const tl = gsap.timeline();
    setCurrentDisplay(!currentDisplay);
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
      <Card className="w-full h-full rounded-3xl" as={"div"}>
        <CardBody>
          {/* Card main */}
          <div className="flex flex-col items-center justify-center gap-y-4">
            <div className="relative w-full aspect-[0.9] overflow-hidden rounded-2xl ">
              <Image
                src={testProfile.image}
                alt="Profile"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-800/95 rounded-2xl" />
            </div>
          </div>
        </CardBody>
        <CardFooter className="flex flex-row gap-8 py-6 justify-center items-center ">
          <Button
            isIconOnly
            variant="solid"
            className="size-14 bg-white shadow-lg"
            radius="full"
            onPress={dislikeAction}
          >
            <XIcon />
          </Button>
          <Button
            isIconOnly
            variant="solid"
            className="size-14 bg-primary-800 text-white shadow-lg"
            radius="full"
            onPress={superLikeAction}
          >
            <StarIcon fill="white" />
          </Button>
          <Button
            isIconOnly
            variant="solid"
            className="size-14 bg-primary-500 text-white shadow-lg"
            radius="full"
            onPress={loveAction}
          >
            <Heart fill="white" />
          </Button>
        </CardFooter>
      </Card>

      {/* Overlay */}
      <div className="overlay absolute inset-0 bg-gradient-to-b to-secondary-800 from-primary-800 rounded-3xl" />
    </div>
  );
}
