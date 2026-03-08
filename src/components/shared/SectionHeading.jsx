import React from 'react';

const SectionHeading = ({ title, subtitle, badge }) => {
  return (
    <div className="text-center mb-16 md:mb-24">
      {badge && (
        <span 
          data-aos="fade-down"
          className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest text-cyan-400 uppercase border border-cyan-500/30 rounded-full bg-cyan-500/5 backdrop-blur-sm"
        >
          {badge}
        </span>
      )}
      <h2 
        data-aos="fade-up"
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 font-orbitron tracking-tight"
      >
        {title.split(' ').map((word, i) => (
          <span key={i} className={i % 2 !== 0 ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500" : ""}>
            {word}{' '}
          </span>
        ))}
      </h2>
      {subtitle && (
        <p 
          data-aos="fade-up"
          data-aos-delay="100"
          className="max-w-2xl mx-auto text-base md:text-lg text-gray-400 leading-relaxed font-light"
        >
          {subtitle}
        </p>
      )}
      <div 
        data-aos="zoom-in"
        data-aos-delay="200"
        className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mt-8 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.4)]"
      />
    </div>
  );
};

export default SectionHeading;
