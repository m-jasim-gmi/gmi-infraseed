
'use client';

import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

// Disable SSR for this component
const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "INFRASEED",
      subtitle: "ENGINEERING",
      description: "Building Foundations. Powering Futures.",
      subtext: "Transforming landscapes through innovative infrastructure solutions that create sustainable communities and drive economic growth across emerging markets.",
      bgImage: "https://readdy.ai/api/search-image?query=Modern%20futuristic%20infrastructure%20cityscape%20with%20sleek%20buildings%20bridges%20and%20transportation%20networks%20showcasing%20advanced%20engineering%20and%20urban%20development%20with%20dramatic%20lighting%20and%20contemporary%20architectural%20design&width=1920&height=1080&seq=hero-modern&orientation=landscape"
    },
    {
      title: "AIRPORT",
      subtitle: "TRANSPORTATION & RAILWAY",
      description: "Connecting People. Moving Forward.",
      subtext: "Delivering state-of-the-art transportation infrastructure that connects communities and drives regional development through innovative mobility solutions.",
      bgImage: "/assets/images/slider/airport-transportation-railway.png"
    },
    {
      title: "ENERGY",
      subtitle: "SOLAR, OIL & GAS",
      description: "Powering Progress. Energizing Tomorrow.",
      subtext: "Pioneering sustainable energy solutions while maintaining excellence in traditional energy infrastructure for a balanced and resilient future.",
      bgImage: "/assets/images/slider/energy-solor-oil-gas.png"
    },
    {
      title: "SMART",
      subtitle: "INFRASTRUCTURE",
      description: "Innovating Cities. Empowering Communities.",
      subtext: "Creating intelligent infrastructure solutions that leverage cutting-edge technology to build smarter, more sustainable cities of tomorrow.",
      bgImage: "/assets/images/slider/smart-infrastructure.png"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Slides */}
      <div className="absolute inset-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
                backgroundImage: `url('${slide.bgImage}')`
              }}
            />
            {/* Dark gradient overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
          </div>
        ))}
      </div>
      
      {/* Content */}
      <div className="relative z-20 w-full h-full flex flex-col justify-center items-center">
        <div className="w-full max-w-7xl mx-auto px-6 text-center text-white">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight drop-shadow-2xl">
              {slides[currentSlide].title}
            <br />
              <span className="text-4xl md:text-5xl lg:text-6xl font-light mt-2 block">
                {slides[currentSlide].subtitle}
              </span>
          </h1>
          
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-2xl md:text-4xl font-light drop-shadow-lg">
                {slides[currentSlide].description}
              </p>
              <p className="text-lg md:text-xl opacity-90 leading-relaxed drop-shadow-lg">
                {slides[currentSlide].subtext}
              </p>
            </div>
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <div className="absolute top-1/2 left-4 right-4 flex justify-between items-center transform -translate-y-1/2 z-30">
          <button 
            onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
            className="p-3 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300 text-white"
            aria-label="Previous slide"
          >
            <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
            className="p-3 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300 text-white"
            aria-label="Next slide"
          >
            <svg className="w-8 h-8" fill="none" stroke="white" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Bottom Container for Indicators and Buttons */}
        <div className="absolute bottom-0 left-0 right-0 pb-12 space-y-8 bg-gradient-to-t from-black/50 to-transparent pt-20">
          {/* Slide indicators */}
          <div className="flex justify-center gap-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              onClick={() => scrollToSection('contact')}
              className="group relative bg-white text-black px-12 py-5 rounded-full text-lg font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl whitespace-nowrap cursor-pointer"
            >
              <span className="relative z-10">Start Your Project</span>
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="group bg-transparent text-white px-12 py-5 rounded-full text-lg font-semibold transition-all duration-500 border-2 border-white hover:bg-white hover:text-black hover:scale-105 hover:shadow-xl cursor-pointer whitespace-nowrap"
          >
            <span className="flex items-center gap-2">
              Explore Services
              <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform duration-300"></i>
            </span>
          </button>
        </div>
        </div>
      </div>
    </section>
  );
};

// Export with SSR disabled
export default dynamic(() => Promise.resolve(HeroSection), {
  ssr: false
});
