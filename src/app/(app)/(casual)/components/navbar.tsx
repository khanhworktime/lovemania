import MatchesPeopleOutlineIcon from "@/assets/icons/MatchesPeopleOutlineIcon";
import { Button } from "@heroui/react";
import { CompassIcon, Home, MessageCircle, Plus, Users } from "lucide-react";

export function Navbar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 pb-4 ">
      <div className="w-fit mx-auto flex items-center justify-center gap-5 bg-white rounded-full p-2">
        <Button
          isIconOnly
          radius="full"
          size="lg"
          suppressHydrationWarning
          className="bg-secondary"
        >
          <Home fill="white" color="white" />
        </Button>
        <Button
          isIconOnly
          variant="light"
          radius="full"
          size="lg"
          suppressHydrationWarning
          className="text-secondary"
        >
          <CompassIcon />
        </Button>
        <Button
          isIconOnly
          variant="light"
          radius="full"
          size="lg"
          suppressHydrationWarning
          className="text-secondary"
        >
          <Plus />
        </Button>
        <Button
          isIconOnly
          variant="light"
          radius="full"
          size="lg"
          suppressHydrationWarning
          className="text-secondary"
        >
          <Users fill="white" />
        </Button>
        <Button
          isIconOnly
          variant="light"
          radius="full"
          size="lg"
          suppressHydrationWarning
          className="text-secondary"
        >
          <MessageCircle fill="white" />
        </Button>
      </div>
    </div>
  );
}
