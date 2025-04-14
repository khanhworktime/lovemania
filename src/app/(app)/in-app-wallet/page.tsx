"use client";

import { somniaChain } from "@/constants/somniaChain";
import { basicClient } from "@/providers/thirdweb.provider";
import { getNftProfileContract } from "@/services/contracts/nftProfile";
import { ConnectButton, TransactionButton } from "thirdweb/react";
import { inAppWallet } from "thirdweb/wallets";

import { createWallet } from "thirdweb/wallets";

import { burn, getOwnedNFTs } from "thirdweb/extensions/erc721";
import { useGetCurrentUser } from "@/services/users/hooks/useGetCurrentUser";
const wallets = [
  inAppWallet({
    auth: {
      options: [
        "google",
        "discord",
        "telegram",
        "farcaster",
        "email",
        "x",
        "passkey",
        "phone",
      ],
    },
  }),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
  createWallet("io.rabby"),
  createWallet("io.zerion.wallet"),
];
export default function InAppWalletPage() {
  const account = useGetCurrentUser();

  return (
    <>
      <ConnectButton
        client={basicClient}
        wallets={wallets}
        connectModal={{ size: "wide" }}
        supportedNFTs={{
          [somniaChain.id]: [
            getNftProfileContract({ client: basicClient }).address,
          ],
        }}
      />
      <TransactionButton
        transaction={async () => {
          if (!account?.address) {
            throw new Error("No account found");
          }
          const nfts = await getOwnedNFTs({
            contract: getNftProfileContract({ client: basicClient }),
            owner: account?.address,
          });

          const result = confirm(
            `Are you sure you want to burn ${nfts[0].id}?`
          );
          if (!result) {
            throw new Error("No result");
          }

          const tx = burn({
            contract: getNftProfileContract({ client: basicClient }),
            tokenId: BigInt(nfts[0].id),
          });

          return tx;
        }}
      >
        Connect
      </TransactionButton>
    </>
  );
}
