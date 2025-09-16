import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import heroImg from "../assets/roberto.png";
import cv from "../assets/cvRDF.pdf";
export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center text-gray-600 body-font bg-gradient-to-b from-white to-gray-100"
    >
      <div className="container mx-auto flex px-5 md:flex-row flex-col items-center h-full">
        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:max-w-lg lg:w-full md:w-1/2 w-full mb-10 md:mb-0"
        >
          <img
            className="object-cover object-center rounded-2xl w-full h-auto max-h-[500px] shadow-lg"
            alt="hero"
            src={heroImg}
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col justify-center md:items-start md:text-left items-center text-center h-full"
        >
          <h1 className="text-4xl font-extrabold text-black mb-2">
            Hola, soy{" "}
            <span className="block text-black-600 mt-2">@robertodfj</span>
          </h1>

          <h2 className="title-font sm:text-4xl text-3xl mb-6 font-medium">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600">
              <Typewriter
                words={["Desarrollador web", "Desarrollador de APIs", "Desarrollador Full Stack", ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h2>

          {/* Botones */}
          <div className="flex justify-center md:justify-start space-x-4 mt-4">
            {/* GitHub */}
            <a
              href="https://github.com/robertodfj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:scale-105 transform transition rounded-lg text-lg shadow-md"
            >
              <FaGithub size={20} />
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/robertodfj/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:scale-105 transform transition rounded-lg text-lg shadow-md"
            >
              <FaLinkedin size={20} />
              LinkedIn
            </a>

            {/* CV */}
            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:scale-105 transform transition rounded-lg text-lg shadow-md"
            >
              <FaDownload size={20} />
              CV
            </a>
          </div>
        </motion.div>
      </div>

      {/* Flecha animada */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <FaArrowDown className="text-gray-700 animate-bounce" size={30} />
      </div>
    </section>
  );
}