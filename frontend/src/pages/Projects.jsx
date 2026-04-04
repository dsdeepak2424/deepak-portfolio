import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { ExternalLink, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Projects = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    // Check if URL has #contact hash and scroll to contact section
    if (window.location.hash === '#contact') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        setTimeout(() => {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  const projects = [
    {
      title: 'Gym Website',
      description: 'A modern and energetic website design created for a gym/fitness brand with clean sections and strong call-to-action layout.',
      link: 'https://v0-nik-gym-website.vercel.app/',
      tags: ['Web Design', 'Landing Page', 'Fitness']
    },
    {
      title: 'Hotel Website',
      description: 'A professional and elegant hotel website designed to present accommodation details, services, and guest experience in a clean and attractive way.',
      link: 'https://nirmala-grand.vercel.app',
      tags: ['Web Design', 'Hospitality', 'Professional']
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields',
        variant: 'destructive'
      });
      return;
    }

    // Format WhatsApp message
    const message = `*New Enquiry from Portfolio*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:* ${formData.message || 'No message provided'}`;
    const whatsappUrl = `https://wa.me/918973155551?text=${message}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    toast({
      title: 'Success!',
      description: 'Opening WhatsApp to send your enquiry',
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleEmailContact = () => {
    window.location.href = 'mailto:dsdeepak2424@gmail.com';
  };

  return (
    <div className="bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1e] to-[#0a0a0f]">
      {/* Projects Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6 leading-tight">
              Featured Projects
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A showcase of my recent work - modern, responsive, and client-focused websites
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
                <CardHeader>
                  <CardTitle className="text-2xl mb-3 text-white">{project.title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-4 py-2 bg-white/10 text-gray-300 text-sm font-medium rounded-full border border-white/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    asChild
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/50 transition-all"
                    size="lg"
                  >
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                      <ExternalLink className="ml-2" size={18} />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Let's work together to create something amazing
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Send an Enquiry</CardTitle>
                  <CardDescription className="text-base text-gray-400">
                    Fill out the form and I'll get back to you via WhatsApp
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-base font-semibold text-white">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="mt-2 h-12 text-base bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-base font-semibold text-white">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="mt-2 h-12 text-base bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-base font-semibold text-white">Message (Optional)</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project..."
                        rows={4}
                        className="mt-2 text-base bg-white/5 border-white/20 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-blue-500"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/50 transition-all" size="lg">
                      <Send className="mr-2" size={18} />
                      Send Enquiry via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="mt-6">
                <Button
                  onClick={handleEmailContact}
                  variant="outline"
                  size="lg"
                  className="w-full border-2 border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm shadow-md hover:shadow-lg transition-all"
                >
                  <Mail className="mr-2" size={18} />
                  Or Contact via Email
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <div className="space-y-6">
                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
                  <CardContent className="pt-8">
                    <div className="flex items-start space-x-4">
                      <div className="text-blue-400 flex-shrink-0">
                        <Phone size={28} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Phone / WhatsApp
                        </h3>
                        <a
                          href="tel:8973155551"
                          className="text-gray-300 hover:text-white transition-colors text-lg"
                        >
                          8973155551
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
                  <CardContent className="pt-8">
                    <div className="flex items-start space-x-4">
                      <div className="text-blue-400 flex-shrink-0">
                        <Mail size={28} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Email
                        </h3>
                        <a
                          href="mailto:dsdeepak2424@gmail.com"
                          className="text-gray-300 hover:text-white transition-colors break-all text-lg"
                        >
                          dsdeepak2424@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
                  <CardContent className="pt-8">
                    <div className="flex items-start space-x-4">
                      <div className="text-blue-400 flex-shrink-0">
                        <MapPin size={28} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          Location
                        </h3>
                        <p className="text-gray-300 text-lg">India</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-white/20 backdrop-blur-sm">
                  <CardContent className="pt-8">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Let's Build Something Great
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-base">
                      Whether you need a new website, a landing page redesign, or a fresh logo, 
                      I'm here to help bring your vision to life. Let's discuss your project and 
                      create something exceptional together.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
