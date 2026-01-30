import { Work_Sans } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./gallery.css";

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

// Gallery artwork data
const artworks = [
  {
    image: "/projects/gallery/referral-flyer.png",
    title: "Referral Flyer",
    year: "2024",
    medium: "Procreate and Illustrator",
    description:
      'Created during my time working at <a href="https://gdcrentals.com/">GDC Rentals</a>. The goal was to capture a magical moment that a tenant might experience on our property.',
    small: false,
  },
  {
    image: "/projects/gallery/pool-flyer.png",
    title: "Pool Opening Flyer",
    year: "2024",
    medium: "Procreate and Illustrator",
    description:
      'Created during my time working at <a href="https://gdcrentals.com/">GDC Rentals</a>, this poster was created to promote the pool opening and BBQ event.',
    small: false,
  },
  {
    image: "/projects/gallery/gourds.png",
    title: "Gourds",
    year: "2024",
    medium: "Acrylic on Bristol Board",
    dimensions: "14 in x 10 in",
    description:
      "Made for fun during Thanksgiving break. Happy Thanksgiving!",
    small: false,
  },
  {
    image: "/projects/gallery/jar-painting.png",
    title: "Untitled",
    year: "2024",
    medium: "Acrylic on Bristol Board",
    dimensions: "11 in x 12 in",
    description:
      "Made for a homework assignment for Color and Composition, Northeastern University.",
    small: false,
  },
  {
    image: "/projects/gallery/boat-painting.png",
    title: "Richmond, England",
    year: "2024",
    medium: "Acrylic on AquaBoard",
    dimensions: "5 in x 7 in",
    description:
      "Made for a project for Color and Composition, Northeastern University.",
    small: true,
  },
  {
    image: "/projects/gallery/colorado-painting.png",
    title: "Beaver Creek, CO",
    year: "2024",
    medium: "Acrylic on AquaBoard",
    dimensions: "5 in x 7 in",
    description:
      "Made for a project for Color and Composition, Northeastern University.",
    small: true,
  },
  {
    image: "/projects/gallery/zion-painting.png",
    title: "Springdale, UT",
    year: "2024",
    medium: "Acrylic on AquaBoard",
    dimensions: "5 in x 7 in",
    description:
      "Made for a project for Color and Composition, Northeastern University.",
    small: true,
  },
  {
    image: "/projects/gallery/NEU-london-shirt.jpeg",
    title: "NU London Shirt Design",
    year: "2023",
    medium: "Illustrator",
    description:
      "Made for a T-Shirt design competition for Northeastern London. This design was selected and printed for Welcome Week and featured in NEU London marketing materials.",
    small: false,
  },
];

export const metadata = {
  title: "The Gallery - Nate Borwick",
  description:
    "A collection of my art and design works, created with various mediums, and inspired by a range of experiences.",
};

export default function GalleryPage() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={`${workSans.variable} gallery-page`}>
      {/* Header */}
      <header id="gallery-header">
        <div className="header-container">
          <h1>THE</h1>
          <h1>GALLERY</h1>
          <p>
            A collection of my art and design works, created with various
            mediums, and inspired by a range of experiences.
          </p>
          <span className="material-symbols-outlined arrow">arrow_downward</span>
        </div>
      </header>

      {/* Works */}
      <section id="works">
        <div className="wall">
          {artworks.map((artwork, index) => (
            <div key={index}>
              <div className={artwork.small ? "frame-small" : "frame"}>
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  width={1200}
                  height={900}
                  className="artwork-image"
                />
              </div>
              <div className={`label ${artwork.small ? "small" : ""}`}>
                <h1>
                  {artwork.title} <span>({artwork.year})</span>
                </h1>
                <h2>
                  {artwork.medium}{" "}
                  {artwork.dimensions && <span>{artwork.dimensions}</span>}
                </h2>
                <p dangerouslySetInnerHTML={{ __html: artwork.description }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Exit */}
      <div className="exit">
        <span className="material-symbols-outlined">arrow_back_ios</span>
        <Link href="/">exit</Link>
      </div>

      {/* Footer */}
      <footer id="gallery-footer">
        <h2>Nathan Borwick &copy; {currentYear}</h2>
        <div>
          <Link href="mailto:borwick.n@northeastern.edu">email me</Link>
          <Link
            href="https://github.com/Nate-13"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </Link>
          <Link
            href="https://www.linkedin.com/in/nathan-borwick"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </Link>
        </div>
      </footer>
    </div>
  );
}
