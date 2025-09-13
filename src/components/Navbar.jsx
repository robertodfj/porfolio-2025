import { useState } from "react";
import { FaHome, FaUser, FaBriefcase, FaLaptopCode, FaEnvelope, FaLanguage } from "react-icons/fa";
import { FiMoon } from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-indigo-600">@robertodfj</div>

        {/* Botón hamburguesa (solo móvil) */}
        <button
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>

        {/* Menú desktop */}
        <div className="hidden md:flex space-x-8 items-center">
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

        {/* Botones a la derecha en desktop */}
        <div className="hidden md:flex space-x-4 items-center">
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

      {/* Menú móvil desplegable */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-md">
          <div className="flex flex-col space-y-4 py-4 items-center">
            <a href="#inicio" className="flex items-center space-x-2 text-gray-600 hover:text-black transition">
              <FaHome /> <span>Inicio</span>
            </a>
            <a href="#sobre-mi" className="flex items-center space-x-2 text-gray-600 hover:text-black transition">
              <FaUser /> <span>Sobre mí</span>
            </a>
            <a href="#experiencia" className="flex items-center space-x-2 text-gray-600 hover:text-black transition">
              <FaBriefcase /> <span>Experiencia</span>
            </a>
            <a href="#proyectos" className="flex items-center space-x-2 text-gray-600 hover:text-black transition">
              <FaLaptopCode /> <span>Proyectos</span>
            </a>
            <a href="#contacto" className="flex items-center space-x-2 text-gray-600 hover:text-black transition">
              <FaEnvelope /> <span>Contacto</span>
            </a>

            {/* Botones de idioma y dark mode en móvil */}
            <div className="flex space-x-4 pt-4">
              <a
                href="#"
                className="inline-flex items-center text-white bg-indigo-500 hover:bg-indigo-600 py-2 px-4 rounded-full"
              >
                <FaLanguage size={20} />
              </a>
              <a
                href="#"
                className="inline-flex items-center text-white bg-gray-800 hover:bg-gray-900 py-2 px-4 rounded-full"
              >
                <FiMoon size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}