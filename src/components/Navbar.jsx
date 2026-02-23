import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiHome, FiUser, FiCode, FiBriefcase, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update scroll progress
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
      
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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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

        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo with Animation */}
          <a href="#home" className="group relative z-50">
            {/* Glow Effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
            
            {/* Logo Text */}
            <h1 className="relative text-xl sm:text-2xl font-bold tracking-tight">
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

          {/* Mobile Menu Button - Enhanced styling */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group z-50 backdrop-blur-sm"
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            {isOpen ? (
              <FiX className="w-5 h-5 mx-auto text-white group-hover:rotate-90 transition-transform duration-300" />
            ) : (
              <FiMenu className="w-5 h-5 mx-auto text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu - Clean version without circle icon and Menu label */}
        <div 
          className={`fixed md:hidden inset-0 top-0 left-0 w-full h-screen transition-all duration-500 ease-in-out ${
            isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
          }`}
          style={{ zIndex: 40 }}
        >
          {/* Backdrop with enhanced blur */}
          <div 
            className={`absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/80 to-purple-900/80 backdrop-blur-xl transition-opacity duration-500 ${
              isOpen ? 'opacity-100' : 'opacity-0'
            }`}
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Panel - Clean design */}
          <div 
            className={`absolute top-0 right-0 h-full w-full max-w-sm bg-gradient-to-b from-gray-900 to-gray-950 backdrop-blur-xl shadow-2xl border-l border-white/10 transition-transform duration-500 ease-out ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
              
              {/* Grid Pattern Overlay */}
              <div className="absolute inset-0 opacity-5" 
                style={{
                  backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                  backgroundSize: '40px 40px'
                }}
              />
            </div>

            {/* Navigation Links - Clean version without header */}
            <div className="relative h-full overflow-y-auto px-6 pb-6 pt-16 scrollbar-thin scrollbar-thumb-blue-500/20 scrollbar-track-transparent">
              <div className="space-y-3">
                {navItems.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 group relative overflow-hidden ${
                      activeSection === item.label.toLowerCase()
                        ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-blue-400 shadow-lg shadow-blue-500/10'
                        : 'hover:bg-white/5 text-gray-300 hover:text-white border border-transparent hover:border-white/10'
                    }`}
                    style={{ 
                      transform: isOpen ? 'translateX(0)' : 'translateX(20px)',
                      opacity: isOpen ? 1 : 0,
                      transitionDelay: `${index * 100}ms`
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                      setActiveSection(item.label.toLowerCase());
                      setIsOpen(false);
                    }}
                  >
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 transition-all duration-300" />
                    
                    {/* Icon Container */}
                    <div className={`relative z-10 w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      activeSection === item.label.toLowerCase()
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-white/5 text-gray-400 group-hover:bg-white/10 group-hover:scale-110'
                    }`}>
                      <span className="text-xl">
                        {item.icon}
                      </span>
                    </div>
                    
                    <span className="relative z-10 font-medium text-base flex-1">{item.label}</span>
                    
                    {/* Active Indicator */}
                    {activeSection === item.label.toLowerCase() && (
                      <>
                        <div className="relative z-10 w-2 h-2 rounded-full bg-blue-400 animate-ping mr-2" />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-1 h-8 rounded-full bg-gradient-to-b from-blue-400 to-purple-400" />
                      </>
                    )}
                    
                    {/* Arrow Icon on Hover */}
                    <svg 
                      className={`relative z-10 w-5 h-5 transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 ${
                        activeSection === item.label.toLowerCase() ? 'text-blue-400' : 'text-gray-400'
                      }`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                ))}
              </div>

              {/* Mobile Social Links - Enhanced styling */}
              <div className="relative mt-8 pt-6 border-t border-white/10">
                <p className="text-xs text-gray-500 mb-4 text-center tracking-wider">CONNECT WITH ME</p>
                <div className="flex justify-center gap-4">
                  <a 
                    href="https://github.com/vikkyrg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 hover:from-blue-600/20 hover:to-purple-600/20 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
                    onClick={() => setIsOpen(false)}
                  >
                    <FiGithub className="w-6 h-6 text-gray-400 group-hover:text-white group-hover:scale-110 transition-all duration-300" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/vignesh-r-a634a2293/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 hover:from-blue-600/20 hover:to-purple-600/20 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
                    onClick={() => setIsOpen(false)}
                  >
                    <FiLinkedin className="w-6 h-6 text-gray-400 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
          </div>
        </div>
      </nav>

      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 z-[60]">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 relative overflow-hidden"
          style={{ 
            width: `${scrollProgress}%`,
            opacity: scrolled ? 1 : 0
          }}
        >
          <div className="absolute inset-0 bg-white/20 blur-sm animate-pulse" />
        </div>
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
        
        /* Custom scrollbar for mobile menu */
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.2);
          border-radius: 20px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.4);
        }
      `}</style>
    </>
  );
}

export default Navbar;