import { Zap, Film, Camera, Clapperboard, GitBranch, Globe } from 'lucide-react';

const brands = [
  { name: 'Bolt', icon: Zap },
  { name: 'Cineverse', icon: Film },
  { name: 'Shutter Inc.', icon: Camera },
  { name: 'Action Studios', icon: Clapperboard },
  { name: 'Connective', icon: GitBranch },
  { name: 'Global Media', icon: Globe },
];

export default function BrandsSection() {
  return (
    <section id="brands" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="text-center font-headline text-3xl font-bold uppercase tracking-tight text-[#000080] sm:text-4xl">
          Trusted By
        </h2>
        <div className="mx-auto mt-16 grid grid-cols-2 items-center gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-6 lg:max-w-none">
          {brands.map((brand) => (
            <div key={brand.name} className="flex flex-col items-center justify-center gap-2 text-muted-foreground/80 transition-colors duration-300 hover:text-[#FF0000]">
              <brand.icon className="h-12 w-12" />
              <span className="font-semibold">{brand.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
