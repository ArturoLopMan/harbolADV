import { Logo } from '@/components/logo';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute left-1/2 top-1/2 h-auto w-auto min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
        src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/60" />
      
      <header className="relative z-10 p-4 sm:p-8">
        <div className="flex items-center justify-between">
            <Logo className="text-3xl" />
            <p className="hidden max-w-xs text-right font-body text-sm text-white md:block">
              Creative video production that brings your ideas to life.
            </p>
        </div>
      </header>

      <div className="relative z-10 flex h-full flex-col items-center justify-center p-4 text-center text-white">
        {/* Content can go here if needed in the future */}
      </div>
    </section>
  );
}
