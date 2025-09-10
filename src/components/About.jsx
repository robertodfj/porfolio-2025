import { HiOutlineUser } from "react-icons/hi";

export default function About() {
  return (
    <section className="text-gray-600 body-font">
      {/* Título con línea */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-medium text-black mb-2">Sobre mí</h2>
        <div className="w-24 h-1 bg-indigo-500 mx-auto rounded"></div>
      </div>
      <div className="container px-5 py-24 mx-auto flex flex-wrap lg:flex-nowrap items-center">
        
        {/* Texto */}
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pr-12 lg:text-left text-center">
          
          {/* Trabajo */}
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
              {/* Icono de maletín */}
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
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                En el trabajo...
              </h2>
              <p className="leading-relaxed text-base">
                Soy una persona que estudia y trabaja al mismo tiempo, 
                lo que me ha enseñado a organizarme, ser constante y a 
                dar siempre lo mejor de mí. Actualmente estoy finalizando
                el ciclo de Desarrollo de Aplicaciones Multiplataforma 
                (DAM) y disfruto creando APIs con Spring Boot e 
                integrándolas con frontends en React.
              </p>
            </div>
          </div>

          {/* Tiempo libre*/}
          <div className="flex flex-col mb-10 lg:items-start items-center">
            <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
              {/* Icono de persona */}
              <HiOutlineUser className="h-6 w-6" />
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                En mi tiempo libre...
              </h2>
              <p className="leading-relaxed text-base">
                  Me gusta viajar y hacer deporte, 
                  actividades que me ayudan a mantenerme motivado y con 
                  energía para seguir creciendo tanto a nivel personal 
                  como profesional.
              </p>
            </div>
          </div>

        </div>

        {/* Imagen */}
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
          <img
            alt="feature"
            className="object-cover object-center h-full w-full"
            src="https://dummyimage.com/460x500"
          />
        </div>

      </div>
    </section>
  );
}