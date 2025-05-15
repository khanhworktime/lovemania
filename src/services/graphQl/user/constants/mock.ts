import { IUser } from "../user.model";
import { getRandomName } from "./randomName";
const mockImages = [
  "https://i.pinimg.com/736x/8b/79/6c/8b796c07d71750f531e87ce7f106c234.jpg",
  "https://i.pinimg.com/736x/0c/e2/1e/0ce21e9742ff601d7fe1afc14f687f84.jpg",
  "https://i.pinimg.com/736x/93/8e/11/938e11ab11d2812c8341e49b39c19543.jpg",
  "https://i.pinimg.com/736x/46/e1/71/46e1719d7fd7637d7639e50add74cddd.jpg",
  "https://i.pinimg.com/736x/e5/b6/87/e5b687707a90ec0eec0267dcb877beac.jpg",
  "https://i.pinimg.com/736x/cb/8e/ba/cb8eba71d22908bf61144c76e8dff908.jpg",
  "https://i.pinimg.com/736x/34/2f/a9/342fa95108ace748639f35b302c524fb.jpg",
  "https://i.pinimg.com/736x/c9/11/15/c91115906b7be3c22f02e912d392a446.jpg",
  "https://i.pinimg.com/736x/77/a0/da/77a0daaa4b05fd657945af8469607d9a.jpg",
  "https://i.pinimg.com/736x/47/72/7a/47727a3144c23864495e9c0100da16d2.jpg",
  "https://i.pinimg.com/736x/ec/7b/b1/ec7bb101d24a32c39186ac273a16c8ce.jpg",
  "https://i.pinimg.com/736x/e6/e3/9b/e6e39b7adfa9740313c5ce1bfc215def.jpg",
  "https://i.pinimg.com/736x/b4/f8/01/b4f801c3e9def5d5323790273e71b589.jpg",
  "https://i.pinimg.com/736x/93/1c/b4/931cb43afdd99ce973f8f8d253d08e21.jpg",
  "https://i.pinimg.com/736x/c1/6c/87/c16c87fb472280baede8e2e9ed0853b7.jpg",
  "https://i.pinimg.com/736x/3b/76/c1/3b76c113632f05ffbaea84e6c626e9b4.jpg",
  "https://i.pinimg.com/736x/7e/b7/8c/7eb78c25a301cc5cc082f5a93f9231ed.jpg",
  "https://i.pinimg.com/736x/1c/4c/62/1c4c622a098ca9d17e2dcce4d131054e.jpg",
  "https://i.pinimg.com/736x/9f/84/c1/9f84c1b340fea6b51d4d6972e4cd782b.jpg",
  "https://i.pinimg.com/736x/1d/df/86/1ddf86cf850c4e1abbe8d143c2a82d36.jpg",
];

// Generate random users using the mock images
export const mockUsers: IUser[] = Array.from({ length: 10 }, (_, index) => {
  const randomImageIndex = Math.floor(Math.random() * mockImages.length);
  const randomImage = mockImages[randomImageIndex];

  return {
    id: `user-${index + 1}`,
    age: Math.floor(Math.random() * 15) + 20, // Random age between 20-35
    displayName: getRandomName(),
    walletAddress: `0x${Math.random().toString(16).substring(2, 42)}`,
    birthday: new Date(
      Date.now() -
        (Math.floor(Math.random() * 15) + 20) * 365 * 24 * 60 * 60 * 1000
    )
      .toISOString()
      .split("T")[0],
    bio: `This is the bio for user ${index + 1}. Just a sample description.`,
    avatarUrl: randomImage,
    genderType: Math.random() > 0.5 ? "MALE" : "FEMALE",
    genderValue: Math.random() > 0.5 ? "Male" : "Female",
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
