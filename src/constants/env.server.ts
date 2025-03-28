"use server";

export async function getServerEnv() {
  return {
    MINT_PRIVATE_KEY: process.env.MINT_PRIVATE_KEY || "",
    THIRDWEB_SECRET_KEY: process.env.THIRDWEB_SECRET_KEY || "",
  };
}
