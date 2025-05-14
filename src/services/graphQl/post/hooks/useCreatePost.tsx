import { useMutation, useQueryClient } from "@tanstack/react-query";
import { POST_QUERY_KEY } from "../constants/queryKey";
import { basicClient } from "@/providers/thirdweb.provider";
import { getNftPostContract } from "@/services/contracts/nftPost";
import { createPostTx } from "@/services/serverActions/post";
import { useGetCurrentUser } from "@/services/users/hooks/useGetCurrentUser";
import { sendTransaction, waitForReceipt } from "thirdweb";

import {
  generateMintSignature,
  mintWithSignature,
} from "thirdweb/extensions/erc721";
import { somniaChain } from "@/constants/somniaChain";

export function useCreatePost() {
  const account = useGetCurrentUser();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      media,
      caption,
    }: {
      media: string[];
      caption: string;
    }) => {
      if (!account) {
        throw new Error("Account not found");
      }

      debugger;

      const contract = getNftPostContract({ client: basicClient });

      const { payload, signature } = await createPostTx({
        name: "Post",
        description: caption,
        image: media,
        address: account.address,
      });

      const mintTx = mintWithSignature({
        payload,
        signature,
        contract,
      });

      const tx = await sendTransaction({
        transaction: mintTx,
        account,
      });

      const txHash = await waitForReceipt({
        transactionHash: tx.transactionHash,
        client: basicClient,
        chain: somniaChain,
      });

      console.log(txHash);

      return txHash;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [POST_QUERY_KEY.POSTS_ON_FEED],
      });
    },
  });
}
