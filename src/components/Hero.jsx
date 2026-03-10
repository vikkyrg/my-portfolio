import { useState, useEffect } from "react";
import { FiDownload, FiArrowRight } from "react-icons/fi";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleViewWork = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className={`min-h-[85vh] md:min-h-screen flex items-start justify-center text-center px-4 sm:px-6 pt-20 sm:pt-24 md:pt-36 pb-16 md:pb-0 relative isolate overflow-x-hidden overflow-clip transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ contain: "paint" }}
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-16 items-center relative z-10 w-full">
        {/* LEFT SIDE */}
        <div className="relative mt-4 md:mt-10 max-w-2xl mx-auto md:mx-0 w-full">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              MERN Stack Developer
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
              Developing Web Applications
            </span>
          </h1>

          <p className="mt-6 sm:mt-8 text-gray-400 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed animate-fade-in-up">
            Entry-level MERN Stack Developer building scalable web applications
            using React, Node.js, Express, and MongoDB.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-row gap-3 sm:gap-6 justify-center md:justify-start animate-fade-in-up animation-delay-200">
            <a
              href="/resume.pdf"
              download="Vignesh_Resume.pdf"
              className="group relative px-4 py-2.5 sm:px-8 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg sm:rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 active:scale-95 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 cursor-pointer touch-manipulation"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <span className="flex items-center gap-2">
                <FiDownload className="group-hover:animate-bounce" />
                Download Resume
              </span>
            </a>

            <button
              onClick={handleViewWork}
              className="group relative px-4 py-2.5 sm:px-8 sm:py-4 text-sm sm:text-base border border-white/20 rounded-lg sm:rounded-xl hover:border-blue-500/50 hover:bg-white/5 transition-all duration-300 active:scale-95 hover:scale-105 backdrop-blur-sm cursor-pointer touch-manipulation"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <span className="flex items-center gap-2">
                View Work
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex justify-center md:justify-end relative mt-8 md:mt-0">
          {/* Background Aura */}
          <div
            className="absolute pointer-events-none right-1/2 md:right-10 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-0 w-[280px] sm:w-[350px] md:w-[420px] h-[280px] sm:h-[350px] md:h-[420px] bg-gradient-to-tr from-blue-500/25 via-indigo-500/20 to-purple-500/25 blur-[100px] rounded-full animate-heroAura"
            style={{ willChange: "transform" }}
          />

          <div className="relative w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] md:w-[420px] md:h-[420px] rounded-full">
            {/* Neon Ring */}
            <div className="absolute inset-0 pointer-events-none rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 blur-md opacity-80 animate-pulse" />

            {/* Outer Glow */}
            <div className="absolute inset-[-4px] sm:inset-[-6px] pointer-events-none rounded-full bg-gradient-to-r from-cyan-300 via-indigo-400 to-purple-400 blur-xl sm:blur-2xl opacity-60" />

            {/* Glass Circle */}
            <div className="relative w-full h-full rounded-full bg-white/5 backdrop-blur-2xl border border-white/10 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
              <img
                src="/profile.jpeg"
                alt="Vikky"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />

              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-40" />
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }

        @keyframes gradient {
          0%,100% { background-position:0% 50%; }
          50% { background-position:100% 50%; }
        }
        .animate-gradient {
          background-size:200% 200%;
          animation:gradient 3s ease infinite;
        }

        @keyframes fadeInUp {
          from { opacity:0; transform:translateY(20px); }
          to { opacity:1; transform:translateY(0); }
        }
        .animate-fade-in-up { animation:fadeInUp 0.6s ease-out forwards; }
        .animation-delay-200 { animation-delay:0.2s; }

        @keyframes heroAura {
          0%,100% { opacity:0.5; transform:translate(-50%,-50%) scale(1); }
          50% { opacity:0.8; transform:translate(-50%,-50%) scale(1.1); }
        }
        .animate-heroAura { animation:heroAura 4s ease-in-out infinite; }

        @media (max-width:768px) {
          a,button { min-height:44px; min-width:44px; }
        }
      `}</style>
    </section>
  );
}

export default Hero;