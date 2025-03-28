import { useActiveAccount } from "thirdweb/react";

export function useGetCurrentUser() {
  const activeAccount = useActiveAccount();

  return activeAccount;
}
