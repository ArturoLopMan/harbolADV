import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const founders = [
  {
    name: 'Jossue Guevara',
    role: 'Director y Fundador',
    imageUrl: '/jossue.png',
    hint: 'portrait director'
  },
  {
    name: 'Italo Corvetto',
    role: 'Director y Fundador',
    imageUrl: '/italo.png',
    hint: 'portrait filmmaker'
  },
];

export default function StaffSection() {
  return (
    <section id="staff" className="bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
        <h2 className="font-headline text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl">
          Nuestro Equipo
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/80">
          Conoce a los visionarios que lideran nuestros esfuerzos creativos.
        </p>
        <div className="isolate mt-20 grid grid-cols-1 justify-center gap-10 sm:grid-cols-2 lg:flex lg:justify-center lg:gap-8">
          {founders.map((person) => (
            <Card key={person.name} className="group relative mx-auto w-full max-w-xs overflow-hidden rounded-lg border-2 border-transparent bg-transparent text-white transition-all duration-300 hover:border-accent hover:shadow-2xl">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={person.imageUrl}
                    alt={`Portrait of ${person.name}`}
                    data-ai-hint={person.hint}
                    width={500}
                    height={500}
                    className="h-full w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="font-headline text-xl font-bold">{person.name}</h3>
                  <p className="text-sm text-accent">{person.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
