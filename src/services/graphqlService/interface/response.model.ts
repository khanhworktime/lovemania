import { generateMintSignature } from "thirdweb/extensions/erc721";

export type DefaultErc721Response = {
  signature: `0x${string}`;
  payload: {
    to: string;
    royaltyRecipient: string;
    royaltyBps: bigint;
    primarySaleRecipient: string;
    uri: string;
    quantity: bigint;
    pricePerToken: bigint;
    currency: string;
    validityStartTimestamp: bigint;
    validityEndTimestamp: bigint;
    uid: `0x${string}`;
    __typename: "MintRequest721";
  };
};

export interface IDefaultResponse<T> {
  items: T[];
  totalCount: number;
  length: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  endCursor: string;
}
