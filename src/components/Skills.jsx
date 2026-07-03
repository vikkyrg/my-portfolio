import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaGitAlt, FaNpm, FaJs 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiExpress, SiMongodb, SiVercel 
} from "react-icons/si";
import { 
  FiMonitor, FiServer, FiDatabase, FiTool, FiLayout, FiLayers, FiBox, 
  FiZap, FiKey, FiRadio, FiEdit3, FiCode, FiCommand, FiCloud 
} from "react-icons/fi";
import FadeIn from "./FadeIn";

function Skills() {
  const categories = [
    {
      title: "Frontend Development",
      icon: <FiMonitor className="text-cyan-400" />,
      skills: [
        { name: "React.js", icon: <FaReact /> },
        { name: "JavaScript (ES6+)", icon: <FaJs /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Vite", icon: <FiZap /> },
        { name: "Responsive Design", icon: <FiLayout /> },
      ]
    },
    {
      title: "Backend Development",
      icon: <FiServer className="text-cyan-400" />,
      skills: [
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
        { name: "REST API", icon: <FiServer /> },
        { name: "JWT Authentication", icon: <FiKey /> },
        { name: "Socket.IO", icon: <FiRadio /> },
        { name: "MVC Architecture", icon: <FiLayers /> },
      ]
    },
    {
      title: "Database",
      icon: <FiDatabase className="text-cyan-400" />,
      skills: [
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Mongoose", icon: <FiDatabase /> },
        { name: "Data Modeling", icon: <FiBox /> },
        { name: "CRUD Operations", icon: <FiEdit3 /> },
      ]
    },
    {
      title: "Tools & Deployment",
      icon: <FiTool className="text-cyan-400" />,
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "VS Code", icon: <FiCode /> },
        { name: "Postman", icon: <FiCommand /> },
        { name: "Render", icon: <FiCloud /> },
        { name: "Vercel", icon: <SiVercel /> },
        { name: "npm", icon: <FaNpm /> },
      ]
    }
  ];

  return (
    <FadeIn>
      <section id="skills" className="py-24 md:py-32 px-4 sm:px-6 relative z-20">
        
        {/* Soft Radial Glow Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] max-w-full bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* SECTION HEADER */}
          <div className="text-center mb-16 sm:mb-20 flex flex-col items-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F9FAFB] tracking-tight">
              Skills & Technologies
            </h2>
            <div className="w-12 h-1.5 bg-cyan-500 mt-5 mb-5 rounded-full" />
            <p className="text-[#9CA3AF] text-base sm:text-lg max-w-2xl mx-auto">
              The technologies I use to design, build, and deploy scalable full-stack applications.
            </p>
          </div>

          {/* CATEGORIES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {categories.map((cat, i) => (
              <div 
                key={i} 
                className="bg-[#020817]/80 backdrop-blur-sm border border-[#1E293B] rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-cyan-500/5 hover:-translate-y-1 hover:border-cyan-500/30 transition-all duration-300 h-full flex flex-col"
              >
                
                {/* Card Header (Icon, Title, Divider) */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-[#020817] border border-[#1E293B] rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                    <span className="text-xl">{cat.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#F9FAFB] shrink-0">{cat.title}</h3>
                  <div className="h-px bg-[#1E293B] flex-grow ml-2 sm:ml-4 rounded-full" />
                </div>

                {/* Technology Pills */}
                <div className="flex flex-wrap gap-3">
                  {cat.skills.map((skill, j) => (
                    <div 
                      key={j} 
                      className="group/pill flex items-center gap-2.5 px-3 py-2 sm:px-4 sm:py-2.5 bg-[#020817] border border-[#1E293B] rounded-xl cursor-default transition-all duration-300 hover:scale-105 hover:border-cyan-500/50 hover:bg-cyan-500/5 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)]"
                    >
                      <div className="text-[#9CA3AF] group-hover/pill:text-cyan-400 group-hover/pill:rotate-12 transition-all duration-300 text-lg">
                        {skill.icon}
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-[#9CA3AF] group-hover/pill:text-[#F9FAFB] transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </FadeIn>
  );
}

export default Skills;