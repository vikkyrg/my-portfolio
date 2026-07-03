import { useState, useEffect, useRef } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiHeart, FiArrowUp } from "react-icons/fi";
import FadeIn from "./FadeIn";

function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Canvas Interactive Signature Effect (Constellation) for Footer
  useEffect(() => {
    const canvas = canvasRef.current;
    const section = document.getElementById("footer");
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
      width = section.offsetWidth;
      height = section.offsetHeight;
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

        // Draw particle
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

    // Performance: Only run the animation when the Footer is visible
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
    
    setTimeout(init, 100);

    return () => {
      window.removeEventListener("resize", handleResize);
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { href: "#home", label: "Home", },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <FadeIn>
    <footer id="footer" className="relative border-t border-[#1E293B] bg-[#020817] pt-16 pb-8 px-6 overflow-hidden">
      
      {/* Signature Interactive Canvas Effect */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto relative z-10">
                
        <div className="grid md:grid-cols-4 gap-10 mb-12 mt-8">
          
          {/* Brand Section */}
          <div className="md:col-span-1">
            <a 
              href="#home" 
              className="group relative inline-block"
            >
              <h2 className="text-3xl font-bold tracking-tight text-[#F9FAFB]">
                Vignesh R
              </h2>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-300" />
            </a>
            
            <p className="mt-4 text-[#9CA3AF] text-base sm:text-lg leading-relaxed font-light">
              Seeking entry-level full-stack developer opportunities to build scalable and user-focused web applications.
            </p>
            
            {/* Availability Badge */}
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#020817] border border-[#1E293B]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-sm text-[#9CA3AF] font-medium">Available for work</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-[#F9FAFB] mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-cyan-500 rounded-full" />
            </h3>
            
            <ul className="space-y-3 mt-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="group flex items-center gap-2 text-[#9CA3AF] hover:text-cyan-400 transition-colors duration-300 text-base font-medium"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span className="w-1 h-1 bg-cyan-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-[#F9FAFB] mb-4 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-cyan-500 rounded-full" />
            </h3>
            
            <ul className="space-y-4 mt-2">
              <li>
                <a 
                  href="mailto:rvikky05@gmail.com"
                  className="group flex items-center gap-3 text-[#9CA3AF] hover:text-cyan-400 transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#020817] border border-[#1E293B] flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-500/5 transition-all">
                    <FiMail className="text-[#9CA3AF] group-hover:text-cyan-400 text-base transition-colors" />
                  </div>
                  <span className="text-base font-medium">rvikky05@gmail.com</span>
                </a>
              </li>
              
              <li>
                <a 
                  href="https://github.com/vikkyrg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-[#9CA3AF] hover:text-cyan-400 transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#020817] border border-[#1E293B] flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-500/5 transition-all">
                    <FiGithub className="text-[#9CA3AF] group-hover:text-cyan-400 text-base transition-colors" />
                  </div>
                  <span className="text-base font-medium">@vikkyrg</span>
                </a>
              </li>
              
              <li>
                <a 
                  href="https://www.linkedin.com/in/vignesh-r-a634a2293/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-[#9CA3AF] hover:text-cyan-400 transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#020817] border border-[#1E293B] flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-500/5 transition-all">
                    <FiLinkedin className="text-[#9CA3AF] group-hover:text-cyan-400 text-base transition-colors" />
                  </div>
                  <span className="text-base font-medium">Vignesh R</span>
                </a>
              </li>
            </ul>
          </div>

          {/* About Note */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold text-[#F9FAFB] mb-4 relative inline-block">
              About
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-cyan-500 rounded-full" />
            </h3>
            
            <div className="bg-[#020817] rounded-xl p-5 border border-[#1E293B] mt-2">
              <p className="text-base sm:text-lg text-[#9CA3AF] leading-relaxed font-light">
                Focused on building scalable MERN applications with clean architecture, efficient APIs, and intuitive user experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="relative pt-8 mt-8 border-t border-[#1E293B]">
          
          <div className="flex justify-center items-center">
            <div className="flex items-center gap-2 text-[#9CA3AF] text-base sm:text-lg text-center font-light">
              <span>© {new Date().getFullYear()}</span>
              <span className="w-1.5 h-1.5 bg-[#1E293B] rounded-full" />
              <span className="font-medium text-[#F9FAFB]">Vignesh R</span>
              <span className="w-1.5 h-1.5 bg-[#1E293B] rounded-full" />
              <span className="flex items-center gap-1">
                Full-Stack Developer
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 p-3 rounded-xl bg-cyan-600 text-white shadow-lg hover:shadow-cyan-500/25 hover:bg-cyan-500 transition-all duration-500 transform ${
          showScrollTop 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-20 opacity-0'
        }`}
      >
        <FiArrowUp className="w-5 h-5" />
      </button>

    </footer>
    </FadeIn>
  );
}

export default Footer;