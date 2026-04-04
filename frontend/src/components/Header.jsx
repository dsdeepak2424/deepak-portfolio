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
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="text-2xl font-bold text-gray-900 tracking-tight">
            Deepak Sunil
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold transition-colors hover:text-gray-900 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-gray-900 after:transition-all after:duration-300 ${
                  isActive(link.path) ? 'text-gray-900 after:w-full' : 'text-gray-600 after:w-0 hover:after:w-full'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild size="lg" className="shadow-md hover:shadow-lg">
              <Link to="/projects#contact">Contact Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-gray-100">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-base font-semibold transition-colors ${
                  isActive(link.path) ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full shadow-md" size="lg">
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