"use client";

const menuItems = [
  { label: "HOME", href: "#header" },
  { label: "PROJECTS", href: "#projects" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export default function Navigation() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      id="menu"
      className="animate-load-in fixed right-[1.3vw] top-[1.3vw] z-50 hidden flex-col items-end justify-center font-bold lg:flex"
    >
      {menuItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          onClick={(e) => handleClick(e, item.href)}
          className="cursor-pointer text-[length:var(--menu-item-size)] text-[var(--color-primary)] no-underline transition-all duration-200 ease-in-out hover:tracking-[0.25vw] hover:text-[var(--color-accent)] dark:text-[var(--color-accent)] dark:hover:text-[var(--color-sun-dark)]"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
