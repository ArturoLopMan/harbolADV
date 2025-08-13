import { Logo } from '@/components/logo';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <iframe
 src="https://player.vimeo.com/video/1049355310?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
        src="https://player.vimeo.com/video/1049355310?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&muted=1&loop=1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
 style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
 title="Reel Harbol 2025"
        ></iframe>
      </div>
      <script src="https://player.vimeo.com/api/player.js"></script>
      <div className="absolute inset-0 bg-black/60" /> {/* Overlay div */}
      <header className="relative z-10 p-4 sm:p-8">
        <div className="flex items-center justify-between">
            <Logo className="text-3xl" />
            <p className="hidden max-w-xs text-right font-body text-sm text-white md:block">
              No contamos historias, las vivimos.
            </p>
        </div>
      </header>

      <div className="relative z-10 flex h-full flex-col items-center justify-center p-4 text-center text-white">
        {/* Content can go here if needed in the future */}
      </div>
    </section>
  );
}
