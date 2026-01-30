"use client";

import Link from "next/link";

const contacts = [
  {
    label: "Email",
    href: "mailto:borwick.n@northeastern.edu",
    className: "translate-x-[-15vw]",
  },
  {
    label: "Github",
    href: "https://github.com/Nate-13",
    className: "translate-x-[2.8vw]",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nathan-borwick",
    className: "translate-x-[9.5vw]",
  },
];

export default function ContactSection() {
  return (
    <section className="flex w-full flex-col items-center justify-center pb-[5vw]">
      {contacts.map((contact) => {
        // Find the 'i' in the label and wrap it in a span
        const iIndex = contact.label.toLowerCase().indexOf("i");
        const beforeI = contact.label.slice(0, iIndex);
        const afterI = contact.label.slice(iIndex + 1);

        return (
          <Link
            key={contact.label}
            href={contact.href}
            target={contact.href.startsWith("mailto") ? undefined : "_blank"}
            rel={
              contact.href.startsWith("mailto")
                ? undefined
                : "noopener noreferrer"
            }
            className={`group mb-8 mt-0 text-[11vw] font-bold leading-[9vw] text-[var(--color-secondary)] no-underline transition-all duration-200 hover:text-[var(--color-accent)] dark:text-[var(--color-secondary-light)] dark:hover:text-[var(--color-sun-dark)] ${contact.className}`}
          >
            {beforeI}
            <span className="inline-block text-[var(--color-primary)] transition-transform duration-150 ease-in-out group-hover:rotate-180 dark:text-[var(--color-accent)]">
              i
            </span>
            {afterI}
          </Link>
        );
      })}
    </section>
  );
}
