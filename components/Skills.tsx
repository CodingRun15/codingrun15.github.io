import React from 'react';
import { RESUME_DATA } from '../constants';
import { ParallaxText } from './ui/ParallaxSection';

// Map skill names to devicon class names
const getIconClass = (skill: string) => {
  const map: Record<string, string> = {
    "React": "devicon-react-original",
    "Next.js": "devicon-nextjs-original",
    "TypeScript": "devicon-typescript-plain",
    "Vue.js": "devicon-vuejs-plain",
    "Tailwind CSS": "devicon-tailwindcss-plain",
    "Framer Motion": "devicon-framermotion-original", // Fallback might be needed if not in version
    "Node.js": "devicon-nodejs-plain",
    "Go": "devicon-go-original-wordmark",
    "Express": "devicon-express-original",
    "PostgreSQL": "devicon-postgresql-plain",
    "MongoDB": "devicon-mongodb-plain",
    "Docker": "devicon-docker-plain",
    "AWS": "devicon-amazonwebservices-original-wordmark",
    "Google Cloud": "devicon-googlecloud-plain",
    "Git": "devicon-git-plain",
    "Redis": "devicon-redis-plain",
    "Graphql": "devicon-graphql-plain",
  };
  return map[skill] || "devicon-devicon-plain"; // Default icon
};

export const Skills: React.FC = () => {
  const allSkills = RESUME_DATA.skills.flatMap(s => s.skills);
  const firstRow = allSkills.slice(0, Math.ceil(allSkills.length / 2));
  const secondRow = allSkills.slice(Math.ceil(allSkills.length / 2));

  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
      <div className="mb-16 px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Arsenal</h2>
        <p className="text-zinc-500 dark:text-zinc-400">The tools I use to craft digital experiences.</p>
      </div>

      <div className="flex flex-col gap-10 rotate-1">
         {/* Row 1 */}
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee flex gap-8 whitespace-nowrap py-4">
            {[...firstRow, ...firstRow, ...firstRow].map((skill, i) => (
              <div key={i} className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 hover:border-primary/50 transition-colors">
                <i className={`${getIconClass(skill)} text-3xl text-zinc-700 dark:text-zinc-200`}></i>
                <span className="text-lg font-bold text-zinc-700 dark:text-zinc-200">{skill}</span>
              </div>
            ))}
          </div>
          {/* Duplicate for seamless loop - CSS animation handles this better than framer sometimes for simple marquees, 
              but let's stick to standard CSS animation class usage here for infinite scroll */}
          <style>{`
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes marquee-reverse {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
            .animate-marquee {
              animation: marquee 40s linear infinite;
            }
            .animate-marquee-reverse {
              animation: marquee-reverse 40s linear infinite;
            }
            .group:hover .animate-marquee, .group:hover .animate-marquee-reverse {
              animation-play-state: paused;
            }
          `}</style>
        </div>

        {/* Row 2 */}
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee-reverse flex gap-8 whitespace-nowrap py-4">
            {[...secondRow, ...secondRow, ...secondRow].map((skill, i) => (
              <div key={i} className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-zinc-200 dark:border-zinc-800 hover:border-primary/50 transition-colors">
                <i className={`${getIconClass(skill)} text-3xl text-zinc-700 dark:text-zinc-200`}></i>
                <span className="text-lg font-bold text-zinc-700 dark:text-zinc-200">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};