"use client";

import Thumbnail from "@/assets/backgrounds/signup.background.png";
import { env } from "@/constants/env";
import { somniaChain } from "@/constants/somniaChain";
import { basicClient } from "@/providers/thirdweb.provider";
import { storageKeys } from "@/services/graphQl/authentication/constants/storage.key";
import { useLoginServer } from "@/services/graphQl/authentication/hooks/useLoginServer";
import GoogleIcon from "@/shared-components/icons/google.icon";
import WalletIcon from "@/shared-components/icons/wallet.icon";
import { addToast, Button, CircularProgress } from "@heroui/react";
import { useTransitionRouter } from "next-view-transitions";
import Image from "next/image";
import { useState } from "react";
import { useIsomorphicLayoutEffect } from "usehooks-ts";

export default function LoginPage() {
  const router = useTransitionRouter();
  const [isLoading, setIsLoading] = useState(false);

  // First time login always remove local token

  const { startLogin, walletLoginData } = useLoginServer();

  const handleConnect = async () => {
    setIsLoading(true);
    try {
      await startLogin();
    } catch (error) {
      addToast({
        title: "Error",
        description: "Failed to login",
        color: "danger",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useIsomorphicLayoutEffect(() => {
    if (walletLoginData) {
      if (walletLoginData.user !== null) {
        router.push("/home");
      } else {
        router.push("/onboarding/profile-name");
      }
    }
  }, [walletLoginData]);

  return (
    <div className="relative flex flex-col items-center justify-between gap-y-10 h-full pb-4">
      <div className="p-8">
        <Image
          src={Thumbnail}
          alt="Signup Background"
          className="object-cover object-center flex-grow"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-y-10">
        <div className="px-12">
          <h1 className="text-2xl font-chalet text-center">
            Let&apos;s meeting new people around you
          </h1>
        </div>

        {/* Actions */}
        <div className="flex flex-col items-center justify-center gap-y-4 font-chalet w-full px-10">
          <Button
            radius="full"
            className="w-full bg-primary text-primary-foreground"
            size="lg"
            onPress={handleConnect}
          >
            <div className="absolute left-2 rounded-full bg-white p-1">
              <WalletIcon />
            </div>
            Login with Wallet
          </Button>
          <Button
            radius="full"
            className="w-full bg-secondary-50 text-primary relative"
            size="lg"
            onPress={handleConnect}
          >
            <div className="absolute left-2 rounded-full bg-white p-1">
              <GoogleIcon />
            </div>
            Login with Google
          </Button>
        </div>
      </div>

      {isLoading && (
        <div className="absolute z-[60] inset-0 h-svh flex items-center justify-center bg-black/50">
          <CircularProgress />
        </div>
      )}
    </div>
  );
}
