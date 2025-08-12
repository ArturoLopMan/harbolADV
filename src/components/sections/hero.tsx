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
      <div className="absolute left-4 top-4 sm:left-8 sm:top-8">
        <Logo className="text-3xl" />
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center p-4 text-center text-white">
        <h1 className="font-headline text-5xl font-bold uppercase md:text-7xl">
          <span className="bg-gradient-to-r from-[#000080] to-[#FF0000] bg-clip-text text-transparent">
            Harbol
          </span>{' '}
          Vision
        </h1>
        <p className="mt-4 max-w-2xl font-body text-lg md:text-xl">
          Creative video production that brings your ideas to life.
        </p>
      </div>
    </section>
  );
}
