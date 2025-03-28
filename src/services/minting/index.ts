"use server";

import { getServerEnv } from "@/constants/env.server";
import { somniaChain } from "@/constants/somniaChain";
import { IUser } from "@/interfaces/user.model";
import { createThirdwebClient, getContract } from "thirdweb";
import { privateKeyToAccount } from "thirdweb/wallets";
import { generateMintSignature } from "thirdweb/extensions/erc721";
import { env } from "@/constants/env";
import { getNftProfileContract } from "../contracts/nftProfile";
import { IProfileNftProps } from "./models/profileNft.model";

const adminClient = createThirdwebClient({
  secretKey: (await getServerEnv()).THIRDWEB_SECRET_KEY,
});

async function adminAccount() {
  const env = await getServerEnv();
  const privateKey = env.MINT_PRIVATE_KEY;

  if (!privateKey || privateKey.length === 0) {
    throw new Error("MINT_PRIVATE_KEY environment variable is not set");
  }

  if (!privateKey.startsWith("0x")) {
    throw new Error(
      "MINT_PRIVATE_KEY must be a valid Ethereum private key starting with '0x'"
    );
  }

  const account = privateKeyToAccount({ client: adminClient, privateKey });

  return account;
}

export async function mintNftProfile({
  address,
  media,
  name,
  birthday,
  genderType,
  gender,
}: IProfileNftProps) {
  const contract = getNftProfileContract({ client: adminClient });
  const account = await adminAccount();
  const { payload, signature } = await generateMintSignature({
    contract,
    account,
    mintRequest: {
      metadata: {
        name: name,
        description: "Lovemania NFT Profile",
        image: media,
        properties: {
          birthday: birthday,
          genderType: genderType,
          gender: gender,
        },
      },
      to: address,
    },
  });

  return { payload, signature };
}
