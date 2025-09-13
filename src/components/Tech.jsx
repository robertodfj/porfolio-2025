import { FaDownload, FaGithub, FaHtml5, FaJava, FaJs, FaReact } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiTailwindcss, SiAdobe, SiNetlify, SiJira } from "react-icons/si";

export default function Tech() {
  return (
    <>
      <section className="text-gray-600 body-font">
        {/* Título con línea */}
        <div className="text-center mt-7">
          <h2 className="text-3xl font-medium text-black mb-2">Tecnologias</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto rounded"></div>
        </div>

        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-2xl text-indigo-500 tracking-widest font-medium title-font mb-1">
              Lenguajes:
            </h2>
          </div>

          <div className="flex flex-wrap -m-4 justify-center">
            {/* Java */}
            <div className="p-4 md:w-1/3">
              <div className="flex flex-col items-center rounded-lg h-full bg-gray-100 p-8">
                <div className="flex justify-center items-center mb-4 w-20 h-20 bg-orange-600 rounded-full text-white text-5xl">
                  <FaJava />
                </div>
                <h2 className="text-gray-900 text-2xl title-font font-medium">Java.</h2>
              </div>
            </div>

            {/* Spring Boot */}
            <div className="p-4 md:w-1/3">
              <div className="flex flex-col items-center rounded-lg h-full bg-gray-100 p-8">
                <div className="flex justify-center items-center mb-4 w-20 h-20 bg-green-600 rounded-full text-white text-5xl">
                  <SiSpringboot color="white" />
                </div>
                <h2 className="text-gray-900 text-2xl title-font font-medium">Spring Boot.</h2>
              </div>
            </div>

            {/* JavaScript */}
            <div className="p-4 md:w-1/3">
              <div className="flex flex-col items-center rounded-lg h-full bg-gray-100 p-8">
                <div className="flex justify-center items-center mb-4 w-20 h-20 bg-yellow-600 rounded-full text-white text-5xl">
                  <FaJs />
                </div>
                <h2 className="text-gray-900 text-2xl title-font font-medium">JavaScript.</h2>
              </div>
            </div>

            {/* HTML */}
            <div className="p-4 md:w-1/3">
              <div className="flex flex-col items-center rounded-lg h-full bg-gray-100 p-8">
                <div className="flex justify-center items-center mb-4 w-20 h-20 bg-orange-700 rounded-full text-white text-5xl">
                  <FaHtml5 />
                </div>
                <h2 className="text-gray-900 text-2xl title-font font-medium">HTML.</h2>
              </div>
            </div>

            {/* React */}
            <div className="p-4 md:w-1/3">
              <div className="flex flex-col items-center rounded-lg h-full bg-gray-100 p-8">
                <div className="flex justify-center items-center mb-4 w-20 h-20 bg-blue-400 rounded-full text-white text-5xl">
                  <FaReact />
                </div>
                <h2 className="text-gray-900 text-2xl title-font font-medium">React.</h2>
              </div>
            </div>

            {/* MySQL */}
            <div className="p-4 md:w-1/3">
              <div className="flex flex-col items-center rounded-lg h-full bg-gray-100 p-8">
                <div className="flex justify-center items-center mb-4 w-20 h-20 bg-gray-200 rounded-full text-white text-5xl">
                  <SiMysql size={50} color="#4479A1" />
                </div>
                <h2 className="text-gray-900 text-2xl title-font font-medium">MySQL.</h2>
              </div>
            </div>
          </div>

          {/* Herramientas */}
          <div className="flex flex-col text-center w-full mt-20 mb-20">
            <h2 className="text-2xl text-indigo-500 tracking-widest font-medium title-font mb-1">
              Herramientas:
            </h2>
          </div>

          <div className="flex flex-wrap -m-4 justify-center">
            
            {/* Github */}
            <div className="p-4 md:w-1/3">
              <div className="flex flex-col items-center rounded-lg h-full bg-gray-100 p-8">
                <div className="flex justify-center items-center mb-4 w-20 h-20 bg-gray-600 rounded-full text-white text-5xl">
                  <FaGithub />
                </div>
                <h2 className="text-gray-900 text-2xl title-font font-medium">GitHub.</h2>
              </div>
            </div>

            {/* Tailwind CSS */}
            <div className="p-4 md:w-1/3">
              <div className="flex flex-col items-center rounded-lg h-full bg-gray-100 p-8">
                <div className="flex justify-center items-center mb-4 w-20 h-20 bg-blue-600 rounded-full text-white text-5xl">
                  <SiTailwindcss color="white" />
                </div>
                <h2 className="text-gray-900 text-2xl title-font font-medium">Tailwind CSS.</h2>
              </div>
            </div>

            {/* Jira */}
            <div className="p-4 md:w-1/3">
              <div className="flex flex-col items-center rounded-lg h-full bg-gray-100 p-8">
                <div className="flex justify-center items-center mb-4 w-20 h-20 bg-white-600 rounded-full text-white text-5xl">
                  <SiJira color="Blue" />
                </div>
                <h2 className="text-gray-900 text-2xl title-font font-medium">Jira.</h2>
              </div>
            </div>

            {/* Adobe */}
            <div className="p-4 md:w-1/3">
              <div className="flex flex-col items-center rounded-lg h-full bg-gray-100 p-8">
                <div className="flex justify-center items-center mb-4 w-20 h-20 bg-white-600 rounded-full text-white text-5xl">
                  <SiAdobe color="red" />
                </div>
                <h2 className="text-gray-900 text-2xl title-font font-medium">Adobe.</h2>
              </div>
            </div>


            {/* Netlify */}
            <div className="p-4 md:w-1/3">
              <div className="flex flex-col items-center rounded-lg h-full bg-gray-100 p-8">
                <div className="flex justify-center items-center mb-4 w-20 h-20 bg-gray-200 rounded-full text-white text-5xl">
                  <SiNetlify size={50} color="#00eeffff" />
                </div>
                <h2 className="text-gray-900 text-2xl title-font font-medium">Netlify.</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}