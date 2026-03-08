import { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionHeading from "../shared/SectionHeading";
import { projects } from "../../constants";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" aria-label="Selected Projects" className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
      <div className="absolute inset-0 hud-grid-bg opacity-[0.03] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeading 
          badge="Portfolio"
          title="Recent Projects"
          subtitle="A collection of my recent works across web development, software engineering, and data analysis."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {visibleProjects.map((project, index) => (
            <article
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative bg-gray-900/40 border border-gray-800 rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-cyan-500/30 hover:-translate-y-2 shadow-2xl"
            >
              {/* Project Image Container */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/20 to-transparent opacity-80 transition-opacity group-hover:opacity-60"></div>
                
                {/* ID Badge */}
                <div className="absolute top-6 left-6 px-4 py-1 bg-gray-950/80 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold text-cyan-400 font-orbitron tracking-widest">
                  #{project.id}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8 md:p-10">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-2xl md:text-3xl font-bold text-white font-orbitron group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub repository`}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <FaGithub size={24}/>
                    </a>
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      aria-label={`${project.title} Live Demo`}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <FaExternalLinkAlt size={22}/>
                    </a>
                  </div>
                </div>
                
                <p className="text-gray-400 leading-relaxed mb-8 font-light line-clamp-3">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-[11px] font-semibold rounded-md border border-cyan-500/20 uppercase tracking-wider"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Subtle hover line */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500 group-hover:w-full"></div>
            </article>
          ))}
        </div>

        {/* Action Button */}
        {projects.length > 3 && (
          <div className="mt-20 text-center" data-aos="fade-up">
            <button
              onClick={() => setShowAll(!showAll)}
              className="group relative px-10 py-4 bg-transparent border-2 border-cyan-500/30 text-cyan-400 font-bold tracking-[0.2em] text-sm hover:border-cyan-500 transition-all rounded-full active:scale-95"
            >
              <span className="relative z-10">{showAll ? "SHOW LESS" : "EXPLORE ALL PROJECTS"}</span>
              <div className="absolute inset-0 bg-cyan-500/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
