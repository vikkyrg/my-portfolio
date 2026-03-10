import { useState, useEffect } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiHeart, FiArrowUp } from "react-icons/fi";
import FadeIn from "./FadeIn";

function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-gray-900 to-black pt-16 pb-8 px-6 overflow-hidden">
      
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/10 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Top Section with Gradient Line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
        
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Section */}
          <div className="md:col-span-1">
            <a 
              href="#home" 
              className="group relative inline-block"
            >
              <h2 className="text-2xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                  Vignesh R
                </span>
              </h2>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
            </a>
            
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Seeking entry-level full-stack developer opportunities to build scalable and user-focused web applications.
            </p>
            
            {/* Availability Badge */}
            <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs text-gray-300">Available for work</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
            </h3>
            
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="group flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
            </h3>
            
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:rvikky05@gmail.com"
                  className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all">
                    <FiMail className="text-blue-400 text-sm" />
                  </div>
                  <span className="text-sm">rvikky05@gmail.com</span>
                </a>
              </li>
              
              <li>
                <a 
                  href="https://github.com/vikkyrg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-purple-500/50 group-hover:bg-purple-500/10 transition-all">
                    <FiGithub className="text-purple-400 text-sm" />
                  </div>
                  <span className="text-sm">@vikkyrg</span>
                </a>
              </li>
              
              <li>
                <a 
                  href="https://www.linkedin.com/in/vignesh-r-a634a2293/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-pink-500/50 group-hover:bg-pink-500/10 transition-all">
                    <FiLinkedin className="text-pink-400 text-sm" />
                  </div>
                  <span className="text-sm">Vignesh R</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter/Note */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-white mb-4 relative inline-block">
              About
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full" />
            </h3>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10">
              <p className="text-sm text-gray-300 leading-relaxed">
                Focused on building scalable MERN applications with clean architecture, efficient APIs, and intuitive user experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Social Icons and Copyright */}
        <div className="relative pt-8 mt-8 border-t border-white/10">
          
          {/* Gradient Line Animation */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-slide" />
          
          <div className="flex justify-center items-center">
            
            {/* Copyright with Heart */}
            <div className="flex items-center gap-2 text-gray-500 text-sm text-center">
              <span>© {new Date().getFullYear()}</span>
              <span className="w-1 h-1 bg-gray-600 rounded-full" />
              <span>Vignesh R</span>
              <span className="w-1 h-1 bg-gray-600 rounded-full" />
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
        className={`fixed bottom-8 right-8 z-50 p-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-500 transform ${
          showScrollTop 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-20 opacity-0'
        }`}
      >
        <FiArrowUp className="w-5 h-5" />
      </button>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 3s infinite ease-in-out;
        }
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-slide {
          animation: slide 3s infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </footer>
    </FadeIn>
  );
}

export default Footer;