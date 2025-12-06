export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-200 relative transition-all duration-300" style={{ marginLeft: 'calc(var(--sidebar-width, 0px) * -1)', paddingLeft: 'var(--sidebar-width, 0px)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="space-y-8 mb-12 md:space-y-0">
          {/* Mobile Layout - Stacked */}
          <div className="block md:hidden space-y-8">
            {/* Brand Section - Full Width */}
            <div className="text-center">
              <div className="flex items-center gap-2 mb-4 justify-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">LOGO</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  NOMBRE EMPRESA
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-3xl mx-auto">
                DESCRIPCIÓN DE LA EMPRESA - Aquí va la descripción breve de la empresa y sus servicios.
              </p>
            </div>

            {/* Services and Experience - Side by Side */}
            <div className="grid grid-cols-2 gap-6">
              {/* Services */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-white">Servicios</h3>
                <ul className="space-y-3">
                  {[
                    'Servicio 1',
                    'Servicio 2',
                    'Servicio 3',
                    'Servicio 4',
                    'Servicio 5',
                  ].map((service, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group text-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:scale-150 transition-transform" />
                        {service}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Experience */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-white">Experiencia</h3>
                <ul className="space-y-3">
                  {[
                    'Experiencia 1',
                    'Experiencia 2',
                    'Experiencia 3',
                    'Experiencia 4',
                    'Experiencia 5',
                  ].map((item, index) => (
                    <li key={index}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group text-sm"
                      >
                        <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full group-hover:scale-150 transition-transform" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact - Full Width Below */}
            <div className="text-center">
              <h3 className="text-lg font-bold mb-4 text-white">Contacto</h3>
              <div className="flex flex-col items-center justify-center gap-4">
                {/* Ubicación */}
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-blue-400">📍</span>
                  <p className="text-gray-400">
                    DIRECCIÓN DE LA EMPRESA
                  </p>
                </div>
                
                {/* Correo */}
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-blue-400">📧</span>
                  <p className="text-gray-400">
                    CORREO@EMPRESA.COM
                  </p>
                </div>
                
                {/* Teléfono */}
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-blue-400">📱</span>
                  <p className="text-gray-400">
                    +00 (000) 000-0000
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Layout - 4 Column Grid */}
          <div className="hidden md:grid md:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xs">LOGO</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  NOMBRE EMPRESA
                </span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                DESCRIPCIÓN DE LA EMPRESA - Aquí va la descripción breve de la empresa y sus servicios.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Servicios</h3>
              <ul className="space-y-3">
                {[
                  'Servicio 1',
                  'Servicio 2',
                  'Servicio 3',
                  'Servicio 4',
                  'Servicio 5',
                ].map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:scale-150 transition-transform" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Experiencia</h3>
              <ul className="space-y-3">
                {[
                  'Experiencia 1',
                  'Experiencia 2',
                  'Experiencia 3',
                  'Experiencia 4',
                  'Experiencia 5',
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 group text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full group-hover:scale-150 transition-transform" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-white">Contacto</h3>
              <div className="space-y-4">
                {/* Ubicación */}
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-blue-400">📍</span>
                  <p className="text-gray-400">
                    DIRECCIÓN DE LA EMPRESA
                  </p>
                </div>
                
                {/* Correo */}
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-blue-400">📧</span>
                  <p className="text-gray-400">
                    CORREO@EMPRESA.COM
                  </p>
                </div>
                
                {/* Teléfono */}
                <div className="flex items-start gap-2 text-sm">
                  <span className="text-blue-400">📱</span>
                  <p className="text-gray-400">
                    +00 (000) 000-0000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Cahita. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              Privacidad
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              Términos
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              Cookies
            </a>
          </div>

          
        </div>
      </div>
    </footer>
  );
}
