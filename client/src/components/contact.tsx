import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Twitter, Send, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { contactInfo } from "@/data/portfolio";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      projectType: '',
      budget: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="fade-in-up">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-8 h-8 text-navy mr-3" />
              <h2 className="text-4xl sm:text-5xl font-bold text-navy">
                Let's Work Together
              </h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to bring your next project to life? I'd love to hear about your ideas and explore how we can collaborate.
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="slide-in-left">
              <h3 className="text-2xl font-bold text-navy mb-8">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center group">
                  <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mr-6 group-hover:bg-navy-light transition-colors duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-lg">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-gray-600 hover:text-navy text-lg transition-colors duration-300">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mr-6 group-hover:bg-navy-light transition-colors duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-lg">Phone</p>
                    <a href={`tel:${contactInfo.phone}`} className="text-gray-600 hover:text-navy text-lg transition-colors duration-300">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="w-16 h-16 bg-navy rounded-2xl flex items-center justify-center mr-6 group-hover:bg-navy-light transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy text-lg">Location</p>
                    <p className="text-gray-600 text-lg">{contactInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="slide-in-left" style={{animationDelay: '0.2s'}}>
              <h3 className="text-2xl font-bold text-navy mb-8">Connect With Me</h3>
              <div className="flex space-x-4">
                <a 
                  href={contactInfo.social.linkedin} 
                  className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center hover:bg-navy hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl pulse-hover border border-gray-200"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href={contactInfo.social.github} 
                  className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center hover:bg-navy hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl pulse-hover border border-gray-200"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href={contactInfo.social.instagram} 
                  className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center hover:bg-navy hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl pulse-hover border border-gray-200"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href={contactInfo.social.twitter} 
                  className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center hover:bg-navy hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl pulse-hover border border-gray-200"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div className="gradient-bg p-8 rounded-2xl text-white slide-in-left" style={{animationDelay: '0.4s'}}>
              <h4 className="font-bold text-2xl mb-4">Available for New Projects</h4>
              <p className="text-blue-100 mb-6 leading-relaxed text-lg">
                I'm currently accepting new projects and collaborations. Whether you need design, development, 
                or creative writing services, let's discuss how I can help bring your vision to life.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/20 text-blue-100 text-sm rounded-full font-medium">UI/UX Projects</span>
                <span className="px-4 py-2 bg-white/20 text-blue-100 text-sm rounded-full font-medium">Frontend Development</span>
                <span className="px-4 py-2 bg-white/20 text-blue-100 text-sm rounded-full font-medium">Script Writing</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-gray-100 slide-in-right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-semibold text-navy mb-3">
                    First Name
                  </label>
                  <Input
                    id="first-name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-navy transition-colors duration-300"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-semibold text-navy mb-3">
                    Last Name
                  </label>
                  <Input
                    id="last-name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-navy transition-colors duration-300"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-navy mb-3">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-navy transition-colors duration-300"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="project-type" className="block text-sm font-semibold text-navy mb-3">
                  Project Type
                </label>
                <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                  <SelectTrigger className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-navy">
                    <SelectValue placeholder="Select a project type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="design">UI/UX Design</SelectItem>
                    <SelectItem value="development">Frontend Development</SelectItem>
                    <SelectItem value="writing">Scriptwriting</SelectItem>
                    <SelectItem value="consultation">Creative Consultation</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="budget" className="block text-sm font-semibold text-navy mb-3">
                  Budget Range
                </label>
                <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                  <SelectTrigger className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-navy">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                    <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                    <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                    <SelectItem value="50k+">$50,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-navy mb-3">
                  Project Details
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={5}
                  placeholder="Tell me about your project, goals, and timeline..."
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:border-navy transition-colors duration-300 resize-none"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-navy text-white py-4 px-6 rounded-xl hover:bg-navy-light transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl pulse-hover flex items-center justify-center group"
              >
                Send Message
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
