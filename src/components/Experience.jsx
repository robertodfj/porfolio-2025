import { FaDownload } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experiencia" className="text-gray-600 body-font bg-gradient-to-b from-white to-gray-50">
      {/* Título con línea */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Experiencia</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded"></div>
      </div>

      <div className="container px-5 py-16 mx-auto flex flex-wrap items-center lg:flex-nowrap gap-12">
        
        {/* Imagen a la izquierda */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-3/5 w-full mb-10 lg:mb-0 rounded-xl overflow-hidden shadow-lg"
        >
          <img
            className="object-cover object-center w-full h-full hover:scale-105 transition-transform duration-500"
            src="src/assets/exp.png"
            alt="experience"
          />
        </motion.div>

        {/* Timeline a la derecha */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-2/5 w-full lg:pl-10 flex flex-col"
        >
          {/* Kyndryl */}
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-indigo-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 inline-flex items-center justify-center text-white relative z-10 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="6" rx="2" ry="2" />
                <rect x="3" y="14" width="18" height="6" rx="2" ry="2" />
                <path d="M7 10v4M17 10v4" />
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <p className="leading-relaxed text-sm text-gray-500">Abril 2025 - Actualidad</p>
              <h3 className="font-semibold text-lg text-gray-900 mb-1 tracking-wide">Kyndryl</h3>
              <p className="leading-relaxed">
                Técnico CAU 24x7 (Centro de Atención a Usuarios) – Soporte de primer nivel en inglés.
              </p>
            </div>
          </div>

          {/* DAM */}
          <div className="flex relative pb-12">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-indigo-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 inline-flex items-center justify-center text-white relative z-10 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="14" rx="2" ry="2" />
                <path d="M10 9l-2 2 2 2M14 9l2 2-2 2" />
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <p className="leading-relaxed text-sm text-gray-500">Septiembre 2024 - Actualidad</p>
              <h3 className="font-semibold text-lg text-gray-900 mb-1 tracking-wide">DAM</h3>
              <p className="leading-relaxed">
                Desarrollo de Aplicaciones Multiplataforma. Formación en programación orientada a objetos,
                bases de datos, desarrollo móvil y entornos de desarrollo.
              </p>
            </div>
          </div>

          {/* SMR */}
          <div className="flex relative">
            <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-indigo-200 pointer-events-none"></div>
            </div>
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 inline-flex items-center justify-center text-white relative z-10 shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v4m0 12v4m10-10h-4M6 12H2m15.5-6.5l-2.8 2.8M8.3 15.7l-2.8 2.8m0-11.2l2.8 2.8m11.2 11.2l-2.8-2.8" />
              </svg>
            </div>
            <div className="flex-grow pl-4">
              <p className="leading-relaxed text-sm text-gray-500">2022 - 2024</p>
              <h3 className="font-semibold text-lg text-gray-900 mb-1 tracking-wide">SMR</h3>
              <p className="leading-relaxed">
                Sistemas Microinformáticos y Redes. Montaje, configuración y mantenimiento de equipos,
                gestión de redes y soporte a usuarios.
              </p>
            </div>
          </div>

          {/* Botón CV */}
          <a
            href="src/assets/certsRDF.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-indigo-500 to-purple-600 py-2 px-6 mt-6 rounded-lg shadow-md hover:scale-105 transition-transform text-lg font-medium"
          >
            <FaDownload size={20} />
            Certificados obtenidos
          </a>
        </motion.div>
      </div>
    </section>
  );
}