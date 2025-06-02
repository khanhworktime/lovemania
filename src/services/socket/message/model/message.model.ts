import { EMessageStatus } from "@/enum/EMessageStatus.enum";

export interface IMessage {
  _id: string;
  fromUserId: string;
  toUserId: string;
  conversationId: string;
  text: string;
  isDeleted: boolean;
  status: EMessageStatus;
  createdAt: string;
  updatedAt: string;
}

export type TShortMessage = Pick<IMessage, "text" | "status" | "createdAt">;

export interface IConversation {
  withUser: string;
  isUnread: boolean;
  lastMessage: IMessage;
  conversationId: string;
}
