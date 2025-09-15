import { useState, useEffect } from "react";
import { FaHome, FaUser, FaBriefcase, FaLaptopCode, FaEnvelope } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#inicio");

  // Detectar sección activa al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "sobre-mi", "experiencia", "proyectos", "contacto", "tech"];
      const scrollPos = window.scrollY + 200; // Ajuste visual
      for (let sec of sections) {
        const el = document.getElementById(sec);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActive(`#${sec}`);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#inicio", icon: <FaHome />, label: "Inicio" },
    { href: "#sobre-mi", icon: <FaUser />, label: "Sobre mí" },
    { href: "#experiencia", icon: <FaBriefcase />, label: "Experiencia" },
    { href: "#proyectos", icon: <FaLaptopCode />, label: "Proyectos" },
    { href: "#tech", icon: <FaLaptopCode />, label: "Tecnologías" }, // nuevo enlace
    { href: "#contacto", icon: <FaEnvelope />, label: "Contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="text-xl font-bold text-indigo-600 hover:text-indigo-700 transition">
          @robertodfj
        </a>

        {/* Botón hamburguesa (solo móvil) */}
        <button
          className="md:hidden text-2xl text-gray-700 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>

        {/* Menú desktop */}
        <div className="hidden md:flex space-x-8 items-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center text-gray-600 hover:text-black transition ${
                active === link.href ? "text-indigo-600" : ""
              }`}
            >
              {link.icon}
              <span className="text-sm">{link.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Menú móvil desplegable */}
      <div
        className={`md:hidden bg-white border-t shadow-md overflow-hidden transition-all duration-300 ${
          open ? "max-h-screen py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-4 items-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`flex items-center space-x-2 text-gray-600 hover:text-black transition ${
                active === link.href ? "text-indigo-600 font-semibold" : ""
              }`}
            >
              {link.icon} <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}