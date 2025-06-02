import { useQuery } from "@tanstack/react-query";
import { useSocket } from "../../hooks/useSocket";
import { GetMessageRequestDTO } from "../dto/conversation.dto";
import { MessageSocketQueryKey } from "../constants/queryKey";
import { IMessage } from "../model/message.model";
import { EDispatchType } from "@/enum/EDispatchType.enum";

export const useGetMessages = (request: GetMessageRequestDTO) => {
  const { socket } = useSocket();

  const hookReturn = useQuery({
    queryKey: MessageSocketQueryKey.GET_MESSAGE(request),
    queryFn: async () => {
      if (!request.conversationId) {
        throw new Error("Conversation ID is required");
      }

      if (!socket.connected) {
        throw new Error("Socket is not connected");
      }

      const [response] = (await socket.emitWithAck(
        EDispatchType.GET_MESSAGES,
        request
      )) as [IMessage[]];

      return response;
    },

    enabled: !!socket.connected && !!request.conversationId,
  });

  return hookReturn;
};
