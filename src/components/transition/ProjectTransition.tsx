"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface TransitionData {
  rect: DOMRect;
  thumbnail: string;
  thumbnailType: "image" | "video";
  slug: string;
}

let pendingTransition: TransitionData | null = null;
let exitTransition: TransitionData | null = null;

export function triggerProjectTransition(data: TransitionData) {
  pendingTransition = data;
  window.dispatchEvent(new CustomEvent("project-transition-start"));
}

export function triggerExitTransition(data: TransitionData) {
  exitTransition = data;
  window.dispatchEvent(new CustomEvent("project-transition-exit"));
}

export function storeCardRect(
  slug: string,
  rect: DOMRect,
  thumbnail: string,
  thumbnailType: "image" | "video",
) {
  sessionStorage.setItem(
    `card-rect-${slug}`,
    JSON.stringify({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
      thumbnail,
      thumbnailType,
    }),
  );
}

export function getStoredCardRect(slug: string) {
  const stored = sessionStorage.getItem(`card-rect-${slug}`);
  if (stored) {
    return JSON.parse(stored);
  }
  return null;
}

export default function ProjectTransition() {
  const [transitionData, setTransitionData] = useState<TransitionData | null>(
    null,
  );
  const [isExpanding, setIsExpanding] = useState(false);
  const [isShrinking, setIsShrinking] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      if (pendingTransition) {
        setTransitionData(pendingTransition);
        setIsExpanding(true);
        setIsShrinking(false);
        pendingTransition = null;

        // Auto-clear after animation
        setTimeout(() => {
          setIsExpanding(false);
          setTransitionData(null);
        }, 400);
      }
    };

    const handleExit = () => {
      if (exitTransition) {
        setTransitionData(exitTransition);
        setIsShrinking(true);
        setIsExpanding(false);
        exitTransition = null;

        // Auto-clear after animation
        setTimeout(() => {
          setIsShrinking(false);
          setTransitionData(null);
        }, 500);
      }
    };

    window.addEventListener("project-transition-start", handleStart);
    window.addEventListener("project-transition-exit", handleExit);
    return () => {
      window.removeEventListener("project-transition-start", handleStart);
      window.removeEventListener("project-transition-exit", handleExit);
    };
  }, []);

  const isActive = isExpanding || isShrinking;

  if (!transitionData || !isActive) {
    return null;
  }

  const { rect, thumbnail, thumbnailType } = transitionData;
  const vw = typeof window !== "undefined" ? window.innerWidth : 1920;
  const vh = typeof window !== "undefined" ? window.innerHeight : 1080;

  return (
    <AnimatePresence>
      {isActive && (
        <motion.div
          key="project-transition"
          className="pointer-events-none fixed z-[9999] overflow-hidden"
          initial={
            isShrinking
              ? {
                  top: 0,
                  left: 0,
                  width: vw,
                  height: vh,
                  borderRadius: 0,
                  opacity: 1,
                }
              : {
                  top: rect.top,
                  left: rect.left,
                  width: rect.width,
                  height: rect.height,
                  borderRadius: 8,
                  opacity: 1,
                }
          }
          animate={
            isShrinking
              ? {
                  top: rect.top,
                  left: rect.left,
                  width: rect.width,
                  height: rect.height,
                  borderRadius: 8,
                  opacity: 0,
                }
              : {
                  top: 0,
                  left: 0,
                  width: vw,
                  height: vh,
                  borderRadius: 0,
                  opacity: 0,
                }
          }
          transition={{
            duration: isShrinking ? 0.45 : 0.4,
            ease: [0.4, 0, 0.2, 1],
            opacity: {
              duration: isShrinking ? 0.25 : 0.25,
              delay: isShrinking ? 0.2 : 0.15,
            },
          }}
        >
          {thumbnailType === "video" ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            >
              <source src={thumbnail} type="video/mp4" />
            </video>
          ) : (
            <Image
              src={thumbnail}
              alt=""
              fill
              className="object-cover"
              priority
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
