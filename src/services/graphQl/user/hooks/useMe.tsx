import { useQuery } from "@tanstack/react-query";
import { userClient } from "../userClient";
import { useActiveAccount } from "thirdweb/react";

export function useMe() {
  const activeAccount = useActiveAccount();

  const queryReturn = useQuery({
    queryKey: ["me", activeAccount?.address],
    queryFn: () => userClient.getMe(),
    enabled: !!activeAccount?.address,
  });

  return { ...queryReturn };
}
