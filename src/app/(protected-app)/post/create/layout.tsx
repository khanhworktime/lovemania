"use client";

import { CreatePostFormProvider } from "./contexts/useCreatePostForm";

export default function PostCreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CreatePostFormProvider>{children}</CreatePostFormProvider>;
}
