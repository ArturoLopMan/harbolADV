import Image from 'next/image';

const services = [
  "Concept Development",
  "Directing & Producing",
  "Cinematography",
  "Aerial & Drone Filming",
  "Post-Production & Editing",
  "Color Grading & Sound Design",
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="absolute inset-0">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Film directors collaborating on set"
          data-ai-hint="film director"
          fill
          className="object-cover grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#000080]/95 via-[#000080]/80 to-[#000080]/60" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">Our Services</h2>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            From the initial spark of an idea to the final polished product, we offer a comprehensive suite of services.
          </p>
        </div>
        <div className="mt-16">
          <ul className="grid grid-cols-1 gap-8 text-center sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li key={service} className="rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-colors duration-300 hover:border-white/20 hover:bg-white/10">
                <h3 className="font-headline text-xl font-semibold text-white">{service}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
