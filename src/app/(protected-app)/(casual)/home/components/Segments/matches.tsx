import { Post } from "@/shared-components/ui/Post/Post";
import { postTestData } from "../../../../../../exampleData/data";

export function NewsFeed() {
  return (
    <div className="flex flex-col gap-4 pb-24">
      {postTestData.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
