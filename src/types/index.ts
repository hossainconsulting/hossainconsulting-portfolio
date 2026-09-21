export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Skill {
  category: string;
  items: string[];
  proficiency: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface NavLink {
  label: string;
  href: string;
}
