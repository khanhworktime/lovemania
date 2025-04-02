"use client";

import { ChevronLeftIcon } from "lucide-react";
import { Button } from "@heroui/react";
import { useTransitionRouter } from "next-view-transitions";

export default function ReceivePage() {
  const router = useTransitionRouter();
  return (
    <div className="flex-1 relative h-screen w-full flex flex-col items-stretch">
      <div className="flex justify-between items-start gap-x-2 pt-4 pb-2 px-6 sticky top-0 inset-x-0 z-50  backdrop-blur-sm text-white">
        <Button
          variant="bordered"
          className="size-10 border-1 border-white/10 text-white"
          radius="full"
          isIconOnly
          onPress={() => router.back()}
        >
          <ChevronLeftIcon />
        </Button>
      </div>
    </div>
  );
}
