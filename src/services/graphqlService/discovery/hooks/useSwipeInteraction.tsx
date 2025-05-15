import { useMutation } from "@tanstack/react-query";
import { discoveryClient } from "../discoveryClient";
import { EDiscoveryType } from "@/enum/EDiscoveryType.enum";
import { useMe } from "@/services/graphqlService/user/hooks/useMe";
export const useSwipeInteraction = () => {
  const { data: me } = useMe();

  return useMutation({
    mutationFn: async ({
      swipeeId,
      type,
    }: {
      swipeeId: string;
      type: EDiscoveryType;
    }) => {
      // TODO: Mock data phrase
      // switch (type) {
      //   case EDiscoveryType.LIKE:
      //     return await discoveryClient.like(me?.id, swipeeId);
      //   case EDiscoveryType.DISLIKE:
      //     return await discoveryClient.dislike(me?.id, swipeeId);
      //   case EDiscoveryType.SUPER_LIKE:
      //     return await discoveryClient.superLike(me?.id, swipeeId);
      // }
    },
  });
};
