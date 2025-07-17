
'use client';

import { useState, useEffect, useRef } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const contactInfo = [
    {
      icon: 'ri-map-pin-fill',
      title: 'Head Office',
      details: ['12 Street', '1202 Geneva', 'Switzerland'],
      color: 'from-blue-500 to-blue-700',
      bgColor: 'from-blue-500/10 to-blue-700/10'
    },
    {
      icon: 'ri-phone-fill',
      title: 'Phone Numbers',
      details: ['+234 801 234 5678', '+234 802 345 6789', 'Emergency: +234 803 456 7890'],
      color: 'from-green-500 to-green-700',
      bgColor: 'from-green-500/10 to-green-700/10'
    },
    {
      icon: 'ri-mail-fill',
      title: 'Email Contacts',
      details: ['info@infraseedengineering.com', 'projects@infraseedengineering.com', 'support@infraseedengineering.com'],
      color: 'from-purple-500 to-purple-700',
      bgColor: 'from-purple-500/10 to-purple-700/10'
    },
    {
      icon: 'ri-time-fill',
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Sunday: Emergency Only'],
      color: 'from-orange-500 to-orange-700',
      bgColor: 'from-orange-500/10 to-orange-700/10'
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://readdy.ai/api/form-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: Object.keys(formData)
          .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(formData[key as keyof typeof formData])}`)
          .join('&')
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-green-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-800 to-gray-800 bg-clip-text text-transparent mb-6">
            Contact Us
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next infrastructure project? Get in touch with our expert team today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20">
              <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-green-600 rounded-xl flex items-center justify-center">
                  <i className="ri-message-3-line text-white text-lg"></i>
                </div>
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} id="contact-form" className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
                      placeholder="+234 xxx xxx xxxx"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">Company/Organization</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm pr-8 bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
                  >
                    <option value="">Select a service</option>
                    <option value="advisory">Advisory Services</option>
                    <option value="engineering">Engineering Solutions</option>
                    <option value="project-management">Project Management</option>
                    <option value="roads">Roads & Transportation</option>
                    <option value="power">Power & Energy</option>
                    <option value="urban">Urban Development</option>
                    <option value="oil-gas">Oil & Gas Infrastructure</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    maxLength={500}
                    className="w-full px-4 py-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm resize-vertical bg-white/80 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                  <div className="text-sm text-gray-500 mt-2 flex justify-between">
                    <span>{formData.message.length}/500 characters</span>
                    <span className={formData.message.length > 500 ? 'text-red-500' : 'text-green-500'}>
                      {formData.message.length > 500 ? 'Too many characters' : 'Good'}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || formData.message.length > 500}
                  className="group w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 disabled:from-gray-400 disabled:to-gray-500 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl whitespace-nowrap cursor-pointer disabled:cursor-not-allowed"
                >
                  <span className="flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <i className="ri-loader-4-line animate-spin"></i>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <i className="ri-send-plane-line group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"></i>
                      </>
                    )}
                  </span>
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-2xl flex items-center gap-3">
                    <i className="ri-check-line text-xl"></i>
                    <span>Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-600 px-6 py-4 rounded-2xl flex items-center gap-3">
                    <i className="ri-error-warning-line text-xl"></i>
                    <span>Sorry, there was an error sending your message. Please try again or contact us directly.</span>
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <h3 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                <i className="ri-information-line text-white text-lg"></i>
              </div>
              Contact Information
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="group bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20">
                  <div className={`absolute inset-0 bg-gradient-to-br ${info.bgColor} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`}></div>
                  <div className="relative z-10 flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      <i className={`${info.icon} text-white text-lg`}></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-700 transition-colors duration-300">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 backdrop-blur-xl p-8 rounded-2xl border border-blue-100">
              <h4 className="font-semibold text-gray-800 mb-6 flex items-center gap-2">
                <i className="ri-share-line text-blue-600"></i>
                Follow Us
              </h4>
              <div className="flex space-x-4">
                {[ 
                  { icon: 'ri-linkedin-fill', color: 'from-blue-500 to-blue-700' },
                  { icon: 'ri-twitter-fill', color: 'from-blue-400 to-blue-600' },
                  { icon: 'ri-facebook-fill', color: 'from-blue-600 to-blue-800' },
                  { icon: 'ri-instagram-fill', color: 'from-purple-500 to-pink-600' }
                ].map((social, index) => (
                  <a key={index} href="#" className={`group w-12 h-12 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl`}>
                    <i className={`${social.icon} text-white group-hover:scale-110 transition-transform duration-300`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={`rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6892150929383!2d3.4207642!3d6.4278555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4c2c8d3c217%3A0x7b4d1e15b4b8d2f3!2sVictoria%20Island%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Infraseed Engineering Location"
            className="hover:saturate-150 transition-all duration-500"
          ></iframe>
        </div>
      </div>
    </section>
  );
}