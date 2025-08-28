import { Button } from '@/components/ui/button';

export default function ContactSection() {
  return (
    <section id="contact" className="bg-secondary py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="font-headline text-3xl font-bold uppercase tracking-tight text-primary sm:text-4xl">
          Producción audiovisual que conecta e inspira
        </h2>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Cuéntanos tu idea y la transformamos en un contenido audiovisual de alto impacto, pensado para tu marca y tu audiencia.
        </p>
        <div className="mt-10">
          <Button size="lg" asChild className="font-headline rounded-full bg-gradient-to-r from-primary to-accent px-8 py-6 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105">
            <a href="mailto:contact@harbolvision.com">
              Hablemos Hoy
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
