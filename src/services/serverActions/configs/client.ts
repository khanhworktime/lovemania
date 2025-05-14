import { getServerEnv } from "@/constants/env.server";
import { createThirdwebClient } from "thirdweb";

const adminClient = createThirdwebClient({
  secretKey: (await getServerEnv()).THIRDWEB_SECRET_KEY,
});

export { adminClient };
