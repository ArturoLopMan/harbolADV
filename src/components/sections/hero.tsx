import { Logo } from '@/components/logo';
import Script from 'next/script';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Contenedor del video en relación 16:9 */}
      <div className="relative aspect-video h-full w-full">
        <iframe
          src="https://player.vimeo.com/video/1049355310?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&background=1"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full"
          title="Reel Harbol 2025"
          aria-hidden="true"
        />
      </div>

      {/* Script de Vimeo cargado de forma óptima */}
      <Script src="https://player.vimeo.com/api/player.js" strategy="lazyOnload" />

      {/* Overlay para oscurecer el video */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Header con logo y eslogan */}
      <header className="absolute top-0 left-0 z-10 w-full p-4 sm:p-8">
        <div className="flex items-center justify-between">
          <Logo className="text-3xl" />
          <p className="hidden max-w-xs text-right font-body text-lg font-bold text-white drop-shadow-md md:block">
          Historias que se ven, se escuchan y se sienten.
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