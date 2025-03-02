"use client";

import { HeroUIProvider } from "@heroui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThirdwebProvider } from "./thirdweb.provider";
const queryClient = new QueryClient();

export function MainProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProvider>
      <QueryClientProvider client={queryClient}>
        <HeroUIProvider>{children}</HeroUIProvider>
      </QueryClientProvider>
    </ThirdwebProvider>
  );
}
