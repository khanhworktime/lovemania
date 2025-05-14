"use client";

import { useBodyAppColor } from "@/hooks/UseBodyAppColor";
import { Button, Card, CardBody, CardFooter } from "@heroui/react";
import { useTransitionRouter } from "next-view-transitions";
import { ChevronLeftIcon } from "lucide-react";
import { useGetOwnedNft } from "@/services/users/hooks/useGetOwnedNft";
import { MediaRenderer, NFTProvider } from "thirdweb/react";
import { basicClient } from "@/providers/thirdweb.provider";

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

  // Get all the NFTs owned by the user'

  const { data: nfts } = useGetOwnedNft();

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
      <div className="flex justify-between items-start gap-x-2 pt-4 pb-2 px-6 sticky top-0 inset-x-0 z-50">
        <Button
          variant="bordered"
          className="size-10 border-1"
          radius="full"
          isIconOnly
          onPress={() => {
            // Navigate to the wallet page with transition
            router.back();
          }}
        >
          <ChevronLeftIcon />
        </Button>
      </div>

      {/* Decorater */}
      <div className="absolute w-[30svw] aspect-square bg-blue-400/70 blur-3xl rounded-full -top-10 -right-10" />
      <div className="absolute w-[30svw] aspect-square bg-blue-200/50 blur-3xl rounded-full top-1/2 -left-10" />
      <div className="absolute w-[30svw] aspect-square bg-blue-500/60 blur-3xl rounded-full -bottom-10 left-1/2" />

      {/* Content */}
      <div className="mt-4 px-6">
        <h1 className="text-2xl font-bold font-chalet">Your NFT Portfolio</h1>
        <p className="text-sm font-medium text-slate-600">
          This is your NFT portfolio. You can see all of your NFTs here.
        </p>
      </div>

      <div className="px-6 grid grid-cols-2 gap-2 mt-6">
        {nfts?.map((item) => (
          <Card
            key={item.id}
            className="bg-white rounded-lg border-none shadow-none"
          >
            <CardBody>
              <MediaRenderer
                client={basicClient}
                src={item.metadata.image}
                alt={item.metadata.name}
                className="w-full aspect-square !object-cover rounded-xl"
              />
            </CardBody>
            <CardFooter>
              <h2 className="text-lg font-medium text-slate-600">
                {item.metadata.name}
              </h2>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
