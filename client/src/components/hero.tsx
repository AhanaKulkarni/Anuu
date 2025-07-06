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
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-amber-500 flex items-center justify-center text-white text-4xl font-bold">
              AK
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-primary-custom">Creative</span>{" "}
            <span className="text-secondary-custom">Technologist</span>
          </h1>
          
          <p className="text-xl text-secondary-custom mb-8 max-w-3xl mx-auto leading-relaxed">
            Multi-disciplinary creative specializing in{" "}
            <span className="text-primary-custom font-medium">UI/UX Design</span>,{" "}
            <span className="text-primary-custom font-medium">Frontend Development</span>, and{" "}
            <span className="text-primary-custom font-medium">Scriptwriting</span>.
            Crafting digital experiences that blend creativity with technical excellence.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {specialties.map((specialty) => (
              <span 
                key={specialty}
                className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium"
              >
                {specialty}
              </span>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-primary-custom text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              View Projects
            </Button>
            <Button 
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-primary-custom text-primary-custom px-8 py-3 rounded-lg hover:bg-primary-custom hover:text-white transition-colors font-medium"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
