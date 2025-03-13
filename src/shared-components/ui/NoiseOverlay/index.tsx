import { cn } from "@heroui/react";

interface NoiseOverlayProps extends React.HTMLAttributes<HTMLDivElement> {}

export function NoiseOverlay({ className, ...props }: NoiseOverlayProps) {
  return (
    <div
      className={cn(className)}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 2000 20000' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E%0A")`,
        backgroundAttachment: "fixed",
      }}
      {...props}
    ></div>
  );
}
