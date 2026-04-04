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
    <div>
      {/* Projects Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              A showcase of my recent work - modern, responsive, and client-focused websites
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button
                    asChild
                    className="w-full sm:w-auto"
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
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Have a project in mind? Let's work together to create something amazing
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send an Enquiry</CardTitle>
                  <CardDescription>
                    Fill out the form and I'll get back to you via WhatsApp
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project..."
                        rows={4}
                        className="mt-2"
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
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
                  className="w-full"
                >
                  <Mail className="mr-2" size={18} />
                  Or Contact via Email
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-gray-900 flex-shrink-0">
                        <Phone size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          Phone / WhatsApp
                        </h3>
                        <a
                          href="tel:8973155551"
                          className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          8973155551
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-gray-900 flex-shrink-0">
                        <Mail size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          Email
                        </h3>
                        <a
                          href="mailto:dsdeepak2424@gmail.com"
                          className="text-gray-600 hover:text-gray-900 transition-colors break-all"
                        >
                          dsdeepak2424@gmail.com
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-gray-900 flex-shrink-0">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          Location
                        </h3>
                        <p className="text-gray-600">India</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gray-50">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Let's Build Something Great
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
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