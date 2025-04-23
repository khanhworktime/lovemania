import { LoveIcon } from "@/assets/icons";
import { storyLineTestData } from "../../../../../../exampleData/data";
import Image from "next/image";
import { MessageCircle } from "lucide-react";

export function UserPersonalStatistic() {
  return (
    <div className="max-w-full overflow-x-auto pb-2 px-4 ">
      <div className="flex gap-4">
        {/* Likes */}
        <div className="flex flex-col items-center gap-y-1.5">
          <div className="w-20 h-20 aspect-square rounded-full overflow-hidden p-1 border-2 border-primary-300">
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <Image
                src={storyLineTestData[0].userAvatar}
                alt={storyLineTestData[0].userName}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                fill
                className="blur-md"
              />
              <LoveIcon
                fill="white"
                color="white"
                className="absolute size-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
          <p className="text-sm">
            Matches <strong className="font-medium text-secondary-500">32</strong>
          </p>
        </div>

        {/* Connects */}
        <div className="flex flex-col items-center gap-y-1.5">
          <div className="w-20 h-20 aspect-square rounded-full overflow-hidden p-1 border-2 border-primary-300">
            <div className="w-full h-full rounded-full overflow-hidden relative">
              <Image
                src={storyLineTestData[1].userAvatar}
                alt={storyLineTestData[1].userName}
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
                fill
                className="blur-md"
              />
              <MessageCircle
                fill="white"
                color="white"
                className="absolute size-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            </div>
          </div>
          <p className="text-sm">
            Connects{" "}
            <strong className="font-medium text-secondary-500">12</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
