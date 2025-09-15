import { FaDownload, FaGithub, FaHtml5, FaJava, FaJs, FaReact } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiTailwindcss, SiAdobe, SiNetlify, SiJira, SiKotlin } from "react-icons/si";

export default function Tech() {
  const skills = [
    { icon: <FaJava />, name: "Java", bg: "bg-orange-600" },
    { icon: <SiSpringboot />, name: "Spring Boot", bg: "bg-green-600" },
    { icon: <FaJs />, name: "JavaScript", bg: "bg-yellow-500" },
    { icon: <FaHtml5 />, name: "HTML", bg: "bg-orange-700" },
    { icon: <FaReact />, name: "React", bg: "bg-blue-400" },
    { icon: <SiKotlin />, name: "Kotlin", bg: "bg-purple-400", note: "En formación" },
    { icon: <SiMysql />, name: "MySQL", bg: "bg-gray-200", color: "#4479A1" },
  ];

  const tools = [
    { icon: <FaGithub />, name: "GitHub", bg: "bg-gray-800" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS", bg: "bg-blue-600" },
    { icon: <SiJira />, name: "Jira", bg: "bg-blue-500" },
    { icon: <SiAdobe />, name: "Adobe", bg: "bg-red-600" },
    { icon: <SiNetlify />, name: "Netlify", bg: "bg-green-400", color: "white" },
  ];

  const renderCard = (skill) => (
    <div key={skill.name} className="p-4 md:w-1/3">
      <div className="flex flex-col items-center rounded-lg bg-gray-100 p-8 h-full hover:shadow-lg transition-shadow duration-300">
        <div
          className={`flex justify-center items-center mb-4 w-20 h-20 rounded-full text-white text-5xl ${skill.bg}`}
          style={skill.color ? { color: skill.color } : {}}
        >
          {skill.icon}
        </div>
        <h2 className="text-gray-900 text-2xl title-font font-medium">{skill.name}</h2>
        {skill.note && (
          <span className="text-green-500 text-sm mt-1 font-medium border px-2 py-1 rounded">
            {skill.note}
          </span>
        )}
      </div>
    </div>
  );

  return (
    <section id="tech" className="bg-gray-50 text-gray-700 body-font py-20">
      {/* Título */}
      <div className="max-w-7xl mx-auto px-10 text-center mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">Tecnologías y Herramientas</h2>
        <div className="w-24 h-1 bg-indigo-500 mx-auto rounded"></div>
      </div>

      {/* Lenguajes */}
      <div className="max-w-7xl mx-auto px-10 text-center mb-12">
        <h3 className="text-2xl text-indigo-500 font-medium tracking-widest mb-6">Lenguajes</h3>
        <div className="flex flex-wrap -m-4 justify-center">
          {skills.map(renderCard)}
        </div>
      </div>

      {/* Herramientas */}
      <div className="max-w-7xl mx-auto px-10 text-center mt-16">
        <h3 className="text-2xl text-indigo-500 font-medium tracking-widest mb-6">Herramientas</h3>
        <div className="flex flex-wrap -m-4 justify-center">
          {tools.map(renderCard)}
        </div>
      </div>
    </section>
  );
}