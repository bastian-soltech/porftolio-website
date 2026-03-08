import { ReactTyped } from "react-typed";
import Hero3D from "../canvas/Hero3D";
import { socialLinks } from "../../constants";

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero Section"
      className="relative min-h-[100svh] flex items-center justify-center px-6 md:px-12 lg:px-24 bg-gray-950 overflow-hidden"
    >
      {/* Background Ambience - More subtle and professional */}
      <div className="absolute top-[-10%] left-[-5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-cyan-900/10 rounded-full blur-[100px] opacity-40 animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-900/10 rounded-full blur-[100px] opacity-40 animate-pulse delay-75 pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(3,7,18,0.9)_100%)] z-0 pointer-events-none"></div>

      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between z-10 w-full max-w-7xl">

        {/* Left Content: Text */}
        <div
          className="w-full md:w-1/2 text-center md:text-left mt-12 md:mt-0 space-y-8"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div className="space-y-4">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-cyan-400 uppercase border border-cyan-500/20 rounded-full bg-cyan-500/5 backdrop-blur-sm mb-4">
              Welcome to my portfolio
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[1.1] font-orbitron tracking-tight">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Hambali
              </span>
            </h1>
          </div>

          <div className="h-16 md:h-12">
            <p className="text-xl md:text-2xl lg:text-3xl font-medium text-gray-300 font-outfit">
              A professional{" "}
              <ReactTyped
                strings={[
                  "Fullstack Developer",
                  "Software Engineer",
                  "Data Analyst",
                ]}
                typeSpeed={50}
                backSpeed={40}
                className="text-cyan-400 font-bold border-b-2 border-cyan-500/30"
                loop
              />
            </p>
          </div>

          <p className="text-lg text-gray-400 max-w-xl mx-auto md:mx-0 leading-relaxed font-light">
            I specialize in crafting high-performance web applications, architecting robust software solutions, and deriving meaningful insights from data.
          </p>

          {/* Social & CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-8 mt-10">
            <a
              href="#projects"
              className="group relative px-10 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-full shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/40 active:scale-95"
            >
              Explore My Work
            </a>

            <nav className="flex items-center gap-6" aria-label="Social Media Links">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className={`text-2xl text-gray-400 transition-all duration-300 ${link.color} hover:scale-125`}
                >
                  <link.icon />
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Right Content: 3D Model */}
        <div
          className="w-full md:w-1/2 flex justify-center md:justify-end relative"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <div className="relative w-full h-[350px] md:h-[500px] lg:h-[600px] xl:h-[700px] cursor-grab active:cursor-grabbing">
            <Hero3D />
            {/* Subtle glow behind model */}
            <div className="absolute inset-0 bg-cyan-500/5 rounded-full blur-[100px] -z-10"></div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#skills"
        aria-label="Scroll to Skills section"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 flex flex-col items-center gap-3 animate-bounce hover:text-cyan-400 transition-colors"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Scroll Down</span>
        <div className="w-[1.5px] h-10 bg-gradient-to-b from-cyan-500 to-transparent"></div>
      </a>
    </section>
  );
}
