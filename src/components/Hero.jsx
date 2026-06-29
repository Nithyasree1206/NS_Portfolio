import { useEffect, useState } from 'react';
import profilePic from '../assets/professional-pic.jpg';

const Hero = () => {
  const roles = [
    "Crafting Scalable Web Applications",
    "Turning Ideas into Reality",
    "Code • Design • Innovate",
    "Engineering Seamless User Experiences"
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 15;
      const y = (e.clientY / window.innerHeight - 0.5) * 15;
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const current = roles[index];
    let speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === current.length) {
          setIsDeleting(true);
          speed = 1500;
        }
      } else {
        setText(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setIndex((index + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  // Download CV handler
  const handleDownloadCV = () => {
    // Check if CV file exists in public folder
    const link = document.createElement('a');
    link.href = '/Nithyasree_CV.pdf';
    link.download = 'Nithyasree_S_CV.pdf';
    link.click();
  };

  // Code-overlay typing animation when profile image clicked
  const [showCode, setShowCode] = useState(false);
  const [displayed, setDisplayed] = useState(['']);
  const codeLines = [
    "// personal signature",
    "const name = 'Nithyasree';",
    "const role = 'Creative Developer & Designer';",
    "console.log(`Hi, I'm ${name}`);",
  ];

  useEffect(() => {
    let charIndex = 0;
    let lineIndex = 0;
    let interval = null;

    if (showCode) {
      setDisplayed(Array(codeLines.length).fill(''));
      interval = setInterval(() => {
        const currentLine = codeLines[lineIndex];
        if (!currentLine) return;
        charIndex++;
        setDisplayed((prev) => {
          const copy = [...prev];
          copy[lineIndex] = currentLine.substring(0, charIndex);
          return copy;
        });

        if (charIndex >= currentLine.length) {
          lineIndex++;
          charIndex = 0;
          if (lineIndex >= codeLines.length) {
            clearInterval(interval);
          }
        }
      }, 45);
    }

    return () => clearInterval(interval);
  }, [showCode]);

  const handleImageClick = () => {
    setShowCode((v) => !v);
    if (!showCode) setDisplayed(Array(codeLines.length).fill(''));
  };

  return (
    <section id="home" className="hero container">

      {/* LEFT CONTENT */}
      <div className="hero-content fade-in visible">

        <div className="hero-badge">
          <span className="badge-dot"></span>
          Available for work
        </div>

        <h1 className="hero-title">
          Creative<br/>
          <span className="highlight">Developer</span><br/>
          & Designer
        </h1>

        <p className="hero-subtitle">
          Crafting immersive digital experiences that blend
          motion, aesthetics, and clean engineering.
        </p>

        {/* Typing text */}
        <p className="typing-text">
          {text}<span className="cursor">|</span>
        </p>

        {/* BUTTONS */}
        <div className="hero-cta" style={{ marginTop: '1.5rem' }}>
          <a href="#portfolio" className="btn btn-primary">
            View my work <span className="arrow">↗</span>
          </a>
          <button onClick={handleDownloadCV} className="btn btn-outline" type="button">
            📄 Download CV
          </button>
        </div>

        {/* STATS */}
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-value">2+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">10+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">8.9</span>
            <span className="stat-label">CGPA</span>
          </div>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-graphic">
        <div className="hero-graphic-circle"></div>
        <div className="hero-orbit-ring" aria-hidden="true"></div>

        <div className="image-card" style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          transition: 'transform 0.1s ease-out',
          position: 'relative'
        }}>
          <img 
            src={profilePic}
            alt="Nithyasree Profile"
            className="profile-img"
            onClick={handleImageClick}
            role="button"
          />

          {showCode && (
            <div className="code-overlay" onClick={() => setShowCode(false)}>
              <pre className="code-window" aria-hidden>
                {displayed.map((line, i) => (
                  <code key={i} className="code-line">{line}</code>
                ))}
                <span className="code-cursor">|</span>
              </pre>
            </div>
          )}
        </div>

      </div>

    </section>
  );
};

export default Hero;