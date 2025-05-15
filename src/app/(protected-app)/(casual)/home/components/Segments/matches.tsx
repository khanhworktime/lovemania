import { Post } from "@/shared-components/ui/Post/Post";
import { useGetFeeds } from "@/services/graphqlService/post/hooks/useGetFeeds";
import { postTestData } from "../../../../../../exampleData/data";
import { Skeleton } from "@heroui/react";

export function NewsFeed() {
  const { data, isPending } = useGetFeeds();

  if (isPending) {
    return (
      <div className="flex flex-col gap-4 pb-24">
        <Skeleton className="w-full h-48" />
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="flex flex-col gap-1 pb-24 items-center justify-center">
        <p className="text-xl">No posts to show!!!</p>
        <p className="font-chalet text-3xl text-primary-600">
          LET&apos;S SWIPE
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 pb-24">
      {postTestData.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
