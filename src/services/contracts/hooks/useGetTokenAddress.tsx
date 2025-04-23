import { useQuery } from "@tanstack/react-query";
import { useLocalStorage, useReadLocalStorage } from "usehooks-ts";
import { CONTRACT_KEY } from "../constants/queryKey";
import { STORAGE_KEY } from "../constants/storageKey";
import { env } from "@/constants/env";

export function useGetTokenAddress() {
  const [erc721Addresses] = useLocalStorage<string[]>(
    STORAGE_KEY.ERC721_CONTRACT,
    [
      env.NEXT_PUBLIC_NFT_PROFILE_CONTRACT_ADDRESS,
      env.NEXT_PUBLIC_AVATAR_CONTRACT_ADDRESS,
    ]
  );

  const [erc1155Addresses] = useLocalStorage<string[]>(
    STORAGE_KEY.ERC1155_CONTRACT,
    []
  );

  const [erc20Addresses] = useLocalStorage<string[]>(
    STORAGE_KEY.ERC20_CONTRACT,
    []
  );

  const { data: tokenAddresses } = useQuery({
    queryKey: [CONTRACT_KEY.STORAGE_CONTRACTS],
    queryFn: () => {
      return {
        erc721Addresses,
        erc1155Addresses,
        erc20Addresses,
      };
    },
  });

  return {
    tokenAddresses,
  };
}
