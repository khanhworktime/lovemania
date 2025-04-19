"use client";

import Thumbnail from "@/assets/decors/profile-finalize.decor.png";
import { EGenderDefine } from "@/enum/EGenderDefine.enum";
import { basicClient } from "@/providers/thirdweb.provider";
import { getAvatarProfileContract } from "@/services/contracts/avatarProfile";
import useCreateUser from "@/services/graphQl/user/hooks/useCreateUser";
import useGetMintingAvatarTx from "@/services/graphQl/user/hooks/useMintingAvatar";
import useGetMintingProfileTx from "@/services/graphQl/user/hooks/useMintingProfile";
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
import { getOwnedNFTs } from "thirdweb/extensions/erc721";
import { useSendBatchTransaction } from "thirdweb/react";
import { useOnboarding } from "../components/onboarding.provider";

export default function ProfileFinalizePage() {
  const router = useTransitionRouter();
  const { profileData } = useOnboarding();
  const account = useGetCurrentUser();

  const { mutateAsync: mintProfile } = useGetMintingProfileTx();
  const { mutateAsync: createUser } = useCreateUser();
  const { mutateAsync: mintAvatar } = useGetMintingAvatarTx();

  const { mutateAsync: sendBatchTransaction, isPending } =
    useSendBatchTransaction();

  const confirmModalControl = useDisclosure();

  const handleConfirm = async () => {
    if (!account?.address) return;

    try {
      const txProfile = await mintProfile({
        metadata: {
          name: profileData.name,
          description: "",
          image:
            profileData.photos[0] ||
            "ipfs://QmcRH3ANZLFoB7YadLkBt6m8vJWZXKaT44P3uXW7PCSrzk/lovemania.png",
          interests: profileData.interests,
          gender: profileData.genderValue,
          genderType: profileData.genderType,
          birthday: profileData.dob || "",
        },
      });

      const txAvatar = await mintAvatar({
        metadata: {
          name: "Initial Avatar",
          description: "",
          image:
            profileData.photos[0] ||
            "ipfs://QmcRH3ANZLFoB7YadLkBt6m8vJWZXKaT44P3uXW7PCSrzk/lovemania.png",
        },
      });

      if (!txProfile || !txAvatar) {
        throw new Error("Failed to mint profile NFT");
      }

      await sendBatchTransaction([txProfile, txAvatar]);

      await sleep(1000);

      const nftProfile = await getOwnedNFTs({
        contract: getAvatarProfileContract({ client: basicClient }),
        owner: account.address,
      });

      if (!nftProfile) {
        throw new Error("Failed to get profile NFT");
      }

      await createUser({
        userInput: {
          profile: {
            interests: profileData.interests,
          },
          preference: {
            distance: 100,
            minAge: 18,
            maxAge: 30,
            genderType: profileData.genderType.toString() as `${EGenderDefine}`,
            genderValue: profileData.genderValue,
          },
        },
      });

      router.replace(`/home`);
    } catch (error) {
      addToast({
        title: "Error",
        description: "Failed to mint profile NFT",
        color: "danger",
      });
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
