import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiHome, FiUser, FiCode, FiBriefcase, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#home", label: "Home", icon: <FiHome /> },
    { href: "#about", label: "About", icon: <FiUser /> },
    { href: "#skills", label: "Skills", icon: <FiCode /> },
    { href: "#projects", label: "Projects", icon: <FiBriefcase /> },
    { href: "#contact", label: "Contact", icon: <FiMail /> }
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-3 bg-gray-900/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-blue-500/5' 
          : 'py-5 bg-transparent backdrop-blur-sm'
      }`}>
        
        {/* Animated Gradient Line */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-slide" />

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo with Animation */}
          <a href="#home" className="group relative">
            {/* Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
            
            {/* Logo Text */}
            <h1 className="relative text-2xl font-bold tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                Vignesh R
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
            </h1>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`group relative px-4 py-2 rounded-xl transition-all duration-300 ${
                  activeSection === item.label.toLowerCase()
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                  setActiveSection(item.label.toLowerCase());
                }}
              >
                {/* Hover Background */}
                <div className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                  activeSection === item.label.toLowerCase()
                    ? 'bg-blue-600/20 border border-blue-500/30'
                    : 'bg-white/0 group-hover:bg-white/5'
                }`} />
                
                {/* Active Indicator */}
                {activeSection === item.label.toLowerCase() && (
                  <div className="absolute -bottom-[1px] left-0 w-full h-[2px]">
                    <div className="w-full h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse-slow" />
                  </div>
                )}
                
                {/* Content */}
                <span className="relative flex items-center gap-2">
                  <span className="text-lg group-hover:rotate-12 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium">{item.label}</span>
                </span>

                {/* Tooltip Dot */}
                <span className={`absolute -top-1 -right-1 w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSection === item.label.toLowerCase()
                    ? 'bg-blue-400 animate-ping'
                    : 'bg-transparent'
                }`} />
              </a>
            ))}

            {/* Social Links */}
            <div className="ml-4 pl-4 border-l border-white/10 flex items-center gap-2">
              <a 
                href="https://github.com/vikkyrg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-white/5 transition-all duration-300 group"
              >
                <FiGithub className="text-gray-400 group-hover:text-white group-hover:rotate-12 transition-all" />
              </a>
              <a 
                href="https://www.linkedin.com/in/vignesh-r-a634a2293/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-white/5 transition-all duration-300 group"
              >
                <FiLinkedin className="text-gray-400 group-hover:text-blue-400 group-hover:scale-110 transition-all" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            {isOpen ? (
              <FiX className="w-5 h-5 mx-auto text-gray-300 group-hover:rotate-90 transition-transform duration-300" />
            ) : (
              <FiMenu className="w-5 h-5 mx-auto text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          {/* Glass Background */}
          <div className="relative bg-gray-900/95 backdrop-blur-xl border-t border-white/10 shadow-2xl">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
            </div>

            {/* Navigation Links */}
            <div className="relative p-6 space-y-3">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 animate-fade-in-up ${
                    activeSection === item.label.toLowerCase()
                      ? 'bg-blue-600/20 border border-blue-500/30 text-blue-400'
                      : 'hover:bg-white/5 text-gray-300'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    setActiveSection(item.label.toLowerCase());
                    setIsOpen(false);
                  }}
                >
                  <span className={`text-xl ${
                    activeSection === item.label.toLowerCase() 
                      ? 'text-blue-400' 
                      : 'text-gray-400'
                  }`}>
                    {item.icon}
                  </span>
                  <span className="font-medium">{item.label}</span>
                  
                  {/* Active Indicator */}
                  {activeSection === item.label.toLowerCase() && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
                  )}
                </a>
              ))}

              {/* Mobile Social Links */}
              <div className="flex justify-center gap-4 pt-4 mt-4 border-t border-white/10">
                <a 
                  href="https://github.com/vikkyrg" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                >
                  <FiGithub className="text-gray-400 group-hover:text-white" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/vignesh-r-a634a2293/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                >
                  <FiLinkedin className="text-gray-400 group-hover:text-blue-400" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60]">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300"
          style={{ 
            width: `${(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100}%`,
            opacity: scrolled ? 1 : 0
          }}
        />
      </div>

      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-slide {
          animation: slide 3s infinite;
        }
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
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-pulse-slow {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;