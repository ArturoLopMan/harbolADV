"use client";

import { motion } from "framer-motion";

const services = [
  "Cursos Virtuales Personalizados",
  "Producción de Contenido Institucional",
  "Cobertura de Eventos y Documentales",
  "Producción Audiovisual Creativa",
  "Edición y Post-Producción",
  "Storytelling de Marca",
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative bg-black text-white py-24 sm:py-32 overflow-hidden"
    >
      {/* Fondo con videos */}
      <div className="absolute inset-0 z-0">
        <iframe
          src="https://player.vimeo.com/video/582786315?autoplay=1&loop=1&muted=1&background=1"
          frameBorder="0"
          allow="autoplay; fullscreen"
          className="w-full h-full object-cover opacity-20 grayscale"
        ></iframe>
      </div>
{/* Fondo con videos 
      <div className="absolute inset-0 z-0">
        <video
          src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-right opacity-20 grayscale"
        />
      </div>*/}

      {/* Contenido */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 flex items-center">
        {/* Título lateral */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 sm:-translate-x-1/4">
          <h2 className="font-headline text-3xl font-bold uppercase tracking-widest text-white/80 [writing-mode:vertical-lr]">
            Servicios
          </h2>
        </div>

        {/* Lista centrada con animaciones */}
        <div className="w-full flex justify-center">
          <ul className="space-y-6 text-center">
            {services.map((service, index) => (
              <motion.li
                key={service}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="border-b border-white/20 pb-4 last:border-b-0"
              >
                <h3 className="font-headline text-2xl font-semibold uppercase tracking-wider text-white transition-colors hover:text-accent">
                  {service}
                </h3>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
