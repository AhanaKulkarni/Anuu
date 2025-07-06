import { Palette, Code, PenTool, Lightbulb } from "lucide-react";
import { skills } from "@/data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="fade-in-up">
            <h2 className="text-4xl sm:text-5xl font-bold text-navy mb-6">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate about creating meaningful digital experiences that bridge technology and storytelling
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="slide-in-left">
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm a creative technologist with a unique blend of design sensibility, technical expertise, and storytelling prowess. 
                My work spans across digital product design, web development, and creative writing, allowing me to approach 
                projects from multiple perspectives.
              </p>
            </div>
            
            <div className="slide-in-left" style={{animationDelay: '0.2s'}}>
              <p className="text-lg text-gray-700 leading-relaxed">
                With a background in both visual design and code, I create user experiences that are not only beautiful and 
                functional but also tell compelling stories. Whether it's designing an intuitive interface, building a 
                responsive web application, or crafting a narrative script, I believe in the power of thoughtful, 
                user-centered design.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 pulse-hover slide-in-left" style={{animationDelay: '0.4s'}}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mr-4">
                    <Palette className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-navy text-lg">Design</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  {skills.design.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-navy rounded-full mr-3"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 pulse-hover slide-in-left" style={{animationDelay: '0.6s'}}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mr-4">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-navy text-lg">Development</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  {skills.development.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-navy rounded-full mr-3"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 pulse-hover slide-in-left" style={{animationDelay: '0.8s'}}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mr-4">
                    <PenTool className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-navy text-lg">Writing</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  {skills.writing.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-navy rounded-full mr-3"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 pulse-hover slide-in-left" style={{animationDelay: '1.0s'}}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mr-4">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-navy text-lg">Creative</h3>
                </div>
                <ul className="text-sm text-gray-600 space-y-2">
                  {skills.creative.map((skill) => (
                    <li key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-navy rounded-full mr-3"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Creative workspace with design tools and laptop" 
                className="rounded-2xl shadow-2xl w-full h-auto pulse-hover hover:shadow-3xl transition-all duration-300" 
              />
            </div>
            
            <div className="gradient-bg p-8 rounded-2xl text-white slide-in-right" style={{animationDelay: '0.4s'}}>
              <h3 className="font-bold text-2xl mb-4">My Approach</h3>
              <p className="text-blue-100 leading-relaxed text-lg">
                I believe great digital products start with understanding people. Through research, empathy, 
                and iterative design, I create solutions that not only meet business goals but truly 
                resonate with users.
              </p>
              
              <div className="mt-6 flex space-x-4">
                <div className="flex-1 text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="font-bold text-2xl">50+</div>
                  <div className="text-sm text-blue-100">Projects</div>
                </div>
                <div className="flex-1 text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="font-bold text-2xl">3+</div>
                  <div className="text-sm text-blue-100">Years</div>
                </div>
                <div className="flex-1 text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="font-bold text-2xl">100%</div>
                  <div className="text-sm text-blue-100">Passion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
