import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  personal: {
    name: "Harsh Kumar",
    role: "Software Engineer (Next.js, React, Node.js)",
    email: "kumar95.harsh@gmail.com",
    phone: "08800242707",
    location: "Noida, IN",
    links: {
      github: "https://github.com",
      leetcode: "https://leetcode.com"
    }
  },
  summary: "Software Engineer with 2+ years of experience building production-grade web systems using React, Next.js, Node.js, and Go. Designed high-performance backend services, including a Go-based PDF rendering microservice achieving an 84% latency reduction. Experienced in authentication, queue-based task orchestration, and scalable SaaS architectures. Strong product mindset with hands-on ownership across frontend and backend.",
  experience: [
    {
      company: "Edvanta Technologies",
      role: "Fullstack Software Developer",
      period: "03/2025 – Present",
      highlights: [
        "Architected a cognitive profiling engine mapping user behavior to quantifiable traits, improving personalization accuracy and assessment reliability.",
        "Designed and deployed a Go-based PDF generation microservice, reducing render latency from ~3s to ~500ms (84% improvement).",
        "Built an internal queueing and throttling system to regulate CPU-intensive workloads, improving throughput and system stability under peak load.",
        "Collaborated on system architecture, data modeling, and performance optimization for production SaaS applications."
      ]
    },
    {
      company: "Edvanta Technologies",
      role: "Junior Software Developer",
      period: "08/2024 – 04/2025",
      highlights: [
        "Contributed to feature planning, database design, and end-to-end product lifecycle development.",
        "Built a node-based visual workflow editor using JointJS for dynamic quest/flow creation.",
        "Implemented authentication and role-based authorization workflows across the application stack."
      ]
    },
    {
      company: "Expobiz IT Solutions Pvt Ltd",
      role: "Full Stack Intern",
      period: "2022 – 2023",
      location: "Chandigarh",
      highlights: [
        "Developed and maintained frontend features using PHP as part of early-career full-time role."
      ]
    }
  ],
  skills: [
    {
      category: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "Framer Motion"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Go", "Express", "PostgreSQL", "MongoDB"]
    },
    {
      category: "DevOps & Tools",
      skills: ["Docker", "AWS", "Google Cloud", "Git", "Redis"]
    }
  ],
  projects: [
    {
      name: "InteriorAI",
      type: "AI Interior Design Platform",
      period: "2025",
      description: "An AI-powered application where users upload room photos to generate interior makeovers. Features include style selection, prop customization, and direct purchase links for generated furniture items from major e-commerce stores.",
      tech: ["Next.js", "Stable Diffusion", "Stripe", "PostgreSQL"],
      link: "#",
      github: "#"
    },
    {
      name: "Goodreads Lite",
      type: "Mobile-First Social Book Tracking",
      period: "2024",
      description: "A pixel-perfect clone of the Goodreads iOS application tailored for the web. Implements complex list virtualization, offline caching, and social features like reading challenges and reviews.",
      tech: ["React Native Web", "Firebase", "Redux"],
      link: "#",
      github: "#"
    },
    {
      name: "Guardian",
      type: "MaaS (Moderation-as-a-Service) tool",
      period: "11/2025 – Present",
      description: "Building the tool to make content healthy with features like profanity detection, regex-based rule checking, hate speech classifier, self-harm classifier, spam detection, number/email/ID extraction, blur sensitive information.",
      tech: ["AI", "Regex", "Image Processing"],
      link: "#",
      github: "#"
    },
    {
      name: "ProfilEd",
      type: "SaaS Tool",
      period: "12/2024 – 10/2025",
      description: "Profiling tool for early career professionals and students to make informed decisions based on cognitive, behavioral and technical skills.",
      tech: ["SaaS", "Analytics", "Cognitive Profiling"],
      link: "#",
      github: "#"
    }
  ]
};