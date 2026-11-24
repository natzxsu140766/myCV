import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Goals } from './components/Goals';
import { Contact } from './components/Contact';
import { CursorGlow } from './components/Shared';

function App() {
  return (
    <div className="relative min-h-screen bg-navy-950">
      <LoadingScreen />
      <CursorGlow />
      <Navbar />
      <main className="relative z-20">
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Skills />
        <Education />
        <Goals />
        <Contact />
      </main>
    </div>
  );
}

export default App;
