import { env } from "@/constants/env";
import { somniaChain } from "@/constants/somniaChain";
import { basicClient } from "@/providers/thirdweb.provider";

import { AutoConnect } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container max-w-md overflow-x-hidden relative mx-auto bg-background min-h-svh h-svh">
      <AutoConnect
        client={basicClient}
        accountAbstraction={{
          factoryAddress: env.NEXT_PUBLIC_SOMNIA_FACTORY_ADDRESS,
          chain: somniaChain,
          sponsorGas: true,
        }}
        wallets={[createWallet("io.metamask")]}
      />
      {children}
    </div>
  );
}
