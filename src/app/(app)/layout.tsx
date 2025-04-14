"use client";

import { basicClient } from "@/providers/thirdweb.provider";
import { MatchedNotification } from "@/shared-components/ui/MatchedNotification/MatchedNotification";
import { PropsWithChildren } from "react";
import { ConnectEmbed } from "thirdweb/react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <MatchedNotification>
      <div className="flex flex-col h-screen w-full">{children}</div>
    </MatchedNotification>
  );
}
