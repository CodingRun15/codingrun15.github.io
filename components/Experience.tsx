import React from 'react';
import { RESUME_DATA } from '../constants';
import { FadeInView, ParallaxSection } from './ui/ParallaxSection';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <FadeInView>
          <h2 className="text-4xl md:text-6xl font-bold mb-20 text-center text-zinc-900 dark:text-zinc-100">Work Experience</h2>
        </FadeInView>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-zinc-300 before:to-transparent dark:before:via-zinc-700">
          {RESUME_DATA.experience.map((job, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              {/* Timeline Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-zinc-950 bg-zinc-300 dark:bg-zinc-700 group-hover:bg-primary dark:group-hover:bg-primary transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-lg z-10">
                <Briefcase size={16} className="text-zinc-500 dark:text-zinc-300 group-hover:text-white" />
              </div>

              {/* Card */}
              <ParallaxSection 
                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] md:order-1"
                speed={15} // Slight parallax on the cards themselves
              >
                <div className="p-6 md:p-8 bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <h3 className="font-bold text-xl text-zinc-900 dark:text-white">{job.role}</h3>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                      <Calendar size={12} /> {job.period}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-lg font-medium text-zinc-700 dark:text-zinc-300">{job.company}</span>
                    {job.location && (
                      <span className="text-sm text-zinc-500 flex items-center gap-1">
                        <MapPin size={12} /> {job.location}
                      </span>
                    )}
                  </div>

                  <ul className="space-y-3">
                    {job.highlights.map((point, idx) => (
                      <li key={idx} className="flex gap-3 text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </ParallaxSection>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};