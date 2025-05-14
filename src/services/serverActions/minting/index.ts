"use server";

import { generateMintSignature } from "thirdweb/extensions/erc721";
import { getNftProfileContract } from "../../contracts/nftProfile";
import { adminAccount } from "../configs/adminAccount";
import { adminClient } from "../configs/client";
import { IProfileNftProps } from "./models/profileNft.model";

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
