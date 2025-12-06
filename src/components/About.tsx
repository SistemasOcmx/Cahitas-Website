'use client';

import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('mision');

  const tabs = [
    { id: 'mision', label: 'Misión', icon: '🎯' },
    { id: 'vision', label: 'Visión', icon: '🔭' },
    { id: 'valores', label: 'Valores', icon: '⭐' },
  ];

  const valores = [
    {
      icon: '💡',
      title: 'Innovación',
      description: 'Buscamos constantemente nuevas formas de resolver problemas y crear valor',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: '🤝',
      title: 'Colaboración',
      description: 'Trabajamos en equipo con nuestros clientes para lograr objetivos comunes',
      color: 'from-cyan-500 to-teal-500',
    },
    {
      icon: '🎨',
      title: 'Excelencia',
      description: 'Nos comprometemos con la calidad en cada proyecto que realizamos',
      color: 'from-teal-500 to-emerald-500',
    },
    {
      icon: '🚀',
      title: 'Pasión',
      description: 'Amamos lo que hacemos y eso se refleja en nuestro trabajo',
      color: 'from-sky-500 to-blue-500',
    },
    {
      icon: '🔒',
      title: 'Integridad',
      description: 'Actuamos con transparencia y honestidad en todas nuestras relaciones',
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: '🌱',
      title: 'Crecimiento',
      description: 'Fomentamos el desarrollo continuo tanto personal como profesional',
      color: 'from-blue-600 to-cyan-600',
    },
  ];

  return (
    <section
      id="nosotros"
      className="py-24 px-6 bg-white relative"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-blue-600 font-semibold text-xs sm:text-sm uppercase tracking-wider">
            Quiénes Somos
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
            Nosotros
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Conoce más sobre nuestra empresa, nuestra filosofía y lo que nos impulsa cada día
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8 sm:mb-12 px-4">
          <div className="inline-flex flex-wrap justify-center bg-white rounded-full p-2 shadow-lg border border-gray-200 gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 flex items-center gap-1 sm:gap-2 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <span className="text-xl">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="mb-16">
          {/* Misión */}
          {activeTab === 'mision' && (
            <div className="animate-fade-in">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl p-12 shadow-xl border border-blue-200">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                      🎯
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">Nuestra Misión</h3>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Transformar ideas en experiencias digitales extraordinarias, combinando diseño innovador 
                    con tecnología de vanguardia para ayudar a nuestros clientes a alcanzar sus objetivos 
                    y destacar en el mundo digital. Nos comprometemos a ofrecer soluciones personalizadas 
                    que no solo cumplan, sino que superen las expectativas, generando un impacto positivo 
                    y duradero en cada proyecto que emprendemos.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Visión */}
          {activeTab === 'vision' && (
            <div className="animate-fade-in">
              <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-3xl p-12 shadow-xl border border-cyan-200">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                      🔭
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900">Nuestra Visión</h3>
                  </div>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Ser reconocidos como líderes en la industria digital, referentes en innovación y 
                    excelencia a nivel global. Aspiramos a ser el socio estratégico preferido por empresas 
                    que buscan transformación digital, expandiendo nuestra presencia internacional mientras 
                    mantenemos nuestro compromiso con la calidad, la creatividad y el servicio excepcional. 
                    Visualizamos un futuro donde cada proyecto que realizamos contribuya a construir un 
                    ecosistema digital más accesible, inclusivo y sostenible.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Valores */}
          {activeTab === 'valores' && (
            <div className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {valores.map((valor, index) => (
                  <div
                    key={index}
                    className="group relative p-8 bg-white border border-gray-200 rounded-3xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="relative">
                      {/* Icon */}
                      <div
                        className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${valor.color} flex items-center justify-center text-3xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                      >
                        {valor.icon}
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">
                        {valor.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed">
                        {valor.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '4+', label: 'Años de Experiencia', icon: '📅' },
            { value: '100+', label: 'Proyectos Completados', icon: '✅' },
            { value: '50+', label: 'Clientes Satisfechos', icon: '😊' },
            { value: '15+', label: 'Premios Ganados', icon: '🏆' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-2xl border border-blue-200 hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
