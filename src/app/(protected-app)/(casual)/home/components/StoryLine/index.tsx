import { storyLineTestData } from "../../../../../../exampleData/data";
import Image from "next/image";
import { useProfileSBT } from "@/hooks/UseProfile";
import { basicClient } from "@/providers/thirdweb.provider";
import { resolveScheme } from "thirdweb/storage";
import { CircularProgress, image, Skeleton } from "@heroui/react";

export function StoryLine() {
  const { sbt, isLoading } = useProfileSBT();

  if (isLoading || !sbt) {
    return (
      <div className="max-w-full overflow-x-auto pb-2 px-4 flex gap-3">
        <Skeleton className="w-20 aspect-square rounded-full" />
        <Skeleton className="w-20 aspect-square rounded-full" />
        <Skeleton className="w-20 aspect-square rounded-full" />
        <Skeleton className="w-20 aspect-square rounded-full" />
        <Skeleton className="w-20 aspect-square rounded-full" />
      </div>
    );
  }

  const profile = {
    image: sbt?.metadata.image
      ? resolveScheme({
          client: basicClient,
          uri: sbt?.metadata.image || "",
        })
      : null,
  };

  return (
    <div className="max-w-full overflow-x-auto pb-2 px-4 ">
      <div className="flex gap-3">
        {profile.image && (
          <div className="flex flex-col items-center gap-y-1.5">
            <div className="w-20 h-20 aspect-square rounded-full overflow-hidden p-1 border-2 border-primary-300">
              <div className="w-full h-full rounded-full overflow-hidden relative">
                <img
                  src={profile.image}
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                    width: "100%",
                    height: "100%",
                  }}
                  alt="Profile"
                />
              </div>
            </div>
            <p className="">My Story</p>
          </div>
        )}
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
