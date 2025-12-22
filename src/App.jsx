import { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  // Lift modal state to App level to control nav bar visibility when modal is open
  // This prevents z-index conflicts and maintains proper focus management
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="App">
      <Nav isModalOpen={isModalOpen} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects onModalStateChange={setIsModalOpen} />
        <Contact />
      </main>
    </div>
  );
}

export default App;
