import CameraIcon from "@/assets/icons/CameraIcon";
import FaceIcon from "@/assets/icons/FaceIcon";
import { useUploadImage } from "@/hooks/UseUploadImage";
import { Button, Card, CardBody } from "@heroui/react";
import { XIcon } from "lucide-react";
import React from "react";

interface PhotoUploaderProps {
  initialImage?: string;
  onImageChange?: (imageData: string | null) => void;
  onImageFileChange?: (file: File | null) => void;
}

const PhotoUploader: React.FC<PhotoUploaderProps> = ({
  initialImage,
  onImageChange,
  onImageFileChange,
}) => {
  const { triggerFileUpload, image, handleDelete, ImplementImageInput } =
    useUploadImage({
      initialImage,
      onImageChange,
      onImageFileChange,
    });

  return (
    <div className="w-full h-full relative">
      {/* Photo Card */}
      <Card
        className={`relative aspect-square overflow-hidden cursor-pointer shadow-none`}
        onPress={triggerFileUpload}
        radius="lg"
      >
        {image ? (
          <>
            <img
              src={image}
              alt="Uploaded photo"
              className="w-full h-full object-cover"
            />
            <Button
              className="absolute bottom-2 inset-x-2 bg-gray-600 text-white p-2 flex items-center justify-center gap-2"
              onPress={triggerFileUpload}
              radius="full"
            >
              <CameraIcon className="h-5 w-5 " color="white" />
              <span className="text-sm font-medium">Change</span>
            </Button>
            <Button
              className="absolute top-2 right-2 text-white p-2 flex items-center justify-center gap-2"
              onPress={handleDelete}
              isIconOnly
              variant="light"
            >
              <XIcon className="h-5 w-5 " color="white" />
            </Button>
          </>
        ) : (
          <CardBody className="w-full h-full bg-white flex flex-col items-center justify-center">
            <FaceIcon
              className={`w-1/2 h-1/2 mb-2 opacity-10`}
              color="#4B164C"
            />
          </CardBody>
        )}
      </Card>

      {/* Add Button (only shown when no image) */}
      {!image && (
        <Button
          onPress={triggerFileUpload}
          className="absolute bottom-2 inset-x-2 bg-primary-400 text-white"
          radius="full"
          size="sm"
        >
          <span className="text-lg font-bold">+</span>
          <span>Add</span>
        </Button>
      )}

      {/* Hidden file input */}
      <ImplementImageInput />
    </div>
  );
};

export default PhotoUploader;
