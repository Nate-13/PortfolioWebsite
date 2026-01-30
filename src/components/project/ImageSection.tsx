"use client";

import Image from "next/image";

interface ImageSectionProps {
  src: string;
  alt?: string;
  type?: "image" | "video";
  caption?: string;
}

export default function ImageSection({
  src,
  alt = "",
  type = "image",
  caption,
}: ImageSectionProps) {
  return (
    <figure className="my-8 w-full">
      <div className="mx-[5%] overflow-hidden rounded-[var(--container-radius)]">
        {type === "video" ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            onContextMenu={(e) => e.preventDefault()}
            preload="auto"
            className="h-auto w-full object-cover"
          >
            <source src={src} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={src}
            alt={alt}
            width={1920}
            height={1080}
            className="h-auto w-full object-cover"
          />
        )}
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm italic text-[var(--color-secondary)] dark:text-[var(--color-secondary-light)]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
