"use client";
import { useBodyAppColor } from "@/hooks/UseBodyAppColor";
import { useUploadImage } from "@/hooks/UseUploadImage";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/shared-components/ui/Carousel";
import {
  addToast,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  useDisclosure,
} from "@heroui/react";
import { ChevronLeftIcon, PlusIcon, XIcon } from "lucide-react";
import { useTransitionRouter } from "next-view-transitions";
import Autoplay from "embla-carousel-autoplay";
import { sleep } from "@/utils/sleep";
import { useCreatePostForm } from "../contexts/useCreatePostForm";
const MAX_IMAGES = 5;

export default function PostCreateImagePage() {
  const router = useTransitionRouter();

  const drawerDisclosure = useDisclosure({
    defaultOpen: true,
  });

  useBodyAppColor("#fff");

  const { setImages } = useCreatePostForm();
  // Upload Image handler
  const {
    images,
    imageFiles,
    triggerFileUpload,
    handleDelete,
    ImplementImageInput,
  } = useUploadImage({
    initialImages: [],
    maxImages: MAX_IMAGES,
    minImages: 1,
  });

  const handleNext = async () => {
    if (images.length === 0) {
      addToast({
        title: "Please upload at least one image",
        description: "Please upload at least one image",
        color: "danger",
      });
      return;
    }
    setImages(images);
    drawerDisclosure.onOpen();
    await sleep(1000);
    router.push("/post/create/caption");
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
      <div className="p-4">
        <Drawer
          isOpen={drawerDisclosure.isOpen}
          isDismissable={false}
          isKeyboardDismissDisabled
          backdrop="transparent"
          placement="bottom"
          className="max-w-md"
          classNames={{
            base: "left-1/2 -translate-x-1/2 rounded-t-3xl",
            wrapper:
              "h-[350px] p-2 bottom-0 top-[unset] inset-x-0 overflow-visible",
          }}
          hideCloseButton
        >
          <DrawerContent>
            <DrawerHeader className="flex flex-col items-center gap-8">
              <div className="h-1 w-[100px] bg-secondary-200 rounded-full" />
              <div className="text-lg font-medium text-start text-nowrap w-full flex justify-between items-center">
                <p className="">Choose pictures</p>
                <p className="text-sm text-gray-500">{images.length} / 5</p>
              </div>
            </DrawerHeader>
            <DrawerBody>
              <div className="overflow-x-auto w-full pb-4">
                <div className="flex gap-4 w-fit">
                  {/* Image preview */}
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className="w-[calc(200px-3rem)] aspect-square relative overflow-hidden"
                    >
                      <img
                        src={image}
                        alt="Preview"
                        className="w-full h-full object-contain rounded-2xl "
                      />
                      <Button
                        variant="bordered"
                        className="absolute top-1 right-1"
                        onPress={() => handleDelete(index)}
                        isIconOnly
                      >
                        <XIcon color="red" />
                      </Button>
                    </div>
                  ))}
                  {/* Add image button */}
                  {images.length < MAX_IMAGES && (
                    <div className="w-[calc(200px-3rem)]">
                      <div
                        className="aspect-square w-full h-full border-2 border-dashed rounded-2xl flex items-center justify-center cursor-pointer"
                        onClick={triggerFileUpload}
                      >
                        <PlusIcon />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </DrawerBody>
            <DrawerFooter className="mb-4">
              <Button
                size="lg"
                color="primary"
                className="w-full rounded-full"
                onPress={handleNext}
              >
                Next
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      <ImplementImageInput />
    </div>
  );
}
