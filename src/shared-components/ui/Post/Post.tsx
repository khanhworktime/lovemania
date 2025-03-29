import { MoreIcon } from "@/assets/icons";
import ChatIcon from "@/assets/icons/ChatIcon";
import LikeIcon from "@/assets/icons/LikeIcon";
import { IPost } from "@/interfaces/post.model";
import { Avatar, Button, Card, CardFooter, cn } from "@heroui/react";
import Image from "next/image";
import styles from "./style.module.css";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export interface PostProps {
  post: IPost;
}

export function Post({ post }: PostProps) {
  const [showFunction, setShowFunction] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);

  const { contextSafe } = useGSAP(
    () => {
      gsap.from(containerRef.current, {
        opacity: 0,
        x: 20,
        duration: 0.3,
        stagger: 0.1,
        ease: "power2.inOut",
      });
    },
    { scope: containerRef }
  );

  useGSAP(
    () => {
      const tl = gsap.timeline();

      if (showFunction) {
        tl.set(".functions-bar", {
          opacity: 0,
          display: "none",
          x: 20,
          y: "-50%",
        });

        tl.set(".image", {
          scale: 1,
        });

        tl.to(".functions-bar", {
          display: "flex",
          opacity: 1,
          x: 0,
          y: "-50%",
          duration: 0.3,
          ease: "power2.inOut",
        });

        tl.to(
          ".image",
          {
            scale: 1.2,
            duration: 0.3,
            ease: "power2.inOut",
          },
          "<"
        );
      } else {
        tl.to(".functions-bar", {
          opacity: 0,
          display: "none",
          x: 20,
          y: "-50%",
          duration: 0.3,
          ease: "power2.inOut",
        });

        tl.to(
          ".image",
          {
            scale: 1,
            duration: 0.3,
            ease: "power2.inOut",
          },
          "<"
        );
      }
    },
    { scope: containerRef, dependencies: [showFunction] }
  );

  return (
    <Card
      ref={containerRef}
      className="border-none w-full aspect-square rounded-3xl relative"
      isPressable
      as={"div"}
      onPress={() => setShowFunction((prev) => !prev)}
    >
      {/* Z - 0 */}
      <Image
        alt={post.content}
        className={"image z-0"}
        src={post.image}
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Z - 10 */}
      <div
        className={cn(
          "transition-all duration-300 absolute inset-0 bg-slate-900 rounded-3xl",
          showFunction ? "opacity-0" : "opacity-30"
        )}
      />

      {/* Z - 20 */}
      <CardFooter className="p-4 pr-20 absolute z-20 bottom-0 left-0 right-0 text-white flex flex-col items-stretch gap-4">
        {/* Content */}
        <div className="text-lg font-semibold line-clamp-3 text-ellipsis text-start">
          {post.content}
        </div>

        {/* Author */}
        <div className="flex items-center gap-2">
          <Avatar src={post.author.image} />
          <div className="flex flex-col items-start">
            <p className="text-sm font-semibold">{post.author.name}</p>
            <p className="text-sm capitalize text-slate-300 font-medium tracking-[0.1rem]">
              {post.author.location}
            </p>
          </div>
        </div>
      </CardFooter>

      {/* Z - 30. Toolbox */}

      <div
        className={`will-change-transform functions-bar hidden absolute z-30 bg-white/40 pl-5 pr-2 py-4 top-1/2 right-0 flex-col gap-2 ${styles["post-toolbox"]}`}
      >
        <Button isIconOnly radius="full" size="md" suppressHydrationWarning>
          <LikeIcon color="white" width={20} height={20} />
        </Button>
        <Button isIconOnly radius="full" size="md" suppressHydrationWarning>
          <ChatIcon color="white" width={20} height={20} />
        </Button>
        <Button isIconOnly radius="full" size="md" suppressHydrationWarning>
          <MoreIcon color="white" width={20} height={20} />
        </Button>

        {/* Handle */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 h-6 w-1 bg-white/40 rounded-3xl" />
      </div>
    </Card>
  );
}
