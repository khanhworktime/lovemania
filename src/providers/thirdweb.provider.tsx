"use client";

import { env } from "@/constants/env";
import { createThirdwebClient } from "thirdweb";
import { ThirdwebProvider as ThirdwebProviderV5 } from "thirdweb/react";

// Create and export the client
export const basicClient = createThirdwebClient({
  clientId: env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID,
});

export function ThirdwebProvider({ children }: { children: React.ReactNode }) {
  return <ThirdwebProviderV5>{children}</ThirdwebProviderV5>;
}
