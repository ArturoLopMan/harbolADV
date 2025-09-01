import { Logo } from '@/components/logo';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Contenedor del video de fondo */}
      <video
        src="/reel_harbol_2025.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay para oscurecer el video */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Header con logo y eslogan */}
      <header className="absolute top-0 left-0 z-10 w-full p-4 sm:p-8">
        <div className="flex items-center justify-between">
          <Logo className="text-3xl" />
          <p className="max-w-sm text-right font-body text-base sm:text-lg md:text-xl font-semibold text-white drop-shadow-lg leading-snug">
    Historias que se ven, <br className="hidden sm:block" />
    se escuchan y se sienten.
  </p>
        </div>
      </header>

      {/* Contenido centrado (opcional) */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4 text-center text-white">
        {/* Aquí puedes agregar botones, texto o llamadas a la acción */}
      </div>
    </section>
  );
}
