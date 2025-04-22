import { currentUser } from "@/exampleData/data";
import { IMessage } from "@/interfaces/message.model";
import { Avatar, cn } from "@heroui/react";

interface MessageItemProps {
  message: IMessage;
}

export default function MessageItem({ message }: MessageItemProps) {
  const isCurrentUser = message.sender.id === currentUser.id;
  return (
    <div
      className={cn(
        "flex items-end gap-2 w-full cursor-pointer",
        isCurrentUser && "justify-end"
      )}
    >
      {!isCurrentUser && (
        <div className="bottom-0">
          <Avatar size="sm" src={message.sender.image} />
        </div>
      )}
      <div
        className={cn(
          "px-6 py-3 text-white font-medium",
          isCurrentUser
            ? "bg-secondary-800 rounded-l-3xl rounded-tr-3xl"
            : "bg-primary-800 rounded-r-3xl rounded-tl-3xl"
        )}
      >
        {message.content}
      </div>
    </div>
  );
}
