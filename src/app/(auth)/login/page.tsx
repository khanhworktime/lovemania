"use client";

import Thumbnail from "@/assets/backgrounds/signup.background.png";
import { storageKeys } from "@/services/graphQl/authentication/constants/storage.key";
import { useLoginServer } from "@/services/graphQl/authentication/hooks/useLoginServer";
import { IUser } from "@/services/graphQl/user/user.model";
import GoogleIcon from "@/shared-components/icons/google.icon";
import WalletIcon from "@/shared-components/icons/wallet.icon";
import { sleep } from "@/utils/sleep";
import { validateJwtToken } from "@/utils/validateJwtToken";
import { addToast, Button, CircularProgress } from "@heroui/react";
import { useTransitionRouter } from "next-view-transitions";
import Image from "next/image";
import { useState } from "react";
import { useIsomorphicLayoutEffect, useSessionStorage } from "usehooks-ts";

export default function LoginPage() {
  const router = useTransitionRouter();
  const [isLoading, setIsLoading] = useState(false);

  // First time login always remove local token

  const { loginAsync, isPending } = useLoginServer();

  const handleConnect = async () => {
    setIsLoading(true);
    try {
      const result = await loginAsync();
      if (result?.user) {
        router.push("/home");
      } else {
        if (result?.token) {
          router.push("/onboarding/profile-name");
        }

        // Wait a second after route to make sure the token is set
        await sleep(1000);
      }
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

  const [token, setToken] = useSessionStorage<string | null>(
    storageKeys.TOKEN,
    null
  );

  const [userData, setUserData] = useSessionStorage<IUser | null>(
    storageKeys.USER_DATA,
    null
  );

  useIsomorphicLayoutEffect(() => {
    if (token && !isLoading && !isPending) {
      const isValid = validateJwtToken(token);
      if (isValid) {
        if (userData) {
          router.push("/home");
        } else {
          router.push("/onboarding/profile-name");
        }
      } else {
        setToken(null);
        setUserData(null);
      }
    }
  }, [router, token, isLoading]);

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
