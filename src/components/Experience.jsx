export default function Experience() {
  return (
    <section id="experiencia" className="text-gray-400 body-font">
      {/* Título con línea */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-medium text-black mb-2">Experiencia</h2>
        <div className="w-24 h-1 bg-indigo-500 mx-auto rounded"></div>
      </div>

      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center lg:flex-nowrap">
        
        {/* Imagen a la izquierda */}
        <div className="lg:w-3/5 w-full mb-10 lg:mb-0">
          <img
            className="object-cover object-center rounded-lg w-full h-full"
            src="src/assets/exp.png" 
            alt="experience"
          />
        </div>

        {/* Timeline a la derecha */}
        <div className="lg:w-2/5 w-full lg:pl-10 flex flex-col">
          
          {/* Kyndryl */}
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="6" rx="2" ry="2" />
                <rect x="3" y="14" width="18" height="6" rx="2" ry="2" />
                <path d="M7 10v4M17 10v4" />
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <p className="leading-relaxed text-sm">Abril 2025 - Actualidad</p>
              <h3 className="font-medium title-font text-lg text-black mb-1 tracking-wider">Kyndryl</h3>
              <p className="leading-relaxed">
                Técnico CAU 24x7 en ingles. (Centro de Atención a Usuarios) – Soporte de primer nivel.
              </p>
            </div>
          </div>

          {/* DAM */}
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="14" rx="2" ry="2" />
                <path d="M10 9l-2 2 2 2M14 9l2 2-2 2" />
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <p className="leading-relaxed text-sm">Septiembre 2024 - Actualidad</p>
              <h3 className="font-medium title-font text-lg text-black mb-1 tracking-wider">DAM</h3>
              <p className="leading-relaxed">
                Desarrollo de Aplicaciones Multiplataforma. Formación en programación orientada a objetos, bases de datos, aplicaciones móviles y entornos de desarrollo.
              </p>
            </div>
          </div>

          {/* SMR */}
          <div className="flex relative">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v4m0 12v4m10-10h-4M6 12H2m15.5-6.5l-2.8 2.8M8.3 15.7l-2.8 2.8m0-11.2l2.8 2.8m11.2 11.2l-2.8-2.8" />
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <p className="leading-relaxed text-sm">2022 - 2024</p>
              <h3 className="font-medium title-font text-lg text-black mb-1 tracking-wider">SMR</h3>
              <p className="leading-relaxed">
                Sistemas Microinformáticos y Redes. Montaje, configuración y mantenimiento de equipos, gestión de redes y soporte a usuarios.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}