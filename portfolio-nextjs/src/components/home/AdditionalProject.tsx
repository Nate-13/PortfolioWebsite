"use client";

import Link from "next/link";

interface AdditionalProjectProps {
  title: string;
  description: string;
  icon: string;
  tags: string[];
  githubUrl?: string;
  caseStudyUrl?: string;
}

export default function AdditionalProject({
  title,
  description,
  icon,
  tags,
  githubUrl,
  caseStudyUrl,
}: AdditionalProjectProps) {
  return (
    <div className="scroll-animate mb-4 flex items-center rounded-[var(--container-radius)] border border-[var(--color-border-light)] bg-[var(--container-bg-light)] px-8 py-6 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] backdrop-blur-[8px] transition-all duration-300 dark:border-[rgba(243,238,255,0.08)] dark:bg-[var(--container-bg-dark)] dark:shadow-[0_4px_12px_0_rgba(0,0,0,0.5)] max-lg:flex-col max-lg:items-start max-lg:gap-4 max-lg:p-6 max-sm:rounded-[10px] max-sm:p-4">
      {/* Header with icon and title */}
      <div className="mr-8 flex min-w-[250px] items-center max-lg:mb-2 max-lg:mr-0">
        <span className="material-symbols-outlined mr-4 text-5xl text-[var(--color-primary)] dark:text-[var(--color-accent)] max-lg:text-[2.5rem] max-sm:text-[2rem]">
          {icon}
        </span>
        <h3 className="m-0 text-[1.75rem] font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] max-lg:text-2xl max-sm:text-xl">
          {title}
        </h3>
      </div>

      {/* Content */}
      <div className="flex flex-1 items-center gap-8 max-lg:w-full max-lg:flex-col max-lg:items-start max-lg:gap-4">
        <p className="m-0 flex-1 text-[1.1rem] leading-[1.4] text-[var(--color-secondary)] dark:text-[var(--color-secondary-light)] max-lg:text-base max-sm:text-[0.95rem]">
          {description}
        </p>

        {/* Actions */}
        <div className="flex items-center gap-4 max-lg:w-full max-lg:flex-row">
          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2 max-lg:justify-start">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-[2rem] border-2 border-[#e0e0e0] bg-transparent px-4 py-1 text-[0.9rem] font-bold text-[var(--color-secondary)] dark:border-[#d1d1d1] dark:text-[#d1d1d1] max-sm:px-3 max-sm:py-0.5 max-sm:text-[0.8rem]"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex cursor-pointer items-center justify-center self-end rounded-xl border-none bg-transparent p-3 text-[var(--color-primary)] no-underline transition-all duration-300 hover:scale-110 hover:bg-[rgba(77,0,255,0.15)] dark:text-[var(--color-accent)] dark:hover:bg-[rgba(255,200,0,0.15)]"
            >
              <span className="material-symbols-outlined text-[2rem] text-[var(--color-primary)] transition-colors duration-300 dark:text-[var(--color-primary-dark)]">
                code
              </span>
            </Link>
          )}
          {caseStudyUrl && (
            <Link
              href={caseStudyUrl}
              className="flex cursor-pointer items-center justify-center self-end rounded-xl border-none bg-transparent p-3 text-[var(--color-primary)] no-underline transition-all duration-300 hover:scale-110 hover:bg-[rgba(77,0,255,0.15)] dark:text-[var(--color-accent)] dark:hover:bg-[rgba(255,200,0,0.15)]"
            >
              <span className="material-symbols-outlined text-[2rem] text-[var(--color-primary)] transition-colors duration-300 dark:text-[var(--color-primary-dark)]">
                open_in_new
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
