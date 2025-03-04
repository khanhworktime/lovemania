import { Input } from "@heroui/react";

export default function ProfileNamePage() {
  return (
    <div>
      <h1 className="text-2xl font-medium font-chalet text-center mb-6">
        What&apos;s your name?
      </h1>
      <Input
        placeholder="Enter your name"
        variant="bordered"
        radius="lg"
        size="lg"
        color="primary"
        classNames={{
          inputWrapper: "bg-white",
        }}
        isClearable
      />
    </div>
  );
}
