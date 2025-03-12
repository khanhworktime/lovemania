"use client";

import { HeroUIProvider } from "@heroui/react";
import { ThirdwebProvider } from "./thirdweb.provider";
import MobileLayout from "@/shared-components/layouts/mobile.layout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function MainProvider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThirdwebProvider>
        <HeroUIProvider>
          <MobileLayout>{children}</MobileLayout>
        </HeroUIProvider>
      </ThirdwebProvider>
    </QueryClientProvider>
  );
}
