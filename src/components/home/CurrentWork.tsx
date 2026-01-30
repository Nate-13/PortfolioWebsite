"use client";

import Link from "next/link";

export default function CurrentWork() {
  return (
    <section id="current-work" className="mb-[5vw] w-full">
      <div className="scroll-animate mx-[5vw] mr-[13.5vw] w-[calc(33.33%-5vw)] rounded-[var(--container-radius)] border border-[var(--color-border-light)] bg-[var(--container-bg-light)] px-8 py-6 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] backdrop-blur-[8px] transition-all duration-500 dark:border-[rgba(243,238,255,0.08)] dark:bg-[var(--container-bg-dark)] dark:shadow-[0_4px_12px_0_rgba(0,0,0,0.5)] max-lg:mx-[3vw] max-lg:mb-[8vw] max-lg:w-auto max-lg:p-5 max-md:mx-[5vw] max-md:mb-[6vw] max-md:px-6 max-md:py-5">
        <div className="flex w-full items-start gap-8 max-lg:flex-col max-lg:gap-6 max-md:gap-5">
          {/* Current Work Section */}
          <div className="min-w-0 flex-1">
            <span className="mb-1 block text-xs font-bold uppercase tracking-[0.1rem] text-[var(--color-secondary)] opacity-80 dark:text-[var(--color-secondary-light)]">
              CURRENTLY WORKING AT
            </span>
            <h3 className="m-0 mb-2 text-xl font-bold leading-[1.3] text-[var(--color-primary)] dark:text-[var(--color-accent)] max-lg:text-[1.1rem]">
              <Link
                href="https://specstory.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-primary)] no-underline transition-all duration-200 hover:text-[var(--color-accent)] dark:text-[var(--color-accent)] dark:hover:text-[var(--color-sun-dark)]"
              >
                SpecStory →
              </Link>
            </h3>
            <p className="m-0 text-[0.95rem] leading-[1.4] text-[var(--color-secondary)] dark:text-[var(--color-secondary-light)] max-lg:text-[0.9rem]">
              Software and Design Engineer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
