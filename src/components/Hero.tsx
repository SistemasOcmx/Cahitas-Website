'use client';

import { useEffect, useState } from 'react';

interface HeroProps {
  searchQuery?: string;
  onNavigate?: (page: string) => void;
}

export default function Hero({ searchQuery = '', onNavigate }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const content = {
    badge: 'Construyendo desde 2021',
    title: 'Construyendo Tus Sueños con Excelencia',
    description: 'Somos una empresa constructora comprometida con la calidad y la innovación. Transformamos tus proyectos en realidades sólidas con los más altos estándares de construcción.',
    button1: 'Explorar Servicios',
    button2: 'Contactar Ahora',
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const highlightText = (text: string) => {
    if (!searchQuery) return text;
    const escaped = searchQuery.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const parts = text.split(new RegExp(`(${escaped})`, 'gi'));
    return (
      <>
        {parts.map((part, index) =>
          part.toLowerCase() === searchQuery.toLowerCase() ? (
            <mark key={index} className="bg-amber-400 text-gray-900 px-1 rounded">{part}</mark>
          ) : (
            <span key={index}>{part}</span>
          )
        )}
      </>
    );
  };

  const hasMatch = !searchQuery || Object.values(content).some(text =>
    text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!hasMatch && searchQuery) {
    return (
      <section id="inicio" className="relative min-h-screen flex items-center justify-center bg-white">
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No se encontraron resultados para &quot;{searchQuery}&quot;</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden flex flex-col"
    >
      {/* ── Full-bleed background image ── */}
      <img
        src="/img/fondo.png"
        alt="Obras de construcción"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none select-none"
        style={{ objectPosition: '58% center' }}
      />

      {/* ── Gradient layers over image ── */}
      {/* Left white wash: solid white left → fades to transparent right */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'linear-gradient(100deg, #ffffff 0%, #ffffff 26%, rgba(255,255,255,0.94) 38%, rgba(255,255,255,0.6) 52%, rgba(255,255,255,0.15) 68%, transparent 82%)',
        }}
      />
      {/* Top softener */}
      <div
        className="absolute top-0 left-0 right-0 h-48 z-[1] pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.5) 0%, transparent 100%)' }}
      />
      {/* Bottom dark scrim for stats bar readability */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[1] pointer-events-none"
        style={{ height: '240px', background: 'linear-gradient(to top, rgba(8,12,20,0.72) 0%, rgba(8,12,20,0.2) 55%, transparent 100%)' }}
      />

      {/* ── Orange top accent bar ── */}
      <div
        className="absolute top-0 left-0 right-0 h-1 z-30 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #2563eb 0%, #06b6d4 50%, #2563eb 100%)' }}
      />

      {/* ── Dot grid (subtle, only visible over white zone) ── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.045) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* ── Mouse-tracking glow ── */}
      <div
        className="absolute pointer-events-none z-[2]"
        style={{
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 65%)',
          left: `${mousePos.x}%`,
          top: `${mousePos.y}%`,
          transform: 'translate(-50%, -50%)',
          transition: 'left 1.6s ease-out, top 1.6s ease-out',
        }}
      />

      {/* ══ MAIN CONTENT ══ */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 pt-20 sm:pt-24 pb-12">

        {/* Text block — left-anchored, max-w so it sits over the white gradient zone */}
        <div className="w-full max-w-[600px]">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-7"
            style={{
              background: 'rgba(37,99,235,0.07)',
              border: '1px solid rgba(37,99,235,0.22)',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s ease 0.05s, transform 0.6s ease 0.05s',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0"
              style={{ boxShadow: '0 0 8px rgba(37,99,235,0.9)', animation: 'pulse 2s ease-in-out infinite' }}
            />
            <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.22em]">
              {highlightText(content.badge)}
            </span>
          </div>

          {/* ── Headline ── */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
            }}
          >
            <h1 className="font-black tracking-tighter leading-tight mb-7"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)', color: '#111827' }}
            >
              {highlightText('Construyendo Tus Sueños con Excelencia')}
            </h1>
          </div>

          {/* Description */}
          <p
            className="text-base sm:text-[17px] leading-relaxed mb-8 max-w-[440px]"
            style={{
              color: '#4b5563',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.7s ease 0.35s, transform 0.7s ease 0.35s',
            }}
          >
            {highlightText(content.description)}
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-7"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s',
            }}
          >
            {/* Primary */}
            <button
              className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 text-white font-bold text-sm rounded-2xl transition-all duration-300 overflow-hidden hover:-translate-y-0.5"
              style={{ background: 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)', boxShadow: '0 4px 24px rgba(37,99,235,0.45)' }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 36px rgba(37,99,235,0.65)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 24px rgba(37,99,235,0.45)'; }}
              onClick={() => onNavigate?.('servicios')}
            >
              <span className="relative z-10">{highlightText(content.button1)}</span>
              <svg className="relative z-10 w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <div
                className="absolute inset-0 -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700 z-0"
                style={{ background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.15), transparent)' }}
              />
            </button>

            {/* Secondary — frosted glass, works over gradient + image */}
            <button
              className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 font-semibold text-sm rounded-2xl transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'rgba(255,255,255,0.82)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.75)',
                color: '#374151',
                boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.95)';
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(37,99,235,0.25)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.82)';
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.75)';
              }}
              onClick={() => onNavigate?.('contacto')}
            >
              {highlightText(content.button2)}
              <svg className="w-4 h-4 opacity-40 group-hover:opacity-90 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </div>


        </div>


      </div>



      {/* ── Scroll indicator ── */}
      <div className="relative z-20 flex justify-center pb-8">
        <div
          className="flex flex-col items-center gap-2"
          style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.8s ease 1.2s',
          }}
        >
          {/* Mouse icon */}
          <div
            className="relative flex items-start justify-center"
            style={{
              width: '26px',
              height: '40px',
              borderRadius: '13px',
              border: '2px solid rgba(255,255,255,0.55)',
            }}
          >
            {/* Animated scroll wheel dot */}
            <div
              style={{
                width: '4px',
                height: '8px',
                borderRadius: '2px',
                background: '#2563eb',
                marginTop: '6px',
                animation: 'scrollWheel 1.6s ease-in-out infinite',
              }}
            />
          </div>
          <span
            className="text-[10px] uppercase font-medium"
            style={{ color: 'rgba(255,255,255,0.45)', letterSpacing: '0.25em' }}
          >
            Scroll
          </span>
          <style>{`
            @keyframes scrollWheel {
              0%   { opacity: 1; transform: translateY(0); }
              60%  { opacity: 0; transform: translateY(10px); }
              61%  { opacity: 0; transform: translateY(0); }
              100% { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}
