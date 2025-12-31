'use client';

import { useState, useEffect, useRef } from 'react';

const services = [
  {
    title: 'Construcción Residencial',
    description: 'Diseñamos y construimos hogares que reflejan tu estilo de vida, combinando funcionalidad con estética moderna.',
    color: 'from-blue-500 to-cyan-500',
    features: ['Diseño personalizado', 'Materiales de calidad', 'Acabados premium'],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Proyectos Comerciales',
    description: 'Espacios comerciales diseñados para maximizar la productividad y crear experiencias memorables para tus clientes.',
    color: 'from-cyan-500 to-teal-500',
    features: ['Diseño funcional', 'Optimización de espacios', 'Entrega a tiempo'],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Remodelación',
    description: 'Transformamos espacios existentes en ambientes renovados que superan tus expectativas y necesidades actuales.',
    color: 'from-teal-500 to-emerald-500',
    features: ['Renovación completa', 'Modernización', 'Mejora de valor'],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'Diseño Arquitectónico',
    description: 'Creamos diseños arquitectónicos innovadores que combinan belleza, funcionalidad y sostenibilidad.',
    color: 'from-sky-500 to-blue-500',
    features: ['Planos detallados', 'Renders 3D', 'Asesoría profesional'],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Supervisión de Obra',
    description: 'Garantizamos que cada proyecto se ejecute con los más altos estándares de calidad y seguridad.',
    color: 'from-indigo-500 to-blue-500',
    features: ['Control de calidad', 'Gestión de tiempos', 'Reportes detallados'],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Consultoría',
    description: 'Asesoramiento experto en todas las fases de tu proyecto de construcción, desde la planificación hasta la ejecución.',
    color: 'from-blue-600 to-cyan-600',
    features: ['Análisis de viabilidad', 'Presupuestos', 'Optimización de recursos'],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
];

interface ServicesProps {
  searchQuery?: string;
}

export default function Services({ searchQuery = '' }: ServicesProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Intersection Observer para animaciones al scroll
  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                setVisibleCards((prev) => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 100);
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  // Filtrar servicios basado en la búsqueda
  const filteredServices = services.filter(service => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      service.title.toLowerCase().includes(query) ||
      service.description.toLowerCase().includes(query) ||
      service.features.some(feature => feature.toLowerCase().includes(query))
    );
  });

  // Función para resaltar texto
  const highlightText = (text: string) => {
    if (!searchQuery) return text;

    const parts = text.split(new RegExp(`(${searchQuery})`, 'gi'));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === searchQuery.toLowerCase() ? (
            <mark key={index} className="bg-yellow-300 text-gray-900 px-1 rounded">{part}</mark>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </>
    );
  };

  return (
    <section
      id="servicios"
      className="py-24 px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-lg">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mt-6 mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
            Lo Que Hacemos Mejor
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Soluciones integrales de construcción con los más altos estándares de calidad
          </p>
        </div>

        {filteredServices.length === 0 && searchQuery && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron servicios que coincidan con "{searchQuery}"</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <div
              key={index}
              ref={(el) => { cardRefs.current[index] = el; }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative transition-all duration-700 ${visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Card container - SIN efectos de color */}
              <div className="relative h-full p-8 bg-white rounded-3xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-500 overflow-hidden hover:shadow-xl hover:-translate-y-1">

                <div className="relative">
                  {/* Icon - SIN efectos de color en hover */}
                  <div className={`relative w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${service.color} p-4 transform group-hover:scale-105 transition-all duration-500 shadow-lg`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>

                  {/* Title - SIN cambio de color en hover */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 transition-all duration-300">
                    {highlightText(service.title)}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {highlightText(service.description)}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-3 text-sm text-gray-700 group/item"
                      >
                        <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center transform group-hover/item:scale-110 transition-transform duration-300`}>
                          <svg
                            className="w-4 h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="group-hover/item:translate-x-1 transition-transform duration-300">
                          {highlightText(feature)}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Link - Ahora clickeable */}
                  <button
                    onClick={() => setSelectedService(index)}
                    className="flex items-center gap-2 text-sm font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 hover:gap-3"
                  >
                    Más información
                    <svg
                      className="w-4 h-4 text-blue-600 transition-transform duration-300"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedService !== null && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in lg:pl-80"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`relative p-8 bg-gradient-to-br ${filteredServices[selectedService].color} text-white`}>
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl p-3 flex items-center justify-center">
                  {filteredServices[selectedService].icon}
                </div>
                <h3 className="text-3xl font-black">{filteredServices[selectedService].title}</h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {filteredServices[selectedService].description}
              </p>

              <h4 className="text-xl font-bold text-gray-900 mb-4">Características principales:</h4>
              <ul className="space-y-3 mb-8">
                {filteredServices[selectedService].features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${filteredServices[selectedService].color} flex items-center justify-center mt-0.5`}>
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-4">
                <button
                  className={`flex-1 px-6 py-3 bg-gradient-to-r ${filteredServices[selectedService].color} text-white rounded-xl font-bold hover:shadow-lg transition-all duration-300 hover:scale-105`}
                >
                  Solicitar cotización
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-xl font-bold hover:border-gray-400 transition-all duration-300"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
