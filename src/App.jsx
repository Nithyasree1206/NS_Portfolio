import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './pages/Experience';
import TurningPoints from './pages/TurningPoints';
import Achievements from './pages/Achievements';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import InteractiveCursorGlow from './components/InteractiveCursorGlow';
import ScrollToTop from './components/ScrollToTop';

import './index.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Background3D />
      <InteractiveCursorGlow />
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <div id="experience">
          <Experience />
        </div>
        <TurningPoints />
        <div id="awards">
          <Achievements />
        </div>
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
