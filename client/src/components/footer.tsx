import { Linkedin, Github, Instagram, Mail } from "lucide-react";
import { contactInfo } from "@/data/portfolio";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-xl mb-4">Ahana Kulkarni</h3>
            <p className="text-slate-400 mb-4">
              Creative technologist passionate about designing meaningful digital experiences.
            </p>
            <div className="flex space-x-4">
              <a 
                href={contactInfo.social.linkedin} 
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={contactInfo.social.github} 
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href={contactInfo.social.instagram} 
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href={`mailto:${contactInfo.email}`} 
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-slate-400">
              <li><span className="hover:text-white transition-colors cursor-pointer">UI/UX Design</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Frontend Development</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Scriptwriting</span></li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Creative Consultation</span></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="hover:text-white transition-colors"
                >
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
              <li><span className="hover:text-white transition-colors cursor-pointer">Resume</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 Ahana Kulkarni. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
