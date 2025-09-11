import { FaHome, FaUser, FaBriefcase, FaLaptopCode, FaEnvelope } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-3 flex justify-center space-x-8">
        
        {/* Inicio */}
        <a href="#inicio" className="flex flex-col items-center text-gray-600 hover:text-black transition">
          <FaHome className="text-xl mb-1" />
          <span className="text-sm">Inicio</span>
        </a>

        {/* Sobre mí */}
        <a href="#sobre-mi" className="flex flex-col items-center text-gray-600 hover:text-black transition">
          <FaUser className="text-xl mb-1" />
          <span className="text-sm">Sobre mí</span>
        </a>

        {/* Experiencia */}
        <a href="#experiencia" className="flex flex-col items-center text-gray-600 hover:text-black transition">
          <FaBriefcase className="text-xl mb-1" />
          <span className="text-sm">Experiencia</span>
        </a>

        {/* Proyectos */}
        <a href="#proyectos" className="flex flex-col items-center text-gray-600 hover:text-black transition">
          <FaLaptopCode className="text-xl mb-1" />
          <span className="text-sm">Proyectos</span>
        </a>

        {/* Contacto */}
        <a href="#contacto" className="flex flex-col items-center text-gray-600 hover:text-black transition">
          <FaEnvelope className="text-xl mb-1" />
          <span className="text-sm">Contacto</span>
        </a>

      </div>
    </nav>
  );
}