import { addToast, toast } from "@heroui/react";
import { useRef, useState } from "react";

interface UseUploadImageProps {
  initialImages?: string[];
  maxImages?: number;
  minImages?: number;
  onImagesChange?: (imageData: string[]) => void;
  onImageFilesChange?: (files: File[]) => void;
}

export const useUploadImage = ({
  initialImages = [],
  maxImages = 10,
  minImages = 1,
  onImagesChange,
  onImageFilesChange,
}: UseUploadImageProps = {}) => {
  const [images, setImages] = useState<string[]>(initialImages);
  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let files = Array.from(event.target.files || []);

    if (files.length) {
      // Check if adding new files would exceed maxImages
      if (images.length + files.length > maxImages) {
        addToast({
          title: "Error",
          description: `You can only upload up to ${maxImages} images`,
          color: "danger",
        });
        files = files.slice(0, maxImages - images.length);
      }

      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const imageData = e.target?.result as string;
          setImages((prev) => [...prev, imageData]);
          setImageFiles((prev) => [...prev, file]);
        };
        reader.readAsDataURL(file);
      });

      onImagesChange?.(images);
      onImageFilesChange?.(imageFiles);
    }
  };

  const triggerFileUpload = () => {
    if (images.length >= maxImages) {
      addToast({
        title: "Error",
        description: `You can only upload up to ${maxImages} images`,
        color: "danger",
      });
      return;
    }
    fileInputRef.current?.click();
  };

  const handleDelete = (index: number) => {
    if (images.length <= minImages) {
      addToast({
        title: "Error",
        description: `You must have at least ${minImages} image(s)`,
        color: "danger",
      });
      return;
    }

    const newImages = images.filter((_, i) => i !== index);
    const newFiles = imageFiles.filter((_, i) => i !== index);

    setImages(newImages);
    setImageFiles(newFiles);
    onImagesChange?.(newImages);
    onImageFilesChange?.(newFiles);
  };

  const ImplementImageInput = () => {
    return (
      <input
        type="file"
        accept="image/*"
        multiple
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
    );
  };

  return {
    images,
    imageFiles,
    handleFileChange,
    triggerFileUpload,
    handleDelete,
    ImplementImageInput,
  };
};
