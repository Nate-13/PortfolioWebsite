import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { ProjectFrontmatter, Project } from "@/types/project";

const projectsDirectory = path.join(process.cwd(), "src/content/projects");

export function getAllProjectSlugs(): string[] {
  try {
    const fileNames = fs.readdirSync(projectsDirectory);
    return fileNames
      .filter((name) => name.endsWith(".mdx"))
      .map((name) => name.replace(/\.mdx$/, ""));
  } catch {
    return [];
  }
}

export async function getProjectBySlug(
  slug: string
): Promise<Project | null> {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);

  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      frontmatter: data as ProjectFrontmatter,
      content,
    };
  } catch {
    return null;
  }
}

export async function getAllProjects(): Promise<Project[]> {
  const slugs = getAllProjectSlugs();
  const projects = await Promise.all(
    slugs.map(async (slug) => {
      const project = await getProjectBySlug(slug);
      return project;
    })
  );

  return projects
    .filter((p): p is Project => p !== null)
    .sort((a, b) => a.frontmatter.order - b.frontmatter.order);
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const allProjects = await getAllProjects();
  return allProjects.filter((p) => p.frontmatter.featured);
}
