import { useGetCurrentUser } from "@/services/users/hooks/useGetCurrentUser";
import { basicClient } from "@/services/graphqlService/client";
import { viemAdapter } from "thirdweb/adapters/viem";
import { somniaChain } from "@/constants/somniaChain";
import { useActiveWallet } from "thirdweb/react";

export const useViemClient = () => {
  const wallet = useActiveWallet();

  if (!wallet) throw new Error("Wallet not found");

  const viemClient = viemAdapter.wallet.toViem({
    client: basicClient,
    chain: somniaChain,
    wallet: wallet,
  });

  return viemClient;
};
