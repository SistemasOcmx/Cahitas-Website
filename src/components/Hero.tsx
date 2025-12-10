'use client';

interface HeroProps {
  searchQuery?: string;
}

export default function Hero({ searchQuery = '' }: HeroProps) {
  const content = {
    badge: '✨ Bienvenido a Cahita Constructora',
    title: 'Construyendo Tus Sueños con Excelencia',
    description: 'Somos una empresa constructora comprometida con la calidad y la innovación. Transformamos tus proyectos en realidades sólidas con los más altos estándares de construcción.',
    button1: 'Explorar Servicios',
    button2: 'Contactar Ahora'
  };

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
      className="relative min-h-screen flex items-center justify-center bg-white py-12 sm:py-16 md:py-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/img/fondo.png" 
          alt="Background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center w-full">
        <div className="mb-4 sm:mb-6 inline-block">
          <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white/90 backdrop-blur-sm border border-white rounded-full text-xs sm:text-sm font-medium text-blue-600 shadow-lg">
            {highlightText(content.badge)}
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] animate-fade-in leading-tight">
          {highlightText(content.title)}
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2">
          {highlightText(content.description)}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2">
          <button className="w-full sm:w-auto group px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold text-sm sm:text-base md:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
            {highlightText(content.button1)}
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
            </svg>
          </button>

          <button className="w-full sm:w-auto px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-white border-2 border-blue-200 text-blue-600 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-white hover:shadow-xl transition-all duration-300">
            {highlightText(content.button2)}
          </button>
        </div>

        {/* Floating indicators */}
        <div className="mt-8 sm:mt-12 md:mt-16 flex justify-center gap-3 sm:gap-6 md:gap-8 flex-wrap px-2">
          {[
            { number: '5+', label: 'Años de Experiencia' },
            { number: '18+', label: 'Proyectos Completados' },
            { number: '98%', label: 'Clientes Satisfechos' },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-4 sm:p-5 md:p-6 bg-white rounded-xl sm:rounded-2xl border border-blue-200 hover:scale-105 transition-transform duration-300 shadow-lg min-w-[90px] sm:min-w-[110px]"
            >
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                {highlightText(stat.number)}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">
                {highlightText(stat.label)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
