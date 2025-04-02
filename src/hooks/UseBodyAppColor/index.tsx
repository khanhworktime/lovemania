import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * A custom React hook that sets the background color of the document body
 * @param {string} [color] - The background color to set. If not provided, defaults to white (#fff)
 * @example
 * // Set background to light pink
 * useBodyAppColor("#fcf5fa")
 *
 * // Reset to white
 * useBodyAppColor()
 */
export function useBodyAppColor(color?: string) {
  const body = useRef<HTMLBodyElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    body.current = document.body as HTMLBodyElement;
    // Set the viewport color
    if (color) {
      body.current?.style.setProperty("background-color", color);
    } else {
      body.current?.style.setProperty("background-color", "#fff");
    }
    const viewport = document.querySelector("meta[name='viewport']");
    if (viewport) {
      viewport.setAttribute("theme-color", color ?? "#fff");
    }
  }, [pathname, color]);
}
