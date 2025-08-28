'use client';
import Image from 'next/image';

// Array con tus 18 logos - ajusta las rutas según tu estructura
const brands = [
  { name: 'Crehana', logo: '/brands/crehan.png', category: 'streaming' },
  { name: 'Indecopi', logo: '/brands/indecopi.png', category: 'streaming' },
  { name: 'Ministerio', logo: '/brands/ministerios.png', category: 'streaming' },
  { name: 'Amazon Prime', logo: '/brands/amazon.png', category: 'streaming' },
  { name: 'Apple TV', logo: '/brands/apple.png', category: 'streaming' },
  { name: 'Paramount', logo: '/brands/paramount.png', category: 'studio' },
  { name: 'Warner Bros', logo: '/brands/warner.png', category: 'studio' },
  { name: 'Universal', logo: '/brands/universal.png', category: 'studio' },
  { name: 'Sony Pictures', logo: '/brands/sony.png', category: 'studio' },
  { name: 'Lionsgate', logo: '/brands/lionsgate.png', category: 'studio' },
  { name: 'National Geographic', logo: '/brands/natgeo.png', category: 'channel' },
  { name: 'Discovery', logo: '/brands/discovery.png', category: 'channel' },
  { name: 'History Channel', logo: '/brands/history.png', category: 'channel' },
  { name: 'ESPN', logo: '/brands/espn.png', category: 'channel' },
  { name: 'BBC', logo: '/brands/bbc.png', category: 'channel' },
  { name: 'CNN', logo: '/brands/cnn.png', category: 'channel' },
  { name: 'YouTube', logo: '/brands/youtube.png', category: 'platform' },
  { name: 'Vimeo', logo: '/brands/vimeo.png', category: 'platform' }
];

export default function BrandsSection() {
  return (
    <section id="brands" className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 py-24 sm:py-32 overflow-hidden">
      
      {/* Fondo decorativo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl"></div>
      </div>

      {/* Patrón de puntos */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(59,130,246,0.1)_1px,transparent_0)] bg-[size:20px_20px]"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header mejorado */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="font-headline text-4xl font-bold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 sm:text-5xl mb-4">
              Confían en nosotros
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Estas son algunas de las empresas que han confiado en nosotros para llevar sus historias a la pantalla.
          </p>
        </div>

        {/* OPCIÓN 1: Grid responsivo con hover effects */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-8 mb-16">
          {brands.map((brand, index) => (
            <div
              key={brand.name}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Contenedor de logo con efectos */}
              <div className="relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gray-100 hover:border-blue-200">
                
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-blue-500/10 rounded-3xl blur-xl transition-all duration-500"></div>
                
                {/* Logo */}
                <div className="relative h-16 flex items-center justify-center">
                  <Image
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    width={120}
                    height={60}
                    className="max-h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-70 group-hover:opacity-100"
                  />
                </div>
                
                {/* Badge de categoría (opcional) */}
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-block w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></span>
                </div>
              </div>
              
              {/* Nombre al hover */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-sm font-medium text-gray-600 bg-white px-3 py-1 rounded-full shadow-lg whitespace-nowrap">
                  {brand.name}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* OPCIÓN 2: Carrusel infinito (como alternativa) */}
        <div className="mt-20">
          <h3 className="text-center text-lg font-semibold text-gray-600 mb-8">
            Y muchas más organizaciones confían en nuestro trabajo. 
          </h3>
          
          <div className="relative overflow-hidden">
            {/* Gradientes laterales */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>
            
            {/* Carrusel animado */}
            <div className="flex animate-scroll-left space-x-12">
              {[...brands, ...brands].map((brand, index) => (
                <div key={`${brand.name}-${index}`} className="flex-shrink-0">
                  <div className="w-32 h-16 flex items-center justify-center bg-white rounded-lg shadow-sm p-4">
                    <Image
                      src={brand.logo}
                      alt={`${brand.name} logo`}
                      width={100}
                      height={50}
                      className="max-h-10 w-auto object-contain filter grayscale opacity-60"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">18+</div>
            <div className="text-sm text-gray-600">Marcas Premium</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
            <div className="text-sm text-gray-600">Proyectos Completados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">50M+</div>
            <div className="text-sm text-gray-600">Visualizaciones</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
            <div className="text-sm text-gray-600">Años de Experiencia</div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            ¿Quieres que tu marca sea la próxima en esta lista?
          </p>
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-500 hover:to-purple-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
            <span>Trabajemos Juntos</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
      `}</style>
    </section>
  );
}