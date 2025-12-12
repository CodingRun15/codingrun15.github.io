import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionTemplate, MotionValue } from 'framer-motion';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  children, 
  className = "",
  speed = 100 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Create a more noticeable parallax effect
  const y = useTransform(scrollYProgress, [0, 1], [-speed, speed]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y }} className="w-full h-full">
        {children}
      </motion.div>
    </div>
  );
};

export const FadeInView: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ 
  children, 
  delay = 0,
  className = ""
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ParallaxText: React.FC<{ children: React.ReactNode; baseVelocity: number; className?: string }> = ({ 
    children, 
    baseVelocity = 100, 
    className 
}) => {
  return (
    <div className={`overflow-hidden flex whitespace-nowrap ${className}`}>
       <motion.div 
         className="flex whitespace-nowrap"
         animate={{ x: [0, -1000] }}
         transition={{ 
           x: {
             repeat: Infinity,
             repeatType: "loop",
             duration: 50,
             ease: "linear",
           }
         }}
       >
         {children}
         {children}
         {children}
         {children}
       </motion.div>
    </div>
  );
};