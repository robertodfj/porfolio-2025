import { FaHome, FaUser, FaBriefcase, FaLaptopCode, FaEnvelope, FaLanguage } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Menú principal */}
        <div className="flex space-x-8 items-center">
          <a href="#inicio" className="flex flex-col items-center text-gray-600 hover:text-black transition">
            <FaHome className="text-xl" />
            <span className="text-sm">Inicio</span>
          </a>
          <a href="#sobre-mi" className="flex flex-col items-center text-gray-600 hover:text-black transition">
            <FaUser className="text-xl" />
            <span className="text-sm">Sobre mí</span>
          </a>
          <a href="#experiencia" className="flex flex-col items-center text-gray-600 hover:text-black transition">
            <FaBriefcase className="text-xl" />
            <span className="text-sm">Experiencia</span>
          </a>
          <a href="#proyectos" className="flex flex-col items-center text-gray-600 hover:text-black transition">
            <FaLaptopCode className="text-xl" />
            <span className="text-sm">Proyectos</span>
          </a>
          <a href="#contacto" className="flex flex-col items-center text-gray-600 hover:text-black transition">
            <FaEnvelope className="text-xl" />
            <span className="text-sm">Contacto</span>
          </a>
        </div>

        {/* Botones a la derecha */}
        <div className="flex space-x-4 items-center">
          <a
            href="#"
            className="inline-flex items-center text-white bg-indigo-500 hover:bg-indigo-600 py-2 px-4 rounded-full focus:outline-none text-lg"
          >
            <FaLanguage size={20} />
          </a>

          <a
            href="#"
            className="inline-flex items-center text-white bg-gray-800 py-2 px-4 rounded-full focus:outline-none hover:bg-gray-900 text-lg"
          >
            <FiMoon size={20} />
          </a>
        </div>
      </div>
    </nav>
  );
}