import { useState } from "react";
import { ExternalLink, Github, FileText, Film, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'design' | 'development' | 'writing'>('all');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case 'design':
        return 'bg-blue-100 text-blue-600';
      case 'development':
        return 'bg-green-100 text-green-700';
      case 'writing':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'design':
        return <Smartphone className="w-4 h-4" />;
      case 'development':
        return <Github className="w-4 h-4" />;
      case 'writing':
        return <Film className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-custom mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-secondary-custom max-w-2xl mx-auto">
            A showcase of my work across design, development, and creative writing
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === 'all' 
                ? 'bg-primary-custom text-white' 
                : 'bg-white text-secondary-custom hover:text-primary-custom border border-gray-200'
            }`}
          >
            All Projects
          </Button>
          <Button
            onClick={() => setActiveFilter('design')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === 'design' 
                ? 'bg-primary-custom text-white' 
                : 'bg-white text-secondary-custom hover:text-primary-custom border border-gray-200'
            }`}
          >
            UI/UX Design
          </Button>
          <Button
            onClick={() => setActiveFilter('development')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === 'development' 
                ? 'bg-primary-custom text-white' 
                : 'bg-white text-secondary-custom hover:text-primary-custom border border-gray-200'
            }`}
          >
            Development
          </Button>
          <Button
            onClick={() => setActiveFilter('writing')}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeFilter === 'writing' 
                ? 'bg-primary-custom text-white' 
                : 'bg-white text-secondary-custom hover:text-primary-custom border border-gray-200'
            }`}
          >
            Scriptwriting
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover" 
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${getCategoryBadge(project.category)}`}>
                    {project.category === 'design' ? 'UI/UX Design' : 
                     project.category === 'development' ? 'Development' : 'Scriptwriting'}
                  </span>
                  <div className="flex space-x-2">
                    <ExternalLink className="w-4 h-4 text-secondary-custom cursor-pointer hover:text-primary-custom" />
                    {getCategoryIcon(project.category)}
                  </div>
                </div>
                <h3 className="font-semibold text-lg text-slate-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-secondary-custom text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center text-primary-custom hover:text-blue-700 font-medium"
          >
            View All Projects 
            <ExternalLink className="w-4 h-4 ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
