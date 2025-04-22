"use client";

import { basicClient } from "@/providers/thirdweb.provider";
import PhotoUploader from "@/shared-components/ui/PhotoUploader";
import { Button } from "@heroui/react";
import { useTransitionRouter } from "next-view-transitions";
import { useEffect, useState } from "react";
import { upload } from "thirdweb/storage";
import { useOnboarding } from "../components/onboarding.provider";
import { getFileFromBase64 } from "@/utils/converBase64toFile";
import { onboardingSteps } from "../steps";

export default function ProfilePhotoPage() {
  const router = useTransitionRouter();

  const { profileData, updateProfileData } = useOnboarding();
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    updateProfileData({
      photos: photos.filter((photo) => photo !== undefined),
    });
  }, [photos]);

  const handlePhotoUpload = (photo: string | null, index: number) => {
    if (photo) {
      const newPhotos = [...photos];
      newPhotos[index] = photo;
      setPhotos(newPhotos);
    } else {
      const newPhotos = [...photos];
      setPhotos(newPhotos.filter((photo) => photo !== undefined));
    }
  };

  // Upload photos to IPFS

  const [isUploading, setIsUploading] = useState(false);

  const handleImageUpload = async () => {
    const ipfsImages = [];
    for (const photo of photos) {
      if (!photo) continue;
      const image = getFileFromBase64(photo, "imageTest");
      setIsUploading(true);
      const result = await upload({
        client: basicClient,
        files: [image],
        metadata: {
          name: image.name,
          description: "Image for profile photo",
          image: image.name,
        },
      });
      ipfsImages.push(result);
    }

    setIsUploading(false);
    if (!ipfsImages) return;

    updateProfileData({ photosIpfs: ipfsImages });
  };
  const isDisabled = !photos[0] || isUploading;

  return (
    <>
      <h1 className="text-2xl font-medium font-chalet text-center mb-6">
        Upload your photos to claim your first Avatar NFT
      </h1>
      <div className="grid-cols-3 grid gap-2">
        <div className="col-span-2 row-span-2">
          <PhotoUploader
            initialImage={profileData.photos[0]}
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
          onPress={async () => {
            await handleImageUpload();
            router.push(`/onboarding/${onboardingSteps[7]}`);
          }}
          disabled={isDisabled}
          variant="solid"
          color={isDisabled ? "default" : "primary"}
          isLoading={isUploading}
        >
          Next
        </Button>
      </div>
    </>
  );
}
