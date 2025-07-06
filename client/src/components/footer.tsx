import { Linkedin, Github, Instagram, Mail, Heart } from "lucide-react";
import { contactInfo } from "@/data/portfolio";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="gradient-bg text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-48 h-48 bg-white/5 rounded-full mix-blend-multiply filter blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-white/5 rounded-full mix-blend-multiply filter blur-2xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="fade-in-up">
            <h3 className="font-bold text-2xl mb-6">Ahana Kulkarni</h3>
            <p className="text-blue-100 mb-6 leading-relaxed text-lg">
              Creative technologist passionate about designing meaningful digital experiences that bridge innovation and storytelling.
            </p>
            <div className="flex space-x-4">
              <a 
                href={contactInfo.social.linkedin} 
                className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white hover:text-navy transition-all duration-300 pulse-hover"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={contactInfo.social.github} 
                className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white hover:text-navy transition-all duration-300 pulse-hover"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href={contactInfo.social.instagram} 
                className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white hover:text-navy transition-all duration-300 pulse-hover"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={`mailto:${contactInfo.email}`} 
                className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white hover:text-navy transition-all duration-300 pulse-hover"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="fade-in-up" style={{animationDelay: '0.2s'}}>
            <h4 className="font-bold text-xl mb-6">Services</h4>
            <ul className="space-y-3 text-blue-100">
              <li>
                <span className="hover:text-white transition-colors cursor-pointer font-medium flex items-center group">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                  UI/UX Design
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer font-medium flex items-center group">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                  Frontend Development
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer font-medium flex items-center group">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                  Scriptwriting
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer font-medium flex items-center group">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                  Creative Consultation
                </span>
              </li>
            </ul>
          </div>
          
          <div className="fade-in-up" style={{animationDelay: '0.4s'}}>
            <h4 className="font-bold text-xl mb-6">Quick Links</h4>
            <ul className="space-y-3 text-blue-100">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-white transition-colors font-medium flex items-center group"
                >
                  <div className="w-2 h-2 bg-white rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="hover:text-white transition-colors font-medium flex items-center group"
                >
                  <div className="w-2 h-2 bg-white rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-white transition-colors font-medium flex items-center group"
                >
                  <div className="w-2 h-2 bg-white rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                  Contact
                </button>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer font-medium flex items-center group">
                  <div className="w-2 h-2 bg-white rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                  Resume
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <div className="fade-in-up" style={{animationDelay: '0.6s'}}>
            <p className="text-blue-100 text-lg flex items-center justify-center">
              &copy; 2025 Ahana Kulkarni. Made with 
              <Heart className="w-5 h-5 mx-2 text-red-400 animate-pulse" />
              and lots of coffee.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
