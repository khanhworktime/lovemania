import { somniaChain } from "@/constants/somniaChain";
import { basicClient } from "@/providers/thirdweb.provider";
import { useGetTokenAddress } from "@/services/contracts/hooks/useGetTokenAddress";
import { useQuery } from "@tanstack/react-query";
import { getContract, NFT } from "thirdweb";
import { getOwnedNFTs } from "thirdweb/extensions/erc721";
import { useActiveAccount } from "thirdweb/react";
import { QUERY_KEY } from "../constants/queryKey";
export function useGetOwnedNft() {
  const account = useActiveAccount();

  const { tokenAddresses } = useGetTokenAddress();

  const { data: nfts } = useQuery({
    queryKey: [QUERY_KEY.OWNED_NFT],
    queryFn: async () => {
      if (!account) throw new Error("No account found");

      const result: NFT[] = [];

      // Join all addresses into a single array
      const allAddresses = [
        ...(tokenAddresses?.erc721Addresses || []),
        ...(tokenAddresses?.erc1155Addresses || []),
      ];

      // Loop through all addresses and get owned NFTs
      for (const address of allAddresses) {
        try {
          const contract = getContract({
            address: address as string,
            client: basicClient,
            chain: somniaChain,
          });
          const ownedNfts = await getOwnedNFTs({
            contract,
            owner: account.address,
          });

          if (ownedNfts && ownedNfts.length > 0) {
            result.push(...ownedNfts);
          }
        } catch (error) {
          console.error(`Error fetching NFTs for contract ${address}:`, error);
        }
      }

      return result;
    },
  });

  return {
    data: nfts,
  };
}
