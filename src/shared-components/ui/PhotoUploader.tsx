import CameraIcon from "@/assets/icons/CameraIcon";
import FaceIcon from "@/assets/icons/FaceIcon";
import { Button, Card, CardBody } from "@heroui/react";
import React, { useRef, useState } from "react";
import { XIcon } from "lucide-react";

interface PhotoUploaderProps {
  initialImage?: string;
  onImageChange?: (imageData: string | null) => void;
}

const PhotoUploader: React.FC<PhotoUploaderProps> = ({
  initialImage,
  onImageChange,
}) => {
  const [image, setImage] = useState<string | null>(initialImage || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target?.result as string;
        setImage(imageData);
        onImageChange?.(imageData);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleDelete = () => {
    setImage(null);
    onImageChange?.(null);
  };

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
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />
    </div>
  );
};

export default PhotoUploader;
