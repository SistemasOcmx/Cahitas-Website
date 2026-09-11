'use client';

import { useState, useEffect, useRef } from 'react';

const services = [
  {
    title: 'Construcción Residencial',
    description: 'Diseñamos y construimos hogares que reflejan tu estilo de vida, combinando funcionalidad con estética moderna y materiales de primera calidad.',
    accent: '#f97316',
    tag: 'Hogares',
    image: '/img/construccion_residencial.png',
    features: ['Diseño personalizado', 'Materiales de calidad', 'Acabados premium'],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Proyectos Comerciales',
    description: 'Espacios comerciales diseñados para maximizar la productividad y crear experiencias memorables para tus clientes y colaboradores.',
    accent: '#ea580c',
    tag: 'Comercial',
    image: '/img/proyectos_comerciales.png',
    features: ['Diseño funcional', 'Optimización de espacios', 'Entrega a tiempo'],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Remodelación',
    description: 'Transformamos espacios existentes en ambientes renovados que superan tus expectativas y elevan el valor de tu propiedad.',
    accent: '#f97316',
    tag: 'Renovación',
    image: '/img/remodelacion.png',
    features: ['Renovación completa', 'Modernización', 'Mejora de valor'],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    title: 'Diseño Arquitectónico',
    description: 'Creamos diseños arquitectónicos innovadores que combinan belleza, funcionalidad y sostenibilidad pensados para el futuro.',
    accent: '#ea580c',
    tag: 'Arquitectura',
    image: '/img/diseño_arquitectonico.png',
    features: ['Planos detallados', 'Renders 3D', 'Asesoría profesional'],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Supervisión de Obra',
    description: 'Garantizamos que cada proyecto se ejecute con los más altos estándares de calidad, seguridad y dentro de los tiempos establecidos.',
    accent: '#f97316',
    tag: 'Control',
    image: '/img/supervision.png',
    features: ['Control de calidad', 'Gestión de tiempos', 'Reportes detallados'],
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Consultoría',
    description: 'Asesoramiento experto en todas las fases de tu proyecto de construcción, desde la planificación estratégica hasta la ejecución final.',
    accent: '#ea580c',
    tag: 'Asesoría',
    image: '/img/consultoria.png',
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setSectionVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filteredServices = services.filter(service => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      service.title.toLowerCase().includes(query) ||
      service.description.toLowerCase().includes(query) ||
      service.features.some(feature => feature.toLowerCase().includes(query))
    );
  });

  const highlightText = (text: string) => {
    if (!searchQuery) return text;
    const escaped = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const parts = text.split(new RegExp(`(${escaped})`, 'gi'));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === searchQuery.toLowerCase() ? (
            <mark key={i} className="bg-amber-300 text-gray-900 px-0.5 rounded">{part}</mark>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    );
  };

  const active = filteredServices[Math.min(activeIndex, filteredServices.length - 1)];
  const activeNum = Math.min(activeIndex, filteredServices.length - 1);

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className="relative overflow-hidden"
      style={{ background: '#f8f8f6', minHeight: '100vh' }}
    >
      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-20 pt-24 sm:pt-20 lg:py-28"
        style={{
          opacity: sectionVisible ? 1 : 0,
          transform: sectionVisible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 0.8s ease, transform 0.8s ease',
        }}
      >
        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <div
              className="inline-flex items-center gap-2 mb-4 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.2em]"
              style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.25)', color: '#2563eb' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
              Nuestros Servicios
            </div>
            <h2
              className="font-black leading-[0.9]"
              style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)', color: '#111827', letterSpacing: '-0.03em' }}
            >
              Cada Obra,<br />
              Una Historia
            </h2>
          </div>
          <p className="text-gray-500 text-base max-w-xs leading-relaxed sm:text-right">
            Soluciones integrales de construcción con los más altos estándares de calidad
          </p>
        </div>

        {filteredServices.length === 0 && searchQuery ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No se encontraron servicios para &quot;{searchQuery}&quot;</p>
          </div>
        ) : active && (
          <>
            {/* ══ SPOTLIGHT: large hero image ══ */}
            <div
              className="relative w-full rounded-3xl overflow-hidden mb-8"
              style={{ height: 'clamp(420px, 65vh, 720px)' }}
              key={activeNum}
            >
              {/* Background image */}
              <img
                src={active.image}
                alt={active.title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                style={{ zIndex: 1 }}
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />

              {/* Placeholder (shown when image missing) */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                style={{ background: 'linear-gradient(135deg, #e8e3dc 0%, #d6cfc5 100%)', zIndex: 0 }}
              >
                <div className="w-16 h-16 opacity-20" style={{ color: '#2563eb' }}>{active.icon}</div>
                <span className="text-sm font-semibold text-gray-400">Agregar imagen: {active.image}</span>
              </div>

              {/* Gradient overlays */}
              <div
                className="absolute inset-0 z-[1] pointer-events-none"
                style={{
                  background: 'linear-gradient(to right, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.55) 35%, rgba(0,0,0,0.15) 65%, transparent 100%)',
                }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-32 z-[1] pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%)' }}
              />

              {/* Big number watermark */}
              <div
                className="absolute top-6 right-8 select-none pointer-events-none font-black leading-none z-[2]"
                style={{ fontSize: 'clamp(80px, 14vw, 160px)', color: 'rgba(255,255,255,0.07)', letterSpacing: '-0.05em' }}
              >
                0{activeNum + 1}
              </div>

              {/* Content overlay */}
              <div className="absolute inset-0 z-[2] flex flex-col justify-end p-8 sm:p-10 md:p-12 md:w-[60%]">
                {/* Tag */}
                <span
                  className="inline-flex self-start items-center gap-1.5 text-xs font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full mb-4"
                  style={{ background: 'rgba(37,99,235,0.25)', border: '1px solid rgba(37,99,235,0.5)', color: '#93c5fd' }}
                >
                  <span className="w-1 h-1 rounded-full bg-blue-400" />
                  {active.tag}
                </span>

                {/* Title */}
                <h3
                  className="font-black text-white leading-tight mb-3"
                  style={{ fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', letterSpacing: '-0.02em', textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}
                >
                  {active.title}
                </h3>

                {/* Description */}
                <p className="text-white/75 text-sm sm:text-base leading-relaxed mb-5 max-w-md">
                  {highlightText(active.description)}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2">
                  {active.features.map((f, fi) => (
                    <span
                      key={fi}
                      className="flex items-center gap-1.5 text-xs sm:text-sm px-3 py-1.5 rounded-full font-medium"
                      style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(8px)' }}
                    >
                      <span className="w-1 h-1 rounded-full flex-shrink-0 bg-blue-400" />
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Prev / Next arrows */}
              <button
                onClick={() => setActiveIndex((activeNum - 1 + filteredServices.length) % filteredServices.length)}
                className="absolute left-3 sm:left-4 top-4 sm:top-1/2 sm:-translate-y-1/2 z-[3] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.25)', backdropFilter: 'blur(8px)', color: '#fff' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 5l-7 7 7 7" />
                </svg>
              </button>
              <button
                onClick={() => setActiveIndex((activeNum + 1) % filteredServices.length)}
                className="absolute right-3 sm:right-4 top-4 sm:top-1/2 sm:-translate-y-1/2 z-[3] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                style={{ background: 'rgba(37,99,235,0.7)', border: '1px solid rgba(37,99,235,0.8)', backdropFilter: 'blur(8px)', color: '#fff' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* ══ THUMBNAIL STRIP ══ */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-3 mt-6">
              {filteredServices.map((service, index) => {
                const isActive = index === activeNum;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className="relative rounded-2xl overflow-hidden group focus:outline-none"
                    style={{ aspectRatio: '4/3' }}
                  >
                    {/* Thumbnail image */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      style={{ zIndex: 1 }}
                      onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                    />

                    {/* Placeholder */}
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      style={{ background: isActive ? 'rgba(37,99,235,0.12)' : '#e8e3dc', zIndex: 0 }}
                    >
                      <div className="w-6 h-6 opacity-30" style={{ color: '#2563eb' }}>{service.icon}</div>
                    </div>

                    {/* Overlay */}
                    <div
                      className="absolute inset-0 z-[1] transition-all duration-300"
                      style={{
                        background: isActive
                          ? 'linear-gradient(to top, rgba(37,99,235,0.75) 0%, rgba(0,0,0,0.3) 100%)'
                          : 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 100%)',
                      }}
                    />

                    {/* Active orange bottom bar */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-0.5 z-[3] transition-all duration-300"
                      style={{ background: isActive ? '#2563eb' : 'transparent' }}
                    />

                    {/* Service title */}
                    <div className="absolute inset-0 z-[2] flex flex-col justify-end p-2.5">
                      <span
                        className="text-white font-bold leading-tight"
                        style={{ fontSize: 'clamp(9px, 1.2vw, 11px)', textShadow: '0 1px 4px rgba(0,0,0,0.5)' }}
                      >
                        {service.title}
                      </span>
                      <span
                        className="text-white/60 font-mono mt-0.5"
                        style={{ fontSize: '9px' }}
                      >
                        0{index + 1}
                      </span>
                    </div>

                    {/* Active ring */}
                    {isActive && (
                      <div
                        className="absolute inset-0 z-[4] rounded-2xl pointer-events-none"
                        style={{ border: '2px solid #2563eb' }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
