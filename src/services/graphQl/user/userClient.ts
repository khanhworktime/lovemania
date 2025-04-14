import { ApolloClientBase } from "../config/baseClass";
import { Me } from "./queries/me.graphql";
import { MintingProfile } from "./mutates/mintingProfile.graphql";
import { MetadataInput, IUser } from "./user.model";
import {
  DefaultErc721Response,
  IDefaultResponse,
} from "../interface/response.model";
import { GetUsers } from "./queries/user.graphql";
class UserClient extends ApolloClientBase {
  constructor() {
    super();
  }
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

  // Self
  async getMe() {
    const { data } = await this.instance.query({
      query: Me,
    });

    return data.me;
  }

  // Minting Profile
  async mintingProfile(request: {
    address: string;
    metadata: MetadataInput;
  }): Promise<DefaultErc721Response> {
    const { data } = await this.instance.query<{
      mintingProfile: DefaultErc721Response;
    }>({
      query: MintingProfile,
      variables: request,
    });

    return data.mintingProfile;
  }
}

export const userClient = new UserClient();
