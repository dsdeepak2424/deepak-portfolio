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
    <div>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-left max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Deepak Sunil
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-6 font-medium">
              Web Designer | Front-End Developer | Logo Designer
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-800 mb-8 leading-snug">
              Creating Modern, Responsive Websites That Attract Clients
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              I design and develop stunning, user-friendly websites and landing pages for businesses and brands. 
              From concept to completion, I deliver clean design, smooth user experience, and client-focused solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="text-base shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
                <Link to="/projects">View Projects</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base border-2 hover:bg-gray-50 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                <Link to="/projects#contact">Contact Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 leading-tight">
              Building Digital Experiences That Matter
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With a passion for creating impactful digital experiences, I specialize in transforming ideas 
              into visually stunning and highly functional websites. My approach combines modern design 
              principles with technical excellence to deliver solutions that not only look great but also 
              perform exceptionally.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you need a compelling landing page, a complete website redesign, or a unique brand 
              identity, I'm here to bring your vision to life with precision and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              What I Do
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Comprehensive design and development services to help your business thrive online
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-gray-200">
                <CardContent className="pt-8">
                  <div className="text-gray-900 mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button asChild size="lg" className="shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
              <Link to="/about">Learn More About My Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;