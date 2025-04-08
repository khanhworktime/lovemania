import Background from "@/assets/decors/matched-background.decor.png";
import { ChatIcon, SwipeIcon } from "@/assets/icons";
import { useGSAP } from "@gsap/react";
import { Button, CircularProgress } from "@heroui/react";
import gsap from "gsap";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { PropsWithChildren, useRef, useState } from "react";

export function MatchedNotification({ children }: PropsWithChildren) {
  const popupRef = useRef<HTMLDivElement>(null);
  // Not directly used, but used to trigger the popup
  const [isVisible, setIsVisible] = useState(false);

  // Handle visible popup
  // Initial state of popup
  const { contextSafe } = useGSAP(
    () => {
      // gsap.set(popupRef.current, {
      //   opacity: 0,
      //   display: "none",
      // });
      // setIsVisible(false);
    },
    { scope: popupRef }
  );

  // Handle visible popup
  const handleShowPopup = () => {
    gsap.to(popupRef.current, {
      opacity: 1,
      display: "block",
      duration: 0.5,
      ease: "power2.inOut",
    });
    setIsVisible(true);
  };

  const handleHidePopup = () => {
    gsap.to(popupRef.current, {
      opacity: 0,
      display: "none",
      duration: 0.5,
      ease: "power2.inOut",
    });
    setIsVisible(false);
  };

  return (
    <>
      {/* <Button
        className="fixed top-0 left-0 z-50"
        onPress={isVisible ? handleHidePopup : handleShowPopup}
      >
        {isVisible ? "Hide" : "Show"}
      </Button> */}
      {children}

      <div
        className="bg-secondary-200 overflow-y-auto pb-4 flex-col absolute top-0 left-0 w-full h-full hidden z-50"
        ref={popupRef}
      >
        <div className="flex-1 relative w-full h-full flex flex-col items-stretch p-4 gap-8">
          {/* Header */}
          <Button
            variant="bordered"
            className="size-10 border-1"
            radius="full"
            isIconOnly
            onPress={handleHidePopup}
          >
            <ChevronLeft />
          </Button>
          <h2 className="text-2xl font-chalet text-center">
            You and <span className="text-primary-400">Alfredo</span> liked each
            other !
          </h2>
          <div className="flex-grow">
            <div className="w-full h-[322px] relative">
              <Image
                src={Background}
                alt="matched-background"
                fill
                objectFit="cover"
              />

              {/* Matched couple */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center h-1/2 gap-4">
                {/* First matcher */}
                <div className="h-full from-secondary-400 to-primary-400 bg-gradient-to-br aspect-square rounded-tr-full rounded-tl-full rounded-bl-full p-2 overflow-hidden">
                  <div className="w-full h-full bg-red-500 rounded-[inherit]"></div>
                </div>

                {/* Second matcher */}
                <div className="h-full bg-white aspect-square rounded-tr-full rounded-tl-full rounded-br-full p-2 overflow-hidden">
                  <div className="w-full h-full bg-red-500 rounded-[inherit]"></div>
                </div>

                {/* Percentage */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary p-1 rounded-full aspect-square">
                  <CircularProgress
                    aria-label={`Match progress`}
                    value={90}
                    className=""
                    classNames={{
                      indicator: "stroke-primary-300",
                      svg: "size-[56px]",
                      track: "stroke-primary-100/30",
                      value: "text-white text-md font-semibold",
                    }}
                    showValueLabel
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col items-stretch gap-y-2 font-chalet py-12">
            <Button color="primary" radius="full" size="lg">
              <ChatIcon color="white" fill="none" />
              Send a message
            </Button>
            <Button
              className="bg-white text-secondary-500"
              radius="full"
              size="lg"
            >
              <SwipeIcon fill="white" color="#DD88CF" /> Keep swiping
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
