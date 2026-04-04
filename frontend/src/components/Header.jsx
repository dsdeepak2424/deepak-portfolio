import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-bold text-white tracking-tight">
            Deepak Sunil
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors hover:text-white relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-gradient-to-r after:from-blue-500 after:to-purple-600 after:transition-all after:duration-300 ${
                  isActive(link.path) ? 'text-white after:w-full' : 'text-gray-400 after:w-0 hover:after:w-full'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/50 transition-all">
              <Link to="/projects#contact">Contact Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-base font-semibold transition-colors ${
                  isActive(link.path) ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg" size="lg">
              <Link to="/projects#contact" onClick={() => setIsMenuOpen(false)}>
                Contact Now
              </Link>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
