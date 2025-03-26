import { IConversation } from "@/interfaces/message.model";
import { Avatar } from "@heroui/react";
import { useTransitionRouter } from "next-view-transitions";
interface ConversationItemProps {
  conversation: IConversation;
}

export function ConversationItem({ conversation }: ConversationItemProps) {
  const router = useTransitionRouter();
  return (
    <div
      className="w-full h-24 max-h-24 flex gap-2 items-center justify-between px-4 py-4 border-b cursor-pointer"
      onClick={() => router.push(`/messages/${conversation.id}`)}
    >
      <Avatar size="lg" src={conversation.from.image} />
      <div className="flex-grow flex flex-col gap-y-1 items-start">
        <div className=" font-semibold">{conversation.from.name}</div>
        <div className="text-xs text-gray-500 line-clamp-2">
          {conversation.latestMessage.content}
        </div>
      </div>
      <div className="flex flex-col gap-y-1 items-end">
        {conversation.unread && (
          <div className="w-2 h-2 bg-secondary-800 rounded-full relative"></div>
        )}
        <div className="text-xs text-secondary-800">
          {conversation.latestMessage.createdAt.toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}
