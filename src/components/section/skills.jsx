import { useState } from "react";
import SectionHeading from "../shared/SectionHeading";
import { expertiseCards, skillCategories, skillsData } from "../../constants";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = activeCategory === "all"
    ? skillsData
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" aria-label="Skills and Expertise" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-blue-900/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-cyan-900/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading 
          badge="Specialization"
          title="My Expertise"
          subtitle="I bridge the gap between complex software engineering, dynamic web development, and data-driven intelligence."
        />

        {/* Expertise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {expertiseCards.map((card, idx) => (
            <div
              key={card.title}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className={`group relative p-10 bg-gray-900/30 backdrop-blur-md border border-gray-800 rounded-[2.5rem] overflow-hidden transition-all duration-500 hover:border-cyan-500/50 hover:-translate-y-3 shadow-2xl ${card.glow}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className={`w-20 h-20 mb-8 flex items-center justify-center rounded-2xl bg-gray-800/50 border border-gray-700 transition-all duration-500 group-hover:scale-110 group-hover:border-cyan-500/50 shadow-inner shadow-cyan-500/10`}>
                  <card.icon className="text-4xl text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-orbitron tracking-wide">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed font-light">
                  {card.desc}
                </p>
              </div>

              {/* Decorative side text */}
              <span className="absolute -right-4 -bottom-2 text-6xl font-black text-white/5 font-orbitron select-none">
                {card.role}
              </span>
            </div>
          ))}
        </div>

        {/* Tech Stack Header */}
        <div className="text-center mb-16">
          <h3 data-aos="fade-up" className="text-3xl font-bold text-white mb-10 font-orbitron tracking-wider">Tech Stack</h3>
          
          <div 
            data-aos="fade-up"
            className="flex flex-wrap justify-center gap-3 bg-gray-900/40 p-2 rounded-full border border-gray-800/50 backdrop-blur-xl w-fit mx-auto"
          >
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat.id 
                  ? "bg-cyan-600 text-white shadow-[0_0_20px_rgba(8,145,178,0.4)]" 
                  : "text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50"
                }`}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto min-h-[300px]">
          {filteredSkills.map((skill, idx) => (
            <div
              key={skill.name}
              data-aos="zoom-in"
              data-aos-delay={idx % 5 * 50}
              className="group relative bg-gray-900/20 hover:bg-gray-800/40 border border-gray-800/50 hover:border-cyan-500/30 p-8 rounded-3xl flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:shadow-xl shadow-cyan-500/5"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-gray-800/30 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                <skill.icon className="text-4xl text-gray-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </div>
              <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors uppercase tracking-widest">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
