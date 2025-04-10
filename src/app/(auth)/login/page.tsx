"use client";

import Thumbnail from "@/assets/backgrounds/signup.background.png";
import { env } from "@/constants/env";
import { somniaChain } from "@/constants/somniaChain";
import { basicClient } from "@/providers/thirdweb.provider";
import GoogleIcon from "@/shared-components/icons/google.icon";
import WalletIcon from "@/shared-components/icons/wallet.icon";
import { Button, CircularProgress } from "@heroui/react";
import { useTransitionRouter } from "next-view-transitions";
import Image from "next/image";
import { useState } from "react";
import { useConnectModal } from "thirdweb/react";

export default function LoginPage() {
  const router = useTransitionRouter();
  const { connect } = useConnectModal();
  const [isLoading, setIsLoading] = useState(false);

  const handleConnect = async () => {
    setIsLoading(true);
    const wallet = await connect({
      client: basicClient,
      accountAbstraction: {
        factoryAddress: env.NEXT_PUBLIC_SOMNIA_FACTORY_ADDRESS,
        chain: somniaChain,
        sponsorGas: true,
      },
    });

    // SBT setup
    if (wallet) {
      setIsLoading(false);
      router.push("/onboarding/profile-name");
      // const account = wallet.getAccount();
      // if (!account) {
      //   setIsLoading(false);
      //   router.push("/onboarding/profile-name");
      //   return;
      // }

      // const sbt = await getOwnedNFTs({
      //   contract: getNftProfileContract({ client: basicClient }),
      //   owner: account.address,
      // });

      // if (sbt.length === 0) {
      //   setIsLoading(false);
      //   router.push("/onboarding/profile-name");
      //   return;
      // }

      // setIsLoading(false);
      // router.push("/home");
    }
  };

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
