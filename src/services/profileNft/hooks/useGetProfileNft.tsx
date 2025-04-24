import { basicClient } from "@/providers/thirdweb.provider";
import { getNftProfileContract } from "@/services/contracts/nftProfile";
import { useQuery } from "@tanstack/react-query";
import { getOwnedNFTs } from "thirdweb/extensions/erc721";
import { useActiveAccount } from "thirdweb/react";
import { QUERY_KEY } from "../constants/queryKey";

export function useProfileSBT() {
  const account = useActiveAccount();

  const currentQueryKey = [QUERY_KEY.NFT_PROFILE, account?.address];

  const { data: nfts, isLoading } = useQuery({
    queryKey: currentQueryKey,
    queryFn: async () => {
      if (!account) throw new Error("Account not found");

      const nfts = await getOwnedNFTs({
        contract: getNftProfileContract({ client: basicClient }),
        owner: account.address,
      });
      return nfts;
    },
    enabled: !!account,
  });

  return { sbt: nfts?.[0] || null, isLoading };
}
