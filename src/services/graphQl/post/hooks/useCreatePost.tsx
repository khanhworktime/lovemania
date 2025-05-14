import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postClient } from "../postClient";
import { POST_QUERY_KEY } from "../constants/queryKey";

export function useCreatePost() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (tokenId: number) =>
      await postClient.createPost({ tokenId }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [POST_QUERY_KEY.POSTS_ON_FEED],
      });
    },
  });
}
