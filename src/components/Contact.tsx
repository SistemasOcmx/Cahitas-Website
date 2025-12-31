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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('Form submitted:', formData);
    setIsSubmitting(false);

    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Información de contacto
  const contactInfo = [
    {
      type: 'Email',
      value: 'contacto@cahita.com',
      label: 'Email',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'from-blue-600 to-cyan-600'
    },
    {
      type: 'Teléfono',
      value: '+52 (644) 123-4567',
      label: 'Teléfono',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      color: 'from-cyan-600 to-teal-600'
    },
    {
      type: 'Ubicación',
      value: 'Ciudad Obregón, Sonora, México',
      label: 'Ubicación',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: 'from-teal-600 to-emerald-600'
    },
    {
      type: 'Horario',
      value: 'Lun - Vie: 9:00 AM - 6:00 PM',
      label: 'Horario',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-emerald-600 to-blue-600'
    }
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

  // Verificar si hay coincidencias con la búsqueda
  const hasMatch = !searchQuery || filteredContactInfo.length > 0;

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
      className="py-24 px-6 bg-gradient-to-br from-white via-blue-50/30 to-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-100/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-4 shadow-lg">
            Hablemos
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mt-6 mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
            Comencemos Tu Proyecto
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            ¿Tienes una idea increíble? Estamos listos para hacerla realidad
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start px-4">
          {/* Contact Form */}
          <div className="order-1 lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div className="relative group">
                <label
                  htmlFor="name"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${focused === 'name' || formData.name
                      ? '-top-3 text-sm bg-white px-2 text-blue-600 font-semibold'
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
                  className="w-full px-4 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none focus:bg-white transition-all duration-300 text-gray-900 group-hover:border-gray-300"
                  required
                />
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 ${focused === 'name' ? 'opacity-10' : ''} transition-opacity duration-300 pointer-events-none`} />
              </div>

              {/* Email Input */}
              <div className="relative group">
                <label
                  htmlFor="email"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${focused === 'email' || formData.email
                      ? '-top-3 text-sm bg-white px-2 text-blue-600 font-semibold'
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
                  className="w-full px-4 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none focus:bg-white transition-all duration-300 text-gray-900 group-hover:border-gray-300"
                  required
                />
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 ${focused === 'email' ? 'opacity-10' : ''} transition-opacity duration-300 pointer-events-none`} />
              </div>

              {/* Phone Input */}
              <div className="relative group">
                <label
                  htmlFor="phone"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${focused === 'phone' || formData.phone
                      ? '-top-3 text-sm bg-white px-2 text-blue-600 font-semibold'
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
                  className="w-full px-4 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none focus:bg-white transition-all duration-300 text-gray-900 group-hover:border-gray-300"
                />
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 ${focused === 'phone' ? 'opacity-10' : ''} transition-opacity duration-300 pointer-events-none`} />
              </div>

              {/* Message Input */}
              <div className="relative group">
                <label
                  htmlFor="message"
                  className={`absolute left-4 transition-all duration-300 pointer-events-none z-10 ${focused === 'message' || formData.message
                      ? '-top-3 text-sm bg-white px-2 text-blue-600 font-semibold'
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
                  className="w-full px-4 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 rounded-2xl focus:border-blue-500 focus:outline-none focus:bg-white transition-all duration-300 text-gray-900 resize-none group-hover:border-gray-300"
                  required
                />
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 ${focused === 'message' ? 'opacity-10' : ''} transition-opacity duration-300 pointer-events-none`} />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="relative w-full group px-8 py-5 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/80 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {/* Shimmer effect */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />

                <span className="relative flex items-center gap-3">
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensaje
                      <svg
                        className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="order-2 lg:order-2 space-y-6">
            {filteredContactInfo.map((info, index) => (
              <div
                key={index}
                className="group relative p-6 bg-white/80 backdrop-blur-md rounded-3xl border-2 border-gray-100 hover:border-transparent transition-all duration-500 overflow-hidden hover:shadow-2xl hover:-translate-y-1"
              >
                {/* Gradient border on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`} />

                <div className="relative flex items-start gap-4">
                  <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                    <div className="text-white">
                      {info.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1 text-lg">
                      {info.label}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {info.value}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Social Media */}
            <div className="p-8 bg-white/80 backdrop-blur-md rounded-3xl border-2 border-gray-100 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Síguenos
              </h3>
              <div className="flex gap-4">
                {[
                  { name: 'Facebook', color: 'from-blue-600 to-blue-500', icon: 'f' },
                  { name: 'Instagram', color: 'from-pink-500 to-orange-500', icon: 'ig' },
                  { name: 'LinkedIn', color: 'from-blue-700 to-cyan-600', icon: 'in' },
                  { name: 'Twitter', color: 'from-blue-400 to-cyan-400', icon: 'x' },
                ].map((social, index) => (
                  <button
                    key={index}
                    className={`group w-14 h-14 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden`}
                    aria-label={social.name}
                  >
                    <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                    <span className="relative text-white font-bold text-lg">{social.icon}</span>
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
