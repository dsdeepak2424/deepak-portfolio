import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0f] border-t border-white/10 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Deepak Sunil Portfolio</h3>
            <p className="text-base text-gray-400">
              Web Designer | Front-End Developer | Logo Designer
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <Phone size={20} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                <span className="text-base group-hover:text-white transition-colors">8973155551</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Mail size={20} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                <span className="text-base group-hover:text-white transition-colors">dsdeepak2424@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <MapPin size={20} className="text-blue-400 group-hover:text-blue-300 transition-colors" />
                <span className="text-base group-hover:text-white transition-colors">India</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <div className="space-y-3">
              <a href="/" className="block text-base hover:text-white transition-colors hover:translate-x-1 transform duration-200">
                Home
              </a>
              <a href="/about" className="block text-base hover:text-white transition-colors hover:translate-x-1 transform duration-200">
                About
              </a>
              <a href="/projects" className="block text-base hover:text-white transition-colors hover:translate-x-1 transform duration-200">
                Projects
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-base text-gray-400">
            © {new Date().getFullYear()} Deepak Sunil. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
