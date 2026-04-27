import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Code, Palette, Layout, Sparkles } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Palette size={32} />,
      title: 'Web Design',
      description: 'Creating beautiful, modern, and user-friendly website designs'
    },
    {
      icon: <Layout size={32} />,
      title: 'Landing Pages',
      description: 'High-converting landing pages that drive results'
    },
    {
      icon: <Code size={32} />,
      title: 'Front-End Development',
      description: 'Responsive and performant web applications'
    },
    {
      icon: <Sparkles size={32} />,
      title: 'Logo Design',
      description: 'Unique brand identities that stand out'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1e] to-[#0a0a0f]">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center relative overflow-hidden">
        {/* Gradient orbs background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Deepak Sunil
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-6 font-medium">
              Web Designer | Front-End Developer | UI/UX Designer
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-8 leading-snug">
              Creating Modern, Responsive Websites That Attract Clients
            </h2>
            <p className="text-lg text-gray-400 mb-10 leading-relaxed max-w-3xl mx-auto">
              I design and develop stunning, user-friendly websites and landing pages for businesses and brands. 
              From concept to completion, I deliver clean design, smooth user experience, and client-focused solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-base bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all px-8 py-6">
                <Link to="/projects">View Projects</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base border-2 border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm shadow-md hover:shadow-lg transform hover:scale-105 transition-all px-8 py-6">
                <Link to="/projects#contact">Contact Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight">
              Building Digital Experiences That Matter
            </h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              With a passion for creating impactful digital experiences, I specialize in transforming ideas 
              into visually stunning and highly functional websites. My approach combines modern design 
              principles with technical excellence to deliver solutions that not only look great but also 
              perform exceptionally.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Whether you need a compelling landing page, a complete website redesign, or a unique brand 
              identity, I'm here to bring your vision to life with precision and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              What I Do
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Comprehensive design and development services to help your business thrive online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
                <CardContent className="pt-8">
                  <div className="text-blue-400 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all">
              <Link to="/about">Learn More About My Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
