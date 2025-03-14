"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  useEffect(() => {
    window.scrollTo(1, 0);
  }, [pathName]);

  return (
    <div className="container max-w-md overflow-x-hidden relative mx-auto bg-background min-h-svh h-svh">
      {children}
    </div>
  );
}
