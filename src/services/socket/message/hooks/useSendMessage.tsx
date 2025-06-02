import { env } from "@/constants/env";

import { EDispatchType } from "@/enum/EDispatchType.enum";
import { useSocket } from "../../hooks/useSocket";

export const useSendMessage = () => {
  const { socket } = useSocket();

  const sendMessage = (request: {
    toUserId: `0x${string}`;
    message: string;
  }) => {
    socket.emit(EDispatchType.SEND_MESSAGE, request);
  };

  return { sendMessage };
};
