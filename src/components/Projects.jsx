import { useState, useEffect, useRef } from "react";
import { FiExternalLink, FiGithub, FiChevronDown, FiChevronUp } from "react-icons/fi";
import resumeImg from "../assets/resume.png";
import collabImg from "../assets/collabboard.png";
import adminImg from "../assets/adminpannel.png";
import portfolioImg from "../assets/portfolio.png";
import partyhouseImg from "../assets/partyhouse.png";
import hitechImg from "../assets/hitech.png";
import autoopsImg from "../assets/autoops.png";
import navadurgaImg from "../assets/navadurga.png";
import nrithyadegulaImg from "../assets/nrithyadegula.png";
import aurixImg from "../assets/aurix.png";
import themastermindImg from "../assets/the master mind.png";
import hipressureImg from "../assets/hi pressure.png";
import finadviseImg from "../assets/finadvise.png";
import amsliteImg from "../assets/amslite.png";
import FadeIn from "./FadeIn";

function Projects() {
    const [showAll, setShowAll] = useState(false);
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        if (!showAll) {
            // Use requestAnimationFrame to ensure layout reflow has occurred after collapsing
            requestAnimationFrame(() => {
                const section = document.getElementById("projects");
                if (section) {
                    section.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            });
        }
    }, [showAll]);

    const projects = [
        {
            title: "Resume Generator",
            description: "Built a full-stack resume builder with dynamic form handling, real-time preview, and PDF export using React, Node.js, Express, and MongoDB.",
            tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
            image: resumeImg,
            category: "FULL STACK / RESUME BUILDER",
            live: "https://resume-generator-opal-eta.vercel.app/",
            github: "https://github.com/vikkyrg/resume-generator"
        },
        {
            title: "CollabBoard SaaS",
            description: "Built a real-time collaboration platform with collaborative whiteboard, chat, video calling, AI assistance, and secure room-based collaboration.",
            tech: ["React", "Node.js", "Express.js", "Socket.IO", "MongoDB", "Fabric.js", "JWT", "Agora"],
            image: collabImg,
            category: "SAAS / REAL-TIME COLLABORATION",
            live: "https://collabboard-saas.vercel.app/",
            github: "https://github.com/vikkyrg/CollabBoard-SaaS"
        },
        {
            title: "Admin Dashboard",
            description: "Built an internal admin panel during internship to manage bookings, users, and service data. Developed structured components and handled real-time updates using React and Firebase.",
            tech: ["React", "Firebase", "Tailwind"],
            image: adminImg,
            tag: "Internship Work",
            category: "INTERNSHIP / ADMIN PANEL",
            github: "https://github.com/innomatricstech/EnjoyHolidays-Admin"
        },
        {
            title: "Portfolio Website",
            description: "Designed and developed a responsive personal portfolio with modern UI, smooth animations, and optimized performance.",
            tech: ["React", "Tailwind CSS", "Framer Motion"],
            image: portfolioImg,
            category: "FRONTEND / PORTFOLIO",
            isCurrentSite: true,
            github: "https://github.com/vikkyrg/my-portfolio"
        },
        {
            title: "Party House",
            description: "A private theatre booking platform designed for birthdays, anniversaries, date nights, proposals, and special celebrations. Users can explore theatre experiences, select rooms, choose dates, and make bookings.",
            tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
            image: partyhouseImg,
            category: "BOOKING / ENTERTAINMENT PLATFORM",
            live: "https://party-house-client.vercel.app/",
            github: "https://github.com/vikkyrg/party-house-client"
        },
        {
            title: "HI-TECH Estates & Interiors",
            description: "A real estate and interior design platform showcasing residential properties, property listings, buying, selling, renting, and leasing services.",
            tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
            image: hitechImg,
            category: "REAL ESTATE PLATFORM",
            live: "https://hi-techestates.vercel.app/",
            github: "https://github.com/moula2002/Hi-techestates"
        },
        {
            title: "AutoOps School",
            description: "An online IT learning platform offering practical technology training, structured learning paths, hands-on projects, and career preparation for aspiring developers.",
            tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript"],
            image: autoopsImg,
            category: "EDTECH / LEARNING PLATFORM",
            live: null,
            github: null
        },
        {
            title: "Navadurga Electricals",
            description: "A professional electrical services website showcasing HT/LT electrical services, transformers, substations, power distribution, and electrical infrastructure solutions.",
            tech: ["React.js", "JavaScript", "Tailwind CSS"],
            image: navadurgaImg,
            category: "ELECTRICAL SERVICES WEBSITE",
            live: "https://nava-durga-electricals-website.vercel.app/",
            github: "https://github.com/moula2002/NavaDurga-Electricals-website"
        },
        {
            title: "Nrityadegula – School of Dance",
            description: "A traditional dance academy website highlighting dance education, cultural heritage, achievements, training programs, events, and artistic performances.",
            tech: ["React.js", "JavaScript", "Tailwind CSS"],
            image: nrithyadegulaImg,
            category: "EDUCATION / DANCE ACADEMY",
            live: "https://nrithya-degula-website.vercel.app/",
            github: "https://github.com/vikkyrg/nrithya_degula_website"
        },
        {
            title: "AX Aurix Events",
            description: "An event management platform showcasing corporate events, entertainment events, event planning, event production, and professional event experiences.",
            tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
            image: aurixImg,
            category: "EVENT MANAGEMENT WEBSITE",
            live: "https://aurix-event-website.vercel.app/",
            github: "https://github.com/moula2002/Aurix-event-website"
        },
        {
            title: "The Mind Master",
            description: "A professional counselling and therapy platform providing information about counselling services, mental wellness, professional support, and session booking.",
            tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
            image: themastermindImg,
            category: "HEALTHCARE / COUNSELLING PLATFORM",
            live: "https://counciling-rosy.vercel.app/",
            github: "https://github.com/vikkyrg/counciling"
        },
        {
            title: "High Pressure Sump & Tank Cleaning Services",
            description: "A professional cleaning services website showcasing high-pressure sump and water tank cleaning, UV sterilization, deep cleaning processes, and online service enquiry facilities.",
            tech: ["React.js", "JavaScript", "Tailwind CSS"],
            image: hipressureImg,
            category: "SERVICE BUSINESS WEBSITE",
            live: "https://water-eight-lime.vercel.app/",
            github: "https://github.com/vikkyrg/water"
        },
        {
            title: "FinAdvise Loans",
            description: "A loan consultation platform helping users explore personal loans, home loans, business loans, gold loans, and loans against property with online enquiry facilities.",
            tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
            image: finadviseImg,
            category: "FINTECH / LOAN CONSULTATION PLATFORM",
            live: "https://fin-client-five.vercel.app/",
            github: "https://github.com/vikkyrg/fin-client"
        },
        {
            title: "AMPSLITE – Premium Wires & Cables",
            description: "A professional corporate website for a premium wires and cables manufacturer, showcasing high-performance electrical wires, cable products, innovative solutions, and company services. Designed to highlight product quality, electrical safety, durability, and superior conductivity.",
            tech: ["React.js", "JavaScript", "Tailwind CSS"],
            image: amsliteImg,
            category: "MANUFACTURING / ELECTRICAL SOLUTIONS WEBSITE",
            live: "https://amp-slight-website.vercel.app/",
            github: "https://github.com/moula2002/AMPSlight-website"
        },
    ];

    return (
        <FadeIn>
            <section id="projects" className="py-24 md:py-32 px-4 sm:px-6 relative z-20 overflow-hidden scroll-mt-20">
                {/* Background radial glow accents */}
                <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-[#0092B8]/10 glow-orb animate-float-slow pointer-events-none" />
                <div className="absolute bottom-10 left-0 w-80 h-80 rounded-full bg-emerald-500/10 glow-orb animate-float-delay pointer-events-none" />

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
                        {(showAll ? projects : projects.slice(0, 6)).map((project) => (
                            <div
                                key={project.title}
                                className="group relative bg-[rgba(5,12,24,0.84)] backdrop-blur-[8px] p-5 sm:p-6 rounded-3xl border border-[#0092B8]/20 transition-all duration-300 hover:border-[#0092B8]/45 hover:-translate-y-1 h-full flex flex-col"
                            >
                                {/* Project Preview Image */}
                                {project.image ? (
                                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-5 border border-white/[0.08] bg-black/40">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                ) : (
                                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-5 border border-[#0092B8]/15 bg-[rgba(0,146,184,0.04)] flex flex-col items-center justify-center p-4 text-center">
                                        <div className="w-10 h-10 rounded-xl bg-[#0092B8]/[0.08] border border-[#0092B8]/25 flex items-center justify-center text-[#0092B8] mb-2">
                                            <span className="text-xs font-semibold">PREVIEW</span>
                                        </div>
                                        <span className="text-xs font-medium text-[#9CA3AF]">
                                            {project.category}
                                        </span>
                                    </div>
                                )}

                                {/* Technology Badges */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map(tech => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-[rgba(5,12,24,0.78)] rounded-xl text-xs sm:text-sm font-medium text-[#9CA3AF] border border-[#0092B8]/15 backdrop-blur-[8px]"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Project Title */}
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 group-hover:text-[#45B9D7] transition-colors duration-300">
                                    {project.title}
                                </h3>

                                {/* Internship Work Badge if present */}
                                {project.tag && (
                                    <div className="mb-3">
                                        <span className="inline-block px-3 py-1 bg-[#0092B8]/[0.08] text-[#45B9D7] rounded-xl text-xs font-medium border border-[#0092B8]/25">
                                            {project.tag}
                                        </span>
                                    </div>
                                )}

                                {/* Project Description */}
                                <p className="text-[#9CA3AF] mb-6 flex-grow text-sm sm:text-base leading-relaxed font-light">
                                    {project.description}
                                </p>

                                {/* Card Footer with Divider */}
                                {(project.live || project.github || project.isCurrentSite) && (
                                    <div className="flex items-center justify-between w-full pt-5 mt-auto border-t border-[rgba(148,163,184,0.15)]">
                                        <div>
                                            {project.isCurrentSite ? (
                                                <span className="inline-flex items-center gap-2 text-[#0092B8] text-sm font-medium whitespace-nowrap">
                                                    <span className="w-2 h-2 rounded-full bg-[#0092B8] animate-pulse" />
                                                    Live on This Page
                                                </span>
                                            ) : (
                                                project.live && (
                                                    <a
                                                        href={project.live}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center gap-2 text-[#0092B8] hover:text-[#45B9D7] transition-colors text-sm font-medium whitespace-nowrap group/link"
                                                    >
                                                        <FiExternalLink className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                                        Live Preview
                                                    </a>
                                                )
                                            )}
                                        </div>

                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-[#9CA3AF] hover:text-[#F9FAFB] transition-colors text-sm font-medium whitespace-nowrap group/link ml-auto"
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

                    {/* Explore More / Show Less Projects Button */}
                    <div className="mt-12 sm:mt-16 flex justify-center">
                        <button
                            type="button"
                            onClick={() => setShowAll(prev => !prev)}
                            className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-[rgba(5,12,24,0.84)] border border-[#0092B8]/30 text-white font-medium text-sm sm:text-base backdrop-blur-[8px] transition-all duration-300 hover:border-[#0092B8] hover:bg-[#0092B8]/[0.12] hover:shadow-[0_0_20px_rgba(0,146,184,0.25)] hover:-translate-y-0.5"
                        >
                            <span>{showAll ? "Show Less Projects" : "Explore More Projects"}</span>
                            {showAll ? (
                                <FiChevronUp className="text-[#0092B8] text-lg transition-transform duration-300 group-hover:-translate-y-0.5" />
                            ) : (
                                <FiChevronDown className="text-[#0092B8] text-lg transition-transform duration-300 group-hover:translate-y-0.5" />
                            )}
                        </button>
                    </div>
                </div>
            </section>
        </FadeIn>
    );
}

export default Projects;