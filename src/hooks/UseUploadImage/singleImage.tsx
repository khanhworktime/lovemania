import { addToast } from "@heroui/react";
import { useEffect, useRef, useState } from "react";

interface UseUploadImageProps {
  initialImage?: string;
  onImageChange?: (imageData: string | null) => void;
  onImageFileChange?: (file: File | null) => void;
}

export const useUploadImage = ({
  initialImage = "",
  onImageChange,
  onImageFileChange,
}: UseUploadImageProps = {}) => {
  const [image, setImage] = useState<string>(initialImage);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (initialImage) {
      setImage(initialImage);
    }
  }, [initialImage]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageData = e.target?.result as string;
        setImage(imageData);
        setImageFile(file);
        onImageChange?.(imageData);
        onImageFileChange?.(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  const handleDelete = () => {
    setImage("");
    setImageFile(null);
    onImageChange?.(null);
    onImageFileChange?.(null);
  };

  const ImplementImageInput = () => (
    <input
      type="file"
      ref={fileInputRef}
      onChange={handleFileChange}
      accept="image/*"
      className="hidden"
    />
  );

  return {
    image,
    imageFile,
    triggerFileUpload,
    handleDelete,
    ImplementImageInput,
  };
};
