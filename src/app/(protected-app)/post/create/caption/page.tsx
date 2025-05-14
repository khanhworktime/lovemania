"use client";
import { useBodyAppColor } from "@/hooks/UseBodyAppColor";
import { useUploadImages } from "@/hooks/UseUploadImage/multiImages";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/shared-components/ui/Carousel";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  Textarea,
  useDisclosure,
} from "@heroui/react";
import { ChevronLeftIcon, PlusIcon, XIcon } from "lucide-react";
import { useTransitionRouter } from "next-view-transitions";
import Autoplay from "embla-carousel-autoplay";
import { useCreatePostForm } from "../contexts/useCreatePostForm";
import { useState } from "react";
import { useCreatePost } from "@/services/graphQl/post/hooks/useCreatePost";

export default function PostCreateCaptionPage() {
  const router = useTransitionRouter();
  const drawerDisclosure = useDisclosure({
    defaultOpen: true,
  });

  // Data controller
  const {
    images,
    setCaption: setFormCaption,
    uploadImage,
  } = useCreatePostForm();
  const [caption, setCaption] = useState("");

  useBodyAppColor("#fff");

  const handleConfirmUpload = () => {
    setFormCaption(caption);
    handleUpload();
  };

  const { mutate: createPost } = useCreatePost();

  const handleUpload = async () => {
    const media = await uploadImage();
  };

  return (
    <div className="flex flex-col items-stretch gap-y-4">
      <div className="flex items-center gap-x-4 pt-4 pb-2 px-6 sticky top-0 inset-x-0 z-50">
        <Button
          variant="bordered"
          className="size-10 border-1  "
          radius="full"
          isIconOnly
          onPress={() => router.back()}
        >
          <ChevronLeftIcon />
        </Button>
        <div className="text-lg font-medium font-chalet text-center text-nowrap">
          Create a post
        </div>
      </div>

      {/* Previews sections */}
      {images.length === 0 ? (
        <div className="p-4 w-full aspect-square">
          <div className="border border-dashed h-full w-full flex place-items-center place-content-center rounded-3xl">
            No Image to Preview
          </div>
        </div>
      ) : (
        <Carousel
          className="w-full "
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: true,
              stopOnFocusIn: true,
              stopOnMouseEnter: true,
            }),
          ]}
        >
          <CarouselContent className="">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="p-4 relative aspect-square pl-8"
              >
                <img
                  src={image}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-all duration-300"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      )}

      {/* Actions section */}

      <Drawer
        isOpen={drawerDisclosure.isOpen}
        isDismissable={false}
        placement="bottom"
        isKeyboardDismissDisabled
        backdrop="transparent"
        className="max-w-md"
        classNames={{
          base: "left-1/2 -translate-x-1/2 rounded-t-3xl",
          wrapper:
            "h-[350px] p-2 bottom-0 top-[unset] inset-x-0 overflow-visible",
        }}
        hideCloseButton
      >
        <DrawerContent>
          <DrawerHeader className="flex flex-col items-center gap-8 pb-0">
            <div className="h-1 w-[100px] bg-secondary-200 rounded-full" />
            <div className="text-lg font-medium text-start text-nowrap w-full flex justify-between items-center">
              <p className="">Write a caption</p>
              <p className="text-sm text-gray-500">{caption.length} / 50</p>
            </div>
          </DrawerHeader>
          <DrawerBody>
            <Textarea
              variant="underlined"
              placeholder="Aa"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              maxLength={50}
              className="resize-none"
            />
          </DrawerBody>
          <DrawerFooter className="my-4">
            <Button
              onPress={handleConfirmUpload}
              size="lg"
              color="primary"
              className="w-full rounded-full"
            >
              Upload
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
