import { useInfiniteQuery } from "@tanstack/react-query";
import { IDefaultResponse } from "@/services/graphql/interface/response.model";
import { userKeys } from "@/services/graphql/user/constants/user.key";
import { IUser } from "@/services/graphql/user/user.model";
import { userClient } from "@/services/graphql/user/userClient";
const DEFAULT_LIMIT = 4;

export function useMatcherList() {
  const currentQueryKey = [userKeys.MATCHER_LIST];
  const queries = useInfiniteQuery({
    queryKey: currentQueryKey,
    queryFn: async ({ pageParam }) => {
      if (pageParam === "") {
        return await userClient.getMatcherList({
          cursor: null,
          limit: DEFAULT_LIMIT,
        });
      }
      return await userClient.getMatcherList({
        cursor: pageParam,
        limit: DEFAULT_LIMIT,
      });
    },
    getNextPageParam: (lastPage: IDefaultResponse<IUser>) => {
      return lastPage.hasNextPage ? lastPage.endCursor : "";
    },

    initialPageParam: "",

    enabled: true,
  });

  return { currentQueryKey, ...queries };
}
