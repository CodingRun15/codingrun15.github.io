import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RESUME_DATA } from '../constants';
import { Download, Mail, Github, Linkedin, Code } from 'lucide-react';

export const Hero: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 200]);

  return (
    <section ref={targetRef} className="h-screen relative flex items-center justify-center overflow-hidden bg-light dark:bg-dark">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen filter animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen filter animate-pulse delay-700" />
      </div>

      <motion.div 
        style={{ opacity, scale, y }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-medium text-primary mb-4 tracking-wider uppercase">
            Hello, I'm
          </h2>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-zinc-900 dark:text-white tracking-tight">
            {RESUME_DATA.personal.name}
          </h1>
          <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            {RESUME_DATA.personal.role}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href={`mailto:${RESUME_DATA.personal.email}`}
              className="flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-medium hover:scale-105 transition-transform"
            >
              <Mail size={18} />
              Contact Me
            </a>
            <button className="flex items-center gap-2 px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-full font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
              <Download size={18} />
              Resume
            </button>
          </div>

          <div className="flex justify-center gap-6 text-zinc-500 dark:text-zinc-400">
             {/* Mock Links based on resume text */}
             <a href="#" className="hover:text-primary transition-colors"><Github size={24} /></a>
             <a href="#" className="hover:text-primary transition-colors"><Linkedin size={24} /></a>
             <a href="#" className="hover:text-primary transition-colors"><Code size={24} /></a> 
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-zinc-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-zinc-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};