import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram, Twitter } from "lucide-react";
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
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-custom mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-secondary-custom max-w-2xl mx-auto">
            Ready to bring your next project to life? I'd love to hear about your ideas and explore how we can collaborate.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-primary-custom" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-secondary-custom hover:text-primary-custom">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="w-5 h-5 text-primary-custom" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Phone</p>
                    <a href={`tel:${contactInfo.phone}`} className="text-secondary-custom hover:text-primary-custom">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-primary-custom" />
                  </div>
                  <div>
                    <p className="font-medium text-slate-800">Location</p>
                    <p className="text-secondary-custom">{contactInfo.location}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-6">Connect With Me</h3>
              <div className="flex space-x-4">
                <a 
                  href={contactInfo.social.linkedin} 
                  className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-primary-custom hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href={contactInfo.social.github} 
                  className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-primary-custom hover:text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href={contactInfo.social.instagram} 
                  className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-primary-custom hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href={contactInfo.social.twitter} 
                  className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center hover:bg-primary-custom hover:text-white transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-500 to-amber-500 p-6 rounded-xl text-white">
              <h4 className="font-semibold text-lg mb-2">Available for New Projects</h4>
              <p className="text-blue-100 mb-4">
                I'm currently accepting new projects and collaborations. Whether you need design, development, 
                or creative writing services, let's discuss how I can help bring your vision to life.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/20 text-blue-100 text-sm rounded-full">UI/UX Projects</span>
                <span className="px-3 py-1 bg-white/20 text-blue-100 text-sm rounded-full">Frontend Development</span>
                <span className="px-3 py-1 bg-white/20 text-blue-100 text-sm rounded-full">Script Writing</span>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-slate-800 mb-2">
                    First Name
                  </label>
                  <Input
                    id="first-name"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-slate-800 mb-2">
                    Last Name
                  </label>
                  <Input
                    id="last-name"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-800 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="project-type" className="block text-sm font-medium text-slate-800 mb-2">
                  Project Type
                </label>
                <Select value={formData.projectType} onValueChange={(value) => handleInputChange('projectType', value)}>
                  <SelectTrigger className="w-full">
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
                <label htmlFor="budget" className="block text-sm font-medium text-slate-800 mb-2">
                  Budget Range
                </label>
                <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                  <SelectTrigger className="w-full">
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
                <label htmlFor="message" className="block text-sm font-medium text-slate-800 mb-2">
                  Project Details
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={4}
                  placeholder="Tell me about your project, goals, and timeline..."
                  className="w-full"
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-primary-custom text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
