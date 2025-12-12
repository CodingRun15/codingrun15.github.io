import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Matches scroll-padding-top to avoid header overlap
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[999] w-[90%] max-w-xl">
      <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 rounded-full px-6 py-3 shadow-xl flex items-center justify-between">
        <span className="font-bold text-lg tracking-tight text-zinc-900 dark:text-white">HK.</span>
        
        <div className="flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <a 
            href="#about" 
            onClick={(e) => scrollToSection(e, 'about')}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            About
          </a>
          <a 
            href="#experience" 
            onClick={(e) => scrollToSection(e, 'experience')}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Experience
          </a>
          <a 
            href="#projects" 
            onClick={(e) => scrollToSection(e, 'projects')}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Projects
          </a>
        </div>

        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full text-zinc-600 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
};