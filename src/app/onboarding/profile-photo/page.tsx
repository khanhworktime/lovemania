"use client";

import PhotoUploader from "@/shared-components/ui/PhotoUploader";
import { Button } from "@heroui/react";
import { useTransitionRouter } from "next-view-transitions";

export default function ProfilePhotoPage() {
  const router = useTransitionRouter();

  return (
    <div>
      <h1 className="text-2xl font-medium font-chalet text-center mb-6">
        Upload your photos
      </h1>
      <div className="grid-cols-3 grid gap-2">
        <div className="col-span-2 row-span-2">
          <PhotoUploader />
        </div>
        <PhotoUploader />
        <PhotoUploader />
        <PhotoUploader />
        <PhotoUploader />
        <PhotoUploader />
      </div>
      <div className="flex justify-center items-center mt-6">
        <Button
          className="bg-primary text-white w-full font-chalet"
          size="lg"
          radius="full"
          onPress={() => router.push("/home")}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
