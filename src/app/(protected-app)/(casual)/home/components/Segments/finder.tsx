"use client";

import { useMatcherList } from "@/services/graphQl/user/hooks/useMatcherList";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";
import { MatcherCard } from "../MatcherCard";
import { preloadImages } from "@/utils/preloadImg";
import { CircularProgress } from "@heroui/react";
export function Finder() {
  const [page, setPage] = useState<number>(0);
  const [index, setIndex] = useState<number>(0);
  const { data, isLoading, error, fetchNextPage } = useMatcherList();

  const nextUser = async () => {
    if (index < (data?.pages[page]?.items?.length || 0) - 1) {
      setIndex(index + 1);
    } else {
      await fetchNextPage();
      setPage(page + 1);
      setIndex(0);
    }
  };

  useEffect(() => {
    if (data?.pages[page]?.items) {
      preloadImages(data?.pages[page]?.items.map((item) => item.avatarUrl));
    }
  }, [data]);

  const user = data?.pages[page]?.items[index] || null;

  if (user === null || isLoading) {
    return (
      <div className="relative w-full h-full flex justify-center items-center">
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <MatcherCard user={user} nextUser={nextUser} />
    </div>
  );
}
