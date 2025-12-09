'use client';

import { useState } from 'react';

const experiences = [
  {
    year: 'AÑO 1',
    title: 'EXPERIENCIA 1',
    company: 'Nombre del proyecto/empresa 1',
    description: 'Descripción de la experiencia 1. Qué se logró y qué impacto tuvo.',
    achievements: [
      'Logro 1 de la experiencia',
      'Logro 2 de la experiencia',
      'Logro 3 de la experiencia',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    year: 'AÑO 2',
    title: 'EXPERIENCIA 2',
    company: 'Nombre del proyecto/empresa 2',
    description: 'Descripción de la experiencia 2. Qué se logró y qué impacto tuvo.',
    achievements: [
      'Logro 1 de la experiencia',
      'Logro 2 de la experiencia',
      'Logro 3 de la experiencia',
    ],
    color: 'from-cyan-500 to-teal-500',
  },
  {
    year: 'AÑO 3',
    title: 'EXPERIENCIA 3',
    company: 'Nombre del proyecto/empresa 3',
    description: 'Descripción de la experiencia 3. Qué se logró y qué impacto tuvo.',
    achievements: [
      'Logro 1 de la experiencia',
      'Logro 2 de la experiencia',
      'Logro 3 de la experiencia',
    ],
    color: 'from-teal-500 to-emerald-500',
  },
  {
    year: 'AÑO 4',
    title: 'EXPERIENCIA 4',
    company: 'Nombre del proyecto/empresa 4',
    description: 'Descripción de la experiencia 4. Qué se logró y qué impacto tuvo.',
    achievements: [
      'Logro 1 de la experiencia',
      'Logro 2 de la experiencia',
      'Logro 3 de la experiencia',
    ],
    color: 'from-sky-500 to-blue-500',
  },
];

interface ExperienceProps {
  searchQuery?: string;
}

export default function Experience({ searchQuery = '' }: ExperienceProps) {
  const [activeIndex, setActiveIndex] = useState(0);

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
      id="experiencia"
      className="py-24 px-6 bg-white relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Nuestra Trayectoria
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Experiencia Comprobada
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
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
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500 hidden lg:block" />

          <div className="space-y-12">
            {filteredExperiences.map((exp, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Content Card */}
                <div className="w-full lg:w-5/12">
                  <div
                    className={`group p-8 bg-white border-2 ${
                      activeIndex === index
                        ? 'border-blue-500 shadow-2xl scale-105'
                        : 'border-gray-200'
                    } rounded-3xl transition-all duration-500 hover:shadow-2xl hover:scale-105`}
                  >
                    {/* Year badge */}
                    <div
                      className="inline-block px-4 py-2 bg-blue-500 text-white rounded-full font-bold text-sm mb-4"
                    >
                      {highlightText(exp.year)}
                    </div>

                    <h3 className="text-2xl font-bold mb-2 text-gray-900">
                      {highlightText(exp.title)}
                    </h3>

                    <p className="text-blue-600 font-semibold mb-4">
                      {highlightText(exp.company)}
                    </p>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {highlightText(exp.description)}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div
                          key={achIndex}
                          className="flex items-start gap-2 text-sm text-gray-700"
                        >
                          <div
                            className={`w-6 h-6 rounded-full bg-gradient-to-r ${exp.color} flex items-center justify-center flex-shrink-0 mt-0.5`}
                          >
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
                          <span>{highlightText(achievement)}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div
                    className={`w-6 h-6 rounded-full bg-blue-500 ${
                      activeIndex === index ? 'scale-150' : 'scale-100'
                    } transition-all duration-500 ring-4 ring-white`}
                  />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block w-5/12" />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '4+', label: 'Años de Experiencia' },
            { value: '100+', label: 'Proyectos Completados' },
            { value: '50+', label: 'Clientes Felices' },
            { value: '15+', label: 'Premios Ganados' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl border border-blue-200 hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
