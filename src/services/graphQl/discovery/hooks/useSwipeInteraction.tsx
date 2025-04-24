import { useMutation } from "@tanstack/react-query";
import { discoveryClient } from "../discoveryClient";
import { EDiscoveryType } from "@/enum/EDiscoveryType.enum";
export const useSwipeInteraction = () => {
  return useMutation({
    mutationFn: async ({
      swiperId,
      swipeeId,
      type,
    }: {
      swiperId: string;
      swipeeId: string;
      type: EDiscoveryType;
    }) => {
      switch (type) {
        case EDiscoveryType.LIKE:
          return await discoveryClient.like(swiperId, swipeeId);
        case EDiscoveryType.DISLIKE:
          return await discoveryClient.dislike(swiperId, swipeeId);
        case EDiscoveryType.SUPER_LIKE:
          return await discoveryClient.superLike(swiperId, swipeeId);
      }
    },
  });
};
