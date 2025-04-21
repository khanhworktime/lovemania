import { basicClient } from "@/providers/thirdweb.provider";
import { getNftProfileContract } from "@/services/contracts/nftProfile";
import { useGetCurrentUser } from "@/services/users/hooks/useGetCurrentUser";
import { useMutation, useQuery } from "@tanstack/react-query";
import { mintWithSignature } from "thirdweb/extensions/erc721";
import { MetadataMintProfileInput } from "../user.model";
import { userClient } from "../userClient";

export default function useGetMintingProfileTx({
  metadata,
  enabled = false,
}: {
  metadata: MetadataMintProfileInput;
  enabled?: boolean;
}) {
  const account = useGetCurrentUser();

  const { data, isPending, error, refetch } = useQuery({
    queryKey: ["mintingProfile", metadata, enabled],
    queryFn: async () => {
      if (!account?.address) throw new Error("Account not found");

      const { signature, payload } = await userClient.mintingProfile({
        address: account.address,
        metadata,
      });

      const tx = mintWithSignature({
        contract: getNftProfileContract({ client: basicClient }),
        signature,
        payload,
      });

      // await sendTransaction({
      //   transaction: tx,
      //   account: account,
      // });

      return tx;
    },
    enabled: !!account?.address && !!metadata && enabled,
  });

  return { data, isPending, error, refetch };
}
