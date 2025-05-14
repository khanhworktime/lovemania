import { EGenderDefine } from "@/enum/EGenderDefine.enum";

export interface MetadataMintProfileInput {
  name: string;
  description: string;
  image: string;
  // interests: string[];
  gender: string;
  genderType: EGenderDefine;
  birthday: string;
}

export interface MetadataMintAvatarInput {
  name: string;
  description: string;
  image: string;
}

export interface CreateUserInput {
  userInput: {
    profile: {
      interests: string[];
    };
    preference: {
      distance: number;
      minAge: number;
      maxAge: number;
      genderType: EGenderDefine;
    };
  };
}

export interface IUser {
  id: string;
  displayName: string;
  walletAddress: string;
  birthday: string;
  bio: string;
  avatarUrl: string;
  genderType: string;
  genderValue: string;
  interests: string[];
  createdAt: string;
  updatedAt: string;
  isSuperLikeBadge: boolean;
}

export type IOtherUser = Omit<IUser, "isSuperLikeBadge">;
