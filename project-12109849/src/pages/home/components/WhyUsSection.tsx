import AnimatedSection from '@/components/base/AnimatedSection';

const features = [
  {
    icon: 'ri-shield-check-line',
    title: 'Conformité SYSCOHADA garantie',
    desc: 'Toutes nos écritures et états financiers respectent scrupuleusement le plan comptable SYSCOHADA révisé et la réglementation OHADA en vigueur.',
  },
  {
    icon: 'ri-flashlight-line',
    title: 'Traitement rapide et efficace',
    desc: 'Nous traitons vos pièces dans des délais record grâce à des processus optimisés et une équipe réactive dédiée à votre dossier.',
  },
  {
    icon: 'ri-lock-line',
    title: 'Confidentialité absolue',
    desc: 'Vos données comptables sont protégées par des protocoles de sécurité stricts et une clause de confidentialité systématique.',
  },
  {
    icon: 'ri-customer-service-2-line',
    title: 'Accompagnement personnalisé',
    desc: 'Un comptable dédié suit votre dossier de A à Z, disponible pour répondre à vos questions et vous conseiller en temps réel.',
  },
];

export default function WhyUsSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#0a101c]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <AnimatedSection animation="slide-right" duration={800} className="w-full lg:w-2/5">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <span className="text-emerald-400 text-sm font-medium">Tenue de comptabilité</span>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-white/8">
                <img
                  alt="Tableau de bord comptable"
                  className="w-full h-auto"
                  src="https://readdy.ai/api/search-image?query=Dark%20modern%20SaaS%20accounting%20dashboard%20interface%20with%20deep%20navy%20background%2C%20emerald%20green%20accent%20charts%20and%20KPI%20cards%2C%20financial%20data%20visualization%2C%20dark%20mode%20UI%2C%20professional%20web%20application%20screen%2C%20no%20text%20labels%2C%20premium%20corporate%20fintech%20style&width=800&height=1000&seq=comptapilot-dashboard-dark-01&orientation=portrait&nocache=true"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl bg-emerald-500/5 -z-10 border border-emerald-500/10"></div>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200} duration={800} className="w-full lg:w-3/5">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              L'expertise qui maîtrise la comptabilité <span className="text-emerald-400">SYSCOHADA</span>
            </h2>
            <p className="text-white/50 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
              Notre équipe de comptables expérimentés maîtrise le plan comptable SYSCOHADA révisé. Nous vous assistons dans toutes vos tâches comptables, de la saisie d'écritures jusqu'à la génération des états financiers, avec rigueur et réactivité.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((f, i) => (
                <AnimatedSection key={f.title} animation="fade-in-up" delay={300 + i * 100} duration={600}>
                  <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className={`${f.icon} text-emerald-400 text-lg`}></i>
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-white text-sm mb-1">{f.title}</h4>
                      <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <a
              href="/services"
              className="whitespace-nowrap inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-semibold text-sm rounded-xl hover:bg-emerald-400 transition-colors cursor-pointer"
            >
              Découvrir nos services
              <i className="ri-arrow-right-line"></i>
            </a>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}