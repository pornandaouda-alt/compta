import AnimatedSection from '@/components/base/AnimatedSection';

const testimonials = [
  {
    initials: 'AD',
    color: 'bg-emerald-500/15 text-emerald-400',
    name: 'Amadou Diallo',
    role: 'Directeur Financier',
    company: 'Groupe AgroCI',
    text: 'PiloteCompta Expertise a transformé notre gestion comptable. L\'équipe nous fait gagner un temps considérable sur les écritures complexes. La conformité SYSCOHADA est irréprochable et les délais sont respectés.',
  },
  {
    initials: 'FC',
    color: 'bg-white/10 text-white',
    name: 'Fatou Cissé',
    role: 'Fondatrice',
    company: 'Start-up TechCI',
    text: 'En tant que fondatrice d\'une startup, je n\'avais aucune expertise comptable. PiloteCompta a pris en charge l\'intégralité de notre tenue de comptabilité. Un vrai game-changer pour nous.',
  },
  {
    initials: 'JK',
    color: 'bg-emerald-500/15 text-emerald-400',
    name: 'Jean-Marc Kouamé',
    role: 'Comptable Senior',
    company: 'SARL Kouamé & Fils',
    text: 'Les états financiers générés sont impeccables. La qualité des livrables et la réactivité de l\'équipe nous permettent de prendre des décisions éclairées en temps réel.',
  },
  {
    initials: 'AB',
    color: 'bg-white/10 text-white',
    name: 'Aïcha Benali',
    role: 'Gérante',
    company: 'Boutique Mode Abidjan',
    text: 'J\'utilisais un cabinet comptable classique depuis 10 ans. Le passage à PiloteCompta s\'est fait en toute fluidité. Le travail dématérialisé est bluffant de simplicité.',
  },
  {
    initials: 'PT',
    color: 'bg-emerald-500/15 text-emerald-400',
    name: 'Pierre Tchinda',
    role: 'DG',
    company: 'Entreprise de BTP Yaoundé',
    text: 'La gestion de notre paie et nos déclarations fiscales sont traitées avec une rigueur exemplaire. Un vrai partenaire de confiance pour notre croissance.',
  },
  {
    initials: 'MO',
    color: 'bg-white/10 text-white',
    name: 'Mariam Ouédraogo',
    role: 'Comptable',
    company: 'ONG Espoir Burkina',
    text: 'PiloteCompta nous aide à structurer notre comptabilité d\'ONG avec le même niveau d\'exigence qu\'une grande entreprise. L\'accompagnement personnalisé est exceptionnel.',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <AnimatedSection animation="fade-in-up" duration={700} className="mb-14 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <span className="text-emerald-400 text-sm font-medium">Témoignages</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-2xl mb-4">
            Ils font confiance à <span className="text-emerald-400">PiloteCompta Expertise</span>
          </h2>
          <p className="text-white/50 text-base md:text-lg">
            Des professionnels de la comptabilité et entrepreneurs à travers l'Afrique francophone.
          </p>
        </AnimatedSection>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
          {testimonials.map((t, i) => (
            <AnimatedSection
              key={t.name}
              animation="fade-in-up"
              delay={i * 100}
              duration={600}
              className="break-inside-avoid mb-6"
            >
              <div className="bg-gray-900/50 rounded-2xl p-6 border border-white/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center`}>
                    <span className="font-heading font-semibold text-sm">{t.initials}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-white text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs">
                      {t.role}, <span className="font-medium">{t.company}</span>
                    </p>
                  </div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">&ldquo;{t.text}&rdquo;</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}