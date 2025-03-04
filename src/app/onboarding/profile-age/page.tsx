import { DateInput, Input } from "@heroui/react";

export default function ProfileAgePage() {
  return (
    <div>
      <h1 className="text-2xl font-medium font-chalet text-center mb-6">
        Your Age?
      </h1>
      <DateInput
        variant="bordered"
        radius="lg"
        size="lg"
        color="primary"
        classNames={{
          inputWrapper: "bg-white",
        }}
      />
    </div>
  );
}
