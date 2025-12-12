import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { RESUME_DATA } from './constants';
import { motion, useScroll, useSpring } from 'framer-motion';
import { FadeInView } from './components/ui/ParallaxSection';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check local storage or system preference
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen selection:bg-primary/30 bg-light dark:bg-dark">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

      <main className="relative">
        <section id="about">
          <Hero />
        </section>

        {/* About Summary */}
        <section className="py-20 px-6 bg-zinc-50 dark:bg-zinc-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <FadeInView>
              <h2 className="text-3xl font-bold mb-8 text-zinc-800 dark:text-zinc-100">About Me</h2>
              <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {RESUME_DATA.summary}
              </p>
            </FadeInView>
          </div>
        </section>

        <section id="experience">
          <Experience />
        </section>

        <Skills />

        <section id="projects">
          <Projects />
        </section>

        {/* Footer */}
        <footer className="py-12 text-center text-zinc-500 dark:text-zinc-500 text-sm bg-zinc-50 dark:bg-black">
          <p>© {new Date().getFullYear()} {RESUME_DATA.personal.name}. Built with React & Tailwind.</p>
        </footer>
      </main>
    </div>
  );
}