
'use client';

import { useState, useEffect, useRef } from 'react';

export default function WhyChooseUsSection() {
  const [counters, setCounters] = useState({
    projects: 0,
    clients: 0,
    countries: 0,
    team: 0
  });

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const finalValues = {
    projects: 200,
    clients: 85,
    countries: 12,
    team: 50
  };

  const features = [
    {
      icon: 'ri-award-fill',
      title: 'ISO Certified Excellence',
      description: 'ISO 9001:2015 Quality Management and ISO 14001:2015 Environmental Management certified with rigorous quality standards.',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'from-yellow-500/10 to-orange-500/10'
    },
    {
      icon: 'ri-government-fill',
      title: 'Government Partnership',
      description: 'Trusted partner with federal and state governments across multiple infrastructure projects and strategic initiatives.',
      color: 'from-blue-500 to-blue-700',
      bgColor: 'from-blue-500/10 to-blue-700/10'
    },
    {
      icon: 'ri-community-fill',
      title: 'Community Impact',
      description: 'Committed to local community development and sustainable environmental practices that create lasting positive change.',
      color: 'from-green-500 to-green-700',
      bgColor: 'from-green-500/10 to-green-700/10'
    },
    {
      icon: 'ri-global-fill',
      title: 'International Standards',
      description: 'Adherence to international best practices with local market expertise and deep understanding of regional requirements.',
      color: 'from-purple-500 to-purple-700',
      bgColor: 'from-purple-500/10 to-purple-700/10'
    }
  ];

  const certifications = [
    { name: 'ISO 9001:2015', type: 'Quality Management', icon: 'ri-award-line' },
    { name: 'ISO 14001:2015', type: 'Environmental Management', icon: 'ri-leaf-line' },
    { name: 'COREN Certified', type: 'Engineering Council', icon: 'ri-tools-line' },
    { name: 'CAC Registered', type: 'Corporate Affairs', icon: 'ri-building-line' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2500;
      const steps = 60;
      const stepDuration = duration / steps;

      const intervals = Object.keys(finalValues).map(key => {
        const finalValue = finalValues[key as keyof typeof finalValues];
        const increment = finalValue / steps;
        let currentValue = 0;

        return setInterval(() => {
          currentValue += increment;
          if (currentValue >= finalValue) {
            currentValue = finalValue;
            clearInterval(intervals.find(interval => interval));
          }
          setCounters(prev => ({
            ...prev,
            [key]: Math.floor(currentValue)
          }));
        }, stepDuration);
      });

      return () => intervals.forEach(interval => clearInterval(interval));
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} id="why-choose-us" className="py-16 md:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 md:w-80 h-40 md:h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-32 md:w-64 h-32 md:h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-12 md:mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-300 font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Excellence That Speaks
          </h2>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Your trusted partner for reliable, innovative, and sustainable infrastructure solutions that transform communities
          </p>
        </div>

        {/* Animated counters */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {[
            { number: counters.projects, suffix: '+', label: 'Projects Delivered', color: 'from-blue-400 to-blue-600', icon: 'ri-building-2-line' },
            { number: counters.clients, suffix: '+', label: 'Satisfied Clients', color: 'from-green-400 to-green-600', icon: 'ri-team-line' },
            { number: counters.countries, suffix: '', label: 'Countries Served', color: 'from-purple-400 to-purple-600', icon: 'ri-global-line' },
            { number: counters.team, suffix: '+', label: 'Expert Professionals', color: 'from-orange-400 to-orange-600', icon: 'ri-user-star-line' }
          ].map((stat, index) => (
            <div key={index} className="group relative bg-white/5 backdrop-blur-xl p-4 md:p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105">
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
              <div className="relative z-10 text-center">
                <div className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-gradient-to-br ${stat.color} rounded-xl md:rounded-2xl flex items-center justify-center shadow-xl`}>
                  <i className={`${stat.icon} text-xl md:text-2xl text-white`}></i>
                </div>
                <div className={`text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 md:mb-2`}>
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-sm md:text-base text-gray-300 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Features grid */}
        <div className={`grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white/5 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-700 hover:scale-105"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-700`}></div>
              
              <div className="relative z-10 flex items-start gap-4 md:gap-6">
                <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${feature.color} rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-xl`}>
                  <i className={`${feature.icon} text-xl md:text-2xl text-white`}></i>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3 group-hover:text-blue-300 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-sm md:text-base text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications section */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-12 md:mb-16">
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
              Our Certifications & Accreditations
            </h3>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-green-400 mb-4 md:mb-6"></div>
            <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed">
              We maintain the highest standards of quality, safety, and environmental responsibility 
              through our comprehensive certification programs and regulatory compliance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="group bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-xl border border-white/10 p-4 md:p-6 rounded-xl md:rounded-2xl hover:border-white/30 transition-all duration-500 hover:scale-105">
                  <div className="flex items-center gap-3 mb-2">
                    <i className={`${cert.icon} text-blue-400 text-lg md:text-xl`}></i>
                    <div className="font-bold text-sm md:text-base text-white group-hover:text-blue-300 transition-colors duration-300">{cert.name}</div>
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{cert.type}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-800 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative group">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20business%20team%20celebrating%20success%20with%20certificates%20and%20awards%20in%20modern%20corporate%20environment%20showing%20achievement%20excellence%20and%20recognition%20in%20engineering%20and%20infrastructure%20development%20with%20contemporary%20office%20background&width=600&height=400&seq=certifications-modern&orientation=landscape"
                alt="Our Certifications and Team"
                className="rounded-2xl shadow-2xl object-cover w-full h-48 md:h-64 lg:h-96 object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent rounded-2xl group-hover:from-blue-900/50 transition-all duration-700"></div>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl shadow-2xl flex items-center justify-center">
                <i className="ri-trophy-line text-xl md:text-2xl lg:text-3xl text-white"></i>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative bg-gradient-to-r from-blue-600/20 to-green-600/20 backdrop-blur-xl rounded-2xl p-6 md:p-12 border border-white/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-green-500/10 animate-pulse"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 bg-gradient-to-br from-blue-500 to-green-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <i className="ri-rocket-line text-2xl md:text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">Ready to Transform Your Vision?</h3>
              <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto px-4">
                Join our growing list of satisfied clients who trust us to deliver exceptional infrastructure solutions.
              </p>
              <button className="group bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-base md:text-lg font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl whitespace-nowrap cursor-pointer">
                <span className="flex items-center gap-2">
                  Get Started Today
                  <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
