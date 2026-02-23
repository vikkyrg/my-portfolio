import { FaReact, FaNodeJs, FaDatabase, FaJs, FaGitAlt } from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiMongodb } from "react-icons/si";
function Skills() {
    const skills = [
        { name: "React", icon: <FaReact className="text-blue-400" />, color: "from-blue-500/20 to-cyan-500/20" },
        { name: "Node.js", icon: <FaNodeJs className="text-green-400" />, color: "from-green-500/20 to-emerald-500/20" },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" />, color: "from-green-600/20 to-lime-500/20" },
        { name: "Express", icon: <SiExpress className="text-gray-400" />, color: "from-gray-500/20 to-slate-500/20" },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, color: "from-yellow-500/20 to-amber-500/20" },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" />, color: "from-cyan-500/20 to-blue-500/20" },
        { name: "Git", icon: <FaGitAlt className="text-orange-400" />, color: "from-orange-500/20 to-red-500/20" },
        { name: "REST API", icon: <FaDatabase className="text-purple-400" />, color: "from-purple-500/20 to-pink-500/20" }
    ];
  return (
    <section id="skills" className="py-32 px-6 relative">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-16">Tools and technologies I work with</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-white/10 group-hover:border-white/20 transition-all duration-300 transform group-hover:scale-105 group-hover:-translate-y-2">
                  <div className="text-4xl mb-3 group-hover:rotate-12 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
  );
}
  
export default Skills;