'use client';

import { useState } from 'react';

interface ContactProps {
  searchQuery?: string;
}

export default function Contact({ searchQuery = '' }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Información de contacto
  const contactInfo = [
    { type: 'Email', value: '📧 CORREO@EMPRESA.COM', label: 'Email' },
    { type: 'Teléfono', value: '📞 +52 XXX XXX XXXX', label: 'Teléfono' },
    { type: 'Ubicación', value: '📍 UBICACIÓN DE LA EMPRESA', label: 'Ubicación' },
    { type: 'Horario', value: '⏰ Lun - Vie: 9:00 AM - 6:00 PM', label: 'Horario' }
  ];

  // Filtrar información de contacto basado en la búsqueda
  const filteredContactInfo = contactInfo.filter(info => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      info.type.toLowerCase().includes(query) ||
      info.value.toLowerCase().includes(query) ||
      info.label.toLowerCase().includes(query)
    );
  });

  // Contenido del formulario
  const formContent = {
    title: 'Comencemos Tu Proyecto',
    subtitle: '¿Tienes una idea increíble? Estamos listos para hacerla realidad',
    nameLabel: 'Nombre completo',
    emailLabel: 'Correo electrónico',
    phoneLabel: 'Teléfono',
    messageLabel: 'Cuéntanos sobre tu proyecto',
    buttonText: 'Enviar Mensaje'
  };

  // Verificar si hay coincidencias con la búsqueda
  const hasMatch = !searchQuery || (
    Object.values(formContent).some(text => text.toLowerCase().includes(searchQuery.toLowerCase())) ||
    filteredContactInfo.length > 0
  );

  if (!hasMatch && searchQuery) {
    return (
      <section
        id="contacto"
        className="py-24 px-6 bg-white relative"
      >
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No se encontraron resultados para "{searchQuery}"</p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contacto"
      className="py-24 px-6 bg-white relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Hablemos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Comencemos Tu Proyecto
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            ¿Tienes una idea increíble? Estamos listos para hacerla realidad
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start px-4">
          {/* Contact Form */}
          <div className="order-1 lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="relative">
                <label
                  htmlFor="name"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focused === 'name' || formData.name
                      ? '-top-3 text-sm bg-white px-2 text-blue-600'
                      : 'top-4 text-gray-500'
                  }`}
                >
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none transition-colors duration-300 text-gray-900"
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <label
                  htmlFor="email"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focused === 'email' || formData.email
                      ? '-top-3 text-sm bg-white px-2 text-blue-600'
                      : 'top-4 text-gray-500'
                  }`}
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none transition-colors duration-300 text-gray-900"
                />
              </div>

              {/* Phone Input */}
              <div className="relative">
                <label
                  htmlFor="phone"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focused === 'phone' || formData.phone
                      ? '-top-3 text-sm bg-white px-2 text-blue-600'
                      : 'top-4 text-gray-500'
                  }`}
                >
                  Teléfono (Opcional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onFocus={() => setFocused('phone')}
                  onBlur={() => setFocused(null)}
                  className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none transition-colors duration-300 text-gray-900"
                />
              </div>

              {/* Message Input */}
              <div className="relative">
                <label
                  htmlFor="message"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                    focused === 'message' || formData.message
                      ? '-top-3 text-sm bg-white px-2 text-blue-600'
                      : 'top-4 text-gray-500'
                  }`}
                >
                  Cuéntanos sobre tu proyecto
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  rows={6}
                  className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none transition-colors duration-300 text-gray-900 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-2xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Enviar Mensaje
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="order-2 lg:order-2 space-y-8">
            <div className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl border border-blue-200 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">
                Información de Contacto
              </h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Email
                    </h4>
                    <p className="text-gray-600">
                      📧 CORREO@EMPRESA.COM
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Teléfono
                    </h4>
                    <p className="text-gray-600">
                      📱 +00 (000) 000-0000
                    </p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      Ubicación
                    </h4>
                    <p className="text-gray-600">
                      📍 DIRECCIÓN DE LA EMPRESA
                      <br />
                      Ciudad, Estado, CP 00000
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl border border-blue-200 shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-gray-900">
                Síguenos
              </h3>
              <div className="flex gap-4">
                {['twitter', 'linkedin', 'instagram', 'github'].map((social, index) => (
                  <button
                    key={index}
                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <span className="text-white text-xl">
                      {social === 'twitter' && '𝕏'}
                      {social === 'linkedin' && 'in'}
                      {social === 'instagram' && '📷'}
                      {social === 'github' && '⚡'}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
