'use client';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const founders = [
  {
    name: 'Jossue Guevara',
    role: 'Director y Fundador',
    imageUrl: '/jossue.png',
    hint: 'portrait director',
    specialty: 'Visión Creativa & Dirección',
    experience: '12+ años de experiencia'
  },
  {
    name: 'Italo Corvetto',
    role: 'Director y Fundador',
    imageUrl: '/italo.png',
    hint: 'portrait filmmaker',
    specialty: 'Producción & Cinematografía',
    experience: '10+ años de experiencia'
  },
];

export default function StaffSection() {
  return (
    <section id="staff" className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-24 sm:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-8">
        {/* Enhanced header */}
        <div className="relative">
          <h2 className="relative font-headline text-4xl font-bold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-purple-100 sm:text-5xl lg:text-6xl">
            Nuestro Equipo
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl -z-10 rounded-full"></div>
          </h2>
          
          {/* Decorative line */}
          <div className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-xl leading-relaxed text-blue-100/90 font-light">
          Conoce a los visionarios que lideran nuestros esfuerzos creativos y transforman ideas en experiencias cinematográficas extraordinarias.
        </p>

        {/* Enhanced team grid */}
        <div className="mt-20 flex flex-wrap justify-center gap-8 lg:gap-12">
          {founders.map((person, index) => (
            <div key={person.name} className="group relative">
              {/* Floating animation wrapper */}
              <div className="animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <Card className="relative w-80 h-96 overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-500 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105">
                  <CardContent className="relative p-0 h-full">
                    
                    {/* Image container with cinematic effects */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={person.imageUrl}
                        alt={`Portrait of ${person.name}`}
                        data-ai-hint={person.hint}
                        width={500}
                        height={500}
                        className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                      />
                      
                      {/* Film strip effect */}
                      <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(0deg,transparent,transparent_8px,rgba(0,0,0,0.1)_8px,rgba(0,0,0,0.1)_16px)] opacity-20"></div>
                      
                      {/* Gradient overlays */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-purple-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Corner accent */}
                      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    </div>

                    {/* Enhanced content area */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/95 via-black/70 to-transparent">
                      
                      {/* Role badge */}
                      <div className="mb-3">
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full backdrop-blur-sm">
                          {person.role}
                        </span>
                      </div>

                      {/* Name */}
                      <h3 className="font-headline text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                        {person.name}
                      </h3>

                      {/* Specialty */}
                      <p className="text-sm text-blue-200 mb-1 font-medium">
                        {person.specialty}
                      </p>

                      {/* Experience */}
                      <p className="text-xs text-gray-400">
                        {person.experience}
                      </p>

                      {/* Animated underline */}
                      <div className="absolute bottom-6 left-6 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-16 transition-all duration-500"></div>
                    </div>

                    {/* Hover overlay with play icon effect */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300">
                        <div className="w-0 h-0 border-l-8 border-l-white border-y-6 border-y-transparent ml-1"></div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Floating particles effect */}
              <div className="absolute -top-4 -left-4 w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
              <div className="absolute -bottom-4 -right-4 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping delay-300"></div>
            </div>
          ))}
        </div>

        {/* Call to action section */}
        <div className="mt-20 p-8 rounded-2xl bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-white/10 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-4">Transformamos tu visión en una historia que trasciende.</h3>
          <p className="text-blue-100/80 mb-6 max-w-2xl mx-auto">
            Unimos creatividad, técnica y narrativa audiovisual para producir contenidos que conectan con las emociones, inspiran a tu audiencia y dejan huella en cada proyecto.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-400 hover:to-blue-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
            Comencemos Hoy
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}