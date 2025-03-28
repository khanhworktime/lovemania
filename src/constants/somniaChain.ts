import { defineChain } from "thirdweb/chains";

export const somniaChain = /* @__PURE__ */ defineChain({
  id: 50312,
  name: "Somnia",
  nativeCurrency: { name: "STT", symbol: "STT", decimals: 18 },
  blockExplorers: [
    {
      name: "Shannon Explorer",
      url: "https://shannon-explorer.somnia.network/",
    },
  ],
  testnet: true,
});


