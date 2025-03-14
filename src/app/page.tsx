import type { Metadata, Viewport } from "next";
import { SlashScreen } from "./components/slash-screen";
import { MetadataContext } from "next/dist/lib/metadata/types/resolvers";

export const viewport: Viewport = {
  themeColor: "#DD88CF",
};

export default function SlashPage() {
  return <SlashScreen />;
}
