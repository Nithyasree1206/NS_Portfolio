import useIntersectionObserver from '../hooks/useIntersectionObserver';
import { projects } from '../data/projects';

const Portfolio = () => {
  const [ref, isVisible] = useIntersectionObserver();

  // Show top 3 projects on main view
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="portfolio" className="container" ref={ref}>
      <span className={`section-label fade-in ${isVisible ? 'visible' : ''}`}>Selected Work</span>
      <h2 className={`section-title fade-in ${isVisible ? 'visible' : ''}`}>Selected projects</h2>

      <div className="portfolio-grid">
        {projects.map((project, index) => {
          const projectLink = project.link && project.link !== '#'
            ? project.link
            : 'https://github.com/Nithyasree1206/';

          return (
            <a
              key={project.id}
              href={projectLink}
              target="_blank"
              rel="noreferrer noopener"
              className={`project-card fade-in ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              <div className="project-card-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-card-content">
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="project-tag">{tag}</span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-card-footer">
                  <span>{project.tech}</span>
                  <span className="project-link-text">View project ↗</span>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
