import { MDXRemote } from "next-mdx-remote/rsc";
import ImageSection from "./ImageSection";
import Link from "next/link";

// MDX components mapping
const components = {
  ImageSection,
  // Standard HTML elements with styling
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="mb-4 mt-16 pl-[5%] text-[4rem] font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] max-lg:text-[3rem]"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="mb-2 mt-8 pl-[5%] text-[2.5rem] font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)] max-lg:text-[2rem]"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="mb-4 pl-[5%] pr-[15%] text-[1.75rem] leading-[1.2] text-[var(--color-secondary)] dark:text-[var(--color-secondary-light)] max-lg:pr-[5%] max-lg:text-[1.5rem]"
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="mb-4 list-disc pl-[8%] pr-[15%] text-[1.75rem] leading-[1.4] text-[var(--color-secondary)] dark:text-[var(--color-secondary-light)] max-lg:pr-[5%] max-lg:text-[1.5rem]"
      {...props}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="mb-4 list-decimal pl-[8%] pr-[15%] text-[1.75rem] leading-[1.4] text-[var(--color-secondary)] dark:text-[var(--color-secondary-light)] max-lg:pr-[5%] max-lg:text-[1.5rem]"
      {...props}
    />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="mb-2" {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <Link
      href={props.href || "#"}
      className="text-[var(--color-primary)] underline transition-colors hover:text-[var(--color-accent)] dark:text-[var(--color-accent)] dark:hover:text-[var(--color-sun-dark)]"
      target={props.href?.startsWith("http") ? "_blank" : undefined}
      rel={props.href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {props.children}
    </Link>
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong
      className="font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)]"
      {...props}
    />
  ),
  Spacer: () => <div className="h-16" />,
  Button: ({
    href,
    children,
  }: {
    href: string;
    children: React.ReactNode;
  }) => (
    <div className="flex items-center justify-center p-[30px] max-[800px]:p-[20px]">
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-[80px] w-[45rem] items-center justify-center rounded-[40px] border-none bg-[linear-gradient(90deg,#03a9f4,#f441a5,#e3a30e,#03c678)] bg-[length:300%] bg-[position:0%] font-['Martian_Mono',monospace] text-[2.3rem] font-bold uppercase tracking-[0.3rem] text-white no-underline transition-all duration-300 hover:scale-[1.02] hover:bg-[position:100%] hover:shadow-[0px_10px_20px_rgba(0,0,0,0.2)] active:scale-[0.98] active:shadow-[0px_5px_10px_rgba(0,0,0,0.3)] max-[800px]:h-[75px] max-[800px]:w-[35rem] max-[800px]:text-[1.75rem]"
      >
        <span>{children}</span>
        <span className="material-symbols-outlined ml-2 translate-y-[0.2rem] text-[2.5rem] transition-all duration-300">
          rocket_launch
        </span>
      </Link>
    </div>
  ),
};

interface ProjectContentProps {
  content: string;
}

export default function ProjectContent({ content }: ProjectContentProps) {
  return (
    <article className="w-full">
      <MDXRemote source={content} components={components} />
    </article>
  );
}
