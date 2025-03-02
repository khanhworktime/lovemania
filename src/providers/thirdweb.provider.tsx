import { ThirdwebProvider as ThirdwebProviderUI } from "@thirdweb-dev/react";

export function ThirdwebProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProviderUI clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID}>
      {children}
    </ThirdwebProviderUI>
  );
}
