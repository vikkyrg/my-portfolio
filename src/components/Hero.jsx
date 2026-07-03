import { useState, useEffect, useRef } from "react";
import { FiDownload, FiArrowRight } from "react-icons/fi";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Canvas Interactive Signature Effect (Constellation)
  useEffect(() => {
    const canvas = canvasRef.current;
    const section = document.getElementById("home");
    if (!canvas || !section) return;

    // Using alpha: false optimizes GPU rendering by informing the browser the canvas is fully opaque
    const ctx = canvas.getContext("2d", { alpha: false });
    let animationFrameId;
    let particles = [];
    let width = 0;
    let height = 0;
    
    // Track mouse position for the signature interaction
    let mouse = { x: -1000, y: -1000, radius: 180 }; // Increased radius for better presence

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      // Adaptive particle count based on screen size for mobile performance
      const particleCount = width < 768 ? 40 : 80;
      particles = [];

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 1.5 + 0.5,
        });
      }
    };

    const draw = () => {
      // Clear with solid background for performance (matches #020817)
      ctx.fillStyle = "#020817"; 
      ctx.fillRect(0, 0, width, height);

      ctx.lineWidth = 0.5;

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        // Bounce off walls smoothly
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle (Restored original visibility)
        ctx.fillStyle = "rgba(156, 163, 175, 0.4)"; 
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles for the mesh effect
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = dx * dx + dy * dy;

          if (dist < 12000) {
            ctx.strokeStyle = `rgba(156, 163, 175, ${0.15 - dist / 80000})`;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Signature interaction: particles connect and react to mouse
        const dxMouse = p.x - mouse.x;
        const dyMouse = p.y - mouse.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < mouse.radius) {
          const force = (mouse.radius - distMouse) / mouse.radius;
          const forceDirectionX = dxMouse / distMouse;
          const forceDirectionY = dyMouse / distMouse;
          
          // Repel smoothly
          p.x += forceDirectionX * force * 1.5;
          p.y += forceDirectionY * force * 1.5;
          
          // Draw premium glowing connection to cursor using actual shadowBlur
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          
          // Cyan/Blue soft glow
          ctx.strokeStyle = `rgba(6, 182, 212, ${force * 0.6})`;
          ctx.shadowBlur = 15;
          ctx.shadowColor = "rgba(6, 182, 212, 1)";
          ctx.lineWidth = 1.5;
          ctx.stroke();
          
          // Reset shadow and line width for other particles
          ctx.shadowBlur = 0;
          ctx.lineWidth = 0.5;
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleResize = () => init();
    
    // Throttled mouse move for maximum performance
    let ticking = false;
    const handleMouseMove = (e) => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const rect = canvas.getBoundingClientRect();
          mouse.x = e.clientX - rect.left;
          mouse.y = e.clientY - rect.top;
          ticking = false;
        });
        ticking = true;
      }
    };
    
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    // Performance: Only run the animation when the Hero is visible
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (!animationFrameId) draw();
        } else {
          if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
          }
        }
      },
      { threshold: 0 }
    );

    observer.observe(canvas);
    window.addEventListener("resize", handleResize);
    
    // Attach mouse events to the section so they aren't blocked by z-10 elements
    section.addEventListener("mousemove", handleMouseMove, { passive: true });
    section.addEventListener("mouseleave", handleMouseLeave);
    
    init();

    return () => {
      window.removeEventListener("resize", handleResize);
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
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
      className="relative z-10 min-h-screen flex items-center justify-center bg-[#020817] pt-20 sm:pt-24 md:pt-24 lg:pt-28 pb-16 md:pb-0"
    >
      {/* Signature Interactive Canvas Effect */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ touchAction: "none" }}
      />

      {/* Soft Radial Glow Background - matching Skills section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] max-w-full bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Seamless transition gradient fading out the canvas particles at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-[25vh] md:h-[35vh] bg-gradient-to-t from-[#020817] via-[#020817]/90 to-transparent pointer-events-none z-10" />
      
      {/* Bleeding gradient to smoothly merge Hero's solid background with the transparent page background below */}
      {/* This prevents the sharp horizontal line caused by the global background glow showing through the About section */}
      <div className="absolute top-full left-0 w-full h-[15vh] md:h-[25vh] bg-gradient-to-b from-[#020817] to-transparent pointer-events-none z-10" />

      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 w-full grid md:grid-cols-2 gap-8 md:gap-16 items-center relative z-10 transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* LEFT SIDE: Content */}
        <div className="max-w-2xl mx-auto md:mx-0 w-full text-center md:text-left md:mt-2">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#F9FAFB] leading-[1.1]">
            MERN Stack Developer
            <span className="block text-[#4F8EF7] mt-3">
              Developing Web Applications
            </span>
          </h1>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-[#9CA3AF] max-w-xl mx-auto md:mx-0 leading-relaxed font-light">
            Entry-level MERN Stack Developer building scalable web applications
            using React, Node.js, Express, and MongoDB.
          </p>

          {/* CTA Buttons - Updated with Skills section styling */}
          <div className="mt-8 sm:mt-10 flex flex-row gap-3 sm:gap-4 justify-center md:justify-start w-full">
            <a
              href="/Vignesh_Resume.pdf"
              download="Vignesh_Resume.pdf"
              className="group min-h-[48px] sm:min-h-[60px] inline-flex items-center justify-center gap-2 sm:gap-3 px-4 py-2.5 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold bg-[#2563EB] text-white rounded-lg hover:bg-[#1D4ED8] shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#4F8EF7] focus:ring-offset-2 focus:ring-offset-[#020817] touch-manipulation hover:scale-105 hover:shadow-[0_0_25px_rgba(37,99,235,0.4)] whitespace-nowrap"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              <FiDownload className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              Download Resume
            </a>

            <button
              onClick={handleViewWork}
              className="group min-h-[48px] sm:min-h-[60px] inline-flex items-center justify-center gap-2 sm:gap-3 px-4 py-2.5 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold border border-[#1E293B] text-[#F9FAFB] bg-[#020817]/80 backdrop-blur-sm rounded-lg hover:border-cyan-500/50 hover:bg-cyan-500/5 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1E293B] focus:ring-offset-2 focus:ring-offset-[#020817] touch-manipulation hover:scale-105 whitespace-nowrap"
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              View Work
              <FiArrowRight className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Profile Image - Updated with Skills section styling */}
        <div className="flex justify-center md:justify-end relative mt-12 md:-mt-3 group">
          <div className="relative w-[220px] h-[220px] sm:w-[250px] sm:h-[250px] md:w-[340px] md:h-[340px] lg:w-[380px] lg:h-[380px] rounded-full">
            {/* Signature Soft Radial Light under the image */}
            <div className="absolute inset-0 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none transition-opacity duration-700 group-hover:opacity-100 opacity-60" />
            
            {/* Premium Image Container with Skills section border styling */}
            <div className="relative w-full h-full rounded-full border border-[#1E293B] bg-[#020817] shadow-[0_8px_32px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-700 group-hover:scale-[1.02] group-hover:border-cyan-500/30 group-hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]">
              <img
                src="/profile.jpeg"
                alt="Vikky"
                className="w-full h-full object-cover object-top select-none"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;