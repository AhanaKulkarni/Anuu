import { Palette, Code, PenTool, Lightbulb } from "lucide-react";
import { skills } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-custom mb-4">
            About Me
          </h2>
          <p className="text-lg text-secondary-custom max-w-2xl mx-auto">
            Passionate about creating meaningful digital experiences that bridge technology and storytelling
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-secondary-custom leading-relaxed">
              I'm a creative technologist with a unique blend of design sensibility, technical expertise, and storytelling prowess. 
              My work spans across digital product design, web development, and creative writing, allowing me to approach 
              projects from multiple perspectives.
            </p>
            <p className="text-lg text-secondary-custom leading-relaxed">
              With a background in both visual design and code, I create user experiences that are not only beautiful and 
              functional but also tell compelling stories. Whether it's designing an intuitive interface, building a 
              responsive web application, or crafting a narrative script, I believe in the power of thoughtful, 
              user-centered design.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Palette className="w-6 h-6 text-primary-custom mr-3" />
                  <h3 className="font-semibold text-primary-custom">Design</h3>
                </div>
                <ul className="text-sm text-secondary-custom space-y-1">
                  {skills.design.map((skill) => (
                    <li key={skill}>• {skill}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Code className="w-6 h-6 text-primary-custom mr-3" />
                  <h3 className="font-semibold text-primary-custom">Development</h3>
                </div>
                <ul className="text-sm text-secondary-custom space-y-1">
                  {skills.development.map((skill) => (
                    <li key={skill}>• {skill}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <PenTool className="w-6 h-6 text-primary-custom mr-3" />
                  <h3 className="font-semibold text-primary-custom">Writing</h3>
                </div>
                <ul className="text-sm text-secondary-custom space-y-1">
                  {skills.writing.map((skill) => (
                    <li key={skill}>• {skill}</li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Lightbulb className="w-6 h-6 text-primary-custom mr-3" />
                  <h3 className="font-semibold text-primary-custom">Creative</h3>
                </div>
                <ul className="text-sm text-secondary-custom space-y-1">
                  {skills.creative.map((skill) => (
                    <li key={skill}>• {skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <img 
              src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Creative workspace with design tools and laptop" 
              className="rounded-xl shadow-lg w-full h-auto" 
            />
            
            <div className="bg-gradient-to-r from-blue-500 to-amber-500 p-6 rounded-xl text-white">
              <h3 className="font-semibold text-lg mb-2">My Approach</h3>
              <p className="text-blue-100">
                I believe great digital products start with understanding people. Through research, empathy, 
                and iterative design, I create solutions that not only meet business goals but truly 
                resonate with users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
