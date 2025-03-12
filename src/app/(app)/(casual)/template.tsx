"use client";

import { useBodyAppColor } from "@/hooks/UseBodyAppColor";

export default function CasualTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  useBodyAppColor("#fcf5fa");
  return <>{children}</>;
}
