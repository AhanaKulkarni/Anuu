export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'design' | 'development' | 'writing';
  image: string;
  technologies: string[];
  links: {
    live?: string;
    github?: string;
    other?: string;
  };
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'Complete UX/UI redesign of a fashion e-commerce platform, focusing on conversion optimization and mobile-first experience.',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    technologies: ['Figma', 'Prototyping', 'User Research'],
    links: {}
  },
  {
    id: '2',
    title: 'Analytics Dashboard',
    description: 'Real-time analytics dashboard built with React and TypeScript, featuring interactive charts and data visualization.',
    category: 'development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    technologies: ['React', 'TypeScript', 'Chart.js'],
    links: {}
  },
  {
    id: '3',
    title: 'Short Film Script',
    description: 'Award-nominated short film script exploring themes of technology and human connection in the digital age.',
    category: 'writing',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    technologies: ['Screenplay', 'Character Development', 'Story Structure'],
    links: {}
  },
  {
    id: '4',
    title: 'Fitness Tracking App',
    description: 'Mobile-first design for a fitness tracking application with focus on gamification and user engagement.',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    technologies: ['Mobile Design', 'Prototyping', 'User Testing'],
    links: {}
  },
  {
    id: '5',
    title: 'Component Library',
    description: 'Reusable React component library with TypeScript, Storybook documentation, and comprehensive testing suite.',
    category: 'development',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    technologies: ['React', 'TypeScript', 'Storybook'],
    links: {}
  },
  {
    id: '6',
    title: 'Tech Documentary',
    description: 'Research and script development for documentary exploring the impact of AI on creative industries.',
    category: 'writing',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500',
    technologies: ['Documentary', 'Research', 'Narrative'],
    links: {}
  }
];

export const skills = {
  design: [
    'User Experience Design',
    'User Interface Design', 
    'Design Systems',
    'Prototyping'
  ],
  development: [
    'React & TypeScript',
    'Frontend Architecture',
    'Responsive Design',
    'Performance Optimization'
  ],
  writing: [
    'Screenplay Writing',
    'Content Strategy',
    'UX Writing',
    'Creative Direction'
  ],
  creative: [
    'Creative Strategy',
    'Brand Development',
    'Visual Storytelling',
    'Project Management'
  ]
};

export const specialties = [
  'UI/UX Design',
  'Frontend Development', 
  'Scriptwriting',
  'Creative Direction'
];

export const contactInfo = {
  email: 'ahana@example.com',
  phone: '+1 (234) 567-8900',
  location: 'San Francisco, CA',
  social: {
    linkedin: 'https://linkedin.com/in/ahana-kulkarni',
    github: 'https://github.com/ahana-kulkarni',
    instagram: 'https://instagram.com/ahana.creates',
    twitter: 'https://twitter.com/ahana_creates'
  }
};
