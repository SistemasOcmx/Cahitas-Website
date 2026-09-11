'use client';

import { useState, useEffect, useRef } from 'react';

const experiences = [
  {
    year: '2024',
    title: 'Expansión Regional',
    company: 'Proyectos de Alto Impacto',
    description: 'Consolidación como empresa líder en construcción residencial y comercial en la región, con proyectos emblemáticos que transforman comunidades.',
    achievements: [
      'Más de 15 proyectos completados exitosamente',
      'Certificación en construcción sostenible',
      'Reconocimiento regional por excelencia',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    year: '2023',
    title: 'Innovación Tecnológica',
    company: 'Digitalización de Procesos',
    description: 'Implementación de tecnologías BIM y gestión digital de proyectos, mejorando eficiencia y reduciendo tiempos de entrega.',
    achievements: [
      'Adopción de metodología BIM 360',
      'Reducción del 30% en tiempos de proyecto',
      'Sistema de seguimiento en tiempo real',
    ],
    color: 'from-cyan-500 to-teal-500',
  },
  {
    year: '2022',
    title: 'Crecimiento Sostenido',
    company: 'Diversificación de Servicios',
    description: 'Ampliación de servicios incluyendo remodelación, diseño arquitectónico y consultoría especializada en construcción.',
    achievements: [
      'Nuevo departamento de diseño',
      'Equipo de 25+ profesionales',
      'Cartera de 50+ clientes satisfechos',
    ],
    color: 'from-teal-500 to-emerald-500',
  },
  {
    year: '2021',
    title: 'Fundación',
    company: 'Inicio de Operaciones',
    description: 'Inicio de operaciones con un equipo comprometido y visión clara de ofrecer servicios de construcción de calidad superior.',
    achievements: [
      'Primeros 5 proyectos exitosos',
      'Formación del equipo base',
      'Establecimiento de estándares de calidad',
    ],
    color: 'from-sky-500 to-blue-500',
  },
];

interface ExperienceProps {
  searchQuery?: string;
}

export default function Experience({ searchQuery = '' }: ExperienceProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer para animaciones
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
                setActiveIndex(index);
              }, index * 150);
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(card);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  // Scroll progress para la línea del timeline
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const section = sectionRef.current;
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const scrollStart = sectionTop - windowHeight / 2;
      const scrollEnd = sectionTop + sectionHeight - windowHeight / 2;

      if (scrollY < scrollStart) {
        setScrollProgress(0);
      } else if (scrollY > scrollEnd) {
        setScrollProgress(100);
      } else {
        const progress = ((scrollY - scrollStart) / (scrollEnd - scrollStart)) * 100;
        setScrollProgress(Math.min(Math.max(progress, 0), 100));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filtrar experiencias basado en la búsqueda
  const filteredExperiences = experiences.filter(exp => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      exp.title.toLowerCase().includes(query) ||
      exp.company.toLowerCase().includes(query) ||
      exp.description.toLowerCase().includes(query) ||
      exp.achievements.some(achievement => achievement.toLowerCase().includes(query))
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
      ref={sectionRef}
      id="experiencia"
      className="py-20 sm:py-24 px-4 sm:px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-lg">
            Nuestra Trayectoria
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mt-6 mb-6 text-gray-900">
            Experiencia Comprobada
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Un viaje de innovación, crecimiento y excelencia en cada proyecto
          </p>
        </div>

        {filteredExperiences.length === 0 && searchQuery && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron experiencias que coincidan con "{searchQuery}"</p>
          </div>
        )}

        {/* Timeline */}
        <div className="relative px-4">
          {/* Vertical line with progress */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-200 hidden lg:block rounded-full overflow-hidden">
            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-600 to-cyan-600 transition-all duration-300 ease-out"
              style={{ height: `${scrollProgress}%` }}
            />
          </div>

          <div className="space-y-16 lg:space-y-24">
            {filteredExperiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
              >
                {/* Content Card */}
                <div className="w-full lg:w-5/12">
                  <div
                    className={`group relative h-full p-5 sm:p-8 bg-white rounded-3xl border-2 transition-all duration-700 overflow-hidden ${visibleCards[index]
                        ? 'opacity-100 translate-x-0'
                        : index % 2 === 0
                          ? 'opacity-0 -translate-x-20'
                          : 'opacity-0 translate-x-20'
                      } ${activeIndex === index
                        ? 'border-gray-200 shadow-2xl scale-105'
                        : 'border-gray-100 hover:shadow-xl'
                      }`}
                  >
                    {/* Animated gradient border */}
                    <div className="hidden" />

                    {/* Gradient overlay */}
                    <div className="hidden" />

                    <div className="relative">
                      {/* Year badge */}
                      <div className={`inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${exp.color} text-white rounded-full font-black text-base mb-5 shadow-lg`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {highlightText(exp.year)}
                      </div>

                      <h3 className="text-3xl font-black mb-3 text-gray-900 transition-all duration-300">
                        {highlightText(exp.title)}
                      </h3>

                      <p className={`text-lg font-bold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-4`}>
                        {highlightText(exp.company)}
                      </p>

                      <p className="text-gray-600 mb-6 leading-relaxed text-base text-justify">
                        {highlightText(exp.description)}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <div
                            key={achIndex}
                            className="flex items-start gap-3 text-sm text-gray-700 group/item"
                          >
                            <div className={`flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br ${exp.color} flex items-center justify-center transform group-hover/item:scale-110 transition-transform duration-300 shadow-md`}>
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
                            <span className="group-hover/item:translate-x-1 transition-transform duration-300 leading-relaxed text-justify">
                              {highlightText(achievement)}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className="relative">
                    <div
                      className={`w-8 h-8 rounded-full bg-gradient-to-br ${exp.color} ${activeIndex === index ? 'scale-150 shadow-2xl' : 'scale-100 shadow-lg'
                        } transition-all duration-500 ring-4 ring-white relative z-10`}
                    >
                      {activeIndex === index && (
                        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${exp.color} animate-ping opacity-75`} />
                      )}
                    </div>

                    {/* Connecting lines */}
                    {index < filteredExperiences.length - 1 && (
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-blue-600/50 to-transparent" />
                    )}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block w-5/12" />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {[
            { value: '4+', label: 'Años de Experiencia', color: 'from-blue-500 to-cyan-500' },
            { value: '100+', label: 'Proyectos Completados', color: 'from-cyan-500 to-teal-500' },
            { value: '50+', label: 'Clientes Felices', color: 'from-teal-500 to-emerald-500' },
            { value: '15+', label: 'Premios Ganados', color: 'from-emerald-500 to-blue-500' },
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative text-center p-8 bg-white/80 backdrop-blur-md rounded-3xl border-2 border-gray-100 hover:border-transparent hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className="relative">
                <div className="text-5xl font-black text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-gray-600">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
