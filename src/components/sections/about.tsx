import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl space-y-16 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold uppercase tracking-tight text-primary sm:text-4xl">About Us</h2>
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            Our mission is to craft compelling visual stories that resonate with audiences and elevate brands. We are a passionate team of creators, directors, and artists.
          </p>
        </div>
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2">
          <div className="space-y-8">
            <h3 className="font-headline text-2xl font-semibold leading-7 text-primary">Our Vision & Process</h3>
            <p className="leading-relaxed text-muted-foreground">
              We believe in the power of video to inspire, entertain, and inform. From concept to final cut, we pour our creativity and technical expertise into every project, ensuring a final product that not-only-meets but exceeds expectations. We thrive on collaboration and innovation.
            </p>
             <p className="leading-relaxed text-muted-foreground">
              Our process is built on a foundation of clear communication and partnership. We work closely with our clients to understand their goals, ensuring every frame we create is purposeful and impactful.
            </p>
          </div>
          <div className="relative h-96 w-full">
            <Image
              src="https://placehold.co/800x600.png"
              alt="Harbol Vision team working on a project"
              data-ai-hint="team collaboration"
              fill
              className="rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
