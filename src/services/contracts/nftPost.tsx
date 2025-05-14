import { somniaChain } from "@/constants/somniaChain";
import { env } from "@/constants/env";
import { getContract, ThirdwebClient } from "thirdweb";

export function getNftPostContract({ client }: { client: ThirdwebClient }) {
  const contractAddress = env.NEXT_PUBLIC_NFT_POST_ADDRESS;

  const contract = getContract({
    address: contractAddress,
    client,
    chain: somniaChain,
  });

  return contract;
}
