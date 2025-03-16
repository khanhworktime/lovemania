"use client";

import PhotoUploader from "@/shared-components/ui/PhotoUploader";
import { Button } from "@heroui/react";
import { useTransitionRouter } from "next-view-transitions";
import { useOnboarding } from "../components/onboarding.provider";
import { useState, useEffect } from "react";

export default function ProfilePhotoPage() {
  const router = useTransitionRouter();

  const { profileData, updateProfileData } = useOnboarding();
  const [photos, setPhotos] = useState<string[]>(profileData.photos || []);

  useEffect(() => {
    updateProfileData({ photos });
  }, [photos]);

  const handlePhotoUpload = (photo: string | null, index: number) => {
    if (photo) {
      const newPhotos = [...photos];
      newPhotos[index] = photo;
      setPhotos(newPhotos);
    } else {
      const newPhotos = [...photos];
      newPhotos[index] = "";
      setPhotos(newPhotos);
    }
  };

  console.log(photos);

  return (
    <>
      <h1 className="text-2xl font-medium font-chalet text-center mb-6">
        Upload your photos
      </h1>
      <div className="grid-cols-3 grid gap-2">
        <div className="col-span-2 row-span-2">
          <PhotoUploader
            onImageChange={(photo) => handlePhotoUpload(photo, 0)}
          />
        </div>
        <PhotoUploader onImageChange={(photo) => handlePhotoUpload(photo, 1)} />
        <PhotoUploader onImageChange={(photo) => handlePhotoUpload(photo, 2)} />
        <PhotoUploader onImageChange={(photo) => handlePhotoUpload(photo, 3)} />
        <PhotoUploader onImageChange={(photo) => handlePhotoUpload(photo, 4)} />
        <PhotoUploader onImageChange={(photo) => handlePhotoUpload(photo, 5)} />
      </div>
      <div className="flex justify-center items-center mt-6">
        <Button
          className="w-full font-chalet"
          size="lg"
          radius="full"
          onPress={() => router.push("/home")}
          disabled={!photos[0]}
          variant="solid"
          color={!photos[0] ? "default" : "primary"}
        >
          Next
        </Button>
      </div>
    </>
  );
}
