export interface MetadataInput {
  name: string;
  description: string;
  image: string;
  interests: string[];
  gender: string;
  genderType: string;
  birthday: string;
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
}
