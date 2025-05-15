import { ApolloClientBase } from "../config/baseClass";
import {
  WalletLoginInput,
  LoginAuthenticationInput,
  WalletLoginResponse,
  LoginAuthenticationResponse,
} from "./authentication.model";
import {
  walletLogin,
  loginAuthentication,
} from "./queries/authentication.graphql";

class AuthenticationClient extends ApolloClientBase {
  constructor() {
    super();
  }

  async walletLogin(request: WalletLoginInput) {
    const { data } = await this.instance.query<WalletLoginResponse>({
      query: walletLogin,
      variables: request,
    });

    return data.walletLogin;
  }

  async loginAuthentication(request: LoginAuthenticationInput) {
    const { data } = await this.instance.query<LoginAuthenticationResponse>({
      query: loginAuthentication,
      variables: request,
    });

    return data.login;
  }
}

export const authenticationClient = new AuthenticationClient();
