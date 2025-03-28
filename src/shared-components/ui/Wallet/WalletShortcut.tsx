"use client";

import { useGetCurrentUser } from "@/services/users/hooks/useGetCurrentUser";
import { addToast, Button, cn } from "@heroui/react";
import { CopyCheck, CopyIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useActiveWallet } from "thirdweb/react";

interface WalletShortcutProps {
  classNames?: {
    container?: string;
    text?: string;
    button?: string;
  };
}

export function WalletShortcut({ classNames }: WalletShortcutProps) {
  const account = useGetCurrentUser();
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => setIsCopied(false), 1000);
    }
  }, [isCopied]);

  if (!account) return null;

  const firstPart = account?.address.slice(0, 4);
  const lastPart = account?.address.slice(-4);

  return (
    <div className={cn("flex items-center", classNames?.container)}>
      <div className={cn("font-medium text-lg", classNames?.text)}>
        {firstPart}...{lastPart}
      </div>
      <Button
        className={cn("", classNames?.button)}
        variant="light"
        isIconOnly
        radius="full"
        onPress={() => {
          navigator.clipboard.writeText(account?.address || "");
          addToast({
            title: "Copied to clipboard",
            description: "You can now paste it anywhere",
            icon: <CopyIcon />,
          });
          setIsCopied(true);
        }}
      >
        {isCopied ? <CopyCheck size={22} /> : <CopyIcon size={22} />}
      </Button>
    </div>
  );
}
