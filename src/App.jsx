import { useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

/**
 * Main App Component
 * Portfolio website structure with navigation and all sections
 */
function App() {
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
