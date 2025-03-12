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
    <main className="container max-w-md overflow-x-hidden mx-auto bg-background min-h-svh">
      {children}
    </main>
  );
}
