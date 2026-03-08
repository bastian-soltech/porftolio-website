import { FaChevronUp } from "react-icons/fa";
import { navLinks, socialLinks } from "../../constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-950 pt-24 pb-12 overflow-hidden border-t border-gray-900">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-16 mb-20">

          {/* Brand Section */}
          <div
            data-aos="fade-up"
            className="text-center lg:text-left space-y-6 max-w-sm"
          >
            <a href="#home" className="inline-flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center text-cyan-400 group-hover:border-cyan-500/50 transition-all duration-500 font-black text-2xl font-orbitron">
                H
              </div>
              <h2 className="text-3xl font-orbitron font-black text-white tracking-tighter uppercase">
                HAM<span className="text-cyan-400">BALI</span>
              </h2>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Designing and developing professional-grade software solutions with a focus on performance, reliability, and user experience.
            </p>
            
            <div className="flex items-center justify-center lg:justify-start gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 transition-all hover:border-cyan-500/50 hover:bg-cyan-500/10 hover:-translate-y-1 hover:text-cyan-400 shadow-xl"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="grid grid-cols-2 gap-x-12 gap-y-6 text-center lg:text-left"
          >
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-white uppercase tracking-[0.3em] font-orbitron">Navigation</h3>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-400 hover:text-cyan-400 transition-colors text-sm font-medium tracking-wide">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-white uppercase tracking-[0.3em] font-orbitron">Specialization</h3>
              <ul className="space-y-3">
                <li className="text-gray-400 text-sm font-medium tracking-wide">Fullstack Dev</li>
                <li className="text-gray-400 text-sm font-medium tracking-wide">Software Eng</li>
                <li className="text-gray-400 text-sm font-medium tracking-wide">Data Analysis</li>
              </ul>
            </div>
          </div>

          {/* Contact Hook */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-center lg:text-right space-y-6"
          >
            <h3 className="text-xs font-bold text-white uppercase tracking-[0.3em] font-orbitron">Available for hire</h3>
            <p className="text-gray-400 text-sm max-w-[200px] lg:ml-auto">
              Open to new projects and full-time opportunities.
            </p>
            <a 
              href="mailto:subastianhambali@gmail.com"
              className="inline-block px-8 py-3 bg-cyan-600/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest rounded-full hover:bg-cyan-600 hover:text-white transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-900/50 pt-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-gray-500 text-[10px] uppercase tracking-[0.2em] font-bold order-2 md:order-1">
            © {new Date().getFullYear()} HAMBALI SUBASTIAN. ALL RIGHTS RESERVED.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="group flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-all text-[10px] font-bold uppercase tracking-[0.2em] order-1 md:order-2"
          >
            Back to Top
            <span className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-cyan-500 group-hover:bg-cyan-500/10 transition-all">
              <FaChevronUp className="text-xs animate-bounce" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
