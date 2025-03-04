"use client";

import Thumbnail from "@/assets/backgrounds/signup.background.png";
import Image from "next/image";
import { Button } from "@heroui/react";
import GoogleIcon from "@/shared-components/icons/google.icon";
import WalletIcon from "@/shared-components/icons/wallet.icon";
import { Link } from "next-view-transitions";

export default function SignupPage() {
  return (
    <div className="relative flex flex-col items-center justify-between gap-y-10">
      <div />
      <Image
        src={Thumbnail}
        alt="Signup Background"
        className="object-cover w-full"
      />

      <div className="flex flex-col items-center justify-center gap-y-10">
        <div className="px-12">
          <h1 className="text-2xl font-chalet text-center">
            Let's meeting new people around you
          </h1>
        </div>

        {/* Actions */}
        <div className="flex flex-col items-center justify-center gap-y-4 font-chalet w-full px-10">
          <Button
            radius="full"
            className="w-full bg-primary text-primary-foreground"
            size="lg"
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
          >
            <div className="absolute left-2 rounded-full bg-white p-1">
              <GoogleIcon />
            </div>
            Login with Google
          </Button>
        </div>
      </div>
      {/* Description */}

      <p className="text-center">
        Don't have an account?{" "}
        <Link href="/login" className="text-primary-300 font-medium">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
