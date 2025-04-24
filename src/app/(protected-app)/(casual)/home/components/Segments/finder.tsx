"use client";

import { useRecommendedUsers } from "@/services/graphQl/user/hooks/useRecommendedUsers";
import { IUser } from "@/services/graphQl/user/user.model";
import { useLocalStorage } from "usehooks-ts";
import { DISCOVERY_STORAGE_KEY } from "@/services/graphQl/discovery/constants/storageKey";
import { useEffect, useState } from "react";
import { MatcherCard } from "../MatcherCard";
import { CircularProgress } from "@heroui/react";

export function Finder() {
  const [index, setIndex] = useState<number>(-1);

  const [currentUser, setCurrentUser] = useLocalStorage<IUser | undefined>(
    DISCOVERY_STORAGE_KEY.CURRENT_USER_INTERACTING,
    undefined
  );

  const { data, isLoading, refetch, isFetchedAfterMount } =
    useRecommendedUsers();

  useEffect(() => {
    if ((data && !isFetchedAfterMount) || !currentUser) {
      setCurrentUser(data?.[0]);
    }
  }, [data, isFetchedAfterMount]);

  const nextUser = async () => {
    if (isFetchedAfterMount && index === -1) {
      setCurrentUser(data?.[0]);
      setIndex(0);
      return;
    }
    if (index < (data?.length || 0) - 1) {
      setIndex(index + 1);
      setCurrentUser(data?.[index + 1]);
    } else {
      await refetch();
      setIndex(0);
    }
  };

  if (data === null || isLoading || !currentUser) {
    return (
      <div className="relative w-full h-full flex justify-center items-center">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <MatcherCard user={currentUser} nextUser={nextUser} />
    </div>
  );
}
