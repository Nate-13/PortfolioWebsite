"use client";

import Link from "next/link";

const menuItems = [
  { label: "HOME", href: "#header" },
  { label: "PROJECTS", href: "#projects" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navigation() {
  return (
    <nav
      id="menu"
      className="animate-load-in fixed right-[1.3vw] top-[1.3vw] z-50 hidden flex-col items-end justify-center font-bold lg:flex"
    >
      {menuItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="cursor-pointer text-[length:var(--menu-item-size)] text-[var(--color-primary)] no-underline transition-all duration-200 ease-in-out hover:tracking-[0.25vw] hover:text-[var(--color-accent)] dark:text-[var(--color-accent)] dark:hover:text-[var(--color-sun-dark)]"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
