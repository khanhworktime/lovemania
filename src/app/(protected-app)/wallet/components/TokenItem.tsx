import { IToken } from "@/interfaces/token.model";
import Image from "next/image";
import { ChevronUp } from "lucide-react";
interface TokenItemProps {
  token: IToken;
  balance: number;
}

export function TokenItem({ token, balance }: TokenItemProps) {
  return (
    <div className="px-4 py-2 flex flex-row items-center gap-x-4 cursor-pointer transition-all duration-100 hover:bg-foreground/5 rounded-xl">
      <Image
        src={token.image}
        alt={token.name}
        width={40}
        height={40}
        className="rounded-full"
      />
      <div className="flex flex-col">
        <div className=" font-medium">{token.symbol}</div>
        <div className="text-sm text-black/40">{token.name}</div>
      </div>
      <div className="flex-1 flex flex-col items-end">
        <div className=" font-semibold">${balance}</div>
        <span className="text-sm flex flex-row items-center gap-x-1 text-black/70">
          <ChevronUp /> 2.5%
        </span>
      </div>
    </div>
  );
}
