import { createElement } from "react";
import {
  Award,
  BookOpen,
  GraduationCap,
  Laptop,
  School,
} from "lucide-react";
import FadeIn from "./FadeIn";

const educationData = [
  {
    id: "mca",
    icon: Award,
    duration: "2024–2026",
    degree: "Master of Computer Applications",
    institution: "Erode Arts and Science College",
    metricLabel: "CGPA",
    metricValue: "8.0",
    detailLabel: "Status",
    detail: "Completed",
  },
  {
    id: "bca",
    icon: BookOpen,
    duration: "2021–2024",
    degree: "Bachelor of Computer Applications",
    institution: "Erode Arts and Science College",
    metricLabel: "CGPA",
    metricValue: "7.5",
    detailLabel: "Status",
    detail: "Graduate",
  },
  {
    id: "hsc",
    icon: School,
    duration: "2019–2021",
    degree: "Higher Secondary Certificate",
    institution: "Govt Boys Hr Sec School Pallipalayam",
    metricLabel: "Percentage",
    metricValue: "76%",
    detailLabel: "Category",
    detail: "School Education",
  },
];

const infoCards = [
  { icon: GraduationCap, title: "Education", value: "MCA Post Graduate" },
  { icon: Laptop, title: "Focus", value: "Full Stack JS Development" },
];

function About() {
  return (
    <FadeIn>
      <section id="about" className="relative z-20 scroll-mt-24 overflow-hidden px-4 pb-24 pt-20 md:pt-32 md:pb-40 sm:px-6">
        <div className="absolute top-1/2 left-0 h-80 w-80 rounded-full bg-[#0092B8]/10 glow-orb animate-float-slow pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <header className="mb-10 text-center sm:mb-14">
            <h2 className="text-4xl font-bold tracking-tight text-[#F9FAFB] sm:text-5xl">
              About <span className="text-[#0092B8]">Me</span>
            </h2>
          </header>

          <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-10">
            <article className="rounded-3xl border border-[#0092B8]/20 bg-[rgba(5,12,24,0.82)] p-6 backdrop-blur-[8px] transition-colors duration-300 hover:border-[#0092B8]/45 sm:p-8 lg:p-9">
              <div className="mb-6 flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#0092B8]/25 bg-[#0092B8]/[0.08] text-[#0092B8]">
                  <GraduationCap size={21} aria-hidden="true" />
                </span>
                <h3 className="pt-1 text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl">
                  Passionate Web Developer &amp; Tech Creator
                </h3>
              </div>

              <div className="space-y-5 text-base font-light leading-relaxed text-[#9CA3AF] sm:text-lg">
                <p>
                  I am a dedicated Web Developer and MCA (Master of Computer Applications) graduate, specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). I design and build secure, interactive, and high-performance applications that solve real-world problems.
                </p>
                <p>
                  From coding business logic in Express and structuring databases in MongoDB, to fine-tuning responsive layouts and 3D interactions in React, I am committed to delivering clean code and exceptional user experiences.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {infoCards.map(({ icon: Icon, title, value }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-[#0092B8]/15 bg-[rgba(5,12,24,0.78)] p-4 backdrop-blur-[8px] transition duration-300 hover:-translate-y-0.5 hover:border-[#0092B8]/40 hover:bg-[rgba(5,12,24,0.84)]"
                  >
                    <div className="mb-2 flex items-center gap-2 text-[#0092B8]">
                      {createElement(Icon, { size: 19, "aria-hidden": true })}
                      <h4 className="text-sm font-semibold text-slate-100">{title}</h4>
                    </div>
                    <p className="text-sm leading-5 text-slate-400">{value}</p>
                  </div>
                ))}
              </div>
            </article>

            <section aria-labelledby="education-heading">
              <div className="mb-5 flex items-center gap-3 px-1">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#0092B8]/25 bg-[#0092B8]/[0.08] text-[#0092B8]">
                  <BookOpen size={19} aria-hidden="true" />
                </span>
                <h3 id="education-heading" className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Education
                </h3>
              </div>

              <div className="grid gap-4">
                {educationData.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article
                      key={item.id}
                      className="group rounded-2xl border border-[#0092B8]/15 bg-[rgba(5,12,24,0.82)] p-5 backdrop-blur-[8px] transition duration-300 hover:-translate-y-1 hover:border-[#0092B8]/45 hover:bg-[rgba(5,12,24,0.86)] sm:p-6"
                    >
                      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                        <span className="rounded-full border border-[#0092B8]/25 bg-[#0092B8]/[0.08] px-3 py-1 text-xs font-medium tracking-wide text-[#45B9D7]">
                          {item.duration}
                        </span>
                        <span className="rounded-full border border-[#0092B8]/20 bg-[#0092B8]/[0.06] px-2.5 py-1 text-[11px] font-medium text-[#45B9D7]">
                          {item.detailLabel}: {item.detail}
                        </span>
                      </div>

                      <div className="flex items-start gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#0092B8]/25 bg-[#0092B8]/[0.08] text-[#0092B8] transition-colors duration-300 group-hover:bg-[#0092B8]/[0.14]">
                          <Icon size={20} aria-hidden="true" />
                        </span>
                        <div className="min-w-0">
                          <h4 className="text-lg font-semibold leading-snug text-white sm:text-xl">
                            {item.degree}
                          </h4>
                          <p className="mt-1.5 text-sm leading-6 text-slate-400 sm:text-base">
                            {item.institution}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center gap-2 border-t border-white/[0.06] pt-3">
                        <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                          {item.metricLabel}:
                        </span>
                        <span className="text-sm font-semibold text-[#45B9D7]">
                          {item.metricValue}
                        </span>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}

export default About;
