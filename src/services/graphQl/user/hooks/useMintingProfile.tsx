import { basicClient } from "@/providers/thirdweb.provider";
import { getNftProfileContract } from "@/services/contracts/nftProfile";
import { useGetCurrentUser } from "@/services/users/hooks/useGetCurrentUser";
import { useMutation } from "@tanstack/react-query";
import { sendTransaction } from "thirdweb";
import { mintWithSignature } from "thirdweb/extensions/erc721";
import { MetadataInput } from "../user.model";
import { userClient } from "../userClient";

export default function useMintingProfile() {
  const account = useGetCurrentUser();

  const { mutateAsync, data, isPending, error } = useMutation({
    mutationFn: async ({ metadata }: { metadata: MetadataInput }) => {
      if (!account?.address) return;

      const { signature, payload } = await userClient.mintingProfile({
        address: account.address,
        metadata,
      });

      const tx = mintWithSignature({
        contract: getNftProfileContract({ client: basicClient }),
        signature,
        payload,
      });

      await sendTransaction({
        transaction: tx,
        account: account,
      });

      return tx;
    },
  });

  return { mutateAsync, data, isPending, error };
}
