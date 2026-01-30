import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";
import ProjectHeader from "@/components/project/ProjectHeader";
import ProjectContent from "@/components/project/ProjectContent";
import ExitButton from "@/components/project/ExitButton";
import Footer from "@/components/layout/Footer";

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};

  return {
    title: `${project.frontmatter.title} - Nate Borwick`,
    description: project.frontmatter.subtitle,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <ExitButton />

      <ProjectHeader
        title={project.frontmatter.title}
        subtitle={project.frontmatter.subtitle}
        date={project.frontmatter.date}
        timeframe={project.frontmatter.timeframe}
        tags={project.frontmatter.tags}
      />

      <ProjectContent content={project.content} />

      {project.frontmatter.credits && (
        <div id="credits" className="pb-[5%] pl-[5%]">
          <p className="m-0 text-base font-normal italic text-[var(--color-secondary)] dark:text-[var(--color-secondary-light)]">
            {project.frontmatter.credits}
          </p>
        </div>
      )}

      <Footer />
    </div>
  );
}
