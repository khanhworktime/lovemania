"use client";

import { ChevronLeftIcon } from "lucide-react";
import { Button } from "@heroui/react";
import { useTransitionRouter } from "next-view-transitions";
import { useBodyAppColor } from "@/hooks/UseBodyAppColor";
import QRCode from "react-qr-code";
import QRCodeBgDecor from "@/assets/decors/qrcode-bg.decor.png";
import Image from "next/image";
import { useGetCurrentUser } from "@/services/users/hooks/useGetCurrentUser";
import { WalletShortcut } from "@/shared-components/ui/Wallet/WalletShortcut";
export default function ReceivePage() {
  const router = useTransitionRouter();
  useBodyAppColor("#fff");

  const account = useGetCurrentUser();

  return (
    <div className="flex-1 relative h-screen w-full flex flex-col items-stretch ">
      <div className="flex justify-between items-start gap-x-2 pt-4 pb-2 px-6 sticky top-0 inset-x-0 z-50  backdrop-blur-sm">
        <Button
          variant="bordered"
          className="size-10 border-1"
          radius="full"
          isIconOnly
          onPress={() => router.back()}
        >
          <ChevronLeftIcon />
        </Button>
      </div>

      <div className="flex-1 flex flex-col items-center gap-y-12">
        <div>
          <div className="text-2xl font-medium font-chalet text-center">
            Receive Payment
          </div>
          <div className="text-sm font-medium text-black/40 text-center">
            Scan the QR code to receive payment
          </div>
        </div>
        <div className="w-[75%]">
          <div
            className="flex flex-col items-center justify-center p-3 aspect-square rounded-2xl"
            style={{
              backgroundImage: `url(${QRCodeBgDecor.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="rounded-xl bg-white p-8">
              <QRCode value={account?.address || ""} />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-2">
          <WalletShortcut />
        </div>
      </div>
    </div>
  );
}
