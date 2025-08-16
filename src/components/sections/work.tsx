import { Card, CardContent } from '@/components/ui/card';

const works = [
  {
    id: 1,
    alt: "Still from a cinematic short film",
    iframeUrl: "https://player.vimeo.com/video/878923911?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0&background=1",
  },
  {
    id: 2,
    alt: "Frame from a corporate brand video",
    iframeUrl: "https://player.vimeo.com/video/733775893?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0&background=1",
  },
  {
    id: 3,
    alt: "Scene from a music video",
    iframeUrl: "https://player.vimeo.com/video/878927005?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0&background=1",
  },
  {
    id: 4,
    alt: "Shot from a documentary production",
    iframeUrl: "https://player.vimeo.com/video/582785263?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0&background=1",
  },
  {
    id: 5,
    alt: "Commercial advertisement still",
    iframeUrl: "https://player.vimeo.com/video/443274166?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0&background=1",
  },
  {
    id: 6,
    alt: "Event coverage highlight",
    iframeUrl: "https://player.vimeo.com/video/373990652?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0&background=1",
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold uppercase tracking-tight text-primary sm:text-4xl">
            Work
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Este es un vistazo a las historias que hemos contado. Proyectos que conectan, inspiran y dejan huella.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((work) => (
            <Card
              key={work.id}
              className="group overflow-hidden rounded-lg border-2 border-transparent transition-all duration-300 hover:border-accent hover:shadow-2xl"
            >
              <CardContent className="p-0">
                <div className="aspect-[16/9] overflow-hidden">
                  <iframe
                    src={work.iframeUrl}
                    title={work.alt}
                    className="h-full w-full transition-transform duration-300 group-hover:scale-105"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
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
