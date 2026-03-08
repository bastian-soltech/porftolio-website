import { FaExternalLinkAlt } from "react-icons/fa";
import SectionHeading from "../shared/SectionHeading";
import { socialLinks } from "../../constants";

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact Information" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/5 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading 
          badge="Inquiry"
          title="Let's Connect"
          subtitle="Whether you have a question, a project idea, or just want to say hi, I'm always open to new opportunities."
        />

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialLinks.map((info, idx) => (
              <a
                key={info.name}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="group relative p-10 rounded-[2.5rem] bg-gray-900/30 border border-gray-800 hover:border-cyan-500/30 transition-all duration-500 flex flex-col items-center text-center overflow-hidden hover:-translate-y-2 shadow-xl"
              >
                {/* Subtle Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="w-20 h-20 rounded-2xl bg-gray-800/50 flex items-center justify-center mb-8 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500 relative z-10 shadow-lg group-hover:shadow-cyan-500/20">
                  <info.icon size={32} />
                </div>

                <div className="relative z-10">
                  <h3 className="text-xs text-gray-500 uppercase tracking-[0.3em] mb-2 font-bold">{info.name}</h3>
                  <p className="text-white font-medium mb-6 text-sm opacity-80 group-hover:opacity-100 transition-opacity">
                    {info.name === "Email" ? "subastianhambali@gmail.com" : info.name === "Github" ? "@hambali-020608" : "@tyan.dev"}
                  </p>

                  <div className="inline-flex items-center gap-2 text-xs text-cyan-400 font-bold uppercase tracking-widest group-hover:gap-4 transition-all">
                    Reach Out <FaExternalLinkAlt className="text-[10px]" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-20 text-center bg-gray-900/20 border border-gray-800/50 p-12 rounded-[3rem] backdrop-blur-sm"
          >
            <h3 className="text-2xl font-bold text-white mb-6 font-orbitron">Interested in collaborating?</h3>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed font-light">
              I'm currently looking for new opportunities and my inbox is always open. 
              Let's build something amazing together!
            </p>
            <div className="mt-10">
              <a 
                href="mailto:subastianhambali@gmail.com"
                className="inline-block px-10 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl shadow-cyan-500/20 uppercase tracking-widest text-sm"
              >
                Send an Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
