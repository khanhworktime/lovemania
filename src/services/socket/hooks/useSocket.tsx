import { useEffect, useMemo } from "react";
import { env } from "@/constants/env";
import { useGetCurrentUser } from "@/services/users/hooks/useGetCurrentUser";
import { io } from "socket.io-client";

export const useSocket = () => {
  const account = useGetCurrentUser();

  // Create socket with authorization
  const socket = useMemo(() => {
    return io(env.NEXT_PUBLIC_WS_URL, {
      autoConnect: true,
      withCredentials: true,
      transports: ["websocket"],
      auth: {
        token: `Bearer user_1`,
      },
    });
  }, [account?.address]);

  useEffect(() => {
    // Connect socket when account is available
    if (account?.address && !socket.connected) {
      socket.connect();
    } else if (!account?.address && socket.connected) {
      socket.disconnect();
    }

    return () => {
      if (socket.connected) {
        socket.disconnect();
      }
    };
  }, [socket, account?.address]);

  return { socket };
};
