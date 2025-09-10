import NavBar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Tech from "./components/Tech"
import Contact from "./components/Contact"

function App() {
  return (
    <>
      <NavBar />
      <Hero />

      <div className="flex flex-col min-h-screen">
        {/* Mitad superior: About */}
        <div className="h-1/2 overflow-y-auto">
          <About />
        </div>

        {/* Mitad inferior: Experience */}
        <div className="h-1/2 overflow-y-auto">
          <Experience />
        </div>
      </div>

      <Projects />
      <Tech />
      <Contact />
    </>
  )
}

export default App
