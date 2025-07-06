import { Button } from "@/components/ui/button";
import { specialties } from "@/data/portfolio";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-blue-50 to-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-sky-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <div className="fade-in-up">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-navy">Creative</span><br />
                <span className="text-gray-600">Technologist</span>
              </h1>
            </div>
            
            <div className="fade-in-up" style={{animationDelay: '0.2s'}}>
              <p className="text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
                Multi-disciplinary creative specializing in{" "}
                <span className="text-navy font-semibold">UI/UX Design</span>,{" "}
                <span className="text-navy font-semibold">Frontend Development</span>, and{" "}
                <span className="text-navy font-semibold">Scriptwriting</span>.
              </p>
            </div>
            
            <div className="fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
                {specialties.map((specialty, index) => (
                  <span 
                    key={specialty}
                    className="px-4 py-2 bg-navy/10 text-navy rounded-full text-sm font-medium hover:bg-navy hover:text-white transition-all duration-300 pulse-hover"
                    style={{animationDelay: `${0.6 + index * 0.1}s`}}
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="fade-in-up" style={{animationDelay: '0.8s'}}>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Button 
                  onClick={() => scrollToSection('projects')}
                  className="bg-navy text-white px-8 py-4 rounded-xl hover:bg-navy-light transition-all duration-300 font-semibold text-lg pulse-hover shadow-lg hover:shadow-xl"
                >
                  View Projects
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-navy text-navy px-8 py-4 rounded-xl hover:bg-navy hover:text-white transition-all duration-300 font-semibold text-lg pulse-hover"
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
          
          {/* Right content - Floating Image */}
          <div className="relative">
            <div className="slide-in-right">
              <div className="floating relative">
                <img 
  src="/src/assets/profile-photo.png" 
  alt="Ahana Kulkarni - Creative Technologist" 
  className="w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl mx-auto border-8 border-white"
                  />
                
                {/* Floating decorative elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-navy rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg floating" style={{animationDelay: '1s'}}>
                  AK
                </div>
                
                <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-lg floating" style={{animationDelay: '2s'}}></div>
                
                <div className="absolute top-10 -left-8 w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full shadow-lg floating" style={{animationDelay: '3s'}}></div>
              </div>
            </div>
            
            {/* Background geometric shapes */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/4 left-1/4 w-32 h-32 border-4 border-navy/20 rounded-full floating" style={{animationDelay: '1.5s'}}></div>
              <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border-4 border-blue-300/30 rounded-lg floating" style={{animationDelay: '2.5s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
