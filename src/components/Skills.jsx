import useIntersectionObserver from '../hooks/useIntersectionObserver';

const Skills = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const skills = [
    { icon: "🌐", name: "HTML5", tools: "Semantic markup & accessibility" },
    { icon: "🎨", name: "CSS3", tools: "Modern layouts & animations" },
    { icon: "⚡", name: "JavaScript ES6", tools: "Interactive web experiences" },
    { icon: "⚛️", name: "React.js", tools: "Component-based UI" },
    { icon: "🚀", name: "Vite", tools: "Blazing fast builds" },
    { icon: "🌀", name: "Tailwind CSS", tools: "Utility-first styling" },
    { icon: "🐍", name: "Python", tools: "Backend automation" },
    { icon: "🌐", name: "Flask", tools: "API development" },
    { icon: "✨", name: "Framer Motion", tools: "Fluid animations" },
    { icon: "🤖", name: "AI Chatbot Development", tools: "Conversational interfaces" },
    { icon: "📷", name: "OpenCV", tools: "Computer vision prototypes" },
    { icon: "🧠", name: "DeepFace", tools: "Face recognition" },
    { icon: "🔌", name: "API Integration", tools: "Third-party services" },
    { icon: "📱", name: "Responsive Design", tools: "Mobile-first layouts" },
    { icon: "🐱‍💻", name: "GitHub", tools: "Version control workflows" },
    { icon: "▲", name: "Next.js", tools: "React framework" },
    { icon: "🗄️", name: "SQL", tools: "Database management" },
    { icon: "🖼️", name: "Canva", tools: "Graphic design" },
    { icon: "📐", name: "Figma", tools: "UI/UX prototyping" },
    { icon: "💻", name: "MERN Stack", tools: "Full-stack development" },
  ];

  return (
    <section id="skills" className="container" ref={ref}>
      <div className="skills-section">
        <span className={`section-label fade-in ${isVisible ? 'visible' : ''}`}>Expertise</span>
        <h2 className={`section-title fade-in ${isVisible ? 'visible' : ''}`}>Core skills</h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`skill-card fade-in ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.08 + 0.1}s` }}
            >
              <div className="skill-icon">
                <span className="skill-dot skill-dot-1" />
                <span className="skill-dot skill-dot-2" />
                <span className="skill-dot skill-dot-3" />
                {skill.icon}
              </div>
              <h4>{skill.name}</h4>
              <p>{skill.tools}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
