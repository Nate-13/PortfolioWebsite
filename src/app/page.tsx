import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Header from "@/components/home/Header";
import CurrentWork from "@/components/home/CurrentWork";
import ProjectCard from "@/components/home/ProjectCard";
import AdditionalProject from "@/components/home/AdditionalProject";
import AboutSection from "@/components/home/AboutSection";
import ContactSection from "@/components/home/ContactSection";
import SectionTitle from "@/components/home/SectionTitle";

// Featured projects data
const featuredProjects = [
  {
    slug: "aperture",
    title: "APERTURE",
    description: "AI-powered resume optimization app for developers.",
    thumbnail: "/projects/aperture/aperture-demo-video.mp4",
    thumbnailType: "video" as const,
  },
  {
    slug: "hue-muse",
    title: "HUE MUSE",
    description:
      "An interactive color inspiration tool using React, JavaScript, HTML, and CSS.",
    thumbnail: "/projects/hue-muse/Hue-Muse-Cover.png",
    thumbnailType: "image" as const,
  },
  {
    slug: "mbta",
    title: "MBTA APP CONCEPT",
    description:
      "Bringing accessibility and simplicity to Boston's underground transit system.",
    thumbnail: "/projects/mbta/mbta-video.mp4",
    thumbnailType: "video" as const,
  },
  {
    slug: "seam-carving",
    title: "SEAM CARVING",
    description:
      "Exploring a seam-carving algorithm to intelligently compress images while preserving subjects.",
    thumbnail: "/projects/seam-carving/png-compression.mp4",
    thumbnailType: "video" as const,
  },
  {
    slug: "portfolio",
    title: "PORTFOLIO WEBSITE",
    description:
      "Making this website from scratch with HTML, CSS, and Javascript!",
    thumbnail: "/media/website-mockup.png",
    thumbnailType: "image" as const,
  },
  {
    slug: "gallery",
    title: "THE GALLERY",
    description:
      "A collection of my design and art works, created with various mediums, and inspired by a range of experiences.",
    thumbnail: "/media/gallery-thumbnail.png",
    thumbnailType: "image" as const,
  },
];

// Additional projects data
const additionalProjects = [
  {
    title: "PantryPal",
    description:
      "A data-driven, self-improving recipe platform with ingredient-based search and challenges.",
    icon: "restaurant",
    tags: ["SQL", "RestAPI", "Streamlit", "Python"],
    githubUrl: "https://github.com/Nate-13/PantryPal",
  },
  {
    title: "Nothing: Community Edition",
    description: "My submissions for the Nothing Community Edition Project 2025.",
    icon: "layers",
    tags: ["Product Design", "UI/UX", "Figma"],
    caseStudyUrl: "/nothing/",
  },
  {
    title: "Evolution Simulator",
    description:
      "Developed a simple evolution simulator using Python, allowing users to observe and analyze the evolution of a species over generations.",
    icon: "genetics",
    tags: ["Python", "Turtle"],
    githubUrl: "https://github.com/Nate-13/DiscreteStructuresSimulation",
  },
  {
    title: "Pawns Board",
    description:
      "A card-based board game where players fight for control of the board.",
    icon: "chess_pawn",
    tags: ["Java", "Swing", "Object-Oriented Design"],
    githubUrl: "https://github.com/Nate-13/PawnsBoard",
  },
];

export default function Home() {
  return (
    <div className="relative flex w-full max-w-full flex-col items-start justify-center overflow-x-hidden">
      <Navigation />

      <Header />

      <SectionTitle id="projects-title" variant="one">
        PROJECTS
      </SectionTitle>

      <section id="projects" className="h-auto w-full flex-col items-center justify-center">
        <CurrentWork />

        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </section>

      <section
        id="additional-projects"
        className="mb-[3vw] w-[81.5%] px-[5vw] max-lg:w-[90%] max-lg:px-[3vw] max-sm:px-[1vw]"
      >
        {additionalProjects.map((project) => (
          <AdditionalProject key={project.title} {...project} />
        ))}
      </section>

      <SectionTitle id="about-title" variant="two">
        ABOUT
      </SectionTitle>

      <AboutSection />

      <SectionTitle id="contact-title" variant="three">
        CONTACT
      </SectionTitle>

      <ContactSection />

      <Footer />
    </div>
  );
}
