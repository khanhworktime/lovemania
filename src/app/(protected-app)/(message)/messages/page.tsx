"use client";
import DecorBg from "@/assets/decors/message-background.decor.png";
import Image from "next/image";
import { RecentMatch } from "./components/recentMatch";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useBodyAppColor } from "@/hooks/UseBodyAppColor";
import { conversationTestData } from "@/exampleData/data";
import { ConversationItem } from "./components/conversationItem";
import { Navbar } from "../../components/navbar";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const defaultBgColor = "#4b164c";

export default function MessagesPage() {
  const recentMatchesRef = useRef<HTMLDivElement>(null);

  const [bgColor, setBgColor] = useState<string>(defaultBgColor);
  useBodyAppColor(bgColor);

  const stScrollDown: ScrollTrigger.Vars = {
    trigger: recentMatchesRef.current,
    start: 0,
    end: "+=32",
    scroller: "#messages-layout",
    scrub: true,
    onEnter: () => {
      setBgColor("#fff");
    },
    onLeaveBack: () => {
      setBgColor(defaultBgColor);
    },
  };

  useGSAP(() => {
    gsap.to(recentMatchesRef.current, {
      scrollTrigger: {
        ...stScrollDown,
        pinType: "fixed",
      },
      backgroundColor: "rgba(255, 255, 255, 1)",
      zIndex: 20,
    });

    gsap.to(".messages-box", {
      scrollTrigger: {
        ...stScrollDown,
        end: "+=10",
      },
      zIndex: 0,
      borderRadius: "0px",
    });

    gsap.to(".header", {
      scrollTrigger: stScrollDown,
      color: "rgba(0, 0, 0, 1)",
      // padding: "0px 10px",
    });

    gsap.to(".title", {
      scrollTrigger: stScrollDown,
      color: "rgba(0, 0, 0, 1)",
    });
  });

  return (
    <>
      <div className="flex-1 relative h-screen w-full flex flex-col items-stretch">
        {/* Header */}

        {/* Recent matches */}
        <div
          className="recent-matches sticky top-0 flex flex-col gap-y-4 will-change-transform"
          ref={recentMatchesRef}
        >
          <div className="header text-2xl font-medium font-chalet text-center text-nowrap py-4 text-white ">
            Messages
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-1/2 aspect-square">
            <Image src={DecorBg} alt="decor" fill className="object-cover" />
          </div>
          <div className="title text-lg font-medium text-white px-4">
            Recent Matches
          </div>
          <RecentMatch showOverlay={true} />
        </div>

        <div className="messages-box bg-white rounded-t-[32px] mt-6 sticky flex-grow min-h-[80svh] will-change-transform p-4">
          {conversationTestData.map((conversation) => (
            <ConversationItem key={conversation.id} conversation={conversation} />
          ))}
        </div>
      </div>
      <Navbar />
    </>
  );
}
