export interface Experience {
  company: string;
  role: string;
  period: string;
  location?: string;
  highlights: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Project {
  name: string;
  type: string;
  period: string;
  description: string;
  tech?: string[];
  link?: string;
  github?: string;
}

export interface ResumeData {
  personal: {
    name: string;
    role: string;
    email: string;
    phone: string;
    location: string;
    links: {
      github?: string;
      linkedin?: string;
      leetcode?: string;
    }
  };
  summary: string;
  experience: Experience[];
  skills: SkillCategory[];
  projects: Project[];
}