"use client";

import Link from "next/link";

export default function ExitButton() {
  return (
    <Link
      href="/#projects"
      className="fixed right-[2vw] top-[2vw] z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary)] text-white no-underline shadow-lg transition-all duration-200 hover:scale-110 hover:bg-[var(--color-accent)] hover:text-[var(--color-secondary)] dark:bg-[var(--color-accent)] dark:text-[var(--color-bg-dark)] dark:hover:bg-[var(--color-sun-dark)]"
      aria-label="Return to projects"
    >
      <span className="material-symbols-outlined text-2xl">close</span>
    </Link>
  );
}
