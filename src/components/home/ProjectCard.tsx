"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  triggerProjectTransition,
  storeCardRect,
} from "@/components/transition/ProjectTransition";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  thumbnail: string;
  thumbnailType: "image" | "video";
}

export default function ProjectCard({
  slug,
  title,
  description,
  thumbnail,
  thumbnailType,
}: ProjectCardProps) {
  const router = useRouter();
  const thumbnailRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (thumbnailRef.current) {
      const rect = thumbnailRef.current.getBoundingClientRect();

      // Store for exit animation
      storeCardRect(slug, rect, thumbnail, thumbnailType);

      // Trigger the expansion animation
      triggerProjectTransition({
        rect,
        thumbnail,
        thumbnailType,
        slug,
      });

      // Navigate immediately - page fades in as overlay fades out
      router.push(`/${slug}/`);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="link"
      tabIndex={0}
      className="cursor-pointer no-underline"
      aria-label={`View ${title} project`}
    >
      <div className="scroll-animate relative mx-[5vw] mb-[3vw] mr-[13.5vw] flex flex-col items-center justify-between p-0 transition-all duration-500 max-lg:mx-[3vw] max-lg:mb-[10vw] max-lg:rounded-[1.25rem] max-lg:pb-0 max-lg:pt-8">
        <div
          ref={thumbnailRef}
          className="flex w-full items-center justify-center"
        >
          {thumbnailType === "video" ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              onContextMenu={(e) => e.preventDefault()}
              preload="auto"
              className="aspect-video h-auto w-full animate-[loading_2s_infinite] rounded-[var(--container-radius)] bg-[rgba(82,77,92,0.19)] object-cover transition-all duration-[0.4s] ease-in-out hover:scale-[1.007] max-lg:rounded-[10px]"
            >
              <source src={thumbnail} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={thumbnail}
              alt={title}
              width={1920}
              height={1080}
              className="aspect-video h-auto w-full animate-[loading_2s_infinite] rounded-[var(--container-radius)] bg-[rgba(82,77,92,0.19)] object-cover transition-all duration-[0.4s] ease-in-out hover:scale-[1.007] max-lg:rounded-[10px]"
            />
          )}
        </div>
        <h2 className="absolute bottom-0 left-8 right-8 m-0 w-fit max-w-[calc(100%-4rem)] translate-y-1/2 rounded-[var(--container-radius)] border border-[var(--color-border-light)] bg-[rgba(248,248,248,0.82)] px-5 py-3 text-[length:var(--project-desc-size)] font-normal not-italic text-[var(--color-secondary)] shadow-[0_0_10px_0_rgba(0,0,0,0.1)] backdrop-blur-[8px] dark:border-[rgba(243,238,255,0.08)] dark:bg-[rgba(30,6,64,0.82)] dark:text-[var(--color-secondary-light)] dark:shadow-[0_4px_12px_0_rgba(0,0,0,0.5)]">
          <span className="font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)]">
            {title}:
          </span>{" "}
          {description}
        </h2>
      </div>
    </div>
  );
}
