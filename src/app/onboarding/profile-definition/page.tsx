import { FemaleIcon, GenderIcon, MaleIcon, RocketIcon } from "@/assets/icons";
import { Card, CardBody } from "@heroui/react";

const definitionOptions = [
  {
    label: "Man",
    value: "foodie",
    icon: <MaleIcon color="white" className="w-8 h-8" />,
  },
  {
    label: "Woman",
    value: "woman",
    icon: <FemaleIcon color="white" className="w-8 h-8" />,
  },
  {
    label: "Enter your Gender",
    value: "custom",
    icon: <GenderIcon color="white" className="w-6 h-6" />,
  },
  {
    label: "You can be everything",
    value: "none",
    icon: <RocketIcon className="w-12 h-12" />,
  },
];

export default function ProfileDefinitionPage() {
  return (
    <div>
      <h1 className="text-2xl font-medium font-chalet text-center mb-6">
        You Define Who You Are
      </h1>
      <div className="grid grid-cols-2 gap-x-4 gap-y-6">
        {definitionOptions.map((option) => {
          return (
            <Card
              shadow="sm"
              isPressable
              key={option.value}
              className="flex items-center gap-2 aspect-square"
              isHoverable
            >
              {" "}
              <CardBody className="grid grid-rows-2 gap-4 items-center justify-center">
                <div className="self-end justify-self-center w-12 h-12 flex items-center justify-center gap-2 bg-primary rounded-full">
                  {option.icon}
                </div>
                <p className="text-center font-semibold">{option.label}</p>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
