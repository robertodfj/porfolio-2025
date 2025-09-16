import { HiOutlineUser } from "react-icons/hi";
import { motion } from "framer-motion";
import aboutImg from "../assets/about.png";
export default function About() {
  return (
    <section id="sobre-mi" className="text-gray-600 body-font bg-gradient-to-b from-white to-gray-50">
      {/* Título con línea */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Sobre mí</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded"></div>
      </div>

      <div className="container px-5 py-16 mx-auto flex flex-wrap lg:flex-nowrap items-center gap-12">
        
        {/* Texto */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col flex-wrap lg:w-1/2 lg:pr-12 lg:text-left text-center space-y-10"
        >
          {/* Trabajo */}
          <div className="flex flex-col lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white mb-5 shadow-lg">
              {/* Icono maletín */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 7V6a2 2 0 00-2-2h-4a2 2 0 00-2 2v1M4 7h16v14H4V7z"
                />
              </svg>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-xl font-semibold mb-3">
                En el trabajo...
              </h2>
              <p className="leading-relaxed text-base">
                Combino estudios y trabajo, lo que me ha permitido
                desarrollar organización, constancia y compromiso.
                Estoy finalizando el ciclo de{" "}
                <span className="font-semibold text-indigo-600">Desarrollo de Aplicaciones Multiplataforma (DAM)</span>, 
                y disfruto especialmente creando APIs con <span className="font-semibold">Spring Boot </span> 
                e integrándolas con frontends en <span className="font-semibold">React</span>.
              </p>
            </div>
          </div>

          {/* Tiempo libre */}
          <div className="flex flex-col lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white mb-5 shadow-lg">
              <HiOutlineUser className="h-6 w-6" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-xl font-semibold mb-3">
                En mi tiempo libre...
              </h2>
              <p className="leading-relaxed text-base">
                Me apasiona viajar y hacer deporte, actividades que me ayudan 
                a mantenerme motivado, con energía y con nuevas perspectivas
                que aplico tanto en mi vida personal como en mi desarrollo profesional.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Imagen */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-1/2 w-full rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            alt="about"
            className="object-cover object-center h-full w-full hover:scale-105 transition-transform duration-500"
            src={aboutImg}
          />
        </motion.div>

      </div>
    </section>
  );
}