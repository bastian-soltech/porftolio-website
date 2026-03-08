import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "../../constants";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav
        data-aos="fade-down"
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
          scrolled
            ? "py-4 bg-gray-950/90 backdrop-blur-xl border-b border-white/5 shadow-2xl"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="relative group flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
              H
            </div>
            <span className="text-xl font-orbitron font-black text-white tracking-tighter uppercase hidden sm:block">
              Ham<span className="text-cyan-400">bali</span>
            </span>
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="relative text-xs font-bold text-gray-400 hover:text-white transition-colors duration-300 uppercase tracking-[0.2em] group"
                >
                  {link.name}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="px-6 py-2.5 rounded-full border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest hover:bg-cyan-500/10 hover:border-cyan-500 transition-all active:scale-95"
              >
                Let's Talk
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle navigation menu"
            className="md:hidden text-white focus:outline-none p-2 hover:bg-white/5 rounded-lg transition-colors"
          >
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-gray-950/98 backdrop-blur-2xl flex flex-col items-center justify-center space-y-10 md:hidden transition-all duration-500 z-[90] ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-10"
        }`}
      >
        {navLinks.map((link, idx) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            style={{ transitionDelay: `${idx * 100}ms` }}
            className={`text-3xl font-orbitron font-bold text-white hover:text-cyan-400 tracking-widest transition-all ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="px-10 py-4 bg-cyan-600 text-white rounded-full font-bold uppercase tracking-widest shadow-xl shadow-cyan-500/20"
        >
          Let's Talk
        </a>
      </div>
    </header>
  );
}
