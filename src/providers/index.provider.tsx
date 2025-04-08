"use client";

import { HeroUIProvider, ToastProvider, ToastProps } from "@heroui/react";
import { ThirdwebProvider } from "./thirdweb.provider";
import MobileLayout from "@/shared-components/layouts/mobile.layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { MatchedNotification } from "@/shared-components/ui/MatchedNotification/MatchedNotification";

const queryClient = new QueryClient();

const toastConfig: Partial<ToastProps> = {
  radius: "md",
  variant: "flat",
};

export function MainProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThirdwebProvider>
        <HeroUIProvider>
          <ToastProvider placement="top-center" toastProps={toastConfig} />
          <MobileLayout>{children}</MobileLayout>
        </HeroUIProvider>
      </ThirdwebProvider>
    </QueryClientProvider>
  );
}
