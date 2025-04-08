"use client";

import { MatchedNotification } from "@/shared-components/ui/MatchedNotification/MatchedNotification";
import { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <MatchedNotification>
      <div className="flex flex-col h-screen w-full">{children}</div>
    </MatchedNotification>
  );
}
