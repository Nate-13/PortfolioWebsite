"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="z-5 box-border flex w-full items-center justify-between bg-[var(--color-primary)] px-8 py-4 dark:bg-[var(--color-accent)] max-[1250px]:px-3 max-[1250px]:py-3"
    >
      <h2 className="m-0 text-[1.5rem] font-normal text-[var(--color-secondary-light)] dark:text-[var(--color-secondary)] max-[1250px]:text-[1.25rem]">
        Nathan Borwick &copy; {currentYear}
      </h2>
      <div className="mr-[70px] flex gap-4">
        <Link
          href="mailto:borwick.n@northeastern.edu"
          className="text-[1.5rem] text-[var(--color-secondary-light)] no-underline transition-colors duration-200 ease-in-out hover:text-[var(--color-accent)] dark:text-[var(--color-secondary)] dark:hover:text-[var(--color-sun-dark)] max-[1250px]:text-[1.25rem]"
        >
          email me
        </Link>
        <Link
          href="https://github.com/Nate-13"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[1.5rem] text-[var(--color-secondary-light)] no-underline transition-colors duration-200 ease-in-out hover:text-[var(--color-accent)] dark:text-[var(--color-secondary)] dark:hover:text-[var(--color-sun-dark)] max-[1250px]:text-[1.25rem]"
        >
          github
        </Link>
        <Link
          href="https://www.linkedin.com/in/nathan-borwick"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[1.5rem] text-[var(--color-secondary-light)] no-underline transition-colors duration-200 ease-in-out hover:text-[var(--color-accent)] dark:text-[var(--color-secondary)] dark:hover:text-[var(--color-sun-dark)] max-[1250px]:text-[1.25rem]"
        >
          linkedin
        </Link>
      </div>
    </footer>
  );
}
