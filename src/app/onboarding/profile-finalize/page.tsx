"use client";

import { ArrowRightIcon } from "lucide-react";
import {
  Button,
  ModalFooter,
  Modal,
  ModalContent,
  useDisclosure,
  ModalBody,
  ModalHeader,
} from "@heroui/react";
import { useTransitionRouter } from "next-view-transitions";
import { useOnboarding } from "../components/onboarding.provider";
import Thumbnail from "@/assets/decors/profile-finalize.decor.png";
import Image from "next/image";
import { sendTransaction } from "thirdweb";
import { getNftProfileContract } from "@/services/contracts/nftProfile";
import { useGetCurrentUser } from "@/services/users/hooks/useGetCurrentUser";
import { mintNftProfile } from "@/services/minting";
import { mintWithSignature } from "thirdweb/extensions/erc721";
import { IProfileNftProps } from "@/services/minting/models/profileNft.model";
import { basicClient } from "@/providers/thirdweb.provider";
import { useState } from "react";

export default function ProfileFinalizePage() {
  const router = useTransitionRouter();
  const { profileData } = useOnboarding();
  // TODO: Add a button to connect to the wallet
  const account = useGetCurrentUser();

  const [isSigning, setIsSigning] = useState(false);

  const mintProfileNft = async (props: IProfileNftProps) => {
    if (!account?.address) return;

    const { payload, signature } = await mintNftProfile(props);

    setIsSigning(true);
    try {
      const tx = mintWithSignature({
        contract: getNftProfileContract({ client: basicClient }),
        payload,
        signature,
      });

      await sendTransaction({
        transaction: tx,
        account: account,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsSigning(false);
    }
  };

  const confirmModalControl = useDisclosure();

  const handleConfirm = async () => {
    if (!account?.address) return;
    await mintProfileNft({
      address: account?.address,
      media: profileData.photosIpfs[0],
      name: profileData.name,
      birthday: profileData.dob || "",
      genderType: profileData.definition,
      gender: profileData.definitionDescription,
    });

    router.replace("/home");
  };

  return (
    <div className="flex flex-col gap-y-4 h-full pb-12 px-4">
      <div className="mb-2">
        <Image
          src={Thumbnail}
          alt="Signup Background"
          className="object-cover object-center flex-grow"
        />
      </div>
      <h1 className="text-2xl font-medium font-chalet text-center">
        Your profile will be SBT
      </h1>
      <p className="text-center text-sm text-gray-500 flex-grow">
        Your profile information will be immutable, so treat your experiences
        with care, they&apos;re part of your story.
      </p>

      <Button
        size="lg"
        radius="full"
        color="primary"
        className="w-full"
        onPress={confirmModalControl.onOpen}
      >
        Confirm
      </Button>

      <Modal
        isOpen={confirmModalControl.isOpen}
        onOpenChange={confirmModalControl.onOpenChange}
        isDismissable={false}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                Please aware that these information will be immutable
              </ModalHeader>
              <ModalBody>
                <p>
                  This action will mint your profile NFT and you will not be
                  able to change it.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button onPress={onClose} variant="light">
                  Cancel
                </Button>
                <Button
                  color="primary"
                  onPress={async () => {
                    await handleConfirm();
                    onClose();
                  }}
                  isLoading={isSigning}
                >
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {isSigning && (
        <div className="fixed z-[60] inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      )}
    </div>
  );
}
