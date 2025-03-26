import { storyLineTestData } from "@/exampleData/data";
import { HeartIcon } from "lucide-react";
import Image from "next/image";

interface RecentMatchProps {
  showOverlay: boolean;
}

export function RecentMatch({ showOverlay = false }: RecentMatchProps) {
  return (
    <div className="max-w-full overflow-x-auto pb-2  pl-4">
      <div className="flex gap-3">
        {storyLineTestData.map((story) => (
          <div key={story.id} className="flex flex-col items-center gap-y-1.5">
            <div className="w-20 aspect-[0.85] rounded-xl overflow-hidden">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                {/* Image */}
                <Image
                  src={story.userAvatar}
                  alt={story.userName}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  fill
                />

                {/* Overlay */}
                <div
                  className={`card-overlay absolute inset-0 bg-white/40 flex flex-col items-center justify-center ${
                    showOverlay ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="text-white">
                    <HeartIcon fill="currentColor" />
                  </div>

                  <span className="text-white font-bold">35</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
