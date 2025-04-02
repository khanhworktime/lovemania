import type { Viewport } from "next";
import { SlashScreen } from "./components/slash-screen";

export const viewport: Viewport = {
  themeColor: "#DD88CF",
};

export default function SlashPage() {
  return <SlashScreen />;
}
