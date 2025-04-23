"use client";

import PhotoUploader from "@/shared-components/ui/PhotoUploader";
import { Button, Chip, cn, DatePicker, Input, Textarea } from "@heroui/react";
import { ChevronLeftIcon } from "lucide-react";

import { useTransitionRouter } from "next-view-transitions";
import { useForm } from "@tanstack/react-form";
import { profileValidator, type Profile } from "@/validators/profile.validator";
import { parseDate } from "@internationalized/date";
import { TypeOf } from "zod";
import { getOwnedNFTs } from "thirdweb/extensions/erc721";
import { basicClient } from "@/providers/thirdweb.provider";
import { useGetCurrentUser } from "@/services/users/hooks/useGetCurrentUser";
import { getNftProfileContract } from "@/services/contracts/nftProfile";
import { useState, useEffect } from "react";
import { NFT } from "thirdweb";
import moment from "moment";
import { resolveScheme } from "thirdweb/storage";
import { useProfileSBT } from "@/services/profileNft/hooks/useGetProfileNft";
// const profileDonePercentage = 70;

export default function EditProfilePage() {
  const router = useTransitionRouter();

  const account = useGetCurrentUser();
  const { sbt, isLoading } = useProfileSBT();

  const formControl = useForm({
    defaultValues: {
      name: "",
      gender: "",
      bio: "",
      location: "",
      interests: [
        "📸 Photography",
        "🎥 Video",
        "🎨 Art",
        "🎵 Music",
        "🎮 Gaming",
      ] as string[],
      birthday: null as Date | null,
    },
    validators: {
      onChange: profileValidator,
    },
  });

  useEffect(() => {
    if (sbt) {
      formControl.setFieldValue("name", sbt.metadata.name ?? "");
      formControl.setFieldValue(
        "gender",
        sbt.metadata.properties?.gender as string
      );
      formControl.setFieldValue(
        "birthday",
        sbt.metadata.properties?.birthday
          ? moment(sbt.metadata.properties?.birthday).add(1, "day").toDate()
          : null
      );
    }
  }, [sbt]);

  return (
    <div className="bg-[#fcf5fa] flex flex-col gap-y-6 [&>*]:px-4 relative">
      <div className="flex justify-between items-center gap-x-2 pt-4 pb-2 sticky top-0 inset-x-0 z-50  backdrop-blur-sm">
        <Button
          variant="bordered"
          className="size-10 border-1"
          radius="full"
          isIconOnly
          onPress={() => router.back()}
        >
          <ChevronLeftIcon />
        </Button>
        <div className="text-2xl font-medium font-chalet text-center text-nowrap">
          Edit Profile
        </div>
        <div className="size-10" />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 row-span-2">
          {sbt?.metadata.image && (
            <PhotoUploader
              initialImage={resolveScheme({
                client: basicClient,
                uri: sbt?.metadata.image,
              })}
            />
          )}
        </div>
        <PhotoUploader />
        <PhotoUploader />
        <PhotoUploader />
        <PhotoUploader />
        <PhotoUploader />
      </div>

      {/* Personal Information */}

      <div className="flex flex-col gap-y-6">
        <div className="text-lg font-medium font-chalet uppercase text-gray-400 tracking-wider">
          Personal Details
        </div>
        <formControl.Field name="name">
          {(field) => (
            <div className="flex flex-col gap-y-2">
              <Input
                labelPlacement="outside"
                label="Full Name"
                placeholder="Full Name"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                classNames={{
                  label: "text-lg font-normal font-chalet",
                  inputWrapper: "bg-white py-4 px-4 h-full",
                  input: "text-md font-chalet",
                }}
              />
            </div>
          )}
        </formControl.Field>
        <formControl.Field name="birthday">
          {(field) => (
            <div className="flex flex-col gap-y-2">
              <DatePicker
                labelPlacement="outside"
                label="Birthday"
                value={
                  field.state.value
                    ? parseDate(field.state.value.toISOString().split("T")[0])
                    : null
                }
                onChange={(e) =>
                  field.handleChange(e ? new Date(e.toString()) : null)
                }
                classNames={{
                  label: "text-lg font-normal font-chalet",
                  inputWrapper: "bg-white py-4 px-4 h-full",
                  input: "text-md font-chalet",
                }}
              />
            </div>
          )}
        </formControl.Field>
        <formControl.Field name="bio">
          {(field) => (
            <div className="flex flex-col gap-y-2">
              <Textarea
                labelPlacement="outside"
                label="About"
                placeholder="About me"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                classNames={{
                  label: "text-lg font-normal font-chalet",
                  inputWrapper: "bg-white py-4 px-4 h-full",
                  input: "text-md font-chalet",
                }}
              />
            </div>
          )}
        </formControl.Field>
        <formControl.Field name="interests">
          {(field) => (
            <div className="flex flex-col gap-y-2">
              <p className="text-lg font-normal font-chalet">My interests</p>
              <div className="flex flex-wrap gap-2">
                {field.state.value.map((interest) => {
                  return (
                    <Chip
                      key={interest}
                      className="transition-all duration-300"
                      classNames={{
                        content: cn("text-medium"),
                        base: cn(
                          "h-fit py-2 px-3 bg-white border border-primary-300 cursor-pointer"
                        ),
                      }}
                      variant="faded"
                      onClick={() =>
                        field.handleChange((prev) => {
                          const interestList = new Set(prev);
                          if (interestList.has(interest)) {
                            interestList.delete(interest);
                          } else {
                            interestList.add(interest);
                          }
                          return Array.from(interestList);
                        })
                      }
                    >
                      <div>{interest}</div>
                    </Chip>
                  );
                })}
              </div>
            </div>
          )}
        </formControl.Field>

        <formControl.Field name="location">
          {(field) => (
            <div className="flex flex-col gap-y-2">
              <Input
                labelPlacement="outside"
                label="Location"
                placeholder="Location"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                classNames={{
                  label: "text-lg font-normal font-chalet",
                  inputWrapper: "bg-white py-4 px-4 h-full",
                  input: "text-md font-chalet",
                }}
              />
            </div>
          )}
        </formControl.Field>

        <formControl.Field name="gender">
          {(field) => (
            <div className="flex flex-col gap-y-2">
              <Input
                labelPlacement="outside"
                label="Gender"
                placeholder="Gender"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                classNames={{
                  label: "text-lg font-normal font-chalet",
                  inputWrapper: "bg-white py-4 px-4 h-full",
                  input: "text-md font-chalet",
                }}
              />
            </div>
          )}
        </formControl.Field>

        <div className="sticky bottom-0 inset-x-0 z-20 bg-[#fcf5fa] py-4">
          <Button
            className="w-full font-chalet h-14 text-lg"
            radius="full"
            color="primary"
          >
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}
