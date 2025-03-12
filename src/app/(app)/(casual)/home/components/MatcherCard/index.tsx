import { Button, Card, CardBody, CardFooter, CardHeader } from "@heroui/react";
import { Heart, StarHalfIcon, StarIcon, XIcon } from "lucide-react";
import Image from "next/image";

const testProfile = {
  image:
    "https://s3-alpha-sig.figma.com/img/f108/994f/df80102efce40452125cc5746b8fbc47?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Jpy1zjcRbs~gNMFCZEvyPmIDgg1CAs0VM0yRQ6XqxbsgrVtnUFclnbbczv4w6D3nu3USm2zkWCkzMfu4B1NWdOHQeNvmRL4cC5BBgGNzQFimFkmpyckjZIK-NhcpIL-o56HKEQ0EvZOo~GpiSh4wnS7HKimWu3lvBY~H0qHQxXKIHjyAbv08davmGcIY2YgqAUJY4v8dJJpuKIhXpQlc308deeMMgKmw9J~~GmDDb-mMFKOx1tMEYfbhjxnnW6cFXJOWQVjLrXRNsr7yMRRxM6MnX8eV3u7eGdONhJu1vLCBR8YjRTeeqY304scycdAbPO2NBLRWe8z8zQwAyZrOwA__",
  name: "John Doe",
  age: 25,
  location: "New York, NY",
  interests: ["reading", "traveling", "cooking"],
};

export function MatcherCard() {
  return (
    <Card className="w-full h-full rounded-3xl" as={"div"} isPressable>
      <CardBody>
        {/* Card main */}
        <div className="flex flex-col items-center justify-center gap-y-4">
          <div className="relative w-full aspect-[0.9] overflow-hidden rounded-2xl ">
            <Image
              src={testProfile.image}
              alt="Profile"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-800/95 rounded-2xl" />
            
          </div>
        </div>
      </CardBody>
      <CardFooter className="flex flex-row gap-8 py-6 justify-center items-center ">
        <Button
          isIconOnly
          variant="solid"
          className="size-14 bg-white shadow-lg"
          radius="full"
        >
          <XIcon />
        </Button>
        <Button
          isIconOnly
          variant="solid"
          className="size-14 bg-primary-800 text-white shadow-lg"
          radius="full"
        >
          <StarIcon fill="white" />
        </Button>
        <Button
          isIconOnly
          variant="solid"
          className="size-14 bg-primary-500 text-white shadow-lg"
          radius="full"
        >
          <Heart fill="white" />
        </Button>
      </CardFooter>
    </Card>
  );
}
