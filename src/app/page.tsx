'use client';

import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [activePage, setActivePage] = useState('inicio');

  const handlePageChange = (page: string) => {
    setActivePage(page);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'inicio':
        return (
          <>
            <Hero />
            <Footer />
          </>
        );
      case 'servicios':
        return (
          <>
            <Services />
            <Footer />
          </>
        );
      case 'experiencia':
        return (
          <>
            <Experience />
            <Footer />
          </>
        );
      case 'nosotros':
        return (
          <>
            <About />
            <Footer />
          </>
        );
      case 'contacto':
        return (
          <>
            <Contact />
            <Footer />
          </>
        );
      default:
        return (
          <>
            <Hero />
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex relative bg-white">
      {/* Fondo blanco detrás del sidebar - se adapta al ancho, oculto en móvil */}
      <div className="hidden lg:block fixed left-0 top-0 bottom-0 z-40 bg-white transition-all duration-300" style={{ width: 'var(--sidebar-width, 320px)' }} />
      
      {/* Elemento decorativo para esquina inferior - se adapta al ancho, oculto en móvil */}
      <div className="hidden lg:block fixed left-0 bottom-0 h-32 z-45 pointer-events-none transition-all duration-300" style={{ width: 'var(--sidebar-width, 320px)' }}>
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-slate-800 via-slate-800/50 to-transparent rounded-br-[48px]" />
      </div>
      
      <Sidebar activePage={activePage} onPageChange={handlePageChange} />
      <main className="flex-1 relative z-30 bg-white overflow-y-auto">
        {renderPage()}
      </main>
    </div>
  );
}
