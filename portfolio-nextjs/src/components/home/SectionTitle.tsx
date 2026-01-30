"use client";

interface SectionTitleProps {
  children: React.ReactNode;
  id: string;
  variant?: "one" | "two" | "three";
}

export default function SectionTitle({
  children,
  id,
  variant = "one",
}: SectionTitleProps) {
  return (
    <h1
      id={id}
      className={`scroll-animate relative mb-[5vw] w-full pl-[5vw] text-[length:var(--section-title-size)] font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] max-lg:pl-[3vw] ${
        variant === "two"
          ? "before:absolute before:bottom-[1.5vw] before:left-[10vw] before:z-[-1] before:h-[10vw] before:w-[15vw] before:scale-[2] before:bg-[var(--color-primary-dark)] before:content-[''] dark:before:bg-[rgba(18,60,231,0.27)]"
          : ""
      }`}
    >
      {children}
    </h1>
  );
}
