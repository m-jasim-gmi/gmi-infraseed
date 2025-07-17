
'use client';

import { useState, useEffect, useRef } from 'react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const values = [
    {
      icon: 'ri-shield-check-line',
      title: 'Trust & Reliability',
      description: 'Building lasting partnerships through consistent delivery and transparent communication',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'ri-lightbulb-flash-line',
      title: 'Innovation',
      description: 'Pioneering cutting-edge solutions that redefine infrastructure development standards',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: 'ri-leaf-line',
      title: 'Sustainability',
      description: 'Committed to environmental stewardship and sustainable development practices',
      color: 'from-green-500 to-green-600'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-500 rounded-full blur-xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">About Us</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-gray-800 bg-clip-text text-transparent mb-6">
            Infraseed Engineering
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are a premier multi-disciplinary infrastructure and engineering company, dedicated to transforming 
            landscapes and empowering communities through innovative, sustainable solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <h3 className="text-3xl font-bold text-gray-800 mb-8 relative">
              Our Story
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></span>
            </h3>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded with a vision to bridge the infrastructure gap across emerging markets, Infraseed Engineering 
                has grown from a small engineering firm to a comprehensive infrastructure solutions provider.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of seasoned professionals brings together decades of experience in large-scale project 
                delivery, combining international best practices with local expertise to deliver exceptional results.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6 mt-8">
              {[
                { number: '15+', label: 'Years Experience', color: 'text-blue-600' },
                { number: '200+', label: 'Projects Completed', color: 'text-green-600' },
                { number: '50+', label: 'Expert Team', color: 'text-orange-600' }
              ].map((stat, index) => (
                <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                  <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className={`relative transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="relative group">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20diverse%20engineering%20team%20in%20modern%20office%20environment%20with%20architectural%20blueprints%20and%20digital%20displays%20showing%20collaboration%20innovation%20and%20expertise%20in%20infrastructure%20development%20with%20contemporary%20workspace%20design&width=600&height=400&seq=about-team-modern&orientation=landscape"
                alt="Our Professional Team"
                className="rounded-2xl shadow-2xl object-cover w-full h-96 object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-2xl group-hover:from-blue-900/30 transition-all duration-500"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl shadow-xl flex items-center justify-center">
                <i className="ri-team-line text-3xl text-white"></i>
              </div>
            </div>
          </div>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 mb-20 transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {[
            { title: 'Our Vision', content: 'To be the leading infrastructure development partner, creating sustainable solutions that transform communities and drive economic growth across emerging markets.', accent: 'blue' },
            { title: 'Our Mission', content: 'To deliver world-class infrastructure solutions through innovative engineering, sustainable practices, and collaborative partnerships that create lasting value.', accent: 'green' },
            { title: 'Our Commitment', content: 'Committed to excellence, integrity, and environmental stewardship in every project, ensuring sustainable development for future generations.', accent: 'orange' }
          ].map((item, index) => (
            <div key={index} className="group hover:scale-105 transition-all duration-500">
              <div className={`h-full bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl border-l-4 border-${item.accent}-500 relative overflow-hidden`}>
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-${item.accent}-400 to-${item.accent}-600`}></div>
                <h4 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.content}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Core Values</h3>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group hover:scale-110 transition-all duration-500">
                <div className={`w-24 h-24 mx-auto mb-6 bg-gradient-to-br ${value.color} rounded-3xl flex items-center justify-center shadow-xl group-hover:shadow-2xl group-hover:rotate-3 transition-all duration-500`}>
                  <i className={`${value.icon} text-3xl text-white`}></i>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
