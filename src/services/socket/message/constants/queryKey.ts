import { GetMessageRequestDTO } from "../dto/conversation.dto";

export const MessageSocketQueryKey = {
  GET_CONVERSATIONS: ["GET_CONVERSATIONS"],
  GET_MESSAGE: (request: GetMessageRequestDTO) => ["GET_MESSAGE", request],
};
