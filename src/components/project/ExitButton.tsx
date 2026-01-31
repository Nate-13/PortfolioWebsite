"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  getStoredCardRect,
  triggerExitTransition,
} from "@/components/transition/ProjectTransition";

export default function ExitButton() {
  const router = useRouter();
  const pathname = usePathname();

  // Handle browser back button
  useEffect(() => {
    const handlePopState = () => {
      const slug = pathname.replace(/^\//, "").replace(/\/$/, "");
      const storedData = getStoredCardRect(slug);

      if (storedData) {
        // Trigger page fade and shrink animation
        window.dispatchEvent(new CustomEvent("page-exit-start"));

        // Small delay then trigger shrink
        setTimeout(() => {
          triggerExitTransition({
            rect: {
              top: storedData.top,
              left: storedData.left,
              width: storedData.width,
              height: storedData.height,
            } as DOMRect,
            thumbnail: storedData.thumbnail,
            thumbnailType: storedData.thumbnailType,
            slug,
          });
        }, 100);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [pathname]);

  const handleClick = () => {
    // Trigger page content fade out
    window.dispatchEvent(new CustomEvent("page-exit-start"));

    const slug = pathname.replace(/^\//, "").replace(/\/$/, "");
    const storedData = getStoredCardRect(slug);

    if (storedData) {
      // Wait for content to fade, then start shrink
      setTimeout(() => {
        triggerExitTransition({
          rect: {
            top: storedData.top,
            left: storedData.left,
            width: storedData.width,
            height: storedData.height,
          } as DOMRect,
          thumbnail: storedData.thumbnail,
          thumbnailType: storedData.thumbnailType,
          slug,
        });

        // Navigate midway through shrink animation
        setTimeout(() => {
          router.back();
        }, 200);
      }, 250);
    } else {
      // No stored data, just navigate with fade
      setTimeout(() => {
        router.push("/");
      }, 300);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="fixed right-[2vw] top-[2vw] z-50 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border-none bg-[var(--color-primary)] text-white shadow-lg transition-all duration-200 hover:scale-110 hover:bg-[var(--color-accent)] hover:text-[var(--color-secondary)] dark:bg-[var(--color-accent)] dark:text-[var(--color-bg-dark)] dark:hover:bg-[var(--color-sun-dark)]"
      aria-label="Return to projects"
      type="button"
    >
      <span className="material-symbols-outlined text-2xl">close</span>
    </button>
  );
}
