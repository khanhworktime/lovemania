import { useMutation, useQueryClient } from "@tanstack/react-query";
import { POST_QUERY_KEY } from "../constants/queryKey";
import { basicClient } from "@/providers/thirdweb.provider";
import { getNftPostContract } from "@/services/contracts/nftPost";
import { createPostTx } from "@/services/serverActions/post";
import { useGetCurrentUser } from "@/services/users/hooks/useGetCurrentUser";
import { estimateGas, sendTransaction, waitForReceipt } from "thirdweb";

import {
  generateMintSignature,
  mintWithSignature,
} from "thirdweb/extensions/erc721";
import { somniaChain } from "@/constants/somniaChain";
import { postClient } from "../postClient";
import { ipfsService } from "@/services/ipfsService/ipfs.service";
export function useCreatePost() {
  const account = useGetCurrentUser();
  const queryClient = useQueryClient();

  const hookMutate = useMutation({
    mutationFn: async ({
      media,
      caption,
    }: {
      media: File[];
      caption: string;
    }) => {
      if (!account) {
        throw new Error("Account not found");
      }

      const contract = getNftPostContract({ client: basicClient });

      const imageUris = await ipfsService.uploadIpfsArray(media);

      const { payload, signature } = await postClient.mintPost({
        address: account.address,
        metadata: {
          name: "Post",
          description: caption,
          image: imageUris[0],
          media: imageUris,
        },
      });

      alert(contract);

      const mintTx = mintWithSignature({
        payload,
        signature,
        contract,
      });

      // TODO: Check the signature
      const tx = await sendTransaction({
        transaction: mintTx,
        account,
      });

      const txHash = await waitForReceipt({
        transactionHash: tx.transactionHash,
        client: basicClient,
        chain: somniaChain,
      });

      return txHash;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [POST_QUERY_KEY.POSTS_ON_FEED],
      });
    },
  });

  return { ...hookMutate };
}
