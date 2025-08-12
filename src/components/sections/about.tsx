import Image from 'next/image';

const values = [
  {
    title: "Creatividad",
    description: "Nos comprometemos a llevar nuestros proyectos al más alto nivel.",
  },
  {
    title: "Transparencia",
    description: "Construimos lazos fiables, fuertes y de confianza con nuestros clientes.",
  },
  {
    title: "Pasión",
    description: "Creamos trabajos originales y de alta calidad con profesionalismo.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-16 lg:grid-cols-2">
          <div>
            <h2 className="font-headline text-3xl font-bold uppercase tracking-tight text-primary sm:text-4xl">
              Sobre Nosotros
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Somos Harbol Vision, una agencia de producción de vídeo y diseño de sonido con más de 15 años de experiencia en el mercado audiovisual para publicidad, medios digitales, cine y televisión.
            </p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              Desde la preproducción hasta la postproducción, buscamos las mejores soluciones técnicas y creativas, inspirando y conmoviendo al público a través de la narración.
            </p>
            <div className="mt-12 space-y-8">
              {values.map((value, index) => (
                <div key={value.title} className="flex gap-x-4">
                  <div className="flex-shrink-0">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent font-headline text-lg font-bold text-white">
                      {`0${index + 1}`}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-headline text-lg font-semibold text-primary">{value.title}</h4>
                    <p className="mt-1 text-base text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-[3/2] overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src="https://placehold.co/800x600.png"
              alt="Equipo de Harbol Vision trabajando"
              data-ai-hint="video production team"
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
