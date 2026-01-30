export interface ProjectFrontmatter {
  title: string;
  slug: string;
  subtitle: string;
  date: string;
  timeframe: string;
  tags: string[];
  thumbnail: string;
  thumbnailType: "image" | "video";
  description: string;
  order: number;
  featured: boolean;
  externalLinks?: {
    github?: string;
    website?: string;
  };
  credits?: string;
}

export interface Project {
  frontmatter: ProjectFrontmatter;
  content: string;
}

export interface AdditionalProject {
  title: string;
  description: string;
  icon: string;
  tags: string[];
  githubUrl?: string;
  caseStudyUrl?: string;
}
