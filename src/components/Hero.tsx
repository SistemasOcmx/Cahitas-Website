'use client';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-white py-12 sm:py-16 md:py-20"
    >
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center w-full">
        <div className="mb-4 sm:mb-6 inline-block">
          <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-white border border-blue-200 rounded-full text-xs sm:text-sm font-medium text-blue-600">
            ✨ Bienvenido a Cahita
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent animate-fade-in leading-tight">
          TÍTULO PRINCIPAL
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 mb-6 sm:mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed px-2">
          Descripción principal de la empresa. Aquí va el texto descriptivo que explica los servicios y la propuesta de valor.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2">
          <button className="w-full sm:w-auto group px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full font-semibold text-sm sm:text-base md:text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
            Explorar Servicios
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
            Ver Portafolio
          </button>
        </div>

        {/* Floating indicators */}
        <div className="mt-8 sm:mt-12 md:mt-16 flex justify-center gap-3 sm:gap-6 md:gap-8 flex-wrap px-2">
          {[
            { number: 'NUM 1', label: 'Estadística 1' },
            { number: 'NUM 2', label: 'Estadística 2' },
            { number: 'NUM 3', label: 'Estadística 3' },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-4 sm:p-5 md:p-6 bg-white rounded-xl sm:rounded-2xl border border-blue-200 hover:scale-105 transition-transform duration-300 shadow-lg min-w-[90px] sm:min-w-[110px]"
            >
              <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600"
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
