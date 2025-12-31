'use client';

import { useState, useEffect, useRef } from 'react';

interface AboutProps {
  searchQuery?: string;
}

export default function About({ searchQuery = '' }: AboutProps) {
  const [activeTab, setActiveTab] = useState('mision');
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const tabs = [
    {
      id: 'mision',
      label: 'Misión',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 'vision',
      label: 'Visión',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      id: 'valores',
      label: 'Valores',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      )
    },
  ];

  const valores = [
    {
      title: 'Innovación',
      description: 'Buscamos constantemente nuevas formas de resolver problemas y crear valor',
      color: 'from-blue-500 to-cyan-500',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Colaboración',
      description: 'Trabajamos en equipo con nuestros clientes para lograr objetivos comunes',
      color: 'from-cyan-500 to-teal-500',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: 'Excelencia',
      description: 'Nos comprometemos con la calidad en cada proyecto que realizamos',
      color: 'from-teal-500 to-emerald-500',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: 'Pasión',
      description: 'Amamos lo que hacemos y eso se refleja en nuestro trabajo',
      color: 'from-sky-500 to-blue-500',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: 'Integridad',
      description: 'Actuamos con transparencia y honestidad en todas nuestras relaciones',
      color: 'from-indigo-500 to-blue-500',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Crecimiento',
      description: 'Fomentamos el desarrollo continuo tanto personal como profesional',
      color: 'from-blue-600 to-cyan-600',
      icon: (
        <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
  ];

  // Contenido de misión y visión
  const content = {
    mision: 'Transformar ideas en experiencias digitales extraordinarias, combinando diseño innovador con tecnología de vanguardia para ayudar a nuestros clientes a alcanzar sus objetivos y destacar en el mundo digital. Nos comprometemos a ofrecer soluciones personalizadas que no solo cumplan, sino que superen las expectativas, generando un impacto positivo y duradero en cada proyecto que emprendemos.',
    vision: 'Ser la empresa líder en soluciones digitales innovadoras, reconocida por nuestra excelencia, creatividad y compromiso con la satisfacción del cliente. Aspiramos a establecer nuevos estándares en la industria digital, impulsando el crecimiento de nuestros clientes y contribuyendo al desarrollo tecnológico de nuestra región, mientras mantenemos un enfoque centrado en las personas y el impacto social positivo.'
  };

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
  }, [activeTab]);

  // Filtrar valores basado en la búsqueda
  const filteredValores = valores.filter(valor => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      valor.title.toLowerCase().includes(query) ||
      valor.description.toLowerCase().includes(query)
    );
  });

  // Verificar si hay coincidencias con la búsqueda en misión, visión o valores
  const misionMatch = !searchQuery || content.mision.toLowerCase().includes(searchQuery.toLowerCase());
  const visionMatch = !searchQuery || content.vision.toLowerCase().includes(searchQuery.toLowerCase());
  const hasValoresMatch = filteredValores.length > 0;
  const hasMatch = misionMatch || visionMatch || hasValoresMatch;

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
      id="nosotros"
      className="py-24 px-6 bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-lg">
            Quiénes Somos
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mt-6 mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
            Nosotros
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Conoce más sobre nuestra empresa, nuestra filosofía y lo que nos impulsa cada día
          </p>
        </div>

        {!hasMatch && searchQuery && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No se encontraron resultados que coincidan con "{searchQuery}"</p>
          </div>
        )}

        {/* Tabs */}
        {hasMatch && (
          <>
            <div className="flex justify-center mb-12 px-4">
              <div className="relative inline-flex bg-white/80 backdrop-blur-md rounded-full p-2 shadow-xl border border-gray-200">
                {/* Animated indicator */}
                <div
                  className="absolute top-2 h-[calc(100%-16px)] bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full transition-all duration-300 shadow-lg"
                  style={{
                    width: `calc(${100 / tabs.length}% - 8px)`,
                    left: `calc(${tabs.findIndex(t => t.id === activeTab) * (100 / tabs.length)}% + 8px)`,
                  }}
                />

                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative z-10 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                        ? 'text-white'
                        : 'text-gray-600 hover:text-blue-600'
                      }`}
                  >
                    <span className={`transition-transform duration-300 ${activeTab === tab.id ? 'scale-110' : ''}`}>
                      {tab.icon}
                    </span>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="mb-20">
              {/* Misión */}
              {activeTab === 'mision' && misionMatch && (
                <div className="animate-fade-in">
                  <div className="max-w-4xl mx-auto">
                    <div className="relative p-12 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-blue-100 overflow-hidden">
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50" />

                      <div className="relative">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <h3 className="text-4xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Nuestra Misión</h3>
                        </div>
                        <p className="text-xl text-gray-700 leading-relaxed">
                          {highlightText(content.mision)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Visión */}
              {activeTab === 'vision' && visionMatch && (
                <div className="animate-fade-in">
                  <div className="max-w-4xl mx-auto">
                    <div className="relative p-12 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl border border-cyan-100 overflow-hidden">
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/50 to-teal-50/50" />

                      <div className="relative">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-xl">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </div>
                          <h3 className="text-4xl font-black bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">Nuestra Visión</h3>
                        </div>
                        <p className="text-xl text-gray-700 leading-relaxed">
                          {highlightText(content.vision)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Valores */}
              {activeTab === 'valores' && hasValoresMatch && (
                <div className="animate-fade-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredValores.map((valor, index) => (
                      <div
                        key={index}
                        ref={(el) => { cardRefs.current[index] = el; }}
                        className={`group relative transition-all duration-700 ${visibleCards[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                          }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <div className="relative h-full p-8 bg-white/80 backdrop-blur-md rounded-3xl border-2 border-gray-100 hover:border-transparent transition-all duration-500 overflow-hidden group-hover:shadow-2xl group-hover:-translate-y-2">
                          {/* Animated gradient border */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${valor.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`} />

                          <div className="relative">
                            {/* Icon */}
                            <div className={`relative w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${valor.color} p-3 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                              <div className="text-white">
                                {valor.icon}
                              </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-600 group-hover:bg-clip-text transition-all duration-300">
                              {highlightText(valor.title)}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed">
                              {highlightText(valor.description)}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {[
                { value: '4+', label: 'Años de Experiencia', icon: '📅', color: 'from-blue-500 to-cyan-500' },
                { value: '100+', label: 'Proyectos Completados', icon: '✅', color: 'from-cyan-500 to-teal-500' },
                { value: '50+', label: 'Clientes Satisfechos', icon: '😊', color: 'from-teal-500 to-emerald-500' },
                { value: '15+', label: 'Premios Ganados', icon: '🏆', color: 'from-emerald-500 to-blue-500' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group relative text-center p-8 bg-white/80 backdrop-blur-md rounded-3xl border-2 border-gray-100 hover:border-transparent hover:scale-105 transition-all duration-500 shadow-lg hover:shadow-2xl overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  <div className="relative">
                    <div className="text-5xl mb-3">{stat.icon}</div>
                    <div className={`text-5xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
