export default function Hero() {
  return (
    <>
      <section className="hero">
        <h1 className="title">¡Hola!</h1>
        <h2 className="subtitle">Soy</h2>
        <h2 className="subtitle">@robertodfj</h2>
        <h2 className="subtitle">Me encanta desarrollar</h2>
        <img src="" alt="" className="icon" />
        <img src="" alt="" className="icon" />
        <button class="group relative inline-block focus:ring-3 focus:outline-hidden" href="#">
          <span
            class="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-green-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
          ></span>

          <span
            class="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold tracking-widest text-black uppercase"
          >
            ¡Disponible!
          </span>

          
        </button>
      </section>
      
    </>
  );
}