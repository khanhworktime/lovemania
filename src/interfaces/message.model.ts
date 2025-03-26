import { IUser } from "./user.model";

export interface IConversation {
  id: string;
  from: IUser;
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
  sender: IUser;
  conversationId: string;
}
