"use client";

import { MatchedNotification } from "@/shared-components/ui/MatchedNotification/MatchedNotification";
import { storageKeys } from "@/services/graphQl/authentication/constants/storage.key";
import { addToast } from "@heroui/react";
import { useTransitionRouter } from "next-view-transitions";
import { PropsWithChildren, useEffect } from "react";
import { useActiveAccount } from "thirdweb/react";

export default function Layout({ children }: PropsWithChildren) {
  const router = useTransitionRouter();
  const account = useActiveAccount();

  useEffect(() => {
    if (!account) {
      addToast({
        title: "You need to connect your wallet",
        description: "Please connect your wallet to continue",
        variant: "flat",
      });
      sessionStorage.removeItem(storageKeys.TOKEN);
      sessionStorage.removeItem(storageKeys.USER_DATA);
      router.replace("/login");
    }
  }, [account, router]);

  return (
    <MatchedNotification>
      <div className="flex flex-col h-screen w-full">{children}</div>
    </MatchedNotification>
  );
}
