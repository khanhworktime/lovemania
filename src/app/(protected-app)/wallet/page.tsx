"use client";
import { tokens } from "@/exampleData/data";
import { useBodyAppColor } from "@/hooks/UseBodyAppColor";
import { useProfileSBT } from "@/services/profileNft/hooks/useGetProfileNft";
import { basicClient } from "@/providers/thirdweb.provider";
import { WalletShortcut } from "@/shared-components/ui/Wallet/WalletShortcut";
import { Avatar, Button } from "@heroui/react";
import {
  ChevronLeftIcon,
  ChevronRight,
  ChevronUp,
  Download,
  Send,
  ShoppingCart,
} from "lucide-react";
import { useTransitionRouter } from "next-view-transitions";
import { resolveScheme } from "thirdweb/storage";
import { TokenItem } from "./components/TokenItem";

// Add this function before the component
function drawerTransition() {
  // Animate the drawer sliding up
  document.documentElement.animate(
    [
      {
        transform: "translateY(0)",
      },
      {
        transform: "translateY(-100%)",
      },
    ],
    {
      duration: 700,
      easing: "cubic-bezier(0.4, 0, 0.2, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(drawer)",
    }
  );

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

export default function WalletPage() {
  // Page transitions
  const router = useTransitionRouter();
  useBodyAppColor("#4B164C");
  // Balance
  const { sbt } = useProfileSBT();
  const profile = {
    image: sbt?.metadata.image
      ? resolveScheme({
          client: basicClient,
          uri: sbt?.metadata.image || "",
        })
      : null,
    name: sbt?.metadata.name,
  };
  return (
    <div className="flex-1 relative h-screen w-full flex flex-col items-stretch bg-[#4B164C]">
      <style jsx global>{`
        @keyframes slide-up {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-100%);
          }
        }

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
      <div className="flex justify-between items-start gap-x-2 pt-4 pb-2 px-6 sticky top-0 inset-x-0 z-50  backdrop-blur-sm text-white">
        <Button
          variant="bordered"
          className="size-10 border-1 border-white/10 text-white"
          radius="full"
          isIconOnly
          onPress={() => router.back()}
        >
          <ChevronLeftIcon />
        </Button>
        <div className="flex flex-col flex-grow items-center">
          <Avatar
            src={profile.image || undefined}
            className="size-16"
            radius="full"
          />
          <WalletShortcut
            classNames={{
              button: "text-white",
            }}
          />
          <h2 className="text-white text-lg font-medium">{profile.name}</h2>
        </div>
        <div className="size-[40px]" />
      </div>

      <div className="px-6 mt-2">
        <div className="bg-white rounded-3xl p-6 w-full">
          <p className="text-sm font-semibold text-foreground/30 mb-2">
            Your Balance
          </p>
          <div className="flex items-center justify-between gap-x-2 pb-4">
            <div className="text-3xl font-bold flex-grow">$32,453.08</div>
            <div className="bg-green-500 text-white flex items-center text-sm text-nowrap py-2 px-4 rounded-full">
              <ChevronUp className="size-4 text-white/40" /> 2.5%
            </div>
            <ChevronRight className="text-foreground/30" />
          </div>
          <div className="flex items-center justify-evenly pt-3">
            <div className="flex flex-col items-center gap-x-2">
              <Button
                variant="bordered"
                className="border-1 border-slate-100 text-green-500 size-14"
                radius="full"
                isIconOnly
              >
                <Send size={24} />
              </Button>
              <span>Send</span>
            </div>
            <div className="flex flex-col items-center gap-x-2">
              <Button
                variant="bordered"
                className="border-1 border-slate-100 text-blue-500 size-14"
                radius="full"
                isIconOnly
                onPress={() => router.push("/wallet/receive")}
              >
                <Download size={24} />
              </Button>
              <span>Receive</span>
            </div>
            <div className="flex flex-col items-center gap-x-2">
              <Button
                variant="bordered"
                className="border-1 border-slate-100 text-slate-500 size-14"
                radius="full"
                isIconOnly
              >
                <ShoppingCart size={24} />
              </Button>
              <span>Buy</span>
            </div>
          </div>
        </div>
      </div>

      <div className="drawer mt-2 bg-white rounded-t-3xl flex-grow">
        <div className="rounded-3xl p-6 w-full px-6">
          <div className="flex flex-row justify-center w-full">
            <div className="h-1 w-[50px] rounded-xl bg-foreground/30 -mt-2" />
          </div>

          {/* Tabs */}
          <div className="flex flex-row justify-center w-full mt-2">
            <div className="flex-1 text-xl font-medium text-center cursor-pointer">
              Tokens
            </div>
            <div
              className="flex-1 text-xl font-medium text-center text-black/40 cursor-pointer"
              onClick={() => {
                router.push("/wallet/nft", {
                  onTransitionReady: drawerTransition,
                });
              }}
            >
              NFT&apos;s
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch gap-y-3 px-2">
          {tokens.map((token) => (
            <TokenItem key={token.symbol} token={token} balance={100.08} />
          ))}
        </div>
      </div>
    </div>
  );
}
