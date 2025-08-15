import Image from 'next/image';

const values = [
  {
    title: "Exploramos",
    description: "Conversamos, analizamos y diseñamos la mejor estrategia creativa para tu proyecto.",
  },
  {
    title: "Producimos",
    description: "Llevamos las ideas a la acción con el mejor equipo y las herramientas más avanzadas.",
  },
  {
    title: "Entregamos",
    description: "Editamos, pulimos y te entregamos un producto final listo para impactar.",
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
            En Hárbol Audiovisual transformamos ideas en experiencias audiovisuales que inspiran, comunican y cumplen objetivos. Somos una productora audiovisual en Lima especializada en producción de video profesional, diseño de sonido y contenidos para publicidad, medios digitales, cine y televisión.
            </p>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
            No solo creamos videos: diseñamos experiencias visuales y sonoras que inspiran, conmueven y fortalecen estrategias. Nuestro trabajo se guía por tres pilares:
          {/* Con más de 5 años de experiencia, ofrecemos soluciones completas desde preproducción, grabación y edición de video hasta postproducción y diseño sonoro, trabajando para marcas, ONGs, instituciones educativas y proyectos culturales. */}
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
              src="/prueba.jpg"
              alt="img_prueba"
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
