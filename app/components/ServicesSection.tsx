
'use client';

import { useState, useEffect, useRef } from 'react';

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      icon: 'ri-file-list-3-line',
      title: 'Advisory Services',
      description: 'Strategic consulting and feasibility studies for complex infrastructure projects',
      features: [
        'Project Feasibility Studies',
        'Strategic Planning & Analysis',
        'Risk Assessment & Management',
        'Regulatory Compliance Guidance',
        'Investment Advisory'
      ],
      gradient: 'from-blue-500 to-blue-700',
      hoverGradient: 'from-blue-600 to-purple-700'
    },
    {
      icon: 'ri-tools-line',
      title: 'Engineering Solutions',
      description: 'Comprehensive engineering design and technical solutions for all infrastructure sectors',
      features: [
        'Structural & Civil Engineering',
        'Electrical & Mechanical Systems',
        'Environmental Engineering',
        'Geotechnical Analysis',
        'Quality Assurance & Control'
      ],
      gradient: 'from-green-500 to-green-700',
      hoverGradient: 'from-green-600 to-teal-700'
    },
    {
      icon: 'ri-organization-chart',
      title: 'Project Management',
      description: 'End-to-end project delivery with proven methodologies and experienced teams',
      features: [
        'Project Planning & Scheduling',
        'Resource Management',
        'Cost Control & Budgeting',
        'Stakeholder Coordination',
        'Performance Monitoring'
      ],
      gradient: 'from-orange-500 to-orange-700',
      hoverGradient: 'from-orange-600 to-red-700'
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
    <section ref={sectionRef} id="services" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-3/4 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full mb-6">
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            <span className="text-blue-300 font-semibold text-sm uppercase tracking-wider">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent mb-6">
            Excellence in Every Service
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive infrastructure solutions tailored to meet the unique challenges of emerging markets
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-white/30 transition-all duration-700 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient background that appears on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${hoveredCard === index ? service.hoverGradient : service.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-all duration-700`}></div>
              
              <div className="relative z-10">
                <div className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                  <i className={`${service.icon} text-3xl text-white`}></i>
                </div>
                
                <h3 className="text-2xl font-bold text-white text-center mb-4 group-hover:text-blue-300 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">{service.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-center">
                  <button className={`group/btn relative bg-gradient-to-r ${service.gradient} hover:${service.hoverGradient} text-white px-8 py-3 rounded-full font-semibold transition-all duration-500 hover:scale-110 hover:shadow-2xl whitespace-nowrap cursor-pointer overflow-hidden`}>
                    <span className="relative z-10 flex items-center gap-2">
                      Learn More
                      <i className="ri-arrow-right-line group-hover/btn:translate-x-1 transition-transform duration-300"></i>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-xl rounded-3xl p-12 border border-orange-500/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 animate-pulse"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <i className="ri-lightbulb-flash-line text-2xl text-white"></i>
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Need Custom Solutions?</h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Every project is unique. Our team works closely with clients to develop tailored solutions 
                that meet specific requirements and local conditions.
              </p>
              <button className="group bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-10 py-4 rounded-full font-semibold transition-all duration-500 hover:scale-110 hover:shadow-2xl whitespace-nowrap cursor-pointer">
                <span className="flex items-center gap-2">
                  Discuss Your Project
                  <i className="ri-message-3-line group-hover:scale-110 transition-transform duration-300"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
