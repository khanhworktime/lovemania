"use client";

import {
  conversationTestData,
  messageDetailTestData,
} from "@/exampleData/data";
import { IConversation, IMessage } from "@/interfaces/message.model";
import { sleep } from "@/utils/sleep";
import { Button, cn } from "@heroui/react";
import { ChevronLeftIcon, MoreHorizontal } from "lucide-react";
import { useTransitionRouter } from "next-view-transitions";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import MessageItem from "./components/messageItem";
import { EMountDataState } from "@/enum/EMountState.enum";
import { MessageControl } from "./components/messageControl";
import { useBodyAppColor } from "@/hooks/UseBodyAppColor";
import { useGSAP } from "@gsap/react";

export default function MessagePage() {
  // Set page color
  useBodyAppColor("#4B164C");

  // Get message id from url
  const { messageId } = useParams();
  const router = useTransitionRouter();

  const [conversation, setConversation] = useState<IConversation | null>();
  const [messageDetail, setMessageDetail] = useState<IMessage[]>([]);

  const [mountDataState, setMountDataState] = useState<EMountDataState>(
    EMountDataState.WAITING
  );

  useGSAP(() => {
    setMountDataState(EMountDataState.FETCHING);
    (async () => {
      await sleep(1000);
      const conversation = conversationTestData.find(
        (message) => message.id === messageId
      );
      setConversation(conversation ?? null);
      setMessageDetail(messageDetailTestData);
      setMountDataState(EMountDataState.FIRST_LOAD);
    })();
  }, [messageId]);

  useGSAP(() => {
    if (mountDataState === EMountDataState.FIRST_LOAD) {
      setTimeout(() => {
        const messageBox = document.querySelector("#messages-layout");
        if (messageBox) {
          messageBox.scrollTo({
            top: messageBox.scrollHeight,
            behavior: "smooth",
          });
        }
        setMountDataState(EMountDataState.LOADED);
      }, 100);
    }
  }, [mountDataState]);

  // Render loading state
  if (mountDataState >= EMountDataState.FIRST_LOAD && conversation === null) {
    return (
      <div className="flex-1">
        <div className="flex justify-between items-center gap-x-2 pt-4 pb-2 px-6 sticky top-0 inset-x-0 z-50  backdrop-blur-sm text-white">
          <Button
            variant="bordered"
            className="size-10 border-1 border-white/10 text-white"
            radius="full"
            isIconOnly
            onPress={() => router.back()}
          >
            <ChevronLeftIcon />
          </Button>
          <div className="text-2xl font-medium font-chalet text-center text-nowrap">
            Not found
          </div>
          <Button
            variant="bordered"
            className="size-10 border-1 border-white/10 text-white"
            radius="full"
            isIconOnly
            onPress={() => router.back()}
          >
            <MoreHorizontal />
          </Button>
        </div>
      </div>
    );
  }

  // Handle focus change
  const [isFocus, setIsFocus] = useState(false);

  return (
    <>
      {/* Main content */}
      <div className="flex-1">
        <div className="flex justify-between items-center gap-x-2 pt-4 pb-2 px-6 sticky top-0 inset-x-0 z-50  backdrop-blur-sm text-white">
          <Button
            variant="bordered"
            className="size-10 border-1 border-white/10 text-white"
            radius="full"
            isIconOnly
            onPress={() => router.back()}
          >
            <ChevronLeftIcon />
          </Button>
          <div className="text-2xl font-medium font-chalet text-center text-nowrap">
            {conversation === undefined
              ? "Loading..."
              : conversation?.from.name}
          </div>
          <Button
            variant="bordered"
            className="size-10 border-1 border-white/10 text-white"
            radius="full"
            isIconOnly
            onPress={() => router.back()}
          >
            <MoreHorizontal />
          </Button>
        </div>
        <div className="px-4 pt-6 pb-24 space-y-6">
          {messageDetail.map((message) => (
            <MessageItem key={message.id} message={message} />
          ))}
        </div>
      </div>

      {mountDataState >= EMountDataState.LOADED && (
        <div
          className={cn(
            "sticky transition-all duration-100 will-change-transform",
            isFocus
              ? "bg-white px-0 py-4 pr-3 -bottom-4"
              : "bg-transparent px-6 bottom-4"
          )}
        >
          <MessageControl onFocusChange={setIsFocus} />
        </div>
      )}
    </>
  );
}
