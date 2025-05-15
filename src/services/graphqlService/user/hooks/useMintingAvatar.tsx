import { basicClient } from "@/providers/thirdweb.provider";
import { getNftProfileContract } from "@/services/contracts/nftProfile";
import { useGetCurrentUser } from "@/services/users/hooks/useGetCurrentUser";
import { useMutation } from "@tanstack/react-query";
import { mintWithSignature } from "thirdweb/extensions/erc721";
import { MetadataMintAvatarInput } from "../user.model";
import { userClient } from "../userClient";
import { getAvatarProfileContract } from "@/services/contracts/avatarProfile";

export default function useGetMintingAvatarTx() {
  const account = useGetCurrentUser();

  const { mutateAsync, data, isPending, error } = useMutation({
    mutationFn: async ({ metadata }: { metadata: MetadataMintAvatarInput }) => {
      if (!account?.address) throw new Error("Account not found");

      const { signature, payload } = await userClient.mintingAvatar({
        address: account.address,
        metadata,
      });

      const tx = mintWithSignature({
        contract: getAvatarProfileContract({ client: basicClient }),
        signature,
        payload,
      });

      return tx;
    },
  });

  return { mutateAsync, data, isPending, error };
}
