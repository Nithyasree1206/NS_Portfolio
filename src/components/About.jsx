import useIntersectionObserver from '../hooks/useIntersectionObserver';

const About = () => {
  const [ref, isVisible] = useIntersectionObserver();



  return (
    <section id="about" className="container" ref={ref}>
      <div className="about-content">
        <span className={`section-label fade-in ${isVisible ? 'visible' : ''}`}></span>
        <h2 className={`section-title fade-in ${isVisible ? 'visible' : ''}`}>Hi, I'm Nithyasree S</h2>
        <br></br>
        <div className={`about-text fade-in ${isVisible ? 'visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          <p>I'm a Full Stack Developer specializing in the MERN Stack, with a passion for building modern, scalable web applications that solve real-world problems. I enjoy turning ideas into products through clean code, intuitive user experiences, and thoughtful system design.</p>
          <p>Currently, I'm expanding my skills in AI-powered applications, exploring technologies like Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and modern cloud deployment. My goal is to create applications that are not only functional but also intelligent and user-focused.</p>
          <p>I believe the best way to learn is by building. Every project I create helps me improve my problem-solving, software architecture, and development practices.</p>
          <p>Outside of coding, I enjoy exploring new technologies, improving my development workflow, and continuously learning to become a better engineer.</p>
        </div>
      </div>
    </section>
  );
};

export default About;