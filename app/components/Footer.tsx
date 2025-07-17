
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const quickLinks = [
    { name: 'About Us', href: '#about', icon: 'ri-information-line' },
    { name: 'Our Services', href: '#services', icon: 'ri-service-line' },
    { name: 'Sectors', href: '#sectors', icon: 'ri-building-line' },
    { name: 'Why Choose Us', href: '#why-choose-us', icon: 'ri-star-line' },
    { name: 'Contact', href: '#contact', icon: 'ri-contact-line' }
  ];

  const services = [
    { name: 'Advisory Services', href: '#services', icon: 'ri-file-list-line' },
    { name: 'Engineering Solutions', href: '#services', icon: 'ri-tools-line' },
    { name: 'Project Management', href: '#services', icon: 'ri-organization-chart' },
    { name: 'Infrastructure Planning', href: '#services', icon: 'ri-road-map-line' }
  ];

  const socialLinks = [
    { icon: 'ri-linkedin-fill', href: '#', color: 'hover:bg-blue-600' },
    { icon: 'ri-twitter-fill', href: '#', color: 'hover:bg-blue-400' },
    { icon: 'ri-facebook-fill', href: '#', color: 'hover:bg-blue-700' },
    { icon: 'ri-instagram-fill', href: '#', color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-green-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <img 
                src="https://static.readdy.ai/image/936f6357bde6e9efad03bc5c8cb93252/646628d8496092a3d758a4791a09cd54.png" 
                alt="Infraseed Engineering Logo" 
                className="h-16 w-auto mb-6 drop-shadow-2xl"
              />
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-200 to-green-200 bg-clip-text text-transparent">
                Infraseed Engineering
              </h3>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Building foundations and powering futures through innovative, sustainable infrastructure solutions 
              that transform communities and drive economic growth across emerging markets.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className={`group w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 transition-all duration-500 hover:scale-110 hover:rotate-3 ${social.color} cursor-pointer`}
                >
                  <i className={`${social.icon} text-lg group-hover:scale-110 transition-transform duration-300`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-400 to-green-400 rounded-full"></div>
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-3 text-gray-300 hover:text-blue-300 transition-all duration-300 cursor-pointer"
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <i className={`${link.icon} text-sm transition-all duration-300 ${hoveredLink === link.name ? 'scale-125 text-blue-400' : ''}`}></i>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
              <div className="w-2 h-8 bg-gradient-to-b from-green-400 to-blue-400 rounded-full"></div>
              Our Services
            </h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href} 
                    className="group flex items-center gap-3 text-gray-300 hover:text-green-300 transition-all duration-300 cursor-pointer"
                    onMouseEnter={() => setHoveredLink(service.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <i className={`${service.icon} text-sm transition-all duration-300 ${hoveredLink === service.name ? 'scale-125 text-green-400' : ''}`}></i>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
              <div className="w-2 h-8 bg-gradient-to-b from-purple-400 to-orange-400 rounded-full"></div>
              Contact Info
            </h4>
            <div className="space-y-6">
              <div className="group flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <i className="ri-map-pin-fill text-sm"></i>
                </div>
                <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  <p>123 Infrastructure Boulevard</p>
                  <p>Victoria Island, Lagos</p>
                  <p>Nigeria</p>
                </div>
              </div>
              <div className="group flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <i className="ri-phone-fill text-sm"></i>
                </div>
                <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  <p>+234 801 234 5678</p>
                  <p>+234 802 345 6789</p>
                </div>
              </div>
              <div className="group flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <i className="ri-mail-fill text-sm"></i>
                </div>
                <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  <p>info@infraseedconsortium.com</p>
                  <p>projects@infraseedconsortium.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 p-8 bg-gradient-to-r from-blue-600/20 to-green-600/20 backdrop-blur-xl rounded-3xl border border-white/20">
          <div className="text-center mb-6">
            <h4 className="text-2xl font-bold text-white mb-2">Stay Updated</h4>
            <p className="text-gray-300">Get the latest updates on our projects and industry insights</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-400 focus:border-transparent text-sm"
            />
            <button className="bg-gradient-to-r from-blue-500 to-green-600 hover:from-blue-600 hover:to-green-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-center md:text-left">
              <p>&copy; 2024 Infraseed Engineering. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                <Link 
                  key={index}
                  href="#" 
                  className="text-gray-400 hover:text-blue-300 transition-colors duration-300 cursor-pointer hover:underline"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certification Strip */}
      <div className="bg-gradient-to-r from-blue-800/50 to-green-800/50 backdrop-blur-sm py-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-300 text-sm flex items-center justify-center gap-2">
            <i className="ri-award-line text-yellow-400"></i>
            ISO 9001:2015 & ISO 14001:2015 Certified | COREN Registered Engineering Company
            <i className="ri-verified-badge-line text-green-400"></i>
          </p>
        </div>
      </div>
    </footer>
  );
}
