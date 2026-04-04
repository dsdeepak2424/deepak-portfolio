import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Deepak Sunil Portfolio</h3>
            <p className="text-sm text-gray-400">
              Web Designer | Front-End Developer | Logo Designer
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-gray-400" />
                <span className="text-sm">8973155551</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-gray-400" />
                <span className="text-sm">dsdeepak2424@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-gray-400" />
                <span className="text-sm">India</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/" className="block text-sm hover:text-white transition-colors">
                Home
              </a>
              <a href="/about" className="block text-sm hover:text-white transition-colors">
                About
              </a>
              <a href="/projects" className="block text-sm hover:text-white transition-colors">
                Projects
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Deepak Sunil. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;