import { EDispatchType } from "@/enum/EDispatchType.enum";
import { useQuery } from "@tanstack/react-query";
import { useSocket } from "../../hooks/useSocket";
import { MessageSocketQueryKey } from "../constants/queryKey";
import { IConversation } from "../model/message.model";

export const useGetConversations = () => {
  const { socket } = useSocket();

  const hookReturn = useQuery({
    queryKey: MessageSocketQueryKey.GET_CONVERSATIONS,
    queryFn: async () => {
      const [response] = (await socket.emitWithAck(
        EDispatchType.GET_CONVERSATIONS
      )) as [IConversation[]];

      return response;
    },
  });

  return hookReturn;
};
