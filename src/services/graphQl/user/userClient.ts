import { ApolloClientBase } from "@/services/graphql/config/baseClass";
import {
  DefaultErc721Response,
  IDefaultResponse,
} from "@/services/graphql/interface/response.model";
import { MintingProfile } from "@/services/graphql/user/queries/mintingProfile.graphql";
import { MintingAvatar } from "@/services/graphql/user/queries/avatar.graphql";
import { Me } from "@/services/graphql/user/queries/me.graphql";
import { GetUsers } from "@/services/graphql/user/queries/user.graphql";
import { CreateUser } from "@/services/graphql/user/mutaties/createUser.graphql";
import {
  IUser,
  MetadataMintAvatarInput,
  MetadataMintProfileInput,
  CreateUserInput,
} from "@/services/graphql/user/user.model";
import { RecommendedUsers } from "@/services/graphql/user/queries/recommendedUser.graphql";

class UserClient extends ApolloClientBase {
  constructor() {
    super();
  }

  // Minting Profile
  async mintingProfile(request: {
    address: string;
    metadata: MetadataMintProfileInput;
  }): Promise<DefaultErc721Response> {
    const { data } = await this.instance.query<{
      mintingProfile: DefaultErc721Response;
    }>({
      query: MintingProfile,
      variables: request,
      fetchPolicy: "no-cache",
    });

    return data.mintingProfile;
  }

  // Minting Avatar
  async mintingAvatar(request: {
    address: string;
    metadata: MetadataMintAvatarInput;
  }): Promise<DefaultErc721Response> {
    const { data } = await this.instance.query<{
      mintingAvatar: DefaultErc721Response;
    }>({
      query: MintingAvatar,
      variables: request,
      fetchPolicy: "no-cache",
    });

    return data.mintingAvatar;
  }

  //#region Authentication required

  // Get matcher list
  async getMatcherList(request: { cursor: string | null; limit: number }) {
    const { data } = await this.instance.query<{
      users: IDefaultResponse<IUser>;
    }>({
      query: GetUsers,
      variables: request,
    });

    return data.users;
  }

  // Get recommended users
  async getRecommendedUsers(request: { userId: string }) {
    const { data } = await this.instance.query<{
      recommendedUsers: IUser[];
    }>({
      query: RecommendedUsers,
      variables: request,
      fetchPolicy: "no-cache",
    });

    return data.recommendedUsers;
  }

  // Self
  async getMe() {
    const { data } = await this.instance.query({
      query: Me,
    });

    return data.me;
  }

  // Create user
  async createUser(request: CreateUserInput): Promise<IUser> {
    const { data } = await this.instance.mutate({
      mutation: CreateUser,
      variables: request,
    });

    return data.createUser;
  }
  //#endregion
}

export const userClient = new UserClient();
