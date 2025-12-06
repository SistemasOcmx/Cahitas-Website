'use client';

import { useState } from 'react';

interface SidebarProps {
  activePage: string;
  onPageChange: (page: string) => void;
}

export default function Sidebar({ activePage, onPageChange }: SidebarProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    if (!isCollapsed) {
      document.body.classList.add('sidebar-collapsed');
    } else {
      document.body.classList.remove('sidebar-collapsed');
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { 
      id: 'inicio', 
      label: 'Inicio', 
      color: 'from-blue-400 to-cyan-400',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      id: 'servicios', 
      label: 'Servicios', 
      color: 'from-cyan-400 to-teal-400',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      id: 'experiencia', 
      label: 'Experiencia', 
      color: 'from-teal-400 to-emerald-400',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    { 
      id: 'nosotros', 
      label: 'Nosotros', 
      color: 'from-emerald-400 to-sky-400',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    { 
      id: 'contacto', 
      label: 'Contacto', 
      color: 'from-sky-400 to-indigo-400',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="fixed top-4 left-4 z-[70] lg:hidden w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center shadow-lg"
      >
        {isMobileMenuOpen ? (
          <svg
            className="w-6 h-6 text-blue-400 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-blue-400 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[55] lg:hidden"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed left-0 top-0 bottom-0 z-[60] group transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-80'} ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        {/* Background */}
        <div className="absolute inset-0 bg-slate-800 rounded-tr-[48px] rounded-br-[48px] border-r border-slate-700">
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col py-4 px-4">
          {/* Collapse Button - Hidden on Mobile */}
          <button
            onClick={toggleSidebar}
            className="hidden lg:flex absolute top-4 right-4 w-10 h-10 items-center justify-center bg-slate-700 hover:bg-slate-600 rounded-xl transition-all duration-300 z-10 group/btn"
          >
            <svg
              className={`w-5 h-5 text-blue-400 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 12h14m0 0l-7-7m7 7l-7 7"
              />
            </svg>
          </button>

          {/* Header con efecto brillante */}
          <div className={`px-2 mb-2 text-center relative flex flex-col items-center justify-center transition-all duration-300 ${isCollapsed ? 'opacity-0 scale-0 h-0' : 'opacity-100 scale-100'}`}>
          <h2 className="text-gray-400 text-3xl font-bold">
            Cahita
          </h2>
          <div className="h-0.5 w-16 mx-auto mt-1 mb-8 bg-blue-400 rounded-full" />
          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-blue-400 shadow-lg">
            <img 
              src="/logo.jpg" 
              alt="Cahitas Logo" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>          {/* Navigation Menu con efectos mejorados */}
          <nav className="flex-1 flex items-center my-2">
            <ul className="space-y-4 w-full">
              {menuItems.map((item, index) => (
                <li
                  key={item.id}
                  style={{ animationDelay: `${index * 50}ms` }}
                  className="animate-fade-in"
                >
                  <button
                    onClick={() => {
                      onPageChange(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`group/item w-full flex items-center ${isCollapsed ? 'justify-center' : 'gap-4'} py-3 px-4 transition-all duration-300 relative ${
                      activePage === item.id
                        ? 'text-white scale-105'
                        : 'text-gray-400 hover:text-white'
                    }`}
                    title={isCollapsed ? item.label : ''}
                  >
                    {/* Active indicator bar */}
                    {activePage === item.id && !isCollapsed && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-12 bg-blue-400 rounded-r-full" />
                    )}

                    {/* Active indicator dot for collapsed */}
                    {activePage === item.id && isCollapsed && (
                      <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full" />
                    )}

                    {/* Icon with animation */}
                    <div
                      className={`relative z-10 transition-all duration-300 ${
                        activePage === item.id
                          ? 'scale-110 drop-shadow-lg'
                          : 'group-hover/item:scale-110'
                      } ${isCollapsed ? 'scale-125' : ''}`}
                    >
                      {item.icon}
                    </div>

                    {/* Label with gradient on active */}
                    <span
                      className={`relative z-10 font-semibold tracking-wide transition-all duration-300 overflow-hidden whitespace-nowrap ${
                        activePage === item.id
                          ? 'text-xl text-white'
                          : 'text-base'
                      } ${isCollapsed ? 'w-0 opacity-0' : 'w-auto opacity-100'}`}
                    >
                      {item.label}
                    </span>

                    {/* Arrow indicator */}
                    {activePage === item.id && !isCollapsed && (
                      <svg
                        className="relative z-10 w-5 h-5 ml-auto animate-pulse"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    )}

                    {/* Tooltip on collapsed state */}
                    {isCollapsed && hoveredItem === item.id && (
                      <div className="absolute left-full ml-4 px-3 py-2 bg-slate-700 text-white text-sm rounded-lg whitespace-nowrap shadow-xl z-50 pointer-events-none">
                        {item.label}
                        <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-slate-700" />
                      </div>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Links */}
          <div className={`px-4 mt-6 pb-4 transition-all duration-300 ${isCollapsed ? 'opacity-0 scale-0 h-0' : 'opacity-100 scale-100'}`}>
            <div className="h-px bg-slate-600 mb-4" />
            <div className="flex gap-3 justify-center">
              {[
                { 
                  label: 'Facebook',
                  color: 'from-blue-500 to-blue-600',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  )
                },
                { 
                  label: 'LinkedIn',
                  color: 'from-cyan-400 to-blue-500',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  )
                },
                { 
                  label: 'Instagram',
                  color: 'from-pink-400 to-rose-400',
                  icon: (
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  )
                },
              ].map((social, index) => (
                <button
                  key={index}
                  className={`w-11 h-11 rounded-xl bg-gradient-to-r ${social.color} flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all duration-300`}
                  aria-label={social.label}
                  title={social.label}
                >
                  {social.icon}
                </button>
              ))}
            </div>
          </div>
        </div>
      </aside>

      {/* Spacer for content - Hidden on mobile */}
      <div className={`hidden lg:block flex-shrink-0 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-80'}`} />
    </>
  );
}
