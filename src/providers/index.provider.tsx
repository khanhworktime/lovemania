"use client";

import MobileLayout from "@/shared-components/layouts/mobile.layout";
import { HeroUIProvider, ToastProps, ToastProvider } from "@heroui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThirdwebProvider } from "./thirdweb.provider";

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
