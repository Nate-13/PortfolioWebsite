"use client";

import { useMobileMenu } from "@/hooks/useMobileMenu";

const menuItems = [
  { label: "HOME", href: "#header", icon: "home" },
  { label: "PROJECTS", href: "#projects", icon: "work" },
  { label: "ABOUT", href: "#about", icon: "person" },
  { label: "CONTACT", href: "#contact", icon: "mail" },
];

export default function MobileMenu() {
  const { isExpanded, toggle, close } = useMobileMenu();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    close();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed bottom-5 right-5 z-[100] flex flex-col items-end gap-2.5 lg:hidden ${
        isExpanded ? "expanded" : ""
      }`}
    >
      {/* Navigation items */}
      <div
        className={`flex flex-col items-stretch gap-0 overflow-hidden rounded-2xl bg-[var(--color-primary)] shadow-[0_4px_24px_rgba(77,0,255,0.4)] transition-all duration-[0.25s] ease-[cubic-bezier(0.34,1.56,0.64,1)] dark:bg-[var(--color-accent)] dark:shadow-[0_4px_24px_rgba(255,200,0,0.4)] ${
          isExpanded
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none translate-y-4 scale-90 opacity-0"
        }`}
        style={{ transformOrigin: "bottom right" }}
      >
        {menuItems.map((item, index) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className={`flex items-center justify-start gap-3 bg-transparent px-5 py-3.5 no-underline transition-colors duration-150 ease-in-out active:bg-white/15 dark:active:bg-black/10 ${
              index < menuItems.length - 1
                ? "border-b border-white/15 dark:border-black/10"
                : ""
            }`}
          >
            <span className="material-symbols-outlined order-1 text-[22px] text-white dark:text-[var(--color-bg-dark)]">
              {item.icon}
            </span>
            <span className="order-2 font-[var(--font-main)] text-[0.95rem] font-bold uppercase tracking-[0.05em] text-white dark:text-[var(--color-bg-dark)]">
              {item.label}
            </span>
          </a>
        ))}
      </div>

      {/* FAB Button */}
      <button
        onClick={toggle}
        aria-label="Toggle navigation menu"
        aria-expanded={isExpanded}
        className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-[28px] border-none bg-[var(--color-primary)] shadow-[0_4px_20px_rgba(77,0,255,0.4)] transition-all duration-200 ease-in-out active:scale-[0.92] dark:bg-[var(--color-accent)] dark:shadow-[0_4px_20px_rgba(255,200,0,0.4)]"
      >
        <span
          className={`material-symbols-outlined text-[28px] text-white transition-transform duration-[0.25s] ease-[cubic-bezier(0.34,1.56,0.64,1)] dark:text-[var(--color-bg-dark)] ${
            isExpanded ? "rotate-180" : ""
          }`}
        >
          {isExpanded ? "close" : "menu"}
        </span>
      </button>
    </nav>
  );
}
