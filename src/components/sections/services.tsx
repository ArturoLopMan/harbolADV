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
    <section id="services" className="relative bg-black text-white py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://placehold.co/800x1000.png"
          alt="Director portrait one"
          data-ai-hint="portrait director"
          fill
          className="object-cover object-left opacity-20 grayscale"
        />
      </div>
      <div className="absolute inset-0 z-0">
         <Image
          src="https://placehold.co/800x1000.png"
          alt="Director portrait two"
          data-ai-hint="portrait filmmaker"
          fill
          className="object-cover object-right opacity-20 grayscale"
        />
      </div>
      
      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8 flex items-center">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/3 sm:-translate-x-1/4">
          <h2 className="font-headline text-3xl font-bold uppercase tracking-widest text-white/80 [writing-mode:vertical-lr]">
            Services
          </h2>
        </div>

        <div className="w-full text-center">
          <ul className="space-y-6">
            {services.map((service) => (
              <li key={service} className="border-b border-white/20 pb-4 last:border-b-0">
                <h3 className="font-headline text-2xl font-semibold uppercase tracking-wider text-white transition-colors hover:text-[#FF0000]">
                  {service}
                </h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}