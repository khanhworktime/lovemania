"use client";

import Thumbnail from "@/assets/backgrounds/signup.background.png";
import { client } from "@/providers/thirdweb.provider";
import GoogleIcon from "@/shared-components/icons/google.icon";
import WalletIcon from "@/shared-components/icons/wallet.icon";
import { Button } from "@heroui/react";
import { Link, useTransitionRouter } from "next-view-transitions";
import Image from "next/image";
import { useConnect } from "thirdweb/react";
import { createWallet, inAppWallet } from "thirdweb/wallets";

export default function LoginPage() {
  const router = useTransitionRouter();
  const { connect } = useConnect();

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
            onPress={async () => {
              const wallet = await connect(async () => {
                // instantiate wallet
                const wallet = createWallet("io.metamask");
                // connect wallet
                await wallet.connect({
                  client,
                });
                // return the wallet
                return wallet;
              });

              if (wallet) {
                router.push("/home");
              }
            }}
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
            onPress={async () => {
              const wallet = await connect(async () => {
                const wallet = inAppWallet();
                await wallet.connect({
                  client,
                  strategy: "google",
                });

                return wallet;
              });

              if (wallet) {
                router.push("/home");
              }
            }}
          >
            <div className="absolute left-2 rounded-full bg-white p-1">
              <GoogleIcon />
            </div>
            Login with Google
          </Button>
        </div>
      </div>
    </div>
  );
}
