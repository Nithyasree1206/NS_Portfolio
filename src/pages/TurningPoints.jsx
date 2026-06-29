import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const TimelineItem = ({ imageSrc, title, subtitle, isLeft }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <div className={`timeline-item ${isLeft ? 'left' : 'right'} ${isVisible ? 'visible' : ''}`} ref={ref}>
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <div className="timeline-text">
          <h3 className="timeline-title">{title}</h3>
          {subtitle && <p className="timeline-subtitle">{subtitle}</p>}
        </div>
        <div className="tp-image-card">
          <img src={imageSrc} alt={title} className="tp-img" />
        </div>
      </div>
    </div>
  );
};

const TurningPoints = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const milestones = [
    {
      imageSrc: "/turning-points/image1.png",
      title: "Memorable Moments",
      subtitle: "Milestones that shaped my coding journey"
    },
    {
      imageSrc: "/turning-points/image2.png",
      title: "Learning & Growing",
      subtitle: "Giving back to the community"
    },
    {
      imageSrc: "/turning-points/image4.png",
      title: "Winning Moments",
      subtitle: "Hard Work. Teamwork. Triumph."
    },
    {
      imageSrc: "/turning-points/image3.png",
      title: "Volunteer Work",
      subtitle: "Beach Cleaning & environmental care"
    }
  ];

  return (
    <section id="turning-points" className="container" ref={ref}>
      <span className={`section-label fade-in ${isVisible ? 'visible' : ''}`}>Milestones</span>
      <h2 className={`section-title fade-in ${isVisible ? 'visible' : ''}`}>Turning Points ⭐</h2>
      
      <div className={`fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
        <p className="about-text" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', marginBottom: '4rem' }}>
          Here are some of the most memorable milestones and turning points in my journey so far.
        </p>
        
        <div className="timeline-container">
          <div className="timeline-line"></div>
          {milestones.map((milestone, index) => (
            <TimelineItem 
              key={index}
              imageSrc={milestone.imageSrc}
              title={milestone.title}
              subtitle={milestone.subtitle}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TurningPoints;
