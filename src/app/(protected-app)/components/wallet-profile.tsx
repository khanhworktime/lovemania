import { Button } from "@heroui/react";
import { Wallet } from "lucide-react";
import { ConnectButton, useWalletDetailsModal } from "thirdweb/react";
import { basicClient } from "@/providers/thirdweb.provider";
import { somniaChain } from "@/constants/somniaChain";
import { env } from "@/constants/env";
export function WalletProfile() {
  const { open } = useWalletDetailsModal();

  return (
    <>
      <Button
        isIconOnly
        radius="full"
        size="lg"
        suppressHydrationWarning
        color="secondary"
        variant={"light"}
        onPress={() =>
          open({
            client: basicClient,
            theme: "light",
          })
        }
      >
        <Wallet />
      </Button>
    </>
  );
}
