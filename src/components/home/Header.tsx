"use client";

import { useSunAnimation } from "@/hooks/useSunAnimation";

export default function Header() {
  const { sunRef, headerRef, mounted } = useSunAnimation();

  return (
    <header
      ref={headerRef}
      id="header"
      className="animate-load-in relative flex h-auto w-full flex-row pb-[var(--header-padding-bottom)] max-[1000px]:pb-[30vw]"
    >
      {/* Sun element */}
      <div
        ref={sunRef}
        id="sun"
        aria-hidden="true"
        style={{ opacity: mounted ? 1 : 0 }}
        className="sun pointer-events-none absolute right-[13vw] top-[10vw] z-[-1] h-[var(--sun-size)] w-[var(--sun-size)] animate-grow rounded-full bg-[var(--color-sun)] blur-[var(--sun-blur)] transition-[background-color,opacity] duration-500 dark:bg-[var(--color-sun-dark)] max-[1000px]:right-[15vw] max-[1000px]:top-[75vw] max-[1000px]:h-[70vw] max-[1000px]:w-[70vw]"
      />

      {/* Name box */}
      <div
        id="name-box"
        className="name-box relative z-[2] ml-[5vw] flex flex-col justify-start pt-[4vw] max-[1000px]:ml-[1.5vw]"
      >
        <h3 className="dev-text z-[3] m-0 align-middle text-[2.75vw] font-bold tracking-[0.25vw] text-[var(--color-secondary)] transition-colors duration-500 dark:text-[var(--color-secondary-light)] max-[1000px]:text-[4.65vw]">
          DEVELOPER AND DESIGNER
        </h3>
        <h1 className="name z-[3] m-0 p-0 align-middle text-[12vw] font-bold leading-[0.8] text-[var(--color-primary)] [translate:-0.82vw] transition-colors duration-500 dark:text-[var(--color-primary-dark)] max-[1000px]:text-[19vw] max-[1000px]:[translate:-1.25vw]">
          NATE
        </h1>
        <h1 className="name z-[3] m-0 p-0 align-middle text-[12vw] font-bold leading-[0.8] text-[var(--color-primary)] [translate:-0.82vw] transition-colors duration-500 dark:text-[var(--color-primary-dark)] max-[1000px]:text-[19vw] max-[1000px]:[translate:-1.25vw]">
          BORWICK
        </h1>
        <div className="name-gradient relative z-[4] h-[28vw] w-[57.5vw] bg-gradient-to-b from-[var(--color-primary)] to-transparent [bottom:0.682vw] transition-colors duration-500 dark:from-[var(--color-primary-dark)] max-[1000px]:h-[65vw] max-[1000px]:w-[91.12vw] max-[1000px]:[bottom:1.25vw]" />
      </div>
    </header>
  );
}
