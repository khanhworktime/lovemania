"use client";
import { useBodyAppColor } from "@/hooks/UseBodyAppColor";
import { useCreatePost } from "@/services/graphqlService/post/hooks/useCreatePost";
import useGetMintingAvatarTx from "@/services/graphqlService/user/hooks/useMintingAvatar";
import { ipfsService } from "@/services/ipfsService/ipfs.service";
import { useGetCurrentUser } from "@/services/users/hooks/useGetCurrentUser";
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
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeftIcon } from "lucide-react";
import { useTransitionRouter } from "next-view-transitions";
import { useState } from "react";
import { estimateGas, sendTransaction, waitForReceipt } from "thirdweb";
import { useCreatePostForm } from "../contexts/useCreatePostForm";
import { basicClient } from "@/providers/thirdweb.provider";
import { somniaChain } from "@/constants/somniaChain";
import { parseGwei } from "viem";
export default function PostCreateCaptionPage() {
  const router = useTransitionRouter();
  const drawerDisclosure = useDisclosure({
    defaultOpen: true,
  });

  const account = useGetCurrentUser();

  // Data controller
  const {
    images,
    setCaption: setFormCaption,
    imageFiles,
  } = useCreatePostForm();
  const [caption, setCaption] = useState("");

  useBodyAppColor("#fff");

  const handleConfirmUpload = () => {
    setFormCaption(caption);
    handleUpload();
  };

  const { mutateAsync: createPost, isPending } = useCreatePost();

  const { mutateAsync: mintAvatar, isPending: isPendingTx } =
    useGetMintingAvatarTx();

  const handleUpload = async () => {
    try {
      if (!account) throw new Error("Account not found");
      await createPost({ media: imageFiles, caption });
      // const imageUri = await ipfsService.uploadIpfs(imageFiles[0]);
      // const mintTx = await mintAvatar({
      //   metadata: {
      //     name: "Avatar",
      //     description: "Avatar",
      //     image: imageUri,
      //   },
      // });

      // const estGas = await estimateGas({
      //   transaction: mintTx,
      //   account,
      // });

      // const tx = await sendTransaction({
      //   transaction: mintTx,
      //   account,
      // });

      // const txHash = await waitForReceipt({
      //   transactionHash: tx.transactionHash,
      //   client: basicClient,
      //   chain: somniaChain,
      // });

      // console.log(txHash);
    } catch (error) {
      console.error(error);
    }
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
              isLoading={isPending}
            >
              Upload
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
