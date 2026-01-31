"use client";

interface ProjectHeaderProps {
  title: string;
  subtitle: string;
  date: string;
  timeframe: string;
  tags: string[];
}

export default function ProjectHeader({
  title,
  subtitle,
  date,
  timeframe,
  tags,
}: ProjectHeaderProps) {
  return (
    <header id="header" className="flex h-auto flex-col items-start justify-start p-[5%]">
      <h1 className="title m-0 translate-x-[-0.8vw] text-[15vw] font-bold leading-none text-[var(--color-primary)] transition-colors duration-500 dark:text-[var(--color-accent)]">
        {title}
      </h1>
      <p className="subtitle m-0 mb-12 w-[75%] text-[3rem] text-[var(--color-secondary)] transition-colors duration-500 dark:text-[var(--color-secondary-light)] max-lg:w-full max-lg:text-[2rem]">
        {subtitle}
      </p>
      <h2 className="m-0 mb-4 text-[2rem] font-bold text-[var(--color-primary)] transition-colors duration-500 dark:text-[var(--color-accent)]">
        DATE: <span className="text-[2rem] font-normal text-[var(--color-secondary)] transition-colors duration-500 dark:text-[var(--color-secondary-light)]">{date}</span>
      </h2>
      <h2 className="m-0 mb-4 text-[2rem] font-bold text-[var(--color-primary)] transition-colors duration-500 dark:text-[var(--color-accent)]">
        TIMEFRAME: <span className="text-[2rem] font-normal text-[var(--color-secondary)] transition-colors duration-500 dark:text-[var(--color-secondary-light)]">{timeframe}</span>
      </h2>
      <div className="tag-box mb-4 flex flex-wrap items-center justify-start">
        {tags.map((tag) => (
          <span
            key={tag}
            className="mr-4 mt-4 rounded-[2rem] border-[3px] border-[rgba(82,77,92,0.3)] px-5 py-1 text-[1.25rem] font-bold text-[var(--color-secondary)] transition-colors duration-500 dark:border-[#d1d1d1] dark:text-[#d1d1d1]"
          >
            {tag}
          </span>
        ))}
      </div>
    </header>
  );
}
