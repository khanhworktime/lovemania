import { useQuery } from "@tanstack/react-query";
import { POST_QUERY_KEY } from "@/services/graphqlService/post/constants/queryKey";
import { postClient } from "@/services/graphqlService/post/postClient";
import { useGetCurrentUser } from "@/services/users/hooks/useGetCurrentUser";

export function useGetFeeds() {
  const currentQueryKey = [POST_QUERY_KEY.POSTS_ON_FEED];

  const user = useGetCurrentUser();

  const hookReturn = useQuery({
    queryKey: currentQueryKey,
    queryFn: async () => {
      const result = await postClient.getPostsOnFeed({
        cursor: null,
        limit: 10,
      });

      return result.items;
    },
    enabled: !!user,
    initialData: [],
  });

  return { ...hookReturn, currentQueryKey };
}
