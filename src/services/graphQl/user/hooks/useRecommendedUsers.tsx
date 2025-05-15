import { useQuery } from "@tanstack/react-query";
import { mockUsers } from "../constants/mock";
import { userKeys } from "../constants/user.key";
import { useMe } from "./useMe";

export function useRecommendedUsers() {
  const { data: me } = useMe();

  return useQuery({
    queryKey: [userKeys.RECOMMENDED_USERS, me?.id],
    queryFn: async () => {
      if (!me?.id) throw new Error("User not found");
      // return await userClient.getRecommendedUsers({ userId: me?.id });

      return mockUsers;
    },
    enabled: !!me?.id,
  });
}
