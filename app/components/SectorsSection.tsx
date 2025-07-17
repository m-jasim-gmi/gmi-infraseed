
'use client';

import { useState, useEffect, useRef } from 'react';

export default function SectorsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const sectors = [
    {
      title: 'Roads & Transportation',
      description: 'Comprehensive road infrastructure development including highways, bridges, and transportation systems that connect communities and drive economic growth.',
      image: 'https://readdy.ai/api/search-image?query=Futuristic%20highway%20system%20with%20smart%20transportation%20infrastructure%20including%20elevated%20roads%20modern%20bridges%20and%20integrated%20digital%20traffic%20management%20systems%20with%20sleek%20contemporary%20design%20and%20blue%20sky%20background&width=800&height=500&seq=roads-future&orientation=landscape',
      projects: ['Lagos-Ibadan Expressway Extension', 'Port Authority Access Roads', 'Urban Bridge Construction'],
      stats: { completed: '45+', ongoing: '12' },
      icon: 'ri-road-map-line',
      color: 'from-blue-500 to-blue-700'
    },
    {
      title: 'Power & Energy',
      description: 'Sustainable energy solutions including renewable power generation and electrical infrastructure for a cleaner, more efficient future.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20renewable%20energy%20infrastructure%20with%20solar%20panel%20arrays%20wind%20turbines%20and%20smart%20electrical%20grid%20systems%20showcasing%20sustainable%20power%20generation%20technology%20with%20clean%20contemporary%20design&width=800&height=500&seq=power-future&orientation=landscape',
      projects: ['Solar Farm Development', 'Grid Extension Projects', 'Substation Construction'],
      stats: { completed: '28+', ongoing: '8' },
      icon: 'ri-flashlight-line',
      color: 'from-green-500 to-green-700'
    },
    {
      title: 'Urban Development',
      description: 'Smart city planning and urban infrastructure development for sustainable communities that enhance quality of life.',
      image: 'https://readdy.ai/api/search-image?query=Smart%20city%20urban%20development%20with%20modern%20skyscrapers%20green%20spaces%20integrated%20technology%20and%20sustainable%20architecture%20showcasing%20contemporary%20urban%20planning%20and%20community-focused%20design&width=800&height=500&seq=urban-future&orientation=landscape',
      projects: ['Smart City Master Planning', 'Residential Estate Development', 'Commercial Complex Design'],
      stats: { completed: '32+', ongoing: '15' },
      icon: 'ri-building-line',
      color: 'from-purple-500 to-purple-700'
    },
    {
      title: 'Oil & Gas Infrastructure',
      description: 'Specialized infrastructure for petroleum industry including pipelines and processing facilities with cutting-edge safety standards.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20oil%20and%20gas%20processing%20facility%20with%20advanced%20pipeline%20systems%20industrial%20infrastructure%20and%20safety%20technology%20showcasing%20professional%20petroleum%20industry%20development%20with%20clean%20industrial%20design&width=800&height=500&seq=oil-gas-future&orientation=landscape',
      projects: ['Pipeline Network Construction', 'Processing Plant Design', 'Storage Facility Development'],
      stats: { completed: '18+', ongoing: '6' },
      icon: 'ri-oil-line',
      color: 'from-orange-500 to-orange-700'
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % sectors.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} id="sectors" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-green-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-lg">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-gray-800 bg-clip-text text-transparent mb-6">
            Sectors We Serve
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Delivering specialized solutions across critical infrastructure sectors with innovation and excellence
          </p>
        </div>

        {/* Interactive sector tabs */}
        <div className={`grid lg:grid-cols-4 gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {sectors.map((sector, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`group relative p-6 rounded-2xl text-left transition-all duration-500 cursor-pointer overflow-hidden ${
                activeIndex === index
                  ? 'bg-gradient-to-br from-blue-600 to-purple-700 text-white scale-105 shadow-2xl'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:scale-105 hover:shadow-xl'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-0 ${activeIndex === index ? 'opacity-100' : 'group-hover:opacity-10'} transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className={`w-12 h-12 mb-4 rounded-xl flex items-center justify-center transition-all duration-500 ${
                  activeIndex === index 
                    ? 'bg-white/20 text-white' 
                    : 'bg-gradient-to-br from-blue-500 to-purple-600 text-white group-hover:scale-110'
                }`}>
                  <i className={`${sector.icon} text-xl`}></i>
                </div>
                <h3 className="font-bold text-lg mb-3">{sector.title}</h3>
                <div className="flex items-center space-x-4 text-sm opacity-80">
                  <span className="flex items-center gap-1">
                    <i className="ri-check-line"></i>
                    {sector.stats.completed} Completed
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="ri-time-line"></i>
                    {sector.stats.ongoing} Ongoing
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Active sector showcase */}
        <div className={`bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid lg:grid-cols-2">
            <div className="relative group overflow-hidden">
              <img 
                src={sectors[activeIndex].image}
                alt={sectors[activeIndex].title}
                className="w-full h-96 lg:h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              <div className={`absolute inset-0 bg-gradient-to-r ${sectors[activeIndex].color} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
              <div className="absolute top-6 left-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${sectors[activeIndex].color} rounded-2xl flex items-center justify-center shadow-2xl`}>
                  <i className={`${sectors[activeIndex].icon} text-2xl text-white`}></i>
                </div>
              </div>
            </div>
            
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">{sectors[activeIndex].title}</h3>
                <div className={`w-16 h-1 bg-gradient-to-r ${sectors[activeIndex].color} rounded-full mb-6`}></div>
                <p className="text-lg text-gray-600 leading-relaxed">{sectors[activeIndex].description}</p>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <i className="ri-trophy-line text-blue-600"></i>
                  Recent Projects
                </h4>
                <div className="space-y-3">
                  {sectors[activeIndex].projects.map((project, projectIndex) => (
                    <div key={projectIndex} className="flex items-start gap-3 group">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></div>
                      <span className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{project}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-8 mb-8">
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${sectors[activeIndex].color} bg-clip-text text-transparent`}>
                    {sectors[activeIndex].stats.completed}
                  </div>
                  <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">Projects Completed</div>
                </div>
                <div className="text-center group hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-orange-600">{sectors[activeIndex].stats.ongoing}</div>
                  <div className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">Currently Active</div>
                </div>
              </div>
              
              <button className={`group bg-gradient-to-r ${sectors[activeIndex].color} hover:opacity-90 text-white px-8 py-4 rounded-full font-semibold transition-all duration-500 hover:scale-110 hover:shadow-2xl self-start whitespace-nowrap cursor-pointer`}>
                <span className="flex items-center gap-2">
                  View Portfolio
                  <i className="ri-external-link-line group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></i>
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Progress indicators */}
        <div className="flex justify-center mt-8 gap-2">
          {sectors.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === index 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 scale-125' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
