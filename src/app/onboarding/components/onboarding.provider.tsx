"use client";

import { EGenderDefine } from "@/enum/EGenderDefine.enum";
import { CalendarDate } from "@internationalized/date";
import { createContext, useContext } from "react";
import { useSessionStorage } from "usehooks-ts";

interface ProfileFormData {
  name: string;
  dob: string | null;
  genderType: EGenderDefine;
  genderValue: string;
  lookingFor: EGenderDefine;
  interests: string[];
  photos: string[];
  photosIpfs: string[];
}

interface OnboardingContextType {
  profileData: ProfileFormData;
  updateProfileData: (data: Partial<ProfileFormData>) => void;
}

const defaultProfileData: ProfileFormData = {
  name: "",
  dob: null,
  genderType: EGenderDefine.MALE,
  genderValue: "Male",
  lookingFor: EGenderDefine.MALE,
  interests: [],
  photos: [],
  photosIpfs: [],
};

const OnboardingContext = createContext<OnboardingContextType | undefined>(
  undefined
);

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error("useOnboarding must be used within an OnboardingProvider");
  }
  return context;
}

export function OnboardingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [profileData, setProfileData] = useSessionStorage<ProfileFormData>(
    "profileData",
    defaultProfileData
  );

  const updateProfileData = (data: Partial<ProfileFormData>) => {
    setProfileData((prev) => ({
      ...prev,
      ...data,
    }));
  };

  return (
    <OnboardingContext.Provider
      value={{
        profileData,
        updateProfileData,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}
