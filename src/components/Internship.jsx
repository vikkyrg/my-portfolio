import { FiBriefcase } from "react-icons/fi";
import FadeIn from "./FadeIn";

function Internship() {
  return (
    <FadeIn>
    <section id="internship" className="py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">

        {/* SECTION TITLE */}
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Internship Experience
          </span>
        </h2>

        {/* TIMELINE CONTAINER */}
        <div className="space-y-10 relative before:absolute before:left-4 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:to-purple-500">

          {/* INTERNSHIP 1 — LITZ TECH */}
          <div className="relative pl-12 group">
            <div className="absolute left-0 top-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <FiBriefcase className="text-white" />
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-25 group-hover:opacity-50 transition duration-1000" />

              <div className="relative bg-gray-900/50 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white">
                  Web Development Internship
                </h3>

                <p className="text-blue-400 mt-1">Litz Tech · 2023</p>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  Contributed to the development of responsive web interfaces and gained hands-on experience in frontend technologies within a professional environment.
                </p>

                <ul className="list-disc pl-6 text-gray-400 space-y-2 mt-4">
                    <li>Built structured web pages using HTML5, CSS3, and JavaScript</li>
                    <li>Developed responsive layouts using Flexbox and media queries</li>
                    <li>Implemented interactive UI behavior with  JavaScript</li>
                    <li>Improved understanding of browser rendering and layout techniques</li>
                    <li>Collaborated on static website projects focusing on usability and design</li>
                </ul>

                <div className="mt-5">
                  <span className="px-3 py-1 bg-blue-600/20 rounded-full text-sm text-blue-400">
                    Web Development
                  </span>
                </div>
              </div>
            </div>
          </div>


          {/* INTERNSHIP 2 — INNOMATRICS */}
          <div className="relative pl-12 group">
            <div className="absolute left-0 top-0 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <FiBriefcase className="text-white" />
            </div>

            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-25 group-hover:opacity-50 transition duration-1000" />

              <div className="relative bg-gray-900/50 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-500">
                <h3 className="text-2xl font-bold text-white">
                  Web Developer Intern
                </h3>

                <p className="text-purple-400 mt-1">
                  Innomatrics Technologies · Nov 2025 — Feb 2026
                </p>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  Worked on full-stack web application development using the MERN stack, building scalable features and integrating APIs and databases.
                </p>

                <ul className="list-disc pl-6 text-gray-400 space-y-2 mt-4">
                    <li>Developed dynamic user interfaces using React.js</li>
                    <li>Implemented RESTful APIs and handled data integration</li>
                    <li>Used Firebase/Database services for authentication and storage</li>
                    <li>Built responsive components using Tailwind CSS</li>
                    <li>Participated in debugging, testing, and feature enhancements</li>
                    <li>Collaborated in a team-based development workflow</li>
                </ul>

                <div className="mt-5">
                  <span className="px-3 py-1 bg-purple-600/20 rounded-full text-sm text-purple-400">
                    MERN Stack Development
                  </span>
                </div>
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