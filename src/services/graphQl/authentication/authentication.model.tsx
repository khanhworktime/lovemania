// #region Wallet Login

import { IUser } from "../user/user.model";

export interface LoginPayload {
  domain: string;
  address: string;
  statement: string;
  uri: string;
  version: string;
  chain_id: string;
  nonce: string;
  issued_at: string;
  expiration_time: string;
  invalid_before: string;
  resources: string[];
}

export interface WalletLoginInput {
  walletAddress: string;
}

export interface WalletLoginResponse {
  walletLogin: LoginPayload;
}

// #endregion

// #region Login Authentication

export interface LoginAuthenticationInput {
  signature: string;
  payload: LoginPayload;
}

export interface LoginAuthenticationResponse {
  login: {
    token: string;
    user: IUser | null;
  };
}

// #endregion
