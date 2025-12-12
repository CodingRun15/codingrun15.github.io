import React from 'react';
import { RESUME_DATA } from '../constants';
import { FadeInView, ParallaxSection } from './ui/ParallaxSection';
import { ArrowUpRight, Github } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeInView>
          <h2 className="text-4xl md:text-6xl font-bold mb-20 text-center text-zinc-900 dark:text-zinc-100">Featured Projects</h2>
        </FadeInView>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RESUME_DATA.projects.map((project, index) => (
            <FadeInView key={index} delay={index * 0.1}>
              <ParallaxSection speed={index % 2 === 0 ? 0 : 20} className="h-full">
                <div className="group relative bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 h-full flex flex-col hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300">
                  
                  {/* Decorative Header */}
                  <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-500" />
                  
                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold mb-1 text-zinc-900 dark:text-white">{project.name}</h3>
                        <p className="text-sm font-medium text-primary">{project.type}</p>
                      </div>
                      <span className="text-xs text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">
                        {project.period}
                      </span>
                    </div>

                    <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech?.map((tech, idx) => (
                        <span key={idx} className="text-xs font-semibold px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 mt-auto">
                      <a href={project.link || "#"} className="flex-1 flex items-center justify-center gap-2 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl font-medium group-hover:scale-[1.02] transition-transform">
                        View Project <ArrowUpRight size={18} />
                      </a>
                      <a href={project.github || "#"} className="p-3 border border-zinc-200 dark:border-zinc-700 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors text-zinc-700 dark:text-zinc-300">
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </ParallaxSection>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
};