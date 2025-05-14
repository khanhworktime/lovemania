"use client";

import { MatchedNotification } from "@/shared-components/ui/MatchedNotification/MatchedNotification";
import { storageKeys } from "@/services/graphql/authentication/constants/storage.key";
import { addToast } from "@heroui/react";
import { useTransitionRouter } from "next-view-transitions";
import { PropsWithChildren, useEffect } from "react";
import { useActiveAccount, useConnectionManager } from "thirdweb/react";
import { DISCOVERY_STORAGE_KEY } from "@/services/graphql/discovery/constants/storageKey";
import { useQueryClient } from "@tanstack/react-query";
import { ApolloClientWrapper } from "@/services/graphql/config/baseClass";

export default function Layout({ children }: PropsWithChildren) {
  const router = useTransitionRouter();
  const account = useActiveAccount();
  const connectionManager = useConnectionManager();

  const client = useQueryClient();

  useEffect(() => {
    if (connectionManager.isAutoConnecting) {
      return;
    }

    if (!account) {
      addToast({
        title: "You need to connect your wallet",
        description: "Please connect your wallet to continue",
        variant: "flat",
      });
      sessionStorage.removeItem(storageKeys.TOKEN);
      sessionStorage.removeItem(storageKeys.USER_DATA);
      localStorage.removeItem(DISCOVERY_STORAGE_KEY.CURRENT_USER_INTERACTING);

      client.clear();
      client.resetQueries();

      ApolloClientWrapper.resetInstance();

      router.replace("/login");
    }
  }, [account, router, connectionManager.isAutoConnecting]);

  return (
    <MatchedNotification>
      <div className="flex flex-col h-screen w-full">{children}</div>
    </MatchedNotification>
  );
}
