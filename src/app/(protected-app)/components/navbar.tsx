"use client";

import {
  HomeIcon,
  HomeOutlineIcon,
  MatchesPeopleIcon,
  MatchesPeopleOutlineIcon,
} from "@/assets/icons";
import { Button } from "@heroui/react";
import { MessageCircle, PlusIcon, Wallet } from "lucide-react";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { WalletProfile } from "./wallet-profile";
const navItems = [
  {
    icon: HomeOutlineIcon,
    activeIcon: HomeIcon,
    href: "/home",
    disabled: false,
  },
  {
    icon: Wallet,
    activeIcon: Wallet,
    display: <WalletProfile />,
    disabled: false,
    href: "#",
  },
  {
    icon: PlusIcon,
    activeIcon: PlusIcon,
    href: "/post/create/image",
    disabled: false,
  },
  {
    icon: MatchesPeopleOutlineIcon,
    activeIcon: MatchesPeopleIcon,
    href: "/matches",
    disabled: false,
  },
  {
    icon: MessageCircle,
    activeIcon: MessageCircle,
    href: "/messages",
    disabled: false,
  },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useTransitionRouter();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pb-4 ">
      <div className="w-fit mx-auto flex items-center justify-center gap-5 bg-white rounded-full p-2 drop-shadow-lg">
        {navItems.map((item) => {
          const isActive = pathname.includes(item.href);

          if (item.display) {
            return (
              <div
                key={`${item.href}`}
                className="flex items-center justify-center"
              >
                {item.display}
              </div>
            );
          }

          return (
            <Button
              key={item.href}
              isIconOnly
              radius="full"
              size="lg"
              suppressHydrationWarning
              color="secondary"
              variant={isActive ? "solid" : "light"}
              onPress={() => {
                if (item.disabled) return;
                router.push(item.href);
              }}
            >
              {isActive ? (
                <item.activeIcon fill="white" color="white" />
              ) : (
                <item.icon color="#4B164C" className="opacity-50" />
              )}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
