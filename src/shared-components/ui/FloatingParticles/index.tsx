"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

interface FloatingParticlesProps {
  count?: number;
  color?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  className?: string;
}

const FloatingParticles = ({
  count = 50,
  color = "rgba(255, 255, 255, 0.5)",
  minSize = 5,
  maxSize = 20,
  speed = 1,
  className = "",
}: FloatingParticlesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    if (containerRef.current) {
      const container = containerRef.current;
      const containerHeight = container.offsetHeight;
      const containerWidth = container.offsetWidth;

      // Clear any previous particles
      particlesRef.current = [];
      container.innerHTML = "";

      // Create particles
      for (let i = 0; i < count; i++) {
        const size = Math.random() * (maxSize - minSize) + minSize;
        const xPos = Math.random() * containerWidth;
        const yPos = Math.random() * containerHeight;
        const opacity = Math.random() * 0.5 + 0.1;
        const delay = Math.random() * 5;

        const particle = document.createElement("div");
        particle.style.position = "absolute";
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.borderRadius = "50%";
        // particle.style.transform = "rotate(15deg)";
        particle.style.backgroundColor = color;
        particle.style.opacity = opacity.toString();
        particle.style.left = `${xPos}px`;
        particle.style.top = `${yPos}px`;

        container.appendChild(particle);
        particlesRef.current.push(particle);

        gsap.to(particle, {
          y: `-=${containerHeight + size}`,
          duration: 15 / speed + Math.random() * 10,
          delay,
          ease: "none",
          repeat: -1,
          onRepeat: () => {
            // Reset position when reaching the top
            gsap.set(particle, {
              x: Math.random() * containerWidth,
              y: containerHeight + size,
            });
          },
        });

        // Add slight horizontal movement
        gsap.to(particle, {
          x: `+=${Math.random() * 100 - 50}`,
          duration: 10 + Math.random() * 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }
  }, [containerRef, count, color, minSize, maxSize, speed]);

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none overflow-hidden z-10 ${className}`}
      aria-hidden="true"
    />
  );
};

export { FloatingParticles };
