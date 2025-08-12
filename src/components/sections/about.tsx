const values = [
  {
    title: "Creatividad",
    description: "Somos personas creativas y nos comprometemos a llevar nuestros proyectos al más alto nivel.",
  },
  {
    title: "Transparencia",
    description: "Somos siempre transparentes con nuestros clientes construyendo lazos fiables, fuertes y de confianza.",
  },
  {
    title: "Pasión",
    description: "Somos profesionales apasionados creando trabajos originales y de alta calidad.",
  },
  {
    title: "Competitividad",
    description: "Nuestra gama de precios es altamente competitiva. Trabajar en remoto con nosotros podría beneficiar los costes de producción.",
  },
  {
    title: "Visión Global",
    description: "Nuestro objetivo es ampliar nuestro vasto conocimiento y experiencia para ofrecer el sonido más personalizado.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-primary text-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-headline text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            Sobre Nosotros
          </h2>
          <p className="mt-6 text-center text-lg leading-8 text-white/80">
            Somos Harbol Vision, una agencia de producción de vídeo y diseño de sonido con sede en Madrid y Barcelona. Tenemos más de 15 años de experiencia en el mercado audiovisual, ofreciendo nuestros servicios para publicidad, medios digitales, cine y televisión con todo tipo de contenidos.
          </p>
          <p className="mt-4 text-center text-lg leading-8 text-white/80">
            Desde la preproducción hasta la postproducción, buscamos las mejores soluciones técnicas y creativas para una amplia gama de presupuestos. Harbol Vision se centra en inspirar y conmover al público a través de la narración con una vehemente pasión por la imagen y el sonido.
          </p>
        </div>

        <div className="mt-20">
          <h3 className="text-center font-headline text-2xl font-bold uppercase tracking-tight sm:text-3xl">
            ¿Por qué Harbol Vision?
          </h3>
          <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value, index) => (
              <div key={value.title} className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <span className="font-headline text-2xl font-bold text-accent">
                    {`0${index + 1}`}
                  </span>
                </div>
                <h4 className="mt-4 font-headline text-lg font-semibold">{value.title}</h4>
                <p className="mt-2 text-sm leading-6 text-white/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
