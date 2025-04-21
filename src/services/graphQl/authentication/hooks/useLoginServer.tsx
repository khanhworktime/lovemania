import { env } from "@/constants/env";
import { somniaChain } from "@/constants/somniaChain";
import { basicClient } from "@/providers/thirdweb.provider";
import { useGetCurrentUser } from "@/services/users/hooks/useGetCurrentUser";
import { addToast } from "@heroui/react";
import { useQuery } from "@tanstack/react-query";
import { signLoginPayload } from "thirdweb/auth";
import { useConnectModal } from "thirdweb/react";
import { useLocalStorage, useSessionStorage } from "usehooks-ts";
import { authenticationClient } from "../authenticationClient";
import { authenticationKeys } from "../constants/authentication.key";
import { storageKeys } from "../constants/storage.key";

export const useLoginServer = () => {
  const { isConnecting, connect } = useConnectModal();
  const currentAccount = useGetCurrentUser();

  //   Handle login

  const startLogin = async () => {
    await connect({
      client: basicClient,
      accountAbstraction: {
        factoryAddress: env.NEXT_PUBLIC_SOMNIA_FACTORY_ADDRESS,
        chain: somniaChain,
        sponsorGas: true,
      },
    });
  };

  const currentQueryKey = [
    authenticationKeys.WALLET_LOGIN,
    currentAccount?.address,
  ];

  //   Handle Storage
  const [token, setToken] = useLocalStorage<string | null>(
    storageKeys.TOKEN,
    null
  );

  const {
    data: walletLoginData,
    error,
    isLoading,
  } = useQuery({
    queryKey: currentQueryKey,
    queryFn: async () => {
      if (!currentAccount) {
        addToast({
          title: "No account found",
          description: "Please connect your wallet",
          color: "danger",
        });

        return;
      }

      const payload = await authenticationClient.walletLogin({
        walletAddress: currentAccount.address,
      });

      const { signature } = await signLoginPayload({
        account: currentAccount,
        payload,
      });

      const result = await authenticationClient.loginAuthentication({
        payload,
        signature,
      });

      setToken(result.token);

      return result;
    },
    enabled: !!currentAccount,
    retry: false,
  });

  return {
    startLogin,
    walletLoginData,
    error,
    isLoading: isLoading || isConnecting,
    currentQueryKey,
  };
};
