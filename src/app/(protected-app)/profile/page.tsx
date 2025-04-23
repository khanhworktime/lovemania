"use client";

import {
  Avatar,
  Button,
  CircularProgress,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import {
  ChevronRightIcon,
  Languages,
  LogOut,
  Settings,
  UserIcon,
  Wallet2Icon,
  XIcon,
} from "lucide-react";

import { useOnboarding } from "@/app/(protected-app)/onboarding/components/onboarding.provider";
import { EGenderDefine } from "@/enum/EGenderDefine.enum";
import { useProfileSBT } from "@/services/profileNft/hooks/useGetProfileNft";
import { basicClient } from "@/providers/thirdweb.provider";
import { storageKeys } from "@/services/graphQl/authentication/constants/storage.key";
import { ApolloClientWrapper } from "@/services/graphQl/config/baseClass";
import { useMe } from "@/services/graphQl/user/hooks/useMe";
import moment from "moment";
import { Link, useTransitionRouter } from "next-view-transitions";
import { useConnectedWallets } from "thirdweb/react";
import { resolveScheme } from "thirdweb/storage";
import { useQueryClient } from "@tanstack/react-query";

const profileDonePercentage = 70;

export default function ProfilePage() {
  const router = useTransitionRouter();
  const { data: me, isLoading: isMeLoading } = useMe();
  const { sbt, isLoading } = useProfileSBT();

  // Logout modal
  const logoutModalControl = useDisclosure();
  const { updateProfileData } = useOnboarding();
  const connectedWallets = useConnectedWallets();

  const queryClient = useQueryClient();

  const handleLogout = async () => {
    updateProfileData({
      name: "",
      dob: null,
      interests: [],
      photos: [],
      photosIpfs: [],
      genderType: EGenderDefine.MALE,
      genderValue: "",
    });
    const localToken = sessionStorage.getItem(storageKeys.TOKEN);
    if (localToken) {
      sessionStorage.removeItem(storageKeys.TOKEN);
      sessionStorage.removeItem(storageKeys.USER_DATA);
    }
    for (const wallet of connectedWallets) {
      await wallet.disconnect();
    }

    ApolloClientWrapper.resetInstance();

    // Clear React Query cache
    if (queryClient) {
      queryClient.clear();
    }

    router.replace("/login");
  };

  if (isLoading || !sbt || isMeLoading) {
    return (
      <div className="flex flex-col gap-y-4 px-4 w-full h-svh justify-center items-center">
        <CircularProgress />
      </div>
    );
  }

  const profile = {
    name: sbt?.metadata.name,
    age: moment().diff(
      moment(sbt?.metadata.properties?.birthday || undefined),
      "years"
    ),
    image: resolveScheme({
      client: basicClient,
      uri: sbt?.metadata.image || "",
    }),
  };

  return (
    <div className="flex flex-col gap-y-4 px-4 h-svh">
      <div className="flex items-center justify-between gap-x-2 pt-4 pb-2 sticky top-0 inset-x-0 z-50 bg-white/20 backdrop-blur-sm">
        <Button
          variant="bordered"
          className="size-10 border-1"
          radius="full"
          isIconOnly
          onPress={() => router.back()}
        >
          <XIcon />
        </Button>
      </div>

      {/* Avatar */}

      <div className="flex flex-col gap-y-2 items-center justify-center">
        <div className="flex items-center gap-x-2 relative">
          <Avatar
            src={profile.image}
            className="size-24 border-2 border-white"
          />
          <CircularProgress
            aria-label={`Avatar profile progress`}
            value={profileDonePercentage}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 aspect-square justify-items-stretch"
            classNames={{
              indicator: "stroke-primary-500",
              svg: "size-32 stroke-1",
              track: "stroke-transparent",
            }}
          />
        </div>
        <h1 className="text-2xl font-medium font-chalet">
          {profile.name} {profile.age}
        </h1>
        <p className="text-sm font-medium text-gray-500">VIETNAM</p>
      </div>

      {/* Alert */}
      <div className="flex items-center gap-x-2 py-3 px-4 rounded-xl bg-secondary-500">
        <CircularProgress
          aria-label={`Avatar profile progress`}
          value={profileDonePercentage}
          showValueLabel
          classNames={{
            indicator: "stroke-primary-500",
            svg: "size-10 stroke-3",
            track: "stroke-transparent",
            value: "text-xs rounded-full",
            svgWrapper: "bg-white rounded-full",
          }}
        />

        <div className="text-sm font-medium text-white flex-grow">
          Complete your profile to stand out
        </div>

        <Button
          color="primary"
          radius="full"
          className="text-white font-chalet"
          onPress={() => router.push("/profile/edit")}
        >
          Edit profile
        </Button>
      </div>

      {/* Profile info */}
      <div className="flex flex-col gap-y-4 py-4">
        <Button
          variant="solid"
          className="bg-white gap-x-4"
          size="lg"
          onPress={() => router.push("/profile/edit")}
        >
          <UserIcon className="text-secondary-600" />
          <div className="flex-grow text-left font-chalet">My Account</div>
          <ChevronRightIcon className="text-gray-400" />
        </Button>
        <Button variant="solid" className="bg-white gap-x-4" size="lg">
          <Wallet2Icon className="text-secondary-600" />
          <div className="flex-grow text-left font-chalet">My Wallet</div>
          <ChevronRightIcon className="text-gray-400" />
        </Button>
        <Button variant="solid" className="bg-white gap-x-4" size="lg">
          <Languages className="text-secondary-600" />
          <div className="flex-grow text-left font-chalet">Language</div>
          <ChevronRightIcon className="text-gray-400" />
        </Button>
        <Button variant="solid" className="bg-white gap-x-4" size="lg">
          <Settings color="#d16bc0" />
          <div className="flex-grow text-left font-chalet">Settings</div>
          <ChevronRightIcon className="text-gray-400" />
        </Button>
      </div>

      <div className="flex flex-col justify-center items-center p-4 bg-white rounded-xl gap-y-2">
        <span className="text-xl font-medium font-chalet">
          Get more matches
        </span>

        <span className="text-sm text-gray-500">
          Be seen by more people in Encounters
        </span>

        <Link href="#" className="text-secondary-500 font-bold">
          Upgrade to Premium
        </Link>
      </div>

      <div className="flex flex-col gap-y-4 py-4 flex-grow justify-end">
        <Button
          variant="solid"
          className="bg-white gap-x-4 text-orange-800"
          size="lg"
          onPress={logoutModalControl.onOpen}
        >
          <LogOut />
          <div className="flex-grow text-left font-chalet">Logout</div>
        </Button>
        <Modal
          isOpen={logoutModalControl.isOpen}
          onOpenChange={logoutModalControl.onOpenChange}
          isDismissable={false}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader>Are you sure you want to logout?</ModalHeader>
                <ModalBody>
                  <p>
                    This action will disconnect your wallet and you will need to
                    connect again.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button onPress={onClose} variant="light">
                    Cancel
                  </Button>
                  <Button color="danger" onPress={handleLogout}>
                    Logout
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
}
