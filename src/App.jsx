import { useEffect, useRef, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  const [theme, setTheme] = useState('light');
  const workRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
    }
  }, [theme]);

  const onScrollToWork = () => {
    workRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleTheme = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  return (
    <div className="bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-neutral-100">
      <Hero onScrollToWork={onScrollToWork} theme={theme} toggleTheme={toggleTheme} />
      <About />
      <div ref={workRef}>
        <Work />
      </div>
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
