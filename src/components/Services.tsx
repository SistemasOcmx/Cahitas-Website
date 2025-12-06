'use client';

import { useState } from 'react';

const services = [
  {
    icon: '💼',
    title: 'SERVICIO 1',
    description: 'Descripción del servicio 1. Explica qué ofrece este servicio a los clientes.',
    color: 'from-blue-500 to-cyan-500',
    features: ['Característica 1', 'Característica 2', 'Característica 3'],
  },
  {
    icon: '💼',
    title: 'SERVICIO 2',
    description: 'Descripción del servicio 2. Explica qué ofrece este servicio a los clientes.',
    color: 'from-cyan-500 to-teal-500',
    features: ['Característica 1', 'Característica 2', 'Característica 3'],
  },
  {
    icon: '💼',
    title: 'SERVICIO 3',
    description: 'Descripción del servicio 3. Explica qué ofrece este servicio a los clientes.',
    color: 'from-teal-500 to-emerald-500',
    features: ['Característica 1', 'Característica 2', 'Característica 3'],
  },
  {
    icon: '💼',
    title: 'SERVICIO 4',
    description: 'Descripción del servicio 4. Explica qué ofrece este servicio a los clientes.',
    color: 'from-sky-500 to-blue-500',
    features: ['Característica 1', 'Característica 2', 'Característica 3'],
  },
  {
    icon: '💼',
    title: 'SERVICIO 5',
    description: 'Descripción del servicio 5. Explica qué ofrece este servicio a los clientes.',
    color: 'from-indigo-500 to-blue-500',
    features: ['Característica 1', 'Característica 2', 'Característica 3'],
  },
  {
    icon: '💼',
    title: 'SERVICIO 6',
    description: 'Descripción del servicio 6. Explica qué ofrece este servicio a los clientes.',
    color: 'from-blue-600 to-cyan-600',
    features: ['Característica 1', 'Característica 2', 'Característica 3'],
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="servicios"
      className="py-24 px-6 bg-white relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Lo Que Hacemos Mejor
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Ofrecemos soluciones integrales para transformar tu presencia digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group relative p-6 sm:p-8 bg-white border border-gray-200 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative">
                {/* Icon */}
                <div
                  className="w-16 h-16 mb-6 rounded-2xl bg-blue-500 flex items-center justify-center text-3xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm text-gray-700"
                    >
                      <svg
                        className="w-5 h-5 text-blue-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Hover effect indicator */}
                <div
                  className="mt-6 flex items-center gap-2 text-sm font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Más información
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
