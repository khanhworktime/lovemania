import { IUserExample } from "./user.model";

export interface IConversation {
  id: string;
  from: IUserExample;
  latestMessage: {
    content: string;
    createdAt: Date;
  };
  unread?: boolean;
}

export interface IMessage {
  id: string;
  content: string;
  createdAt: Date;
  sender: IUserExample;
  conversationId: string;
}
