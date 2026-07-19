import AnimatedSection from '@/components/base/AnimatedSection';

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          alt="ComptaPilot Expertise Bureau"
          className="w-full h-full object-cover"
          src="https://readdy.ai/api/search-image?query=Premium%20modern%20dark%20corporate%20office%20interior%20with%20warm%20ambient%20lighting%2C%20large%20glass%20windows%20city%20view%20at%20night%2C%20navy%20blue%20and%20emerald%20green%20subtle%20accents%2C%20elegant%20furniture%2C%20abstract%20art%20on%20walls%2C%20sophisticated%20atmosphere%2C%20subtle%20geometric%20patterns%2C%20premium%20executive%20workspace%2C%20dramatic%20lighting&width=1920&height=800&seq=comptapilot-cta-office-dark-01&orientation=landscape&nocache=true"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/80 to-gray-950/90"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        <AnimatedSection animation="fade-in-up" duration={800} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Prêt à transformer votre comptabilité ?
            </h2>
            <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 max-w-md">
              Rejoignez plus de 50 entreprises qui font déjà confiance à ComptaPilot Expertise au quotidien.
            </p>
            <a
              href="https://wa.me/2250141425787"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap inline-flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-semibold text-base rounded-xl hover:bg-gray-100 transition-all duration-200 cursor-pointer group"
            >
              Commencer maintenant
              <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center group-hover:bg-emerald-400 transition-colors">
                <i className="ri-arrow-right-line text-white text-sm"></i>
              </div>
            </a>
          </div>
          <AnimatedSection animation="fade-in-up" delay={300} duration={700} className="lg:text-right">
            <p className="text-white/50 text-sm leading-relaxed max-w-xs lg:ml-auto">
              Contactez-nous directement sur WhatsApp pour un devis personnalisé et un accompagnement sur mesure.
            </p>
          </AnimatedSection>
        </AnimatedSection>
      </div>
    </section>
  );
}