
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center cursor-pointer">
              <div className="relative w-[120px] sm:w-[155px] h-[48px] sm:h-[64px] rounded-[10px] overflow-hidden">
                <Image 
                  src="/assets/logo/logo.png"
                  alt="Infraseed Engineering Logo" 
                  fill
                  style={{ objectFit: 'contain' }}
                  className="transition-transform duration-300 hover:scale-105"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className={`text-sm lg:text-base font-medium transition-all duration-300 cursor-pointer hover:scale-105 ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`text-sm lg:text-base font-medium transition-all duration-300 cursor-pointer hover:scale-105 ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`text-sm lg:text-base font-medium transition-all duration-300 cursor-pointer hover:scale-105 ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
              }`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('sectors')}
              className={`text-sm lg:text-base font-medium transition-all duration-300 cursor-pointer hover:scale-105 ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
              }`}
            >
              Sectors
            </button>
            <button
              onClick={() => scrollToSection('why-choose-us')}
              className={`text-sm lg:text-base font-medium transition-all duration-300 cursor-pointer hover:scale-105 ${
                isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
              }`}
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 sm:px-6 py-2 sm:py-2.5 text-sm lg:text-base rounded-full font-medium transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors duration-300 cursor-pointer ${
                isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              <i className={`${isMobileMenuOpen ? 'ri-close-line text-2xl' : 'ri-menu-line text-2xl'}`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-2 space-y-1 bg-white/95 backdrop-blur-md rounded-2xl mt-2 px-2">
            <button
              onClick={() => scrollToSection('hero')}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors duration-300 cursor-pointer text-sm"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors duration-300 cursor-pointer text-sm"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors duration-300 cursor-pointer text-sm"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('sectors')}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors duration-300 cursor-pointer text-sm"
            >
              Sectors
            </button>
            <button
              onClick={() => scrollToSection('why-choose-us')}
              className="block w-full text-left px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors duration-300 cursor-pointer text-sm"
            >
              Why Us
            </button>
            <div className="p-2">
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-center px-4 py-3 text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl transition-all duration-300 cursor-pointer text-sm font-medium"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
