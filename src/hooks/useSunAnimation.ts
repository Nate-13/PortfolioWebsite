"use client";

import { useRef, useEffect, useCallback, useState } from "react";

const SUN_SIZE = "35vw";
const SUN_BLUR = "5vw";

export function useSunAnimation() {
  const sunRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const lastCursorPos = useRef({ x: 0, y: 0 });
  const animationsInitialized = useRef(false);
  const [mounted, setMounted] = useState(false);

  // Wait for mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const isMobile = useCallback(() => {
    return typeof window !== "undefined" && window.innerWidth <= 1000;
  }, []);

  const updateCirclePosition = useCallback(
    (x: number, y: number) => {
      if (
        !animationsInitialized.current ||
        !sunRef.current ||
        !headerRef.current
      )
        return;
      if (isMobile()) return;

      const headerRect = headerRef.current.getBoundingClientRect();
      const sun = sunRef.current;

      // Check if cursor is in header region
      const inHeader =
        y >= headerRect.top &&
        y <= headerRect.bottom &&
        x >= headerRect.left &&
        x <= headerRect.right;

      if (inHeader) {
        // Inverse mirroring in header
        const oppositeX =
          window.innerWidth - x - sun.offsetWidth / 2 + window.scrollX;
        const oppositeY =
          window.innerHeight - y - sun.offsetHeight / 2 + window.scrollY;

        sun.classList.remove("projects-mode");
        sun.animate(
          {
            left: `${oppositeX}px`,
            top: `${oppositeY}px`,
            width: SUN_SIZE,
            height: SUN_SIZE,
            filter: `blur(${SUN_BLUR})`,
          },
          { duration: 1000, fill: "forwards" }
        );
      } else {
        // Follow cursor in projects section
        sun.classList.add("projects-mode");
        sun.animate(
          {
            left: `${x + window.scrollX - 15}px`,
            top: `${y + window.scrollY - 15}px`,
            width: "30px",
            height: "30px",
            filter: "blur(0px)",
          },
          { duration: 750, fill: "forwards" }
        );
      }
    },
    [isMobile]
  );

  // Set up event listeners
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (isMobile()) return;
      if (!animationsInitialized.current) animationsInitialized.current = true;
      lastCursorPos.current = { x: e.clientX, y: e.clientY };
      updateCirclePosition(e.clientX, e.clientY);
    };

    const handleScroll = () => {
      if (isMobile()) return;
      updateCirclePosition(lastCursorPos.current.x, lastCursorPos.current.y);
    };

    document.body.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.body.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile, updateCirclePosition]);

  return { sunRef, headerRef, mounted };
}
