import { useState, useEffect } from "react";
import { FiDownload, FiArrowRight } from "react-icons/fi";
function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className={`min-h-[85vh] md:min-h-screen flex items-start justify-center text-center px-6 pt-24 sm:pt-28 md:pt-36 pb-16 md:pb-0 relative overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Floating Particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    animationDuration: `${3 + Math.random() * 5}s`
                  }}
                />
              ))}
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">

            {/* LEFT SIDE — YOUR ORIGINAL CONTENT (UNCHANGED) */}
            <div className="relative mt-6 md:mt-10 max-w-2xl mx-auto md:mx-0">

              {/* Main Heading with Gradient */}
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight">
                <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  MERN Stack Developer
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient">
                  Developing Web Applications
                </span>
              </h1>

              {/* Animated Description */}
              <p className="mt-8 text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed animate-fade-in-up">
                Entry-level MERN Stack Developer building scalable web applications using React, Node.js, Express, and MongoDB.
              </p>

              {/* CTA Buttons */}
              <div className="mt-12 flex flex-col sm:flex-row gap-6 animate-fade-in-up animation-delay-200">
                <a href="/resume.pdf" download className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25">
                  <span className="flex items-center gap-2">
                    <FiDownload className="group-hover:animate-bounce" />
                    Download Resume
                  </span>
                </a>

                <a href="#projects" className="group px-8 py-4 border border-white/20 rounded-xl hover:border-blue-500/50 hover:bg-white/5 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                  <span className="flex items-center gap-2">
                    View Work
                    <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </div>

            </div>

          {/* RIGHT SIDE — GLASS PROFILE CARD */}
          <div className="flex justify-center md:justify-end relative">

            {/* Background Aura */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 w-[420px] h-[420px]
              bg-gradient-to-tr from-blue-500/25 via-indigo-500/20 to-purple-500/25
              blur-[100px] rounded-full animate-heroAura" />


            {/* Profile Circle */}
            <div className="relative w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] md:w-[420px] md:h-[420px] rounded-full">

              {/* Neon Ring */}
              <div className="absolute inset-0 rounded-full
              bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500
              blur-md opacity-80 animate-pulse" />

              {/* Outer Glow */}
              <div className="absolute inset-[-6px] rounded-full
              bg-gradient-to-r from-cyan-300 via-indigo-400 to-purple-400
              blur-2xl opacity-60" />

              {/* Glass Circle */}
              <div className="relative w-full h-full rounded-full
              bg-white/5 backdrop-blur-2xl border border-white/10
              overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

                <img
                  src="/quality.jpeg"
                  alt="Vikky"
                  className="w-full h-full object-cover object-top"
                />

                {/* Soft Light Reflection */}
                <div className="absolute inset-0
                bg-gradient-to-br from-white/20 via-transparent to-transparent
                opacity-40" />

              </div>
            </div>
          </div>


          {/* Scroll Indicator (Keep Same Position) */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-scroll" />
            </div>
          </div>

        </div>

      </section>
  );
}

export default Hero;
