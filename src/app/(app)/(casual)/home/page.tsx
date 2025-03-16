"use client";
import { FilterIcon, NewLoveIcon } from "@/assets/icons";
import Logo from "@/assets/logos/lovemania.logo.png";
import { Button, cn, Tab, Tabs } from "@heroui/react";
import { BellDotIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Finder } from "./components/Segments/finder";
import { NewsFeed } from "./components/Segments/matches";
import { StoryLine } from "./components/StoryLine";

export default function HomePage() {
  // Current tabs controllers
  const [currentTab, setCurrentTab] = useState<string | number>("$.0");

  return (
    <div className="flex flex-col gap-y-4 ">
      {/* Header */}
      <div className="flex items-center justify-between gap-x-2 px-4 pt-4 pb-2 sticky top-0 inset-x-0 z-50 bg-white/20 backdrop-blur-sm">
        {/* Logo */}
        <div className="flex items-center gap-x-2">
          <Image src={Logo} alt="Logo" width={35} height={35} />
          <h1 className="text-2xl font-medium font-chalet">lovemania</h1>
        </div>

        {/* Notifications */}
        <div className="flex items-center gap-x-2">
          {currentTab === "$.0" && (
            <Button
              variant="bordered"
              className="size-12"
              radius="full"
              isIconOnly
            >
              <BellDotIcon />
            </Button>
          )}
          {currentTab === "$.1" && (
            <>
              <Button
                variant="bordered"
                className="size-12"
                radius="full"
                isIconOnly
              >
                <NewLoveIcon />
              </Button>
              <Button
                variant="bordered"
                className="size-12"
                radius="full"
                isIconOnly
              >
                <FilterIcon />
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Content */}
      {/* Story line: FB likes */}
      <div className={cn(currentTab !== "$.0" && "hidden")}>
        <StoryLine />
      </div>

      {/* Post */}
      <div className="px-4">
        <Tabs
          fullWidth
          size="lg"
          defaultSelectedKey="matches"
          classNames={{
            tabList: "bg-secondary-200 rounded-full",
            tab: "font-medium",
            cursor: "rounded-full",
            panel: "px-0 pt-8 h-[61svh] w-full",
          }}
          onSelectionChange={setCurrentTab}
          selectedKey={currentTab}
        >
          <Tab value="matches" title="Your friends">
            <NewsFeed />
          </Tab>
          <Tab value="finder" title="Find your love">
            <Finder />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
