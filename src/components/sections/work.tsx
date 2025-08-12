import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const works = [
  { id: 1, alt: "Still from a cinematic short film", hint: "cinematic film" },
  { id: 2, alt: "Frame from a corporate brand video", hint: "corporate video" },
  { id: 3, alt: "Scene from a music video", hint: "music video" },
  { id: 4, alt: "Shot from a documentary production", hint: "documentary production" },
  { id: 5, alt: "Commercial advertisement still", hint: "commercial advertisement" },
  { id: 6, alt: "Event coverage highlight", hint: "event photography" },
];

export default function WorkSection() {
  return (
    <section id="work" className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold uppercase tracking-tight text-primary sm:text-4xl">Our Work</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            A glimpse into the diverse range of projects we've brought to life.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <Card key={work.id} className="group overflow-hidden rounded-lg border-2 border-transparent transition-all duration-300 hover:border-accent hover:shadow-2xl">
              <CardContent className="p-0">
                <div className="aspect-[16/9] overflow-hidden">
                  <Image
                    src={`https://placehold.co/600x400.png`}
                    alt={work.alt}
                    data-ai-hint={work.hint}
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
