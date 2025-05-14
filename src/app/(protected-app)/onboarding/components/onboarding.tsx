"use client";

import { ChevronLeftIcon } from "@/assets/icons";
import { useBodyAppColor } from "@/hooks/UseBodyAppColor";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Progress,
  useDisclosure,
} from "@heroui/react";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { useConnectedWallets } from "thirdweb/react";
import { onboardingSteps } from "../steps";
import { useOnboarding } from "./onboarding.provider";
import { EGenderDefine } from "@/enum/EGenderDefine.enum";
import { useLoginServer } from "@/services/graphql/authentication/hooks/useLoginServer";
import { useSessionStorage } from "usehooks-ts";
import { storageKeys } from "@/services/graphql/authentication/constants/storage.key";
import { useGetCurrentUser } from "@/services/users/hooks/useGetCurrentUser";

export default function Onboarding({
  children,
}: {
  children: React.ReactNode;
}) {
  const connectedWallets = useConnectedWallets();

  const pathname = usePathname();
  const currentStep =
    onboardingSteps[pathname.split("/").pop() as keyof typeof onboardingSteps];

  const router = useTransitionRouter();

  useBodyAppColor("#fcf5fa");

  // Handle modal díclosure
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [_, setToken] = useSessionStorage<string | null>(
    storageKeys.TOKEN,
    null
  );

  // Handle forward action

  const account = useGetCurrentUser();

  console.log(account);

  const handleBack = async () => {
    if (
      connectedWallets.length > 0 &&
      currentStep === onboardingSteps["profile-name"]
    ) {
      onOpen();
    } else {
      router.push(`/onboarding/${onboardingSteps[currentStep - 1]}`);
    }
  };

  const { updateProfileData } = useOnboarding();

  return (
    <div className="flex flex-col gap-6 h-full">
      {/* Return action */}
      <div className="sticky top-0">
        <Button
          variant="bordered"
          size="md"
          className="aspect-square w-auto"
          radius="full"
          isIconOnly
          onPress={handleBack}
        >
          <ChevronLeftIcon />
        </Button>
      </div>

      {currentStep === onboardingSteps["profile-name"] && (
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
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
                  <Button
                    color="danger"
                    onPress={async () => {
                      updateProfileData({
                        name: "",
                        dob: null,
                        genderValue: "Male",
                        genderType: EGenderDefine.MALE,
                        interests: [],
                        photos: [],
                        photosIpfs: [],
                      });
                      for (const wallet of connectedWallets) {
                        await wallet.disconnect();
                      }
                      setToken(null);
                      router.replace("/login");
                    }}
                  >
                    Logout
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      )}

      <div className="flex-grow relative">{children}</div>
      {currentStep !== onboardingSteps["profile-finalize"] && (
        <div className="sticky bottom-0 space-y-4">
          <div className="flex justify-between items-end gap-2">
            <span className="font-bold text-lg font-chalet">
              {currentStep}
              <span className="text-secondary-300">/7</span>
            </span>
          </div>
          <Progress
            aria-label="Onboarding progress"
            value={(currentStep / 7) * 100}
            classNames={{
              indicator: "bg-secondary",
              track: "bg-secondary-200",
            }}
          />
        </div>
      )}
    </div>
  );
}
