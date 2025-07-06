import { useState } from "react";
import { ExternalLink, Github, FileText, Film, Smartphone, Sparkles } from "lucide-react";
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
        return 'bg-blue-50 text-blue-600 border border-blue-200';
      case 'development':
        return 'bg-green-50 text-green-700 border border-green-200';
      case 'writing':
        return 'bg-purple-50 text-purple-700 border border-purple-200';
      default:
        return 'bg-gray-50 text-gray-600 border border-gray-200';
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
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-50 rounded-full mix-blend-multiply filter blur-2xl opacity-50"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="fade-in-up">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-navy mr-3" />
              <h2 className="text-4xl sm:text-5xl font-bold text-navy">
                Featured Projects
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A showcase of my work across design, development, and creative writing
            </p>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Button
            onClick={() => setActiveFilter('all')}
            className={`px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 pulse-hover ${
              activeFilter === 'all' 
                ? 'bg-navy text-white shadow-lg' 
                : 'bg-white text-gray-600 hover:text-navy border-2 border-gray-200 hover:border-navy'
            }`}
          >
            All Projects
          </Button>
          <Button
            onClick={() => setActiveFilter('design')}
            className={`px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 pulse-hover ${
              activeFilter === 'design' 
                ? 'bg-navy text-white shadow-lg' 
                : 'bg-white text-gray-600 hover:text-navy border-2 border-gray-200 hover:border-navy'
            }`}
          >
            UI/UX Design
          </Button>
          <Button
            onClick={() => setActiveFilter('development')}
            className={`px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 pulse-hover ${
              activeFilter === 'development' 
                ? 'bg-navy text-white shadow-lg' 
                : 'bg-white text-gray-600 hover:text-navy border-2 border-gray-200 hover:border-navy'
            }`}
          >
            Development
          </Button>
          <Button
            onClick={() => setActiveFilter('writing')}
            className={`px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 pulse-hover ${
              activeFilter === 'writing' 
                ? 'bg-navy text-white shadow-lg' 
                : 'bg-white text-gray-600 hover:text-navy border-2 border-gray-200 hover:border-navy'
            }`}
          >
            Scriptwriting
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden group pulse-hover fade-in-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${getCategoryBadge(project.category)}`}>
                    {project.category === 'design' ? 'UI/UX Design' : 
                     project.category === 'development' ? 'Development' : 'Scriptwriting'}
                  </span>
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-navy hover:text-white transition-colors duration-300 cursor-pointer">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                    <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-navy hover:text-white transition-colors duration-300 cursor-pointer">
                      {getCategoryIcon(project.category)}
                    </div>
                  </div>
                </div>
                
                <h3 className="font-bold text-xl text-navy mb-3 group-hover:text-navy-light transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs rounded-lg font-medium border border-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center text-navy hover:text-navy-light font-semibold text-lg group transition-all duration-300"
          >
            View All Projects 
            <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
