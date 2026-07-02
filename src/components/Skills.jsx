import useIntersectionObserver from "../hooks/useIntersectionObserver";

const Skills = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        {
          icon: "💻",
          name: "C",
          tools: "Core logic, data structures & algorithms",
        },
        {
          icon: "🐍",
          name: "Python",
          tools: "AI/ML, automation & backend services",
        },
        {
          icon: "☕",
          name: "Java",
          tools: "Enterprise architecture & OOP principles",
        },
        {
          icon: "⚡",
          name: "JavaScript",
          tools: "Full-stack development & interactive UIs",
        },
        {
          icon: "🗄️",
          name: "SQL",
          tools: "Relational database design & optimization",
        },
      ],
    },

    {
      title: "Frontend Development",
      skills: [
        {
          icon: "🌐",
          name: "HTML5",
          tools: "Semantic markup & accessibility",
        },
        {
          icon: "🎨",
          name: "CSS3",
          tools: "Responsive layouts & animations",
        },
        {
          icon: "⚛️",
          name: "React.js",
          tools: "Component-based UI development",
        },
        {
          icon: "▲",
          name: "Next.js",
          tools: "React framework",
        },
        {
          icon: "🌀",
          name: "Tailwind CSS",
          tools: "Utility-first styling",
        },
        {
          icon: "🚀",
          name: "Vite",
          tools: "Fast development & builds",
        },
        {
          icon: "✨",
          name: "Framer Motion",
          tools: "Smooth UI animations",
        },
        {
          icon: "📱",
          name: "Responsive Design",
          tools: "Mobile-first web design",
        },
      ],
    },

    {
      title: "Backend Development",
      skills: [
        {
          icon: "🌐",
          name: "Flask",
          tools: "REST API development",
        },
        {
          icon: "🔌",
          name: "API Integration",
          tools: "Third-party services",
        },
        {
          icon: "💻",
          name: "MERN Stack",
          tools: "MongoDB, Express, React & Node.js",
        },
      ],
    },

    {
      title: "Artificial Intelligence",
      skills: [
        {
          icon: "🤖",
          name: "AI Chatbot Development",
          tools: "Conversational AI applications",
        },
        {
          icon: "📷",
          name: "OpenCV",
          tools: "Computer Vision",
        },
        {
          icon: "🧠",
          name: "DeepFace",
          tools: "Face Recognition",
        },
      ],
    },

    {
      title: "Design & Tools",
      skills: [
        {
          icon: "📐",
          name: "Figma",
          tools: "UI/UX Design & Prototyping",
        },
        {
          icon: "🖼️",
          name: "Canva",
          tools: "Graphic Design",
        },
        {
          icon: "🐱‍💻",
          name: "Git & GitHub",
          tools: "Version Control",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="container" ref={ref}>
      <div className="skills-section">
        <span
          className={`section-label fade-in ${isVisible ? "visible" : ""
            }`}
        >
          Expertise
        </span>

        <h2
          className={`section-title fade-in ${isVisible ? "visible" : ""
            }`}
        >
          Tech Stack
        </h2>

        {skillCategories.map((category, categoryIndex) => (
          <div
            key={category.title}
            className={`fade-in ${isVisible ? "visible" : ""}`}
            style={{
              marginBottom: "60px",
              transitionDelay: `${categoryIndex * 0.2}s`,
            }}
          >
            <h3 className="skill-category-title">
              {category.title}
            </h3>

            <div className="skills-grid">
              {category.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`skill-card fade-in ${isVisible ? "visible" : ""
                    }`}
                  style={{
                    transitionDelay: `${categoryIndex * 0.15 + index * 0.08
                      }s`,
                  }}
                >
                  <div className="skill-icon">
                    <span className="skill-dot skill-dot-1"></span>
                    <span className="skill-dot skill-dot-2"></span>
                    <span className="skill-dot skill-dot-3"></span>
                    {skill.icon}
                  </div>

                  <h4>{skill.name}</h4>
                  <p>{skill.tools}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;