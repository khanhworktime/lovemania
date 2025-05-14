"use server";

import { getNftPostContract } from "@/services/contracts/nftPost";
import { adminClient } from "../configs/client";
import { adminAccount } from "../configs/adminAccount";
import {
  generateMintSignature,
  mintWithSignature,
} from "thirdweb/extensions/erc721";

export async function createPostTx({
  name,
  description,
  image,
  address,
}: {
  name: string;
  description: string;
  image: string[];
  address: string;
}) {
  const contract = getNftPostContract({ client: adminClient });

  const account = await adminAccount();

  const { payload, signature } = await generateMintSignature({
    contract,
    account,
    mintRequest: {
      metadata: {
        name,
        description,
        image: image[0],
        properties: {
          media: image,
        },
      },
      to: address,
    },
  });

  return { payload, signature };
}
