import { Post } from "@/shared-components/ui/Post/Post";
import { postTestData } from "../StoryLine/data";

export function MatchesToOtherUsers() {
  return (
    <div className="flex flex-col gap-4">
      {postTestData.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
