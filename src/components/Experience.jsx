export default function Experience() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">

            {/* Kyndryl */}
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                {/* Raya vertical */}
                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                {/* Icono */}
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <p className="leading-relaxed text-sm">Abril 2025 - Actualidad</p>
                <h2 className="font-medium title-font text-lg text-white mb-1 tracking-wider">Kyndryl</h2>
                <p className="leading-relaxed">
                  Técnico CAU 24x7 (Centro de Atención a Usuarios) – Soporte de primer nivel.
                </p>
              </div>
            </div>

            {/* Desarrollo de Aplicaciones Multiplataforma */}
            <div className="flex relative pb-12">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                {/* Raya vertical */}
                <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                {/* Icono */}
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <p className="leading-relaxed text-sm">Septiembre 2024 - Actualidad</p>
                <h2 className="font-medium title-font text-lg text-white mb-1 tracking-wider">DAM</h2>
                <p className="leading-relaxed">
                  Desarrollo de Aplicaciones Multiplataforma. Formación en programación orientada a objetos, bases de datos, aplicaciones móviles y entornos de desarrollo.
                </p>
              </div>
            </div>

            {/* SMR (último sin raya) */}
            <div className="flex relative">
              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                {/* No ponemos raya en el último */}
              </div>
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
                {/* Icono */}
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="5" r="3"></circle>
                  <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                </svg>
              </div>
              <div className="flex-grow pl-4">
                <p className="leading-relaxed text-sm">2022 - 2024</p>
                <h2 className="font-medium title-font text-lg text-white mb-1 tracking-wider">SMR</h2>
                <p className="leading-relaxed">
                  Sistemas Microinformáticos y Redes. Montaje, configuración y mantenimiento de equipos, gestión de redes y soporte a usuarios.
                </p>
              </div>
            </div>

          </div>

          {/* Imagen lateral */}
          <img
            className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
            src="/src/assets/exp.png"
            alt="experience"
          />
        </div>
      </div>
    </section>
  );
}