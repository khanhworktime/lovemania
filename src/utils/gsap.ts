import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

// Common animations
export const fadeIn = (
  element: string | Element,
  delay: number = 0,
  duration: number = 0.6
) => {
  return gsap.fromTo(
    element,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: "power2.out",
    }
  );
};

export const fadeOut = (
  element: string | Element,
  delay: number = 0,
  duration: number = 0.6
) => {
  return gsap.to(element, {
    opacity: 0,
    y: -20,
    duration,
    delay,
    ease: "power2.in",
  });
};

export const staggerFadeIn = (
  elements: string | Element[],
  stagger: number = 0.1,
  delay: number = 0,
  duration: number = 0.6
) => {
  return gsap.fromTo(
    elements,
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger,
      ease: "power2.out",
    }
  );
};

export default gsap;
