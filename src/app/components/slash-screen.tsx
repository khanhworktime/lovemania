"use client";

import SlashBackground from "@/assets/decors/slash-screen.decor.png";
import Logo from "@/assets/logos/lovemania.logo.png";
import Image from "next/image";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useTransitionRouter } from "next-view-transitions";
import { useAutoConnect } from "thirdweb/react";
import { basicClient } from "@/providers/thirdweb.provider";
import { useBodyAppColor } from "@/hooks/UseBodyAppColor";
import { env } from "@/constants/env";
import { somniaChain } from "@/constants/somniaChain";
import { useSessionStorage } from "usehooks-ts";
import { storageKeys } from "@/services/graphql/authentication/constants/storage.key";
import { IUser } from "@/services/graphql/user/user.model";
export function SlashScreen() {
  const { data: autoConnected } = useAutoConnect({
    client: basicClient,
    accountAbstraction: {
      factoryAddress: env.NEXT_PUBLIC_SOMNIA_FACTORY_ADDRESS,
      chain: somniaChain,
      sponsorGas: false,
    },
  });
  const [token, setToken] = useSessionStorage<string | null>(
    storageKeys.TOKEN,
    null
  );
  const [userData, setUserData] = useSessionStorage<IUser | null>(
    storageKeys.USER_DATA,
    null
  );

  // Upload the viewport
  useEffect(() => {
    const viewport = document.querySelector("meta[name='viewport']");
    if (viewport) {
      viewport.setAttribute("theme-color", "#DD88CF");
    }
  }, []);

  const containerRef = useRef(null);

  const router = useTransitionRouter();

  useGSAP(
    () => {
      if (autoConnected === undefined) return;

      const timeline = gsap.timeline();
      timeline.to(containerRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });

      timeline.to(containerRef.current, {
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      });

      timeline.from(".slash-background", {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
      });

      timeline.from(".logo", {
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.inOut",
      });

      timeline.from(".name", {
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.inOut",
        onComplete: () => {
          if (autoConnected) {
            if (token && userData) {
              router.push("/home");
            } else {
              router.push("/greeting");
            }
          } else {
            router.push("/greeting");
          }
        },
      });
    },
    {
      scope: containerRef,
      dependencies: [autoConnected, token, userData, router],
    }
  );

  useBodyAppColor("#DD88CF");

  return (
    <main
      ref={containerRef}
      className="bg-secondary-500 h-screen flex flex-col justify-center relative opacity-0"
    >
      <Image
        src={SlashBackground}
        alt="Slash Background"
        className="slash-background absolute z-0 top-4 right-0 w-3/4"
      />
      <div className="logo mx-auto w-1/2 z-10">
        <Image src={Logo} alt="Logo" />
      </div>
      <h1 className="name text-4xl z-10 font-bold text-center font-chalet text-white">
        lovemania
      </h1>
    </main>
  );
}
