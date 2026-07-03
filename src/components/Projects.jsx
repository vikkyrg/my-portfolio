import { FiExternalLink, FiGithub, FiFileText, FiUsers, FiSliders, FiMonitor } from "react-icons/fi";
import FadeIn from "./FadeIn";

function Projects() {
    const projects = [
        {
            title: "Resume Generator",
            description: "Built a full-stack resume builder with dynamic form handling, real-time preview, and PDF export using React, Node.js, Express, and MongoDB.",
            tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind"],
            icon: <FiFileText />,
            live: "https://resume-generator-opal-eta.vercel.app/",
            github: "https://github.com/vikkyrg/resume-generator"
        },
        {
            title: "CollabBoard SaaS",
            description: "Built a real-time collaboration platform with collaborative whiteboard, chat, video calling, AI assistance, and secure room-based collaboration.",
            tech: ["React", "Node.js", "Express.js", "Socket.IO", "MongoDB", "Fabric.js", "JWT", "Agora"],
            icon: <FiUsers />,
            live: "https://collabboard-saas.vercel.app/",
            github: "https://github.com/vikkyrg/CollabBoard-SaaS"
        },
        {
            title: "Admin Dashboard",
            description: "Built an internal admin panel during internship to manage bookings, users, and service data. Developed structured components and handled real-time updates using React and Firebase.",
            tech: ["React", "Firebase", "Tailwind"],
            icon: <FiSliders />,
            tag: "Internship",
            github: "https://github.com/innomatricstech/EnjoyHolidays-Admin"
        },
        {
            title: "Portfolio Website",
            description: "Designed and developed a responsive personal portfolio with modern UI, smooth animations, and optimized performance.",
            tech: ["React", "Tailwind", "Framer Motion"],
            icon: <FiMonitor />,
            github: "https://github.com/vikkyrg/my-portfolio"
        },
    ];

    return (
        <FadeIn>
            <section id="projects" className="py-24 md:py-32 px-4 sm:px-6 relative z-20">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16 sm:mb-20 flex flex-col items-center">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#F9FAFB] tracking-tight">
                            Featured Projects
                        </h2>
                        <div className="w-12 h-1.5 bg-cyan-500 mt-5 mb-5 rounded-full" />
                        <p className="text-[#9CA3AF] text-base sm:text-lg max-w-2xl mx-auto font-light">
                            Full-stack projects built using the MERN stack.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <div
                                key={project.title}
                                className="group relative bg-[#020817] p-8 rounded-3xl border border-[#1E293B] hover:border-cyan-500/30 hover:shadow-md hover:shadow-cyan-500/5 transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col"
                            >
                                {/* Project Icon */}
                                <div className="text-4xl sm:text-5xl mb-6 text-[#9CA3AF] group-hover:text-cyan-400 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                                    {project.icon}
                                </div>

                                <h3 className="text-xl sm:text-2xl font-bold text-[#F9FAFB] mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                                    {project.title}
                                </h3>

                                {project.tag && (
                                    <div className="mb-4">
                                        <span className="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-xl text-xs font-medium border border-cyan-500/20">
                                            Internship Work
                                        </span>
                                    </div>
                                )}

                                <p className="text-[#9CA3AF] mb-6 flex-grow text-base sm:text-lg leading-relaxed font-light">
                                    {project.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                    {project.tech.map(tech => (
                                        <span
                                            key={tech}
                                            className="px-3.5 py-1.5 bg-[#020817] rounded-xl text-sm font-medium text-[#9CA3AF] border border-[#1E293B]"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                {(project.live || project.github) && (
                                    <div className="flex gap-4 pt-6 border-t border-[#1E293B]">
                                        {project.title === "Portfolio Website" ? (
                                            <span className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                                                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                                                Live on This Page
                                            </span>
                                        ) : (
                                            project.live && (
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group/link"
                                                >
                                                    <FiExternalLink className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                                    Live Preview
                                                </a>
                                            )
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors text-sm font-medium group/link ml-auto"
                                            >
                                                <FiGithub className="group-hover/link:rotate-12 transition-transform" />
                                                Source Code
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </FadeIn>
    );
}

export default Projects;