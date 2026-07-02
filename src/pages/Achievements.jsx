import React, { useState } from "react";
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Achievements = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [lightbox, setLightbox] = useState(null);

  const achievements = [
    {
      id: 1,
      title: "🏆 Winner – ASTRANOVA'26 UXPLORE",
      org: "St. Joseph College of Engineering, Sriperumbudur",
      desc: "Secured winner position in a competitive UI/UX innovation event.",
      certImage: "./certificates/joseph.png"
    },
    {
      id: 2,
      title: "🎓 Infosys Certification",
      org: "Infosys",
      desc: "Successfully completed professional certification program.",
      certImage: "./certificates/ifosys.png"
    },
    {
      id: 3,
      title: "☁️ AWS Cloud Badges",
      org: "Amazon Web Services",
      desc: "Earned badges demonstrating cloud computing knowledge.",
      certImage: "./certificates/AWS.png"
    },
    {
      id: 4,
      title: "🤖 Be10x AI Tools Workshop",
      org: "Be10x",
      desc: "Completed training on modern AI tools and productivity techniques.",
      certImage: "./certificates/Be10x.png"
    },
    {
      id: 5,
      title: "📊 IBM Datathon Participation",
      org: "IBM",
      desc: "Participated in a data-driven hackathon focused on analytics.",
      certImage: "./certificates/IBM.png"
    },
    {
      id: 6,
      title: "🤖 Spidy Bot Hackathon",
      org: "Sairam Engineering College",
      desc: "Worked on innovative robotics/tech solutions in a hackathon.",
      certImage: "./certificates/spideybot.png"
    },
    {
      id: 8,
      title: "📚 Coursera Certification – DBMS",
      org: "Coursera",
      desc: "Completed course on Database Management Systems.",
      certImage: "./certificates/DBMS.png"
    },
    {
      id: 9,
      title: "💼 Approtech Internship Certification",
      org: "Approtech",
      desc: "Successfully completed internship program.",
      certImage: "./certificates/Appro.png"
    },
    {
      id: 10,
      title: "🎓 ErrorMakesClever (EMC) Certificate",
      org: "ErrorMakesClever",
      desc: "Successfully completed certification.",
      certImage: "./certificates/emc.png"
    },
    {
      id: 11,
      title: "🌟 Spark Certificate of Internship",
      org: "Spark",
      desc: "Completed internship program and received certification.",
      certImage: "./certificates/spark.png"
    },
    {
      id: 12,
      title: "🏅 Render Blind UXPLORE Certificate",
      org: "Sairam Institutions",
      desc: "Participated and excelled in the Render Blind event during UXPLORE.",
      certImage: "./certificates/RenderBlind.png"
    }
  ];

  return (
    <section className="container" ref={ref}>
      
      <span className={`section-label fade-in ${isVisible ? 'visible' : ''}`}>Recognition</span>
      <h2 className={`section-title fade-in ${isVisible ? 'visible' : ''}`}>
        Achievements & Certifications
      </h2>

      <div className="achievements-grid">
        {achievements.map((item, index) => (
          <div
            key={item.id}
            className={`achievement-card fade-in ${isVisible ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 0.08}s` }}
          >
            {/* Certificate Image */}
            {item.certImage && (
              <div 
                className="cert-image-wrap"
                onClick={() => setLightbox(item.certImage)}
              >
                <img 
                  src={item.certImage} 
                  alt={`${item.title} certificate`} 
                  className="cert-image"
                  loading="lazy"
                />
                <div className="cert-overlay">
                  <span>🔍 View</span>
                </div>
              </div>
            )}

            <h3>{item.title}</h3>
            <h4>{item.org}</h4>
            <p>{item.desc}</p>

            {item.certImage && (
              <button 
                className="cert-view-btn"
                onClick={() => setLightbox(item.certImage)}
              >
                📜 View Certificate
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
            <img src={lightbox} alt="Certificate" className="lightbox-img" />
          </div>
        </div>
      )}

      {/* Instructions for adding certificates */}
      <p className={`cert-instructions fade-in ${isVisible ? 'visible' : ''}`}>
        {/* To add certificate images: place them in public/certificates/ folder 
            and update the certImage field above with the path like "/certificates/filename.jpg" */}
      </p>
    </section>
  );
};

export default Achievements;