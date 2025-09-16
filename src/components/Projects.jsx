import { useState } from "react";
import { FaUtensils, FaLaptopCode, FaGithub } from "react-icons/fa";
import taskImg from "../assets/taskflow.png";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("Mesero");

  const tabs = {
    Mesero: {
      icon: <FaUtensils className="w-5 h-5 mr-2" />,
      title: "Mesero",
      description: `Mesero es una aplicación en desarrollo diseñada para optimizar la gestión de pedidos en restaurantes. 
                    Incluye un video demostrativo que muestra todas las funcionalidades implementadas en el backend con Java y Spring Boot. 
                    Este proyecto refleja mi capacidad para diseñar soluciones escalables, listas para integrarse con interfaces y nuevas 
                    funcionalidades como alertas y escaneo de códigos QR.`,
      videoId: "n2fKeVxJVg8",
      image: "",
    },
    TaskFlow: {
      icon: <FaLaptopCode className="w-5 h-5 mr-2" />,
      title: "TaskFlow",
      description: `TaskFlow es una aplicación inspirada en Jira, desarrollada para consolidar mis conocimientos full-stack. 
                    Permite gestionar proyectos, asignar tareas y visualizar su estado en tiempo real. Desarrollada con Spring Boot en el backend 
                    y React en el frontend, demuestra mi capacidad para crear soluciones completas y listas para entornos profesionales.`,
      image: taskImg,
    },
  };

  return (
    <section id="proyectos" className="bg-gray-50 text-gray-700 body-font py-20">
      {/* Título con línea */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">
          Proyectos personales
        </h2>
        <div className="w-24 h-1 bg-indigo-500 mx-auto rounded"></div>
      </div>

      <div className="container px-5 mx-auto flex flex-col items-center">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12">
          {Object.keys(tabs).map((tabKey) => (
            <button
              key={tabKey}
              onClick={() => setActiveTab(tabKey)}
              aria-label={`Ver proyecto ${tabs[tabKey].title}`}
              className={`inline-flex items-center py-2 px-5 rounded-lg border-2 transition-all duration-300 mr-4 mb-4 focus:outline-none ${
                activeTab === tabKey
                  ? "border-indigo-500 bg-indigo-100 text-indigo-700 shadow-md"
                  : "border-gray-300 text-gray-600 hover:text-gray-800 hover:border-gray-400"
              }`}
            >
              {tabs[tabKey].icon}
              <span className="font-medium">{tabs[tabKey].title}</span>
            </button>
          ))}
        </div>

        {/* Imagen o Video */}
        <div className="w-full max-w-3xl mb-10 rounded-xl overflow-hidden">
          {activeTab === "Mesero" ? (
            <iframe
              width="100%"
              height="400"
              src={`https://www.youtube.com/embed/${tabs[activeTab].videoId}`}
              title={`Video demostrativo de ${tabs[activeTab].title}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-xl"
            ></iframe>
          ) : (
            <img
              src={tabs[activeTab].image}
              alt={tabs[activeTab].title}
              className="object-cover w-full h-80 rounded-xl"
            />
          )}
        </div>

        {/* Descripción */}
        <div className="flex flex-col text-center w-full mb-6">
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-700">
            {tabs[activeTab].description}
          </p>
        </div>

        {/* Botón GitHub */}
        <div className="text-center">
          <a
            href={`https://github.com/robertodfj/${tabs[activeTab].title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white bg-gray-800 border-0 py-3 px-8 rounded-lg text-lg shadow-md transition hover:bg-gray-900 hover:shadow-lg"
          >
            <FaGithub size={20} />
            Ver en GitHub
          </a>
        </div>
      </div>
    </section>
  );
}