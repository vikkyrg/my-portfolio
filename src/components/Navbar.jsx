import { useState, useEffect, useCallback } from 'react';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiHome, FiUser, FiCode, FiBriefcase, FiMail } from 'react-icons/fi';

const navItems = [
  { href: "#home", label: "Home", icon: FiHome },
  { href: "#about", label: "About", icon: FiUser },
  { href: "#skills", label: "Skills", icon: FiCode },
  { href: "#projects", label: "Projects", icon: FiBriefcase },
  { href: "#contact", label: "Contact", icon: FiMail }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);

          const sections = navItems.map(item => item.label.toLowerCase());
          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              if (rect.top <= 150 && rect.bottom >= 150) {
                setActiveSection(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const scrollToSection = useCallback((e, href, section) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(section);
    setIsOpen(false);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled
          ? 'bg-[#020817]/80 backdrop-blur-xl border-b border-[#1E293B] shadow-[0_1px_0_0_rgba(255,255,255,0.02)]'
          : 'bg-transparent border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => scrollToSection(e, '#home', 'home')}
          className="text-xl font-semibold tracking-tight text-[#F9FAFB] hover:text-cyan-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 rounded-md px-1"
          aria-label="Home"
        >
          Vignesh R
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.label.toLowerCase();
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href, item.label.toLowerCase())}
                aria-current={isActive ? 'page' : undefined}
                className={`relative px-4 py-2 flex items-center text-base font-medium rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${isActive
                    ? 'text-[#F9FAFB] bg-white/5'
                    : 'text-[#9CA3AF] hover:text-cyan-400 hover:bg-white/5'
                  }`}
              >
                <Icon className="w-4 h-4 mr-2 opacity-80" />
                {item.label}
              </a>
            );
          })}

          <div className="flex items-center space-x-2 pl-4 ml-2 border-l border-[#1E293B]">
            <a
              href="https://github.com/vikkyrg"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-[#9CA3AF] hover:text-cyan-400 hover:bg-white/5 rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            >
              <FiGithub className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/vignesh-r-a634a2293/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2 text-[#9CA3AF] hover:text-cyan-400 hover:bg-white/5 rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
            >
              <FiLinkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 -mr-2 text-[#9CA3AF] hover:text-cyan-400 hover:bg-white/5 rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-x-0 top-16 h-[calc(100dvh-64px)] bg-[#020817]/95 backdrop-blur-xl md:hidden transition-all duration-300 ease-out border-t border-[#1E293B]/50 ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible pointer-events-none'
          }`}
      >
        <div className="flex flex-col px-4 py-8 space-y-2 overflow-y-auto h-full">
          {navItems.map((item) => {
            const isActive = activeSection === item.label.toLowerCase();
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href, item.label.toLowerCase())}
                aria-current={isActive ? 'page' : undefined}
                className={`w-full flex items-center px-4 py-3 text-lg font-medium rounded-lg transition-all duration-200 ${isActive
                    ? 'text-[#F9FAFB] font-semibold bg-white/5 border border-[#1E293B] shadow-[0_0_0_1px_rgba(255,255,255,0.03)]'
                    : 'text-[#9CA3AF] font-medium hover:text-cyan-400 hover:bg-white/5'
                  }`}
              >
                <Icon className="w-5 h-5 mr-3 opacity-80" />
                {item.label}
              </a>
            );
          })}

          <div className="flex items-center space-x-4 pt-6 mt-6 border-t border-[#1E293B] px-4">
            <a
              href="https://github.com/vikkyrg"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-3 text-[#9CA3AF] hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-200"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/vignesh-r-a634a2293/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 text-[#9CA3AF] hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-200"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;