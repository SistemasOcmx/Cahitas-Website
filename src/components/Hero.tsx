'use client';

import { useEffect, useState } from 'react';

interface HeroProps {
  searchQuery?: string;
}

export default function Hero({ searchQuery = '' }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number }>>([]);

  const content = {
    badge: '✨ Bienvenido a Cahita Constructora',
    title: 'Construyendo Tus Sueños con Excelencia',
    description: 'Somos una empresa constructora comprometida con la calidad y la innovación. Transformamos tus proyectos en realidades sólidas con los más altos estándares de construcción.',
    button1: 'Explorar Servicios',
    button2: 'Contactar Ahora'
  };

  // Generar partículas flotantes
  useEffect(() => {
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 15,
    }));
    setParticles(newParticles);
  }, []);

  // Seguir el mouse para efecto parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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

  // Verificar si hay coincidencias con la búsqueda
  const hasMatch = !searchQuery || Object.values(content).some(text =>
    text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!hasMatch && searchQuery) {
    return (
      <section
        id="inicio"
        className="relative min-h-screen flex items-center justify-center bg-white py-12 sm:py-16 md:py-20"
      >
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No se encontraron resultados para "{searchQuery}"</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-slate-900 overflow-hidden py-12 sm:py-16 md:py-20"
    >
      {/* Background Image with Parallax - Posicionada a la izquierda */}
      <div
        className="absolute inset-0 z-0 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.1)`,
        }}
      >
        <img
          src="/img/fondo.png"
          alt="Background"
          className="w-full h-full object-cover opacity-70"
          style={{ objectPosition: '35% center' }}
        />
      </div>

      {/* Gradient Overlay - Más sutil */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-slate-900/30 to-slate-900/60 z-[1]" />

      {/* Animated Particles */}
      <div className="absolute inset-0 z-[2] overflow-hidden">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-blue-400/30 blur-sm animate-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse z-[2]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse z-[2]" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center w-full">
        {/* Title with gradient and animation - SIN BADGE */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent animate-fade-in leading-tight drop-shadow-2xl">
          {highlightText(content.title)}
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed px-2 animate-fade-in font-light" style={{ animationDelay: '0.2s' }}>
          {highlightText(content.description)}
        </p>

        {/* Buttons with advanced effects */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 px-2 mb-12 sm:mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <button className="relative w-full sm:w-auto group px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white rounded-full font-bold text-sm sm:text-base md:text-lg shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/80 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden">
            {/* Shimmer effect */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />

            {/* Ripple effect on hover */}
            <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />

            <span className="relative">{highlightText(content.button1)}</span>
            <svg
              className="relative w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
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

          <button className="relative w-full sm:w-auto group px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-white/20 hover:border-white/50 hover:shadow-2xl transition-all duration-300 overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
            <span className="relative">{highlightText(content.button2)}</span>
          </button>
        </div>

        {/* Stats with glassmorphism */}
        <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 flex-wrap px-2 mb-16 sm:mb-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          {[
            { number: '5+', label: 'Años de Experiencia' },
            { number: '18+', label: 'Proyectos Completados' },
            { number: '98%', label: 'Clientes Satisfechos' },
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative p-5 sm:p-6 md:p-8 bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl border border-white/20 hover:bg-white/20 hover:scale-110 hover:border-white/40 transition-all duration-500 shadow-xl hover:shadow-2xl min-w-[110px] sm:min-w-[140px] overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/0 via-cyan-400/0 to-blue-400/0 group-hover:from-blue-400/20 group-hover:via-cyan-400/20 group-hover:to-blue-400/20 transition-all duration-500 rounded-2xl sm:rounded-3xl" />

              <div className="relative">
                <div className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent mb-2">
                  {highlightText(stat.number)}
                </div>
                <div className="text-xs sm:text-sm text-blue-100 font-medium">
                  {highlightText(stat.label)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator with mouse icon */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block">
        <div className="flex flex-col items-center gap-3">
          {/* Mouse Icon */}
          <div className="relative w-7 h-11 border-2 border-white/60 rounded-full p-1.5">
            {/* Mouse wheel */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-white/60 rounded-full animate-bounce"
              style={{ animationDuration: '1.5s' }} />
          </div>

          {/* Arrow down */}
          <svg
            className="w-5 h-5 text-white/60 animate-bounce"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ animationDuration: '1.5s', animationDelay: '0.2s' }}
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
