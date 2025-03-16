"use client";
import { useBodyAppColor } from "@/hooks/UseBodyAppColor";

export default function ProfileTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  useBodyAppColor("#F9FAFB");

  return <>{children}</>;
}
