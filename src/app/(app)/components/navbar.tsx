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
    href: "/wallet",
    disabled: true,
  },
  {
    icon: PlusIcon,
    activeIcon: PlusIcon,
    href: "/create",
    disabled: true,
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
