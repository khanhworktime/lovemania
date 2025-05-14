import { getServerEnv } from "@/constants/env.server";
import { privateKeyToAccount } from "thirdweb/wallets";
import { adminClient } from "./client";

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

export { adminAccount };
