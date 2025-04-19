"use client";

import { somniaChain } from "@/constants/somniaChain";
import { basicClient } from "@/providers/thirdweb.provider";
import { getNftProfileContract } from "@/services/contracts/nftProfile";
import { ConnectButton, useSendBatchTransaction } from "thirdweb/react";
import { inAppWallet } from "thirdweb/wallets";

import { createWallet } from "thirdweb/wallets";

import { env } from "@/constants/env";
import { EGenderDefine } from "@/enum/EGenderDefine.enum";
import useGetMintingAvatarTx from "@/services/graphQl/user/hooks/useMintingAvatar";
import useGetMintingProfileTx from "@/services/graphQl/user/hooks/useMintingProfile";
import { useGetCurrentUser } from "@/services/users/hooks/useGetCurrentUser";
import { Button } from "@heroui/react";
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
  const { mutateAsync: sendBatchTransaction, isPending } =
    useSendBatchTransaction();
  const { mutateAsync: mintProfile } = useGetMintingProfileTx();
  const { mutateAsync: mintAvatar } = useGetMintingAvatarTx();

  const testMint = async () => {
    const txAvatar = await mintAvatar({
      metadata: {
        name: "test",
        description: "test",
        image:
          "ipfs://QmcRH3ANZLFoB7YadLkBt6m8vJWZXKaT44P3uXW7PCSrzk/lovemania.png",
      },
    });

    const txProfile = await mintProfile({
      metadata: {
        name: "test",
        description: "test",
        image:
          "ipfs://QmcRH3ANZLFoB7YadLkBt6m8vJWZXKaT44P3uXW7PCSrzk/lovemania.png",
        interests: [],
        gender: "Male",
        genderType: EGenderDefine.MALE,
        birthday: "2002-23-09",
      },
    });

    if (!txAvatar || !txProfile || !account) return;

    await sendBatchTransaction([txProfile, txAvatar]);
  };

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
        accountAbstraction={{
          chain: somniaChain,
          factoryAddress: env.NEXT_PUBLIC_SOMNIA_FACTORY_ADDRESS,
          sponsorGas: true,
        }}
      />
      <Button onPress={testMint} isLoading={isPending}>
        Test Mint
      </Button>
    </>
  );
}
