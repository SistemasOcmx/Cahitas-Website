'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg'
          : 'bg-white/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img src="/img/Logo.jpeg" alt="Cahita Logo" className="w-full h-full object-cover" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Cahita
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['inicio', 'servicios', 'experiencia', 'contacto'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative text-sm font-medium transition-all duration-300 hover:text-blue-600 ${
                  activeSection === section
                    ? 'text-blue-600'
                    : 'text-gray-700'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full" />
                )}
              </button>
            ))}
          </div>

          <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300">
            Contactar
          </button>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
