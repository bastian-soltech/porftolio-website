import { FaRocket, FaEnvelope, FaMapMarkerAlt, FaFileDownload } from "react-icons/fa";
import SectionHeading from "../shared/SectionHeading";
import { stats } from "../../constants";

export default function About() {
  return (
    <section id="about" aria-label="About Me" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-cyan-900/5 to-transparent pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading 
          badge="Biography"
          title="About Me"
          subtitle="A deeper look into my journey as a technologist and my passion for building innovative solutions."
        />

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left Column: Image Area */}
          <div
            data-aos="fade-right"
            className="w-full lg:w-5/12 relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto lg:mx-0">
              {/* Decorative Geometric Shapes */}
              <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-3xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-blue-500/30 rounded-br-3xl"></div>
              
              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-[3rem] overflow-hidden border-2 border-gray-800 shadow-2xl group">
                <img
                  src="/my2.jpeg"
                  alt="Hambali Subastian"
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Floating Status Badge */}
              <div
                data-aos="zoom-in"
                data-aos-delay="300"
                className="absolute -bottom-4 -right-4 bg-gray-900/90 backdrop-blur-md border border-gray-700 p-4 rounded-2xl shadow-2xl flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-400">
                  <FaRocket className="animate-bounce" />
                </div>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Status</p>
                  <p className="text-xs font-bold text-white uppercase">Open to Innovation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div
            data-aos="fade-left"
            className="w-full lg:w-7/12 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-white font-orbitron">
                Driven by <span className="text-cyan-400">Innovation</span> & <span className="text-blue-500">Excellence</span>
              </h3>
              <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
            </div>

            <p className="text-gray-400 leading-relaxed text-lg font-light">
              I'm <span className="text-white font-semibold">Hambali Subastian</span>, a passionate technologist based in Indonesia. 
              With a strong foundation in <span className="text-cyan-400 font-medium">Software Engineering</span>, I bridge the gap between creative problem-solving and technical execution.
            </p>

            <p className="text-gray-400 leading-relaxed font-light">
              My journey is fueled by a relentless curiosity about how things work. Whether I'm building scalable <span className="text-white">fullstack applications</span>, architecting <span className="text-white">software systems</span>, or extracting patterns from <span className="text-white">complex datasets</span>, I strive for clean code and impactful results.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 py-8 border-y border-gray-800/50">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center lg:text-left">
                  <h4 className="text-3xl md:text-4xl font-black text-white font-orbitron mb-1">{stat.value}</h4>
                  <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-[0.2em] font-bold">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Action Buttons & Contact Info */}
            <div className="flex flex-col sm:flex-row items-center gap-8 pt-4">
              <div className="flex flex-col gap-4 w-full sm:w-auto">
                <div className="flex items-center gap-4 text-gray-400 hover:text-cyan-400 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                    <FaEnvelope />
                  </div>
                  <span className="text-sm font-medium">subastianhambali@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-gray-400 group">
                  <div className="w-10 h-10 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center">
                    <FaMapMarkerAlt />
                  </div>
                  <span className="text-sm font-medium">Indonesia (GMT+7)</span>
                </div>
              </div>
              
              <div className="h-full hidden sm:block w-px bg-gray-800 mx-4"></div>

              {/* <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-gray-900 border border-gray-800 text-white rounded-2xl hover:border-cyan-500/50 transition-all font-bold tracking-widest text-sm">
                <FaFileDownload className="text-cyan-400" />
                DOWNLOAD CV
              </button> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
