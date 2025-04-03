import { selectText } from "@/utils/selectText";
import { Card, cn, CardBody, Input } from "@heroui/react";
import { useEffect, useRef, useState } from "react";

interface GenderSelectionProps {
  defaultValue?: string;
  onChange: (value: string) => void;

  active: boolean;
  setActive: () => void;

  icon: React.ReactNode;
  isAbleToModify: boolean;
  placeholder: string;
}

export default function GenderSelection({
  defaultValue = "",
  onChange,
  active,
  setActive,
  icon,
  isAbleToModify,
  placeholder,
}: GenderSelectionProps) {
  const [value, setValue] = useState<string>("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    setValue(defaultValue);
  }, [defaultValue]);

  useEffect(() => {
    if (!active && !isAbleToModify) {
      setValue("");
    }
  }, [active, isAbleToModify]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let newValue = e.target.value;
    console.log(newValue);
    if (newValue.length > 64) {
      newValue = newValue.slice(0, 64);
    }
    setValue(newValue);
    onChange(newValue);
  };

  const handleCardClick = () => {
    setActive();
    if (isAbleToModify && textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handleTextareaClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleTextareaKeyDown = (e: React.KeyboardEvent) => {
    e.stopPropagation();
  };

  // Auto-adjust height of textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [value]);

  return (
    <div className="cursor-pointer" onClick={handleCardClick}>
      <Card
        shadow="sm"
        className={cn(
          "flex items-center gap-2 aspect-square transition-all duration-300",
          active &&
            "outline outline-2 outline-primary-300 focus-visible:outline-2"
        )}
      >
        <CardBody className="grid grid-rows-2 gap-4 items-center justify-center">
          <div
            className={cn(
              "transition-all duration-300 self-end justify-self-center w-12 h-12 flex items-center justify-center gap-2 bg-primary rounded-full",
              active && "bg-primary-300"
            )}
          >
            {icon}
          </div>
          {!isAbleToModify ? (
            <div className="flex flex-col items-center space-y-1">
              <p className="text-center font-semibold text-base">
                {placeholder}
              </p>
            </div>
          ) : (
            <div className="relative w-full">
              <textarea
                ref={textareaRef}
                value={value}
                onChange={handleInputChange}
                onClick={handleTextareaClick}
                onKeyDown={handleTextareaKeyDown}
                placeholder={placeholder}
                rows={2}
                className={cn(
                  "w-full text-center font-semibold bg-transparent outline-none placeholder:text-primary-300 resize-none overflow-hidden",
                  "focus:ring-0 focus:outline-none"
                )}
                maxLength={64}
                aria-label="Enter your gender"
              />
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
