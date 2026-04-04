import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Code, Palette, Layout, Sparkles, CheckCircle2, Zap, Users, Clock } from 'lucide-react';

const About = () => {
  const services = [
    {
      icon: <Palette size={40} />,
      title: 'Web Design',
      description: 'I create modern, visually appealing website designs that captivate your audience and reflect your brand identity. Every design is crafted with attention to detail, ensuring a perfect balance between aesthetics and functionality.'
    },
    {
      icon: <Layout size={40} />,
      title: 'Landing Page Design',
      description: 'Specialized in designing high-converting landing pages that drive action. From compelling headlines to strategic call-to-actions, I create pages that turn visitors into customers with clean layouts and persuasive design elements.'
    },
    {
      icon: <Code size={40} />,
      title: 'Front-End Development',
      description: 'I bring designs to life with clean, efficient code. Building responsive, fast-loading websites using modern technologies and best practices. Your website will work flawlessly across all devices and browsers.'
    },
    {
      icon: <Sparkles size={40} />,
      title: 'Logo Design',
      description: 'Creating memorable brand identities through custom logo design. I help businesses establish a strong visual presence with logos that are unique, professional, and perfectly represent their brand values and personality.'
    }
  ];

  const reasons = [
    {
      icon: <Zap size={24} />,
      title: 'Modern & Responsive Design',
      description: 'Every project is built mobile-first and fully responsive'
    },
    {
      icon: <CheckCircle2 size={24} />,
      title: 'Clean & User-Friendly Layouts',
      description: 'Intuitive designs that provide excellent user experience'
    },
    {
      icon: <Users size={24} />,
      title: 'Client-Focused Approach',
      description: 'Your vision and goals are at the center of every decision'
    },
    {
      icon: <Clock size={24} />,
      title: 'Fast Communication',
      description: 'Quick responses and regular updates throughout the project'
    }
  ];

  const skills = [
    'HTML', 'CSS', 'JavaScript', 'Responsive Design',
    'Front-End Development', 'Landing Page Design',
    'Web Design', 'Logo Design', 'UI Layout Design',
    'Basic Website Styling', 'User Experience', 'Modern Web Standards'
  ];

  return (
    <div>
      {/* About Me Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              About Me
            </h1>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                I am <span className="font-semibold text-gray-900">Deepak Sunil</span>, a passionate web designer and front-end developer 
                focused on creating modern, user-friendly, responsive websites and landing pages. With a keen eye for 
                design and a solid foundation in development, I bridge the gap between beautiful aesthetics and 
                functional technology.
              </p>
              <p>
                My journey in web design and development has equipped me with the skills to craft digital experiences 
                that not only look stunning but also deliver results. I also design logos that help brands build a 
                strong visual identity, ensuring consistency across all digital touchpoints.
              </p>
              <p>
                I aim to deliver clean design, smooth user experience, and client-focused solutions. Every project 
                is an opportunity to create something exceptional, and I'm committed to exceeding expectations through 
                attention to detail, creativity, and technical excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Why Choose Me
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Delivering excellence through expertise, dedication, and client-first approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <Card key={index} className="border-l-4 border-l-gray-900 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="pt-8">
                  <div className="flex items-start space-x-4">
                    <div className="text-gray-900 flex-shrink-0">
                      {reason.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-l-4 border-l-gray-900 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="pt-8">
                <div className="flex items-start space-x-4">
                  <div className="text-gray-900 flex-shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Attention to Detail
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Every pixel matters - meticulous craftsmanship in every project
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-gray-900 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardContent className="pt-8">
                <div className="flex items-start space-x-4">
                  <div className="text-gray-900 flex-shrink-0">
                    <Layout size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Landing Page Expertise
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      Specialized knowledge in creating pages that convert
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Comprehensive solutions for your digital presence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-gray-200">
                <CardHeader>
                  <div className="text-gray-900 mb-6">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Skills & Technologies
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Tools and technologies I work with to deliver exceptional results
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="px-5 py-3 text-base font-medium hover:shadow-md transition-all duration-300 transform hover:-translate-y-0.5">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;