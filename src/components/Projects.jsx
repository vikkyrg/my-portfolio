import { FiExternalLink, FiGithub } from "react-icons/fi";

function Projects() {
    const projects = [
    {
        title: "Resume Generator",
        description: "Built a full-stack resume builder with dynamic form handling, real-time preview, and PDF export using React, Node.js, Express, and MongoDB.",
        tech: ["React", "Node.js", "MongoDB", "Tailwind"],
        gradient: "from-blue-600 to-cyan-600",
        icon: "📄",
        live: "https://resume-generator-opal-eta.vercel.app/",
        github: "https://github.com/vikkyrg/resume-generator"
    },
    {
        title: "Portfolio Website",
        description: "Designed and developed a responsive personal portfolio with modern UI, smooth animations, and optimized performance.",
        tech: ["React", "Tailwind", "Framer Motion"],
        gradient: "from-green-600 to-emerald-600",
        icon: "✨",
        github: "https://github.com/vikkyrg/my-portfolio"
    },
    {
        title: "Admin Dashboard",
        description:"Built an internal admin panel during internship to manage bookings, users, and service data. Developed structured components and handled real-time updates using React and Firebase.",
        tech: ["React", "Firebase", "Tailwind"],
        gradient: "from-purple-600 to-pink-600",
        icon: "🛠️",
        tag: "Internship",
        github: "https://github.com/innomatricstech/EnjoyHolidays-Admin"
    },

    {
        title: "Dump & Drop Platform",
        description:"Worked on the customer-side logistics booking interface during internship. Implemented responsive UI, improved usability, and built workflow screens using React and Tailwind.",
        tech: ["React", "JavaScript", "Tailwind"],
        gradient: "from-orange-600 to-yellow-600",
        icon: "🚗",
        tag: "Internship"
    }
    ];

    return (
        <section id="projects" className="py-32 px-6 relative">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-5xl font-bold mb-4">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Featured Projects
                    </span>
                </h2>

                <p className="text-gray-400 text-lg mb-16">
                    Full-stack projects built using the MERN stack.
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.title}
                            className="group relative animate-fade-in-up"
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

                            <div className="relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 group-hover:border-white/20 transition-all duration-500 transform group-hover:scale-105 group-hover:-translate-y-2 h-full flex flex-col">
                                
                                {/* Project Icon */}
                                <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                                    {project.icon}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>

                                {project.tag && (
                                    <span className="text-xs text-blue-300 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-inner shadow-white/5">
                                        Internship Work
                                    </span>
                                )}

                                <p className="text-gray-400 mb-6 flex-grow">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map(tech => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* ✅ Links show ONLY if project has them */}
                                {(project.live || project.github) && (
                                    <div className="flex gap-4 justify-center">
                                        
                                        {project.title === "Portfolio Website" ? (
                                            <span className="flex items-center gap-1 text-blue-400 font-medium">
                                            ● Live on This Page
                                            </span>
                                        ) : (
                                            project.live && (
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors group/link"
                                                >
                                                    <FiExternalLink className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                                    Live
                                                </a>
                                            )
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors group/link"
                                            >
                                                <FiGithub className="group-hover/link:rotate-12 transition-transform" />
                                                Code
                                            </a>
                                        )}

                                    </div>
                                )}

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;