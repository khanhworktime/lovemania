"use client";

import Thumbnail from "@/assets/decors/profile-finalize.decor.png";
import { basicClient } from "@/providers/thirdweb.provider";
import { getAvatarProfileContract } from "@/services/contracts/avatarProfile";
import { getNftProfileContract } from "@/services/contracts/nftProfile";
import useCreateUser from "@/services/graphQl/user/hooks/useCreateUser";
import {
  MetadataMintAvatarInput,
  MetadataMintProfileInput,
} from "@/services/graphQl/user/user.model";
import { userClient } from "@/services/graphQl/user/userClient";
import { useGetCurrentUser } from "@/services/users/hooks/useGetCurrentUser";
import { sleep } from "@/utils/sleep";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  addToast,
  useDisclosure,
} from "@heroui/react";
import { useTransitionRouter } from "next-view-transitions";
import Image from "next/image";
import { mintWithSignature } from "thirdweb/extensions/erc721";
import { useSendBatchTransaction } from "thirdweb/react";
import { useOnboarding } from "../components/onboarding.provider";
export default function ProfileFinalizePage() {
  const router = useTransitionRouter();
  const { profileData, retrieveProfileData } = useOnboarding();
  const account = useGetCurrentUser();

  const { mutateAsync: createUser } = useCreateUser();

  const { mutateAsync: sendBatchTransaction, isPending } =
    useSendBatchTransaction();

  const confirmModalControl = useDisclosure();

  const getTxProfile = async (metadata: MetadataMintProfileInput) => {
    if (!account?.address) throw new Error("Account not found");
    const { signature, payload } = await userClient.mintingProfile({
      address: account.address,
      metadata,
    });

    return mintWithSignature({
      contract: getNftProfileContract({ client: basicClient }),
      signature,
      payload,
    });
  };

  const getTxAvatar = async (metadata: MetadataMintAvatarInput) => {
    if (!account?.address) throw new Error("Account not found");
    const { signature, payload } = await userClient.mintingAvatar({
      address: account.address,
      metadata,
    });

    return mintWithSignature({
      contract: getAvatarProfileContract({ client: basicClient }),
      signature,
      payload,
    });
  };

  const handleConfirm = async () => {
    try {
      if (!account?.address) throw new Error("Account not found");

      const txProfile = await getTxProfile({
        name: profileData.name,
        description: "",
        image:
          profileData.photosIpfs[0] ||
          "ipfs://QmcRH3ANZLFoB7YadLkBt6m8vJWZXKaT44P3uXW7PCSrzk/lovemania.png",
        interests: profileData.interests,
        gender: profileData.genderValue,
        genderType: profileData.genderType,
        birthday: new Date(profileData.dob || "").toISOString() || "",
      });

      const txAvatar = await getTxAvatar({
        name: "Initial Avatar",
        description: "",
        image:
          profileData.photosIpfs[0] ||
          "ipfs://QmcRH3ANZLFoB7YadLkBt6m8vJWZXKaT44P3uXW7PCSrzk/lovemania.png",
      });

      if (!txProfile || !txAvatar) {
        throw new Error("Failed to mint profile NFT");
      }

      await sendBatchTransaction([txProfile, txAvatar]);

      await sleep(1000);

      await createUser({
        userInput: {
          profile: {
            interests: profileData.interests,
          },
          preference: {
            distance: 100,
            minAge: 18,
            maxAge: 30,
            genderType: profileData.genderType,
            genderValue: profileData.genderValue,
          },
        },
      });

      retrieveProfileData();
      router.replace(`/home`);
    } catch (error) {
      addToast({
        title: "Error",
        description: "Failed to mint profile NFT" + error,
        color: "danger",
      });
      console.log(error);
    }
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
        isDisabled={isPending}
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
                  isLoading={isPending}
                >
                  Confirm
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {isPending && (
        <div className="fixed z-[60] inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      )}
    </div>
  );
}
