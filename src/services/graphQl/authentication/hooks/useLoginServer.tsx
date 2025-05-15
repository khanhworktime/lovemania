import { env } from "@/constants/env";
import { somniaChain } from "@/constants/somniaChain";
import { basicClient } from "@/providers/thirdweb.provider";
import { addToast } from "@heroui/react";
import { useMutation } from "@tanstack/react-query";
import { signLoginPayload } from "thirdweb/auth";
import { useConnectModal } from "thirdweb/react";
import { useIsomorphicLayoutEffect, useSessionStorage } from "usehooks-ts";
import { authenticationClient } from "../authenticationClient";
import { authenticationKeys } from "../constants/authentication.key";
import { storageKeys } from "../constants/storage.key";
import { IUser } from "../../user/user.model";

export const useLoginServer = () => {
  const { isConnecting: connectingModal, connect: connectModal } =
    useConnectModal();

  const currentMutationKey = [authenticationKeys.WALLET_LOGIN];

  const {
    mutateAsync: loginAsync,
    isPending: isLoginPending,
    data,
  } = useMutation({
    mutationKey: currentMutationKey,
    mutationFn: async () => {
      // Login with ThirdwebModal
      const wallet = await connectModal({
        client: basicClient,
        accountAbstraction: {
          factoryAddress: env.NEXT_PUBLIC_SOMNIA_FACTORY_ADDRESS,
          chain: somniaChain,
          sponsorGas: false,
        },
      });

      const account = wallet.getAccount();

      // Get the transaction signed in BE
      if (!account) {
        addToast({
          title: "No account found",
          description: "Account abstraction was not successful, try again",
          color: "danger",
        });

        return;
      }

      const payload = await authenticationClient.walletLogin({
        walletAddress: account.address,
      });

      // Sign the payload

      const { signature } = await signLoginPayload({
        account,
        payload,
      });

      const result = await authenticationClient.loginAuthentication({
        payload,
        signature,
      });

      return result;
    },
  });

  const [token, setToken] = useSessionStorage<string | null>(
    storageKeys.TOKEN,
    null
  );

  const [userData, setUserData] = useSessionStorage<IUser | null>(
    storageKeys.USER_DATA,
    null
  );

  useIsomorphicLayoutEffect(() => {
    if (data) {
      setToken(data.token);
      setUserData(data.user);
    }
  }, [data]);

  return {
    loginAsync,
    isPending: isLoginPending || connectingModal,
  };
};
