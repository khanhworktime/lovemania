import { env } from "@/constants/env";
import { somniaChain } from "@/constants/somniaChain";
import { getContract, ThirdwebClient } from "thirdweb";

export function getNftProfileContract({ client }: { client: ThirdwebClient }) {
  const contractAddress = env.NEXT_PUBLIC_NFT_PROFILE_CONTRACT_ADDRESS;

  const contract = getContract({
    address: contractAddress,
    client,
    chain: somniaChain,
  });

  return contract;
}
