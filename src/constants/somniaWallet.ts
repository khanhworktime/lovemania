import { createWallet, smartWallet } from "thirdweb/wallets";
import { env } from "./env";

import { somniaChain } from "./somniaChain";
import { basicClient } from "@/providers/thirdweb.provider";

export async function createSomniaWallet() {
  const metamaskWallet = createWallet("io.metamask");
  const personalAccount = await metamaskWallet.connect({
    client: basicClient,
    chain: somniaChain,
  });

  const pA = personalAccount;

  // Then, connect the Smart Account
  const wallet = smartWallet({
    chain: somniaChain, // the chain where your account will be or is deployed
    factoryAddress: env.NEXT_PUBLIC_SOMNIA_FACTORY_ADDRESS, // your own deployed account factory address
    sponsorGas: true,
  });

  await wallet.connect({
    client: basicClient,
    personalAccount: pA,
  });

  return wallet;
}

export const somniaWallet = createSomniaWallet();
