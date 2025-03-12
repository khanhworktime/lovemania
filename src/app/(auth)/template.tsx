"use client";

import { useBodyAppColor } from "@/hooks/UseBodyAppColor";

export default function AuthTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  useBodyAppColor("#fff");

  return <>{children}</>;
}
