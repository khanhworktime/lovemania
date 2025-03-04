import { Chip } from "@heroui/react";
import { label } from "framer-motion/client";

const interests = [
  {
    label: "🎮 GameFi",
    value: "gamefi",
  },
  {
    label: "💃🏻 Dancing",
    value: "dancing",
  },
  {
    label: "🗣 Language",
    value: "language",
  },
  {
    label: "🎵 Music",
    value: "music",
  },
  {
    label: "🎬 Movie",
    value: "movie",
  },
  {
    label: "📸 Photography",
    value: "photography",
  },
  {
    label: "🏛 Architecture",
    value: "architecture",
  },
  {
    label: "👗 Fashion",
    value: "fashion",
  },
  {
    label: "📚 Books",
    value: "books",
  },
  {
    label: "✍🏻 Blog",
    value: "blog",
  },
  {
    label: "🍃 Nature",
    value: "nature",
  },
  {
    label: "🍔 Food",
    value: "food",
  },
  {
    label: "🎨 NFTs",
    value: "nfts",
  },
  {
    label: "⚽️ Football",
    value: "football",
  },
  {
    label: "🙂 KOLs",
    value: "kols",
  },
  {
    label: "🐼 Animals",
    value: "animals",
  },
  {
    label: "💪 Gym & Fitness",
    value: "gym",
  },
];

export default function ProfileInterestPage() {
  return (
    <div>
      <h1 className="text-2xl font-medium font-chalet text-center mb-6">
        Select up to 5 interests
      </h1>
      <div className="flex flex-wrap justify-center gap-2">
        {interests.map((interest) => {
          return (
            <Chip
              key={interest.value}
              classNames={{
                content: "font-chalet text-medium",
                base: "h-fit py-2 px-3",
              }}
              variant="faded"
            >
              <div>{interest.label}</div>
            </Chip>
          );
        })}
      </div>
    </div>
  );
}
