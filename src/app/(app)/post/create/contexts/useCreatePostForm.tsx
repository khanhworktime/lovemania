"use client";
import { createContext, useContext, useState } from "react";

interface CreatePostFormContextType {
  images: string[];
  imageFiles: File[];
  caption: string;
  setImages: (images: string[]) => void;
  setImageFiles: (files: File[]) => void;
  setCaption: (caption: string) => void;
  reset: () => void;
}

const CreatePostFormContext = createContext<
  CreatePostFormContextType | undefined
>(undefined);

export function CreatePostFormProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [images, setImages] = useState<string[]>([]);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [caption, setCaption] = useState("");

  const reset = () => {
    setImages([]);
    setImageFiles([]);
    setCaption("");
  };

  return (
    <CreatePostFormContext.Provider
      value={{
        images,
        imageFiles,
        caption,
        setImages,
        setImageFiles,
        setCaption,
        reset,
      }}
    >
      {children}
    </CreatePostFormContext.Provider>
  );
}

export function useCreatePostForm() {
  const context = useContext(CreatePostFormContext);
  if (!context) {
    throw new Error(
      "useCreatePostForm must be used within a CreatePostFormProvider"
    );
  }
  return context;
}
