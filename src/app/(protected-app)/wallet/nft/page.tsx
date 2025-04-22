"use client";

import { useBodyAppColor } from "@/hooks/UseBodyAppColor";
import { Button } from "@heroui/react";
import { useTransitionRouter } from "next-view-transitions";
import { ChevronLeftIcon } from "lucide-react";

// Add reverse drawer transition
function reverseDrawerTransition() {
  // Animate current view sliding up
  document.documentElement.animate(
    [
      {
        transform: "translateY(0)",
      },
      {
        transform: "translateY(100%)",
      },
    ],
    {
      duration: 700,
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(drawer)",
    }
  );

  // Animate previous view sliding down
  document.documentElement.animate(
    [
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
      },
    ],
    {
      duration: 700,
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(drawer)",
    }
  );
}

export default function NftPage() {
  const router = useTransitionRouter();
  useBodyAppColor("#fff");
  return (
    <div className="drawer flex-1 relative h-screen w-full flex flex-col items-stretch">
      <style jsx global>{`
        .drawer {
          view-transition-name: drawer;
        }

        ::view-transition-old(drawer),
        ::view-transition-new(drawer) {
          animation: none;
          mix-blend-mode: normal;
          height: 100%;
          transform-origin: center;
        }
      `}</style>
      <div className="flex justify-between items-start gap-x-2 pt-4 pb-2 px-6 sticky top-0 inset-x-0 z-50  backdrop-blur-sm">
        <Button
          variant="bordered"
          className="size-10 border-1"
          radius="full"
          isIconOnly
          onPress={() => {
            // Navigate to the wallet page with transition
            router.push("/wallet", {
              onTransitionReady: reverseDrawerTransition,
            });
          }}
        >
          <ChevronLeftIcon />
        </Button>
      </div>
    </div>
  );
}
