import { useState } from "react";
import { FaUtensils, FaLaptopCode, FaGithub } from "react-icons/fa";

export default function Projects() {
  const [activeTab, setActiveTab] = useState("Mesero");

  const tabs = {
    Mesero: {
      icon: <FaUtensils className="w-5 h-5 mr-3" />,
      title: "Mesero",
      description: `Mesero es una aplicación en desarrollo diseñada para optimizar la gestión de pedidos en restaurantes. 
Aunque aún no cuenta con un frontend, se incluye un video demostrativo que muestra en detalle todas las funcionalidades implementadas 
en el backend, desarrollado con Java y Spring Boot. Este proyecto refleja mi capacidad para diseñar y programar soluciones robustas, 
eficientes y escalables, preparadas para integrarse con futuras interfaces de usuario y nuevas funcionalidades, como alertas, escaneo de códigos QR y más.`,
      // Aquí ponemos el ID del video de YouTube
      videoId: "qzGxK6Uiu04",
      image: "", // dejamos vacío ya que usaremos el video
    },
    TaskFlow: {
      icon: <FaLaptopCode className="w-5 h-5 mr-3" />,
      title: "TaskFlow",
      description: `TaskFlow es una aplicación inspirada en Jira, desarrollada para consolidar mis conocimientos full-stack en la creación 
de APIs con Spring Boot y React. Esta herramienta permite gestionar proyectos de manera eficiente, visualizando el estado de las 
tareas en tiempo real, asignando responsabilidades a usuarios y administradores, y manteniendo toda la información organizada de 
forma clara y accesible. TaskFlow demuestra mi capacidad para diseñar soluciones completas, integrando backend y frontend, 
listas para su uso en entornos profesionales.`,
      image: "src/assets/taskflow.png",
    },
  };

  return (
    <section id="proyectos" className="text-gray-600 body-font">
      {/* Título con línea */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-medium text-black mb-2">Proyectos personales</h2>
        <div className="w-24 h-1 bg-indigo-500 mx-auto rounded"></div>
      </div>

      <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
        {/* Tabs */}
        <div className="flex mx-auto flex-wrap mb-20">
          {Object.keys(tabs).map((tabKey) => (
            <button
              key={tabKey}
              onClick={() => setActiveTab(tabKey)}
              className={`inline-flex items-center py-3 px-5 rounded-lg border-2 ${
                activeTab === tabKey
                  ? "border-indigo-500 bg-indigo-100 text-indigo-700"
                  : "border-gray-300 text-gray-600 hover:text-gray-800 hover:border-gray-400"
              } mr-4 mb-4 focus:outline-none`}
            >
              {tabs[tabKey].icon}
              <span className="font-medium">{tabs[tabKey].title}</span>
            </button>
          ))}
        </div>

        {/* Imagen o Video */}
        <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 rounded overflow-hidden">
          {activeTab === "Mesero" ? (
            <iframe
              width="100%"
              height="360"
              src={`https://www.youtube.com/embed/${tabs[activeTab].videoId}`}
              title="Video Mesero"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded"
            ></iframe>
          ) : (
            <img
              src={tabs[activeTab].image}
              alt={tabs[activeTab].title}
              className="object-cover object-center rounded"
            />
          )}
        </div>

        {/* Descripción */}
        <div className="flex flex-col text-center w-full mb-6">
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {tabs[activeTab].description}
          </p>
        </div>

        {/* Botón GitHub */}
        <div className="text-center">
          <a
            href={`https://github.com/robertodfj/${tabs[activeTab].title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded text-lg"
          >
            <FaGithub size={20} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}