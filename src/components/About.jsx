import { FiBook, FiAward } from "react-icons/fi";
import FadeIn from "./FadeIn";

function About() {
  return (
    <FadeIn>
    <section id="about" className="py-20 md:py-32 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          
          {/* LEFT — ABOUT with Glass Card Effect */}
          <div className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-25 group-hover:opacity-50 transition duration-1000" />
            
            <div className="relative bg-gray-900/50 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-500">
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </h2>

              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                  MCA Final Year student with hands-on experience building full-stack web applications using the MERN stack,
                  with a strong interest in understanding how real-world applications are designed, built, and scaled.
                  My journey into development began with curiosity about how systems work behind the scenes,
                  which gradually turned into a passion for creating complete, functional solutions.
                </p>

                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                  I enjoy learning through hands-on projects, improving my problem-solving skills,
                  and writing clean, maintainable code. My goal is to grow into a professional full-stack
                  developer and contribute to real-world products and continuously improve as a full-stack developer.
                </p>

                {/* Stats */}
                {/* What I Focus On */}
<div className="mt-6 sm:mt-8">
  <h3 className="text-lg font-semibold text-blue-400 mb-4 text-center">
    What I Focus On
  </h3>

  <div className="grid sm:grid-cols-3 gap-4 text-center">
    
    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
      <h4 className="font-semibold text-white mb-1">Clean UI Development</h4>
      <p className="text-sm text-gray-400">
        Building responsive, user-friendly interfaces with modern design practices.
      </p>
    </div>

    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
      <h4 className="font-semibold text-white mb-1">Scalable Backend Logic</h4>
      <p className="text-sm text-gray-400">
        Creating structured APIs and managing data efficiently for real-world apps.
      </p>
    </div>

    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
      <h4 className="font-semibold text-white mb-1">Continuous Learning</h4>
      <p className="text-sm text-gray-400">
        Improving through hands-on projects and exploring better development patterns.
      </p>
    </div>

  </div>
</div>
              </div>
            </div>
          </div>

          {/* RIGHT — EDUCATION with Timeline */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Education
              </span>
            </h2>

            <div className="space-y-8 relative before:absolute before:left-3 sm:before:left-4 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:to-purple-500">
              
              {/* MCA */}
              <div className="relative pl-10 sm:pl-12 group">
                <div className="absolute left-0 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FiBook className="text-white text-sm sm:text-base" />
                </div>
                <div className="bg-gray-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/5 hover:border-blue-500/30 transition-all duration-300">
                  <h3 className="text-lg sm:text-2xl font-bold text-white">Master of Computer Applications</h3>
                  <p className="text-gray-400 mt-1 text-sm">Erode Arts and Science College</p>
                  <p className="text-blue-400 mt-1 text-sm">2024 — 2026 · Final Year</p>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 bg-blue-600/20 rounded-full text-xs sm:text-sm text-blue-400">CGPA: 7.6/10</span>
                    <span className="text-gray-400 text-xs sm:text-sm">🎓 Pursuing</span>
                  </div>
                </div>
              </div>

              {/* BCA */}
              <div className="relative pl-10 sm:pl-12 group">
                <div className="absolute left-0 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FiAward className="text-white text-sm sm:text-base" />
                </div>
                <div className="bg-gray-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/5 hover:border-purple-500/30 transition-all duration-300">
                  <h3 className="text-lg sm:text-2xl font-bold text-white">Bachelor of Computer Applications</h3>
                  <p className="text-gray-400 mt-1 text-sm">Erode Arts and Science College</p>
                  <p className="text-purple-400 mt-1 text-sm">2021 — 2024 · Completed</p>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 bg-purple-600/20 rounded-full text-xs sm:text-sm text-purple-400">CGPA: 7.5/10</span>
                    <span className="text-gray-400 text-xs sm:text-sm">🏆 Graduate</span>
                  </div>
                </div>
              </div>

              {/* HSC */}
              <div className="relative pl-10 sm:pl-12 group">
                <div className="absolute left-0 top-0 w-6 h-6 sm:w-8 sm:h-8 bg-green-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <FiBook className="text-white text-sm sm:text-base" />
                </div>
                <div className="bg-gray-900/30 backdrop-blur-sm p-4 sm:p-6 rounded-xl border border-white/5 hover:border-green-500/30 transition-all duration-300">
                  <h3 className="text-lg sm:text-2xl font-bold text-white">Higher Secondary Certificate (HSC)</h3>
                  <p className="text-gray-400 mt-1 text-sm">Govt Boys Hr Sec School Pallipalayam</p>
                  <p className="text-green-400 mt-1 text-sm">2019 — 2021 · Completed</p>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    <span className="px-3 py-1 bg-green-600/20 rounded-full text-xs sm:text-sm text-green-400">
                      Percentage: 76%
                    </span>
                    <span className="text-gray-400 text-xs sm:text-sm">📘 School Education</span>
                  </div>
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

export default About;