import React, { useEffect, useState } from 'react';
import sparkLogo from "../assets/spark.png";
import approtechLogo from "../assets/approtech.png";
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Experience = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const experiences = [
    {
      id: 1,
      role: "Front End Developer",
      company: "Spark Solution",
      duration: "April 5, 2025",
      logo: sparkLogo,
      description:
        "Developed responsive and modern user interfaces using HTML, CSS, and JavaScript. Focused on clean UI design and improving user experience."
    },
    {
      id: 2,
      role: "Intern",
      company: "Approtech",
      duration: "2025",
      logo: approtechLogo,
      description:
        "Worked on real-world projects and gained hands-on development experience while learning industry practices."
    }
  ];

  return (
    <section className="container" ref={ref}>
      
      <span className={`section-label fade-in ${isVisible ? 'visible' : ''}`}>Career</span>
      <h2 className={`section-title fade-in ${isVisible ? 'visible' : ''}`}>Experience</h2>

      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`experience-card fade-in ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            <div className="exp-header">
              <img src={exp.logo} alt={exp.company} className="exp-logo" />
              <div>
                <h3>{exp.role}</h3>
                <h4>{exp.company} · {exp.duration}</h4>
              </div>
            </div>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;