import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa"; // flecha


export default function Hero() {
  return (
    <section className="min-h-screen flex items-center text-gray-600 body-font">
      <div className="container mx-auto flex px-5 md:flex-row flex-col items-center h-full">
        {/* Imagen */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0 h-full">
          <img
            className="object-cover object-center rounded w-full h-64 md:h-full"
            alt="hero"
            src="src/assets/roberto.png"
          />
        </div>

        {/* Texto */}
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col justify-center md:items-start md:text-left items-center text-center h-full">
          <h1 className="title-font sm:text-4xl text-3xl font-medium text-gray-900">
            Soy <p className="font-bold">@robertodfj</p>
          </h1>
          <h2 className="title-font sm:text-4xl text-3xl mb-4 mt--1 font-medium text-gray-900">
            Desarrollador de software.
          </h2>   

          {/* Botones */}
          <div className="flex justify-center md:justify-start space-x-4">
            {/* Botón GitHub */}
            <a
              href="https://github.com/robertodfj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-900 rounded text-lg"
            >
              <FaGithub size={20} />
              GitHub
            </a>

            {/* Botón LinkedIn */}
            <a
              href="https://www.linkedin.com/in/robertodfj/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg"
            >
              <FaLinkedin size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      {/* Flecha animada */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <FaArrowDown className="text-gray-700 animate-bounce" size={30} />
      </div>
    </section>
  );
}