import { FiBriefcase } from "react-icons/fi";
import FadeIn from "./FadeIn";

function Internship() {
  return (
    <FadeIn>
      <section id="internship" className="pt-12 pb-24 md:pt-16 md:pb-32 px-4 sm:px-6 relative z-20">
        
        <div className="max-w-4xl mx-auto relative z-10">

          {/* SECTION TITLE */}
          <div className="mb-16 sm:mb-20 flex flex-col items-center text-center">
            <span className="text-[#9CA3AF] text-sm font-semibold tracking-widest uppercase mb-3">
              Experience
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F9FAFB] tracking-tight">
              Internships
            </h2>
            <div className="w-12 h-1.5 bg-cyan-500 mt-5 rounded-full" />
          </div>

          {/* TIMELINE CONTAINER */}
          <div className="space-y-12 sm:space-y-16 relative before:absolute before:left-[23.5px] before:top-4 before:bottom-4 before:w-[1px] before:bg-[#1E293B]">

            {/* INTERNSHIP 1 — INNOMATRICS */}
            <div className="relative pl-16 sm:pl-24 group">
              {/* Timeline Marker */}
              <div className="absolute left-0 top-2 w-12 h-12 bg-[#020817] border border-[#1E293B] group-hover:border-cyan-500/50 group-hover:shadow-md group-hover:shadow-cyan-500/5 transition-all duration-300 rounded-2xl flex items-center justify-center z-10 group-hover:scale-110">
                <FiBriefcase className="text-[#9CA3AF] group-hover:text-cyan-400 transition-colors duration-300 text-xl sm:text-2xl" />
              </div>

              {/* Card */}
              <div className="bg-[#020817] p-6 sm:p-8 rounded-3xl border border-[#1E293B] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-md hover:shadow-cyan-500/5">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#F9FAFB] group-hover:text-cyan-400 transition-colors duration-300">
                      Web Developer Intern
                    </h3>
                    <p className="text-[#9CA3AF] mt-2 text-base sm:text-lg font-light">Innomatrics Technologies</p>
                  </div>
                  <div className="shrink-0 flex items-center gap-3">
                    <span className="px-3.5 py-1.5 bg-[#020817] border border-[#1E293B] rounded-xl text-sm font-medium text-[#9CA3AF]">
                      Nov 2025 – Feb 2026
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#9CA3AF] leading-relaxed text-base sm:text-lg mb-6 font-light">
                  Worked on full-stack web application development using the MERN stack, building scalable features and integrating APIs and databases.
                </p>

                {/* Bullet Points */}
                <ul className="list-disc pl-5 text-[#9CA3AF] space-y-3 mb-8 text-base sm:text-lg marker:text-[#1E293B] font-light">
                  <li>Developed dynamic user interfaces using React.js</li>
                  <li>Implemented RESTful APIs and handled data integration</li>
                  <li>Used Firebase/Database services for authentication and storage</li>
                  <li>Built responsive components using Tailwind CSS</li>
                  <li>Participated in debugging, testing, and feature enhancements</li>
                  <li>Collaborated in a team-based development workflow</li>
                </ul>

                {/* Badge */}
                <div className="pt-6 border-t border-[#1E293B]">
                  <span className="inline-block px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-xl text-sm font-medium">
                    MERN Stack Development
                  </span>
                </div>
              </div>
            </div>

            {/* INTERNSHIP 2 — LITZ TECH */}
            <div className="relative pl-16 sm:pl-24 group">
              {/* Timeline Marker */}
              <div className="absolute left-0 top-2 w-12 h-12 bg-[#020817] border border-[#1E293B] group-hover:border-cyan-500/50 group-hover:shadow-md group-hover:shadow-cyan-500/5 transition-all duration-300 rounded-2xl flex items-center justify-center z-10 group-hover:scale-110">
                <FiBriefcase className="text-[#9CA3AF] group-hover:text-cyan-400 transition-colors duration-300 text-xl sm:text-2xl" />
              </div>

              {/* Card */}
              <div className="bg-[#020817] p-6 sm:p-8 rounded-3xl border border-[#1E293B] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-md hover:shadow-cyan-500/5">
                
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#F9FAFB] group-hover:text-cyan-400 transition-colors duration-300">
                      Web Development Internship
                    </h3>
                    <p className="text-[#9CA3AF] mt-2 text-base sm:text-lg font-light">Litz Tech</p>
                  </div>
                  <div className="shrink-0 flex items-center gap-3">
                    <span className="px-3.5 py-1.5 bg-[#020817] border border-[#1E293B] rounded-xl text-sm font-medium text-[#9CA3AF]">
                      2023
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#9CA3AF] leading-relaxed text-base sm:text-lg mb-6 font-light">
                  Contributed to the development of responsive web interfaces and gained hands-on experience in frontend technologies within a professional environment.
                </p>

                {/* Bullet Points */}
                <ul className="list-disc pl-5 text-[#9CA3AF] space-y-3 mb-8 text-base sm:text-lg marker:text-[#1E293B] font-light">
                  <li>Built structured web pages using HTML5, CSS3, and JavaScript</li>
                  <li>Developed responsive layouts using Flexbox and media queries</li>
                  <li>Implemented interactive UI behavior with JavaScript</li>
                  <li>Improved understanding of browser rendering and layout techniques</li>
                  <li>Collaborated on static website projects focusing on usability and design</li>
                </ul>

                {/* Badge */}
                <div className="pt-6 border-t border-[#1E293B]">
                  <span className="inline-block px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-xl text-sm font-medium">
                    Web Development
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </FadeIn>
  );
}

export default Internship;