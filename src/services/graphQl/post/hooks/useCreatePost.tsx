import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postClient } from "../postClient";
import { POST_QUERY_KEY } from "../constants/queryKey";
import { basicClient } from "@/providers/thirdweb.provider";
import { getNftPostContract } from "@/services/contracts/nftPost";

export function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      media,
      caption,
    }: {
      media: string[];
      caption: string;
    }) => {
      //   const contract = getNftPostContract({ client: basicClient });
      //   await postClient.createPost({
      //     media,
      //     caption,
      //   });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [POST_QUERY_KEY.POSTS_ON_FEED],
      });
    },
  });
}
