import { storyLineTestData } from "./data";
import Image from "next/image";

export function StoryLine() {
  return (
    <div className="max-w-full overflow-x-auto pb-2 px-4 hidden-scrollbar">
      <div className="flex gap-3">
        {storyLineTestData.map((story) => (
          <div key={story.id} className="flex flex-col items-center gap-y-1.5">
            <div className="w-20 h-20 aspect-square rounded-full overflow-hidden p-1 border-2 border-primary-300">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <Image
                  src={story.userAvatar}
                  alt={story.userName}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  fill
                />
              </div>
            </div>
            <p className="">{story.userName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
