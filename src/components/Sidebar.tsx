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
      icon: (
        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: 'servicios',
      label: 'Servicios',
      icon: (
        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: 'experiencia',
      label: 'Experiencia',
      icon: (
        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      id: 'nosotros',
      label: 'Nosotros',
      icon: (
        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      id: 'contacto',
      label: 'Contacto',
      icon: (
        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* ── Mobile toggle button ── */}
      <button
        onClick={toggleMobileMenu}
        className="fixed top-4 left-4 z-[70] lg:hidden w-11 h-11 rounded-xl flex items-center justify-center shadow-md transition-all duration-300 bg-white"
        style={{
          border: '1px solid #e5e7eb',
        }}
      >
        {isMobileMenuOpen ? (
          <svg className="w-5 h-5" fill="none" stroke="#2563eb" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="#2563eb" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* ── Mobile overlay ── */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[55] lg:hidden"
          style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
          onClick={toggleMobileMenu}
        />
      )}

      {/* ── Sidebar ── */}
      <aside
        className={`fixed left-0 top-0 bottom-0 z-[60] transition-all duration-500 ${
          isCollapsed ? 'w-[72px]' : 'w-[280px]'
        } ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #ffffff 0%, #fafafa 60%, #ffffff 100%)',
            borderRight: '1px solid #e5e7eb',
            boxShadow: '4px 0 20px rgba(0,0,0,0.05)',
          }}
        />

        {/* Subtle vertical orange accent */}
        <div
          className="absolute right-0 top-[20%] bottom-[20%] w-px"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(37,99,235,0.2), transparent)' }}
        />

        {/* Content */}
        <div className="relative h-full flex flex-col pt-20 pb-6 lg:pt-6">

          {/* ── Logo area ── */}
          {isCollapsed ? (
            <div className="flex flex-col items-center mb-8 px-3 gap-3">
              {/* Collapse toggle on top */}
              <button
                onClick={toggleSidebar}
                className="hidden lg:flex w-8 h-8 rounded-lg items-center justify-center flex-shrink-0 transition-all duration-300"
                style={{
                  background: '#f3f4f6',
                  border: '1px solid #e5e7eb',
                  color: '#9ca3af',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = 'rgba(37,99,235,0.08)';
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(37,99,235,0.3)';
                  (e.currentTarget as HTMLButtonElement).style.color = '#2563eb';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = '#f3f4f6';
                  (e.currentTarget as HTMLButtonElement).style.borderColor = '#e5e7eb';
                  (e.currentTarget as HTMLButtonElement).style.color = '#9ca3af';
                }}
              >
                <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              {/* Logo bigger below */}
              <div
                className="relative flex-shrink-0 rounded-2xl overflow-hidden"
                style={{
                  width: '46px',
                  height: '46px',
                  boxShadow: '0 0 0 2px rgba(37,99,235,0.35), 0 0 20px rgba(37,99,235,0.18)',
                }}
              >
                <img src="/img/Logo.jpeg" alt="Cahita Logo" className="w-full h-full object-cover" />
              </div>
            </div>
          ) : (
            <div className="flex items-center mb-8 px-5 justify-between">
              <div className="flex items-center gap-3 min-w-0">
                {/* Logo ring */}
                <div
                  className="relative flex-shrink-0 rounded-2xl overflow-hidden"
                  style={{
                    width: '44px',
                    height: '44px',
                    boxShadow: '0 0 0 1px rgba(37,99,235,0.3), 0 0 20px rgba(37,99,235,0.12)',
                  }}
                >
                  <img src="/img/Logo.jpeg" alt="Cahita Logo" className="w-full h-full object-cover" />
                </div>
                {/* Wordmark */}
                <div className="whitespace-nowrap">
                  <div
                    className="font-black text-base leading-tight"
                    style={{ color: '#111827' }}
                  >
                    Cahita
                  </div>
                  <div
                    className="text-[10px] font-semibold uppercase tracking-[0.2em]"
                    style={{ color: '#2563eb' }}
                  >
                    Constructora
                  </div>
                </div>
              </div>
              {/* Collapse toggle */}
              <button
                onClick={toggleSidebar}
                className="hidden lg:flex w-7 h-7 rounded-lg items-center justify-center flex-shrink-0 transition-all duration-300"
                style={{
                  background: '#f3f4f6',
                  border: '1px solid #e5e7eb',
                  color: '#9ca3af',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = 'rgba(37,99,235,0.08)';
                  (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(37,99,235,0.3)';
                  (e.currentTarget as HTMLButtonElement).style.color = '#2563eb';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.background = '#f3f4f6';
                  (e.currentTarget as HTMLButtonElement).style.borderColor = '#e5e7eb';
                  (e.currentTarget as HTMLButtonElement).style.color = '#9ca3af';
                }}
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
          )}

          {/* ── Search ── */}
          <div
            className="mx-5 mb-6 overflow-hidden transition-all duration-300"
            style={{ maxHeight: isCollapsed ? '0px' : '52px', opacity: isCollapsed ? 0 : 1 }}
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={e => onSearchChange(e.target.value)}
                className="w-full pl-4 pr-9 py-2.5 rounded-xl text-sm focus:outline-none transition-all duration-300"
                style={{
                  background: '#f3f4f6',
                  border: '1px solid #e5e7eb',
                  color: '#111827',
                }}
                onFocus={e => {
                  (e.target as HTMLInputElement).style.borderColor = 'rgba(37,99,235,0.4)';
                  (e.target as HTMLInputElement).style.background = 'rgba(37,99,235,0.04)';
                }}
                onBlur={e => {
                  (e.target as HTMLInputElement).style.borderColor = '#e5e7eb';
                  (e.target as HTMLInputElement).style.background = '#f3f4f6';
                }}
              />
              <svg
                className="absolute right-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 pointer-events-none"
                fill="none"
                stroke="#9ca3af"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Section label */}
          {!isCollapsed && (
            <div
              className="px-5 mb-3 text-[10px] font-bold uppercase tracking-[0.25em]"
              style={{ color: '#9ca3af' }}
            >
              Navegación
            </div>
          )}

          {/* ── Nav items ── */}
          <nav className="flex-1 overflow-y-auto overflow-x-hidden px-3 space-y-1">
            {menuItems.map(item => {
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
                  title={isCollapsed ? item.label : ''}
                  className={`relative w-full flex items-center rounded-xl transition-all duration-200 ${
                    isCollapsed ? 'justify-center p-3' : 'gap-3.5 px-3.5 py-3'
                  }`}
                  style={
                    isActive
                      ? {
                          background: 'linear-gradient(135deg, rgba(37,99,235,0.1) 0%, rgba(37,99,235,0.05) 100%)',
                          border: '1px solid rgba(37,99,235,0.2)',
                          color: '#2563eb',
                          boxShadow: '0 2px 10px rgba(37,99,235,0.08)',
                        }
                      : isHovered
                      ? {
                          background: '#f3f4f6',
                          border: '1px solid #e5e7eb',
                          color: '#374151',
                        }
                      : {
                          background: 'transparent',
                          border: '1px solid transparent',
                          color: '#6b7280',
                        }
                  }
                >
                  {/* Active left glow bar */}
                  {isActive && !isCollapsed && (
                    <div
                      className="absolute left-0 top-1/2 -translate-y-1/2 rounded-r-full"
                      style={{ 
                        width: '3px',
                        height: '60%',
                        background: 'linear-gradient(to bottom, #2563eb, #06b6d4)',
                        boxShadow: '0 0 10px rgba(37,99,235,0.7)',
                      }}
                    />
                  )}

                  {/* Active dot for collapsed */}
                  {isActive && isCollapsed && (
                    <div
                      className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full"
                      style={{
                        background: '#2563eb',
                        boxShadow: '0 0 6px rgba(37,99,235,0.9)',
                      }}
                    />
                  )}

                  {/* Icon */}
                  <div
                    className="flex-shrink-0 transition-all duration-200"
                    style={{ transform: isCollapsed ? 'scale(1.4)' : isHovered && !isActive ? 'translateX(2px)' : 'none' }}
                  >
                    {item.icon}
                  </div>

                  {/* Label */}
                  <span
                    className="font-semibold text-sm overflow-hidden whitespace-nowrap transition-all duration-300"
                    style={{ width: isCollapsed ? '0px' : 'auto', opacity: isCollapsed ? 0 : 1 }}
                  >
                    {item.label}
                  </span>

                  {/* Tooltip for collapsed */}
                  {isCollapsed && isHovered && (
                    <div
                      className="absolute left-full ml-3 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap z-50 pointer-events-none bg-white"
                      style={{
                        border: '1px solid #e5e7eb',
                        color: '#374151',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                      }}
                    >
                      {item.label}
                      <div
                        className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent"
                        style={{ borderRightColor: '#ffffff' }}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </nav>

          {/* ── Bottom section ── */}
          <div
            className="mx-5 mt-6 overflow-hidden transition-all duration-300"
            style={{ maxHeight: isCollapsed ? '0px' : '200px', opacity: isCollapsed ? 0 : 1 }}
          >
            {/* Divider */}
            <div
              className="mb-5"
              style={{ height: '1px', background: 'linear-gradient(to right, transparent, #e5e7eb, transparent)' }}
            />

            {/* Social links */}
            <div className="mb-5">
              <p
                className="text-[10px] font-bold uppercase tracking-[0.25em] mb-3"
                style={{ color: '#9ca3af' }}
              >
                Síguenos
              </p>
              <div className="flex gap-2">
                {[
                  {
                    label: 'Facebook',
                    color: '#1877f2',
                    icon: (
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    ),
                  },
                  {
                    label: 'Instagram',
                    color: '#e1306c',
                    icon: (
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    ),
                  },
                  {
                    label: 'LinkedIn',
                    color: '#0a66c2',
                    icon: (
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                  },
                ].map((social, i) => (
                  <button
                    key={i}
                    aria-label={social.label}
                    title={social.label}
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{
                      background: '#f3f4f6',
                      border: '1px solid #e5e7eb',
                      color: '#9ca3af',
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLButtonElement).style.background = `${social.color}18`;
                      (e.currentTarget as HTMLButtonElement).style.borderColor = `${social.color}44`;
                      (e.currentTarget as HTMLButtonElement).style.color = social.color;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLButtonElement).style.background = '#f3f4f6';
                      (e.currentTarget as HTMLButtonElement).style.borderColor = '#e5e7eb';
                      (e.currentTarget as HTMLButtonElement).style.color = '#9ca3af';
                    }}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>

            {/* copyright */}
            <p
              className="text-[10px] leading-relaxed"
              style={{ color: '#d1d5db' }}
            >
              © 2026 Cahita Constructora
            </p>
          </div>
        </div>
      </aside>

      {/* Desktop spacer */}
      <div
        className={`hidden lg:block flex-shrink-0 transition-all duration-500 ${
          isCollapsed ? 'w-[72px]' : 'w-[280px]'
        }`}
      />
    </>
  );
}
