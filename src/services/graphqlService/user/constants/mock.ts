import { IUser } from "../user.model";
import { getRandomName } from "./randomName";
import Img1 from "@/assets/users/1.jpg";
import Img2 from "@/assets/users/2.jpg";
import Img3 from "@/assets/users/3.jpg";
import Img4 from "@/assets/users/4.jpg";
import Img5 from "@/assets/users/5.png";
import Img6 from "@/assets/users/6.jpg";
import Img7 from "@/assets/users/7.jpg";
import Img8 from "@/assets/users/8.jpg";
import Img9 from "@/assets/users/9.jpg";
import Img10 from "@/assets/users/10.jpg";
import { EGenderDefine } from "@/enum/EGenderDefine.enum";

const mockImages = [
  Img1,
  Img2,
  Img3,
  Img4,
  Img5,
  Img6,
  Img7,
  Img8,
  Img9,
  Img10,
];

const mockUserNames = [
  "Titus | Somdudu 🎏",
  "Biggie Boom⛓️Somdudu",
  "NguyenHuy | ✴️ SOMDUDU",
  "BoH | S O M D U D U",
  "Amir Ormu | Somdudu 👀",
  "SomniaPioneer | S O M D U D U",
  "Rose ☀️Somdudu☀️",
  "Astrosomnia I SOMDUDU",
  "KaiotoNova | Somdudu",
  "KeriaX | SOMDUDU",
];

const mockUserAge = [22, 34, 18, 20, 43, 40, 22, 18, 25, 23];

const mockUserGenderValue = [
  "Paul’s Lover",
  "Female",
  "Little Bunny",
  "Male",
  "Corgi",
  "Gay",
  "Quill’s Lover",
  "astronaut",
  "Male",
  "Lesbian",
];

const mockUserGenderType: EGenderDefine[] = [
  EGenderDefine.ANYTHING,
  EGenderDefine.FEMALE,
  EGenderDefine.ANYTHING,
  EGenderDefine.ANYTHING,
  EGenderDefine.NON_BINARY,
  EGenderDefine.ANYTHING,
  EGenderDefine.ANYTHING,
  EGenderDefine.MALE,
  EGenderDefine.NON_BINARY,
];

// Generate random users using the mock images
export const mockUsers: IUser[] = Array.from({ length: 10 }, (_, index) => {
  return {
    id: `User_${index + 1}`,
    age: mockUserAge[index],
    displayName: mockUserNames[index],
    walletAddress: `0x${Math.random().toString(16).substring(2, 42)}`,
    birthday: new Date(
      Date.now() -
        (Math.floor(Math.random() * 15) + 20) * 365 * 24 * 60 * 60 * 1000
    )
      .toISOString()
      .split("T")[0],
    bio: `This is the bio for user ${index + 1}. Just a sample description.`,
    avatarUrl: mockImages[index].src,
    genderType: mockUserGenderType[index],
    genderValue: mockUserGenderValue[index],
    interests: ["Music", "Travel", "Food", "Sports", "Art"]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3),
    createdAt: new Date(
      Date.now() - Math.floor(Math.random() * 10000000000)
    ).toISOString(),
    updatedAt: new Date().toISOString(),
    isSuperLikeBadge: Math.random() > 0.7,
    distanceKm: Math.floor(Math.random() * 50),
  };
});
