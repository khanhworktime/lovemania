import { Button, Input } from "@heroui/react";
import { Mic, Paperclip } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";

interface IMessageControlProps {
  onFocusChange: (isFocus: boolean) => void;
}

export function MessageControl({ onFocusChange }: IMessageControlProps) {
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    onFocusChange(isFocus);
  }, [isFocus]);

  const containerRef = useRef<HTMLInputElement>(null);

  const { contextSafe } = useGSAP(
    () => {
      gsap.from(containerRef.current, {
        duration: 0.4,
        ease: "power2.inOut",
        opacity: 0,
        scale: 0.8,
        y: "20",
      });
    },
    { scope: containerRef }
  );

  const handleFocus = contextSafe(() => {
    setIsFocus(true);
  });

  const handleBlur = contextSafe(() => {
    setIsFocus(false);
  });

  return (
    <div
      className="bg-white p-1 pl-4 flex gap-2 rounded-full will-change-transform"
      ref={containerRef}
    >
      <Input
        variant="underlined"
        placeholder="Type your message..."
        classNames={{
          innerWrapper: "p-0",
          inputWrapper: "border-0 after:hidden !outline-none shadow-none",
          input: "text-md",
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <Button isIconOnly variant="solid" color="secondary" radius="full">
        <Mic />
      </Button>
    </div>
  );
}
