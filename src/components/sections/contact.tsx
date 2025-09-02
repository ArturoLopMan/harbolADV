'use client';
import { use, useState } from 'react';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    message: '',
    phone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        message: '',
        phone: ''
      });
    }, 2000);
  };

  return (
    <section id="contact" className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-24 sm:py-32 overflow-hidden">
      
      {/* Fondo animado */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Patrón de cuadrícula */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="font-headline text-4xl font-bold uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-purple-100 sm:text-5xl lg:text-6xl mb-4">
              Hablemos de tu Proyecto
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-xl -z-10 rounded-full"></div>
            </h2>
            <div className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
          </div>
          
          <p className="mt-8 text-xl leading-relaxed text-blue-100/90 font-light max-w-3xl mx-auto">
            Cuéntanos tu visión y la transformaremos en contenido audiovisual que conecte, inspire y genere impacto real.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Información de contacto */}
          <div className="space-y-8">
            <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 p-8">
              <h3 className="text-2xl font-bold text-white mb-6">¿Por qué elegirnos?</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Experiencia Premium</h4>
                    <p className="text-blue-100/80">Más de 15 años creando contenido para marcas líderes del mercado.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Resultados Medibles</h4>
                    <p className="text-blue-100/80">Contenido estratégico que genera engagement y conversiones reales.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Entrega Puntual</h4>
                    <p className="text-blue-100/80">Procesos optimizados que garantizan calidad y tiempos de entrega.</p>
                  </div>
                </div>
              </div>

              {/* Estadísticas */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400">500+</div>
                    <div className="text-sm text-blue-100/70">Proyectos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">18+</div>
                    <div className="text-sm text-blue-100/70">Marcas Premium</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Información de contacto directo */}
            <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 p-8">
              <h3 className="text-xl font-bold text-white mb-4">Contacto Directo</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-blue-100">contabilidad.harbol@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-blue-100">+51 999 123 456</span>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-blue-100">Lima, Perú</span>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 p-8">
            
            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">¡Mensaje Enviado!</h3>
                <p className="text-blue-100/80">Te contactaremos dentro de las próximas 24 horas.</p>
                <Button 
                  onClick={() => setSubmitStatus(null)}
                  className="mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500"
                >
                  Enviar Otro Mensaje
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="Tu nombre"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                      placeholder="+51 999 123 456"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Tipo de Proyecto *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    >
                      <option value="" className="bg-slate-800">Selecciona un tipo</option>
                      <option value="comercial" className="bg-slate-800">Comercial/Publicidad</option>
                      <option value="corporativo" className="bg-slate-800">Video Corporativo</option>
                      <option value="documental" className="bg-slate-800">Documental</option>
                      <option value="evento" className="bg-slate-800">Cobertura de Evento</option>
                      <option value="musical" className="bg-slate-800">Video Musical</option>
                      <option value="otro" className="bg-slate-800">Otro</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Presupuesto Estimado
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300"
                    >
                      <option value="" className="bg-slate-800">Selecciona un rango</option>
                      <option value="5k-10k" className="bg-slate-800">$5,000 - $10,000</option>
                      <option value="10k-25k" className="bg-slate-800">$10,000 - $25,000</option>
                      <option value="25k-50k" className="bg-slate-800">$25,000 - $50,000</option>
                      <option value="50k+" className="bg-slate-800">$50,000+</option>
                      <option value="consultar" className="bg-slate-800">A consultar</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Cuéntanos sobre tu proyecto *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 resize-none"
                    placeholder="Describe tu visión, objetivos, audiencia objetivo, timeline, y cualquier detalle importante que nos ayude a entender tu proyecto..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-gray-600 cursor-not-allowed' 
                      : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Enviando...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <span>Enviar Proyecto</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </div>
                  )}
                </Button>

                <p className="text-sm text-blue-100/60 text-center">
                  * Campos obligatorios. Responderemos en un máximo de 24 horas.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}