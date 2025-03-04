"use client";

import { HeroUIProvider } from "@heroui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThirdwebProvider } from "./thirdweb.provider";
import MobileLayout from "@/shared-components/layouts/mobile.layout";

const queryClient = new QueryClient();

export function MainProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProvider>
      <QueryClientProvider client={queryClient}>
        <HeroUIProvider>
          <MobileLayout>{children}</MobileLayout>
        </HeroUIProvider>
      </QueryClientProvider>
    </ThirdwebProvider>
  );
}
