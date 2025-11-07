import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero({ onScrollToWork, theme, toggleTheme }) {
  const blobRef = useRef(null);

  useEffect(() => {
    const handleMove = (e) => {
      const blob = blobRef.current;
      if (!blob) return;
      const x = e.clientX - 150;
      const y = e.clientY - 150;
      blob.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-white/90 dark:from-neutral-950/80 dark:via-neutral-950/30 dark:to-neutral-950/90" />

      {/* Floating cursor-following blob */}
      <div ref={blobRef} className="pointer-events-none absolute h-72 w-72 rounded-full bg-gradient-to-tr from-blue-500/30 to-cyan-400/30 blur-3xl mix-blend-soft-light transition-transform duration-200" />

      <div className="relative mx-auto flex max-w-7xl flex-col px-6 pt-28 sm:pt-36">
        <div className="mb-8 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-3 py-1 text-xs font-medium backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/60">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span>Available for 2025 collaborations</span>
          </div>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="rounded-full border border-neutral-200 bg-white/70 px-4 py-2 text-xs font-semibold backdrop-blur-sm transition hover:bg-white dark:border-neutral-800 dark:bg-neutral-900/60 dark:hover:bg-neutral-900"
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'} Mode
          </button>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl"
        >
          👋 Hi, I’m <span className="bg-gradient-to-br from-blue-600 to-cyan-500 bg-clip-text text-transparent">Avery Lee</span>, a UI/UX Designer crafting human-centered digital experiences.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mt-5 max-w-xl text-base text-neutral-600 dark:text-neutral-300"
        >
          3 years turning complexity into clarity — blending strategy, systems, and delightful visual polish.
        </motion.p>

        <div className="mt-10 flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            onClick={onScrollToWork}
            className="group inline-flex items-center gap-2 rounded-full bg-neutral-900 px-6 py-3 text-white shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5)] transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100"
          >
            View My Work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </motion.button>

          <a href="#contact" className="inline-flex items-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-800 backdrop-blur-sm transition hover:bg-neutral-100 dark:border-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-900">Let’s Collaborate</a>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-3 opacity-90 sm:grid-cols-4">
          {['Figma', 'Notion', 'FigJam', 'Maze'].map((tool) => (
            <div key={tool} className="rounded-xl border border-neutral-200 bg-white/70 px-4 py-3 text-sm backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/60">
              {tool}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
