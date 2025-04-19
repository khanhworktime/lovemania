import { somniaChain } from "@/constants/somniaChain";
import { getContract, ThirdwebClient } from "thirdweb";

export function getAvatarProfileContract({
  client,
}: {
  client: ThirdwebClient;
}) {
  //   const contractAddress = env.NEXT_PUBLIC_NFT_PROFILE_CONTRACT_ADDRESS;

  const contract = getContract({
    address: "0xBFb124c48Df8a45A29b83416B862918280409678",
    client,
    chain: somniaChain,
  });

  return contract;
}
