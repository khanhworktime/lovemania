import { ApolloClientBase } from "../config/baseClass";
import { Like, Dislike, SuperLike } from "./mutations/swipe.graphql";
class DiscoveryClient extends ApolloClientBase {
  constructor() {
    super();
  }

  //#region Mutations
  async like(swiperId: string, swipeeId: string) {
    const { data } = await this.instance.mutate({
      mutation: Like,
      variables: { swiperId, swipeeId },
    });

    return data.like;
  }

  async dislike(swiperId: string, swipeeId: string) {
    const { data } = await this.instance.mutate({
      mutation: Dislike,
      variables: { swiperId, swipeeId },
    });

    return data.dislike;
  }

  async superLike(swiperId: string, swipeeId: string) {
    const { data } = await this.instance.mutate({
      mutation: SuperLike,
      variables: { swiperId, swipeeId },
    });

    return data.superLike;
  }
  //#endregion
}

export const discoveryClient = new DiscoveryClient();
