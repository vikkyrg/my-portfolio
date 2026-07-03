import { FiBook, FiAward, FiLayout, FiCheckCircle, FiBookOpen, FiServer, FiTrendingUp } from "react-icons/fi";
import FadeIn from "./FadeIn";

const coreStrengths = [
  {
    icon: FiLayout,
    title: "Clean UI",
    description: "Building responsive and accessible user interfaces with modern frameworks."
  },
  {
    icon: FiServer,
    title: "Scalable Backend",
    description: "Designing maintainable APIs and secure backend architectures."
  },
  {
    icon: FiTrendingUp,
    title: "Continuous Learning",
    description: "Adapting to new technologies and modern development practices."
  }
];

const educationData = [
  {
    id: "mca",
    timelineIcon: FiBook,
    year: "2024–2026",
    statusBadge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    degree: "Master of Computer Applications",
    institution: "Erode Arts and Science College",
    metricLabel: "CGPA:",
    metricValue: "8.0",
    bottomIcon: FiCheckCircle,
    bottomText: "Completed"
  },
  {
    id: "bca",
    timelineIcon: FiAward,
    year: "2021–2024",
    statusBadge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    degree: "Bachelor of Computer Applications",
    institution: "Erode Arts and Science College",
    metricLabel: "CGPA:",
    metricValue: "7.5",
    bottomIcon: FiAward,
    bottomText: "Graduate"
  },
  {
    id: "hsc",
    timelineIcon: FiBook,
    year: "2019–2021",
    statusBadge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    degree: "Higher Secondary Certificate",
    institution: "Govt Boys Hr Sec School Pallipalayam",
    metricLabel: "Percentage:",
    metricValue: "76%",
    bottomIcon: FiBookOpen,
    bottomText: "School Education"
  }
];

function About() {
  return (
    <FadeIn>
      {/* 
        Restored top spacing for visual breathing room.
        The gradient in Hero smoothly transitions the background, allowing this content to quietly emerge.
      */}
      <section id="about" className="pt-20 md:pt-32 pb-24 md:pb-40 px-4 sm:px-6 relative z-20">
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Equal-width premium grid matching Internship cards */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">

            {/* LEFT — ABOUT & STRENGTHS */}
            <div className="flex flex-col bg-[#020817] p-6 sm:p-8 md:p-10 rounded-3xl border border-[#1E293B] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-md hover:shadow-cyan-500/5">
              
              <div className="mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#F9FAFB] tracking-tight leading-tight">
                  About Me
                </h2>
                {/* Subtle underline matching global headings */}
                <div className="w-12 h-1.5 bg-cyan-500 mt-5 rounded-full" aria-hidden="true" />
              </div>

              {/* Refined typography matching Hero's font-light and leading-relaxed */}
              <div className="space-y-6 mb-16">
                <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed font-light">
                  MCA graduate with hands-on experience building full-stack web applications using the MERN stack.
                  I have a strong interest in understanding how real-world applications are designed, built, and scaled.
                  My journey into development began with curiosity about how systems work behind the scenes,
                  which gradually evolved into a passion for creating complete, functional solutions.
                </p>

                <p className="text-[#9CA3AF] text-base sm:text-lg leading-relaxed font-light">
                  I enjoy learning through hands-on projects, continuously improving my problem-solving skills,
                  and writing clean, maintainable code. I am now seeking opportunities to contribute to real-world products
                  and grow as a professional full-stack developer.
                </p>
              </div>

              {/* Core Strengths */}
              <div>
                <h3 className="text-xs font-medium text-[#64748B] uppercase tracking-[0.2em] mb-6">
                  Core Strengths
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  {coreStrengths.map((strength, idx) => {
                    const Icon = strength.icon;
                    return (
                      <div 
                        key={idx}
                        className="group flex flex-col p-5 rounded-2xl border border-transparent hover:border-white/[0.04] bg-white/[0.01] hover:bg-white/[0.02] transition-all duration-300"
                      >
                        <Icon className="text-[20px] text-[#64748B] mb-4 group-hover:text-cyan-400 transition-colors duration-300" aria-hidden="true" />
                        <h4 className="font-medium text-[#F9FAFB] mb-2 text-base sm:text-lg group-hover:text-cyan-400 transition-colors duration-300">
                          {strength.title}
                        </h4>
                        <p className="text-sm sm:text-base font-light text-[#9CA3AF] leading-relaxed">
                          {strength.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* RIGHT — EDUCATION */}
            <div className="flex flex-col bg-[#020817] p-6 sm:p-8 md:p-10 rounded-3xl border border-[#1E293B] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-md hover:shadow-cyan-500/5 h-full">
              <div className="mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#F9FAFB] tracking-tight leading-tight">
                  Education
                </h2>
                <div className="w-12 h-1.5 bg-cyan-500 mt-5 rounded-full" aria-hidden="true" />
              </div>

              {/* Refined Timeline - elegant, subtle line */}
              <div className="space-y-14 relative before:absolute before:left-[15.5px] before:top-4 before:bottom-4 before:w-[1px] before:bg-[#1E293B]">
                
                {educationData.map((item) => {
                  const TimelineIcon = item.timelineIcon;
                  const BottomIcon = item.bottomIcon;
                  
                  return (
                    <div key={item.id} className="relative pl-12 sm:pl-16 group">
                      
                      {/* Timeline Node - elegant and visually grounded */}
                      <div className="absolute left-0 top-1 w-8 h-8 bg-[#020817] border border-white/[0.1] group-hover:border-cyan-500/40 transition-colors duration-500 rounded-full flex items-center justify-center z-10">
                        <TimelineIcon className="text-[#64748B] group-hover:text-cyan-400 transition-colors duration-500 text-[14px]" aria-hidden="true" />
                      </div>
                      
                      {/* Education Card - reliant on whitespace, minimal hover */}
                      <div className="pb-2 pt-1 transition-all duration-500 group-hover:translate-x-1">
                        
                        <div className="flex flex-wrap items-center gap-3 mb-5">
                          <span className="px-2.5 py-1 bg-white/[0.02] border border-white/[0.04] rounded-md text-[11px] font-medium text-[#9CA3AF] tracking-wide">
                            {item.year}
                          </span>
                        </div>

                        <h3 className="text-xl sm:text-2xl font-medium text-[#F9FAFB] group-hover:text-cyan-400 transition-colors duration-500 mb-2.5">
                          {item.degree}
                        </h3>
                        <p className="text-[#9CA3AF] text-base sm:text-lg font-light mb-7">
                          {item.institution}
                        </p>

                        <div className="flex flex-wrap items-center gap-5">
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-[#64748B] font-medium uppercase tracking-wider">{item.metricLabel}</span>
                            <span className="text-sm font-medium text-[#F9FAFB]">{item.metricValue}</span>
                          </div>

                          <div className="w-1.5 h-1.5 rounded-full bg-white/[0.1]" aria-hidden="true" />

                          <div className="flex items-center gap-2 text-cyan-400/80 text-sm font-medium">
                            <BottomIcon size={16} aria-hidden="true" />
                            <span>{item.bottomText}</span>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>
    </FadeIn>
  );
}

export default About;