import { FiBriefcase } from "react-icons/fi";
import FadeIn from "./FadeIn";

const experiences = [
  {
    id: "mern-developer",
    title: "MERN Stack Developer",
    company: "Innomatrics Technologies",
    date: "Aug 2026 – Present",
    technology: "MERN Stack Development",
    responsibilities: [
      "Developed and maintained full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
      "Built responsive frontend interfaces and scalable REST APIs, integrating frontend and backend functionality.",
      "Managed MongoDB databases, optimized application performance, and delivered real-world web development solutions.",
    ],
  },
  {
    id: "web-developer-intern",
    title: "Web Developer Intern",
    company: "Innomatrics Technologies",
    date: "Dec 2025 – Feb 2026",
    duration: "3 Months",
    technology: "MERN Stack Development",
    responsibilities: [
      "Assisted in developing frontend features for service-based web applications using React.js.",
      "Built reusable UI components and implemented client-side form validation using JavaScript.",
      "Contributed to admin panel development by testing forms, debugging UI issues, and improving application workflows.",
    ],
  },
  {
    id: "litz-tech-internship",
    title: "Web Development Internship",
    company: "Litz Tech",
    date: "July 2023 - Aug 2023",
    duration: "1 Month",
    technology: "Web Development",
    responsibilities: [
      "Built structured web pages using HTML5, CSS3, and JavaScript.",
      "Developed responsive layouts using Flexbox and media queries.",
      "Implemented interactive UI behavior and improved understanding of browser rendering and layout techniques.",
    ],
  },
];

function Internship() {
  return (
    <FadeIn>
      <section id="experience" className="relative z-20 flex w-full scroll-mt-24 flex-col items-center overflow-hidden px-0 pb-24 pt-12 md:pb-32 md:pt-16">
        <div className="absolute top-1/2 right-0 h-80 w-80 rounded-full bg-purple-500/10 glow-orb animate-float-delay pointer-events-none" />

        <div className="relative z-10 mx-auto w-full max-w-[1000px] px-4 sm:px-5">
          <header className="mb-12 text-center sm:mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-[#F9FAFB] sm:text-4xl lg:text-5xl">
              Experience
            </h2>
            <div className="mx-auto mt-5 h-1.5 w-12 rounded-full bg-[#0092B8]" aria-hidden="true" />
          </header>

          <ol
            aria-label="Work experience timeline"
            className="relative mx-auto w-full space-y-8 before:absolute before:bottom-[18px] before:left-[17px] before:top-[18px] before:w-px before:bg-[rgba(0,146,184,0.22)] md:space-y-10 md:before:bottom-[20px] md:before:left-[152px] md:before:top-[20px] lg:before:bottom-[22px] lg:before:left-[163px] lg:before:top-[22px]"
          >
            {experiences.map((experience) => (
              <li
                key={experience.id}
                className="group relative grid w-full grid-cols-[36px_minmax(0,1fr)] items-start justify-center gap-x-3 md:grid-cols-[120px_40px_minmax(0,760px)] md:gap-x-3 lg:grid-cols-[125px_44px_minmax(0,760px)] lg:gap-x-1"
              >
                <div className="hidden pt-2 text-right md:col-start-1 md:row-start-1 md:block">
                  <p className="whitespace-nowrap text-xs font-medium leading-5 text-[#45B9D7] lg:text-sm">{experience.date}</p>
                  {experience.duration && (
                    <p className="mt-1 text-xs text-[#9CA3AF]">{experience.duration}</p>
                  )}
                </div>

                <div className="relative z-10 col-start-1 row-start-1 flex justify-center pt-2 md:col-start-2">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0092B8]/30 bg-[rgba(5,12,24,0.84)] text-[#0092B8] backdrop-blur-[8px] transition-colors duration-300 group-hover:border-[#0092B8]/60 group-hover:text-[#45B9D7] md:h-10 md:w-10 lg:h-11 lg:w-11">
                    <FiBriefcase className="text-base md:text-lg" aria-hidden="true" />
                  </span>
                </div>

                <article className="col-start-2 row-start-1 box-border w-full max-w-[760px] min-w-0 rounded-3xl border border-[#0092B8]/20 bg-[rgba(5,12,24,0.84)] p-5 shadow-[0_12px_36px_rgba(0,0,0,0.22)] backdrop-blur-[8px] transition-all duration-300 hover:-translate-y-1 hover:border-[#0092B8]/45 hover:bg-[rgba(5,12,24,0.86)] hover:shadow-[0_16px_40px_rgba(0,146,184,0.08)] sm:p-6 md:col-start-3 md:p-8">
                  <div className="mb-4 flex flex-wrap items-center gap-2 md:hidden">
                    <span className="whitespace-nowrap rounded-xl border border-[#0092B8]/25 bg-[#0092B8]/[0.08] px-3 py-1.5 text-xs font-medium text-[#45B9D7]">
                      {experience.date}
                    </span>
                    {experience.duration && (
                      <span className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-[#9CA3AF]">
                        {experience.duration}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold leading-snug text-[#F9FAFB] transition-colors duration-300 group-hover:text-[#0092B8] sm:text-2xl">
                    {experience.title}
                  </h3>
                  <p className="mt-1.5 text-sm font-medium text-[#45B9D7] sm:text-base">
                    {experience.company}
                  </p>

                  {experience.status && (
                    <span className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#0092B8]/20 bg-[#0092B8]/[0.06] px-3 py-1 text-xs font-medium text-[#45B9D7]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#0092B8]" aria-hidden="true" />
                      {experience.status}
                    </span>
                  )}

                  <ul className="mt-5 list-disc space-y-2.5 pl-5 text-sm font-light leading-relaxed text-[#B0BAC8] marker:text-[#0092B8]/70 sm:text-base">
                    {experience.responsibilities.map((responsibility) => (
                      <li key={responsibility}>{responsibility}</li>
                    ))}
                  </ul>

                  <div className="mt-5 border-t border-[#0092B8]/20 pt-4">
                    <span className="inline-block rounded-xl border border-[#0092B8]/15 bg-[#0092B8]/[0.08] px-3.5 py-1.5 text-xs font-medium text-[#45B9D7]">
                      {experience.technology}
                    </span>
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </FadeIn>
  );
}

export default Internship;
