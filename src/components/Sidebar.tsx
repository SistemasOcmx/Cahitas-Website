'use client';

import { useState } from 'react';

interface SidebarProps {
  activePage: string;
  onPageChange: (page: string) => void;
  onSearchChange: (query: string) => void;
  searchQuery: string;
}

export default function Sidebar({ activePage, onPageChange, onSearchChange, searchQuery }: SidebarProps) {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    if (!isCollapsed) {
      document.body.classList.add('sidebar-collapsed');
    } else {
      document.body.classList.remove('sidebar-collapsed');
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
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
      <aside className={`fixed left-0 top-0 bottom-0 z-[60] group transition-all duration-500 ${isCollapsed ? 'w-20' : 'w-80'} ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        {/* Background con transición de color */}
        <div className={`absolute inset-0 transition-colors duration-500 rounded-tr-3xl rounded-br-3xl shadow-2xl ${
          isDarkMode 
            ? 'bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 border-r border-slate-700' 
            : 'bg-gradient-to-b from-white via-gray-50 to-white border-r border-gray-200'
        }`}>
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col py-6 px-4">
          {/* Header con logo y botón colapsar */}
          <div className="relative flex items-center justify-between mb-6 px-2">
            {/* Logo y Nombre */}
            <div className={`flex items-center gap-3 transition-all duration-300 ${isCollapsed ? 'flex-col' : 'flex-row'}`}>
              {/* Logo - siempre visible */}
              <div className={`bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-300 flex-shrink-0 ${
                isDarkMode ? 'shadow-blue-500/50' : 'shadow-blue-500/30'
              } ${isCollapsed ? 'w-12 h-12' : 'w-14 h-14'}`}>
                <span className={`text-white font-bold transition-all duration-300 ${isCollapsed ? 'text-2xl' : 'text-3xl'}`}>C</span>
              </div>
              
              {/* Nombre y subtítulo - solo visible cuando NO está colapsado */}
              <div className={`transition-all duration-300 overflow-hidden ${isCollapsed ? 'opacity-0 w-0 h-0' : 'opacity-100 w-auto'}`}>
                <h1 className={`text-lg font-bold transition-colors duration-300 leading-tight ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Cahita</h1>
                <p className={`text-xs transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>Solutions</p>
              </div>
            </div>

            {/* Botón colapsar - solo visible en desktop */}
            <button
              onClick={toggleSidebar}
              className={`hidden lg:flex w-8 h-8 rounded-lg items-center justify-center transition-all duration-300 flex-shrink-0 ${
                isDarkMode 
                  ? 'bg-slate-700 hover:bg-slate-600 text-gray-300' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
            >
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          {/* Barra de búsqueda */}
          <div className={`mb-6 transition-all duration-300 ${isCollapsed ? 'opacity-0 scale-0 h-0' : 'opacity-100 scale-100'}`}>
            <div className="relative px-2">
              <input
                type="text"
                placeholder="Buscar en esta sección..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className={`w-full px-4 py-2.5 rounded-xl text-sm transition-all duration-300 focus:outline-none focus:ring-2 ${
                  isDarkMode
                    ? 'bg-slate-700 text-white placeholder-gray-400 focus:ring-blue-500 border border-slate-600'
                    : 'bg-gray-100 text-gray-900 placeholder-gray-500 focus:ring-blue-400 border border-gray-200'
                }`}
              />
              <svg
                className={`absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>          {/* Navegación principal */}
          <nav className="flex-1 overflow-y-auto overflow-x-hidden px-2 flex items-center">
            <div className={`space-y-2 w-full transition-all duration-300 ${isCollapsed ? 'px-1' : 'px-2'}`}>
              {menuItems.map((item) => {
                const isActive = activePage === item.id;
                const isHovered = hoveredItem === item.id;

                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      onPageChange(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`group/item relative w-full flex items-center rounded-xl transition-all duration-300 ${
                      isCollapsed ? 'justify-center p-3' : 'gap-4 px-4 py-3.5'
                    } ${
                      isActive
                        ? isDarkMode
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/50'
                          : 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                        : isDarkMode
                          ? 'text-gray-300 hover:bg-slate-700'
                          : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    title={isCollapsed ? item.label : ''}
                  >
                    {/* Indicador de activo para modo expandido */}
                    {isActive && !isCollapsed && (
                      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-10 bg-white rounded-r-full shadow-lg" />
                    )}

                    {/* Indicador de punto activo para modo colapsado */}
                    {isActive && isCollapsed && (
                      <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full shadow-lg" />
                    )}

                    {/* Icono */}
                    <div className={`flex-shrink-0 transition-all duration-300 ${
                      isHovered ? 'scale-110 rotate-3' : 'scale-100'
                    } ${isActive ? 'drop-shadow-lg' : ''}`}>
                      {item.icon}
                    </div>

                    {/* Label */}
                    <span className={`font-semibold text-sm transition-all duration-300 overflow-hidden whitespace-nowrap ${
                      isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'
                    }`}>
                      {item.label}
                    </span>

                    {/* Efecto de brillo en hover */}
                    {isHovered && !isCollapsed && (
                      <div className="absolute right-3 w-2 h-2 bg-white rounded-full animate-ping" />
                    )}

                    {/* Tooltip para modo colapsado */}
                    {isCollapsed && isHovered && (
                      <div className={`absolute left-full ml-4 px-4 py-2 rounded-xl text-sm whitespace-nowrap z-50 shadow-2xl transition-colors duration-300 ${
                        isDarkMode
                          ? 'bg-slate-800 text-white border border-slate-700'
                          : 'bg-white text-gray-900 border border-gray-200'
                      }`}>
                        {item.label}
                        <div className={`absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent ${
                          isDarkMode ? 'border-r-slate-800' : 'border-r-white'
                        }`} />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </nav>

          {/* Controles de configuración */}
          <div className={`px-4 mt-6 pb-4 transition-all duration-300 ${isCollapsed ? 'opacity-0 scale-0 h-0' : 'opacity-100 scale-100'}`}>
            {/* Separador */}
            <div className={`h-px mb-6 transition-colors duration-300 ${
              isDarkMode ? 'bg-slate-700' : 'bg-gray-200'
            }`} />
            
            {/* Toggle Dark Mode */}
            <div className={`flex items-center justify-between p-4 rounded-xl transition-all duration-300 ${
              isDarkMode
                ? 'bg-slate-700 hover:bg-slate-600'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                  isDarkMode
                    ? 'bg-yellow-500 text-slate-900'
                    : 'bg-slate-700 text-yellow-400'
                }`}>
                  {isDarkMode ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                    </svg>
                  )}
                </div>
                <div>
                  <p className={`text-sm font-semibold transition-colors duration-300 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {isDarkMode ? 'Modo Oscuro' : 'Modo Claro'}
                  </p>
                  <p className={`text-xs transition-colors duration-300 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    Cambiar tema
                  </p>
                </div>
              </div>
              <button
                onClick={toggleDarkMode}
                className={`relative w-14 h-7 rounded-full transition-all duration-300 ${
                  isDarkMode ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              >
                <div className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300 ${
                  isDarkMode ? 'translate-x-7' : 'translate-x-0'
                }`} />
              </button>
            </div>

            {/* Redes sociales */}
            <div className="mt-4">
              <p className={`text-xs font-medium mb-3 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                Síguenos
              </p>
              <div className="flex gap-2 justify-center">
                {[
                  { 
                    label: 'Facebook',
                    gradient: 'from-blue-600 to-blue-500',
                    icon: (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    )
                  },
                  { 
                    label: 'LinkedIn',
                    gradient: 'from-cyan-500 to-blue-600',
                    icon: (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    )
                  },
                  { 
                    label: 'Instagram',
                    gradient: 'from-pink-500 to-orange-500',
                    icon: (
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    )
                  },
                ].map((social, index) => (
                  <button
                    key={index}
                    className={`w-9 h-9 rounded-lg bg-gradient-to-br ${social.gradient} flex items-center justify-center text-white transition-all duration-300 shadow-md hover:shadow-lg hover:scale-110`}
                    aria-label={social.label}
                    title={social.label}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Spacer for content - Hidden on mobile */}
      <div className={`hidden lg:block flex-shrink-0 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-80'}`} />
    </>
  );
}
