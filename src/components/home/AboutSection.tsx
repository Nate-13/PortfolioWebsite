"use client";

export default function AboutSection() {
  return (
    <section id="about" className="h-auto w-full flex-col items-center justify-center pt-[5vw] max-lg:mt-[15vw]">
      {/* Skills Container */}
      <div className="scroll-animate mx-[5vw] mb-8 mr-[13.5vw] flex flex-col items-start rounded-[var(--container-radius)] border border-[var(--color-border-light)] bg-[var(--container-bg-light)] px-10 py-8 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] backdrop-blur-[8px] transition-all duration-500 dark:border-[rgba(243,238,255,0.08)] dark:bg-[var(--container-bg-dark)] dark:shadow-[0_4px_12px_0_rgba(0,0,0,0.5)] max-lg:mx-[1vw] max-lg:mr-[5vw]">
        <div className="w-full max-lg:w-[90%]">
          <h1 className="mb-8 mt-0 text-[5rem] font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)]">
            SKILLS
          </h1>
          <h3 className="mb-1 mt-8 text-[2.5rem] font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)]">
            LANGUAGES
          </h3>
          <p className="mb-0 mt-0 text-2xl text-[var(--color-secondary)] dark:text-[var(--color-secondary-light)]">
            Java, Python, Typescript, SQL, JavaScript, HTML, CSS, Kotlin
          </p>
          <h3 className="mb-1 mt-8 text-[2.5rem] font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)]">
            DEVELOPMENT
          </h3>
          <p className="mb-0 mt-0 text-2xl text-[var(--color-secondary)] dark:text-[var(--color-secondary-light)]">
            Git, RestAPI&apos;s, Supabase, Vercel, Flask, JUnit, Maven, VSC,
            IntelliJ, PyCharm, Eclipse
          </p>
          <h3 className="mb-1 mt-8 text-[2.5rem] font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)]">
            DESIGN
          </h3>
          <p className="mb-0 mt-0 text-2xl text-[var(--color-secondary)] dark:text-[var(--color-secondary-light)]">
            Figma, Illustrator, InDesign, Photoshop, Procreate, Fusion360
          </p>
        </div>
      </div>

      {/* Education Container */}
      <div className="scroll-animate mx-[5vw] mb-8 mr-[13.5vw] flex flex-col items-start rounded-[var(--container-radius)] border border-[var(--color-border-light)] bg-[var(--container-bg-light)] px-10 py-8 shadow-[0_0_10px_0_rgba(0,0,0,0.1)] backdrop-blur-[8px] transition-all duration-500 dark:border-[rgba(243,238,255,0.08)] dark:bg-[var(--container-bg-dark)] dark:shadow-[0_4px_12px_0_rgba(0,0,0,0.5)] max-lg:mx-[1vw] max-lg:mr-[5vw]">
        <div className="w-full max-lg:w-[90%]">
          <h1 className="mb-8 mt-0 text-[5rem] font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)]">
            EDUCATION
          </h1>
          <h3 className="mb-1 mt-8 text-[2.5rem] font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)]">
            NORTHEASTERN UNIVERSITY
          </h3>
          <p className="mb-1 mt-0 text-[2rem] font-normal text-[var(--color-secondary)] dark:text-[var(--color-secondary-light)]">
            B.S. Computer Science and Design
          </p>
          <p className="mb-0 mt-0 text-2xl italic text-[var(--color-secondary)] opacity-65 dark:text-[var(--color-secondary-light)]">
            Boston, MA (2023-Present, Graduating April 2027)
          </p>
          <h3 className="mb-1 mt-8 text-[2.5rem] font-bold text-[var(--color-primary)] dark:text-[var(--color-accent)]">
            THE MASTERS SCHOOL
          </h3>
          <p className="mb-1 mt-0 text-[2rem] font-normal text-[var(--color-secondary)] dark:text-[var(--color-secondary-light)]">
            High School
          </p>
          <p className="mb-0 mt-0 text-2xl italic text-[var(--color-secondary)] opacity-65 dark:text-[var(--color-secondary-light)]">
            Dobbs Ferry, NY (2019-2023)
          </p>
        </div>
      </div>

      {/* Resume Button */}
      <div className="mt-16 flex w-full flex-row items-center justify-center">
        <button
          type="button"
          onClick={() => window.open("/media/Nate_Borwick_Resume.pdf")}
          className="resume-btn flex h-[4rem] w-auto cursor-pointer items-center justify-center rounded-full border-none bg-[var(--color-primary)] px-10 text-[1.75rem] font-bold text-white no-underline transition-all duration-200 hover:scale-105 hover:brightness-110 dark:bg-[var(--color-accent)] dark:text-[var(--color-bg-dark)] dark:hover:brightness-110 max-lg:h-[3.5rem] max-lg:px-8 max-lg:text-[1.5rem]"
        >
          Download my Resume
        </button>
      </div>
    </section>
  );
}
