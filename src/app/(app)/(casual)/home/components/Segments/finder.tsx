import { useEffect, useState } from "react";
import { MatcherCard } from "../MatcherCard";
import { userTestData } from "@/exampleData/data";
import { IUser } from "@/interfaces/user.model";

export function Finder() {
  const [currentUser, setCurrentUser] = useState<IUser>(userTestData[0]);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);

  const nextUser = () => {
    const nextIndex = currentUserIndex + 1;
    if (nextIndex < userTestData.length) {
      setCurrentUser(userTestData[nextIndex]);
      setCurrentUserIndex(nextIndex);
    } else {
      // Reset to first user if we've reached the end
      setCurrentUser(userTestData[0]);
      setCurrentUserIndex(0);
    }
  };

  return (
    <div className="relative w-full h-full">
      <MatcherCard user={currentUser} nextUser={nextUser} />
    </div>
  );
}
