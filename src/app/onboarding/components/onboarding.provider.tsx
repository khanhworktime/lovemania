"use client";

import { CalendarDate } from "@internationalized/date";
import { createContext, useContext, useEffect, useState } from "react";

interface ProfileFormData {
  name: string;
  dob: CalendarDate;
  definition: string;
  interests: string[];
  photos: string[];
}

interface OnboardingContextType {
  profileData: ProfileFormData;
  updateProfileData: (data: Partial<ProfileFormData>) => void;
}

const defaultProfileData: ProfileFormData = {
  name: "",
  dob: new CalendarDate(2000, 1, 1),
  definition: "",
  interests: [],
  photos: [],
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
  const [profileData, setProfileData] =
    useState<ProfileFormData>(defaultProfileData);

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
