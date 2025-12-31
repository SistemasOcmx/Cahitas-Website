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
  const [searchQuery, setSearchQuery] = useState('');

  const handlePageChange = (page: string) => {
    setActivePage(page);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'inicio':
        return (
          <>
            <Hero searchQuery={searchQuery} />
            <Footer />
          </>
        );
      case 'servicios':
        return (
          <>
            <Services searchQuery={searchQuery} />
            <Footer />
          </>
        );
      case 'experiencia':
        return (
          <>
            <Experience searchQuery={searchQuery} />
            <Footer />
          </>
        );
      case 'nosotros':
        return (
          <>
            <About searchQuery={searchQuery} />
            <Footer />
          </>
        );
      case 'contacto':
        return (
          <>
            <Contact searchQuery={searchQuery} />
            <Footer />
          </>
        );
      default:
        return (
          <>
            <Hero searchQuery={searchQuery} />
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex relative bg-white transition-colors duration-500">
      <Sidebar
        activePage={activePage}
        onPageChange={handlePageChange}
        onSearchChange={handleSearchChange}
        searchQuery={searchQuery}
      />
      <main className="flex-1 relative z-30 bg-white overflow-y-auto transition-colors duration-500">
        {renderPage()}
      </main>
    </div>
  );
}
