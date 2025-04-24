import { useMe } from "./useMe";
import { userKeys } from "../constants/user.key";
import { userClient } from "../userClient";
import { useQuery } from "@tanstack/react-query";

export function useRecommendedUsers() {
  const { data: me } = useMe();

  return useQuery({
    queryKey: [userKeys.RECOMMENDED_USERS, me?.id],
    queryFn: async () => {
      if (!me?.id) throw new Error("User not found");
      return await userClient.getRecommendedUsers({ userId: me?.id });
    },
    enabled: !!me?.id,
  });
}
