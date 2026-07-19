import AnimatedSection from '@/components/base/AnimatedSection';

const steps = [
  { step: 1, title: 'Prise de contact', desc: 'Échange téléphonique ou visioconférence pour comprendre vos besoins.', icon: 'ri-phone-line' },
  { step: 2, title: 'Analyse de votre entreprise', desc: 'Étude approfondie de votre secteur, de votre volume d\'activité et de vos obligations.', icon: 'ri-search-eye-line' },
  { step: 3, title: 'Transmission sécurisée des documents', desc: 'Dépôt de vos pièces comptables sur notre plateforme chiffrée et sécurisée.', icon: 'ri-shield-check-line' },
  { step: 4, title: 'Traitement comptable', desc: 'Saisie, lettrage et rapprochement bancaire par nos experts dédiés.', icon: 'ri-calculator-line' },
  { step: 5, title: 'Révision et contrôle', desc: 'Vérification croisée, contrôle qualité et validation avant livraison.', icon: 'ri-check-double-line' },
  { step: 6, title: 'Déclarations fiscales', desc: 'Établissement et transmission de vos obligations déclaratives dans les délais.', icon: 'ri-file-text-line' },
  { step: 7, title: 'Production des états financiers', desc: 'Livraison de votre Grand Livre, Balance, Bilan et Compte de résultat.', icon: 'ri-bar-chart-box-line' },
  { step: 8, title: 'Accompagnement permanent', desc: 'Suivi régulier, analyse financière et conseil tout au long de l\'année.', icon: 'ri-user-star-line' },
];

export default function CollaborationTimeline() {
  return (
    <div>
      <div className="text-center mb-12">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 mb-5 shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
          <span className="text-emerald-600 text-sm font-semibold tracking-wide">MÉTHODE</span>
        </div>
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#0a1628] mb-3">
          Notre méthode de travail
        </h3>
      </div>

      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-300 via-emerald-200 to-transparent md:-translate-x-px"></div>

        <div className="space-y-0">
          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            return (
              <AnimatedSection
                key={step.step}
                animation="fade-in-up"
                delay={i * 80}
                duration={600}
              >
                <div className={`relative flex items-start gap-6 mb-8 md:mb-6 ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  <div className={`absolute left-6 md:left-1/2 w-12 h-12 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center z-10 shadow-[0_2px_12px_rgba(16,185,129,0.15)] -translate-x-1/2 ${
                    i === 0 ? 'animate-pulse' : ''
                  }`}>
                    <span className="font-heading font-bold text-sm text-emerald-600">{step.step}</span>
                  </div>

                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isEven ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'
                  } w-full`}>
                    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300">
                      <div className={`flex items-center gap-3 mb-2 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                        <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                          <i className={`${step.icon} text-emerald-600 text-sm`}></i>
                        </div>
                        <h4 className="font-heading font-bold text-[#0a1628] text-sm">{step.title}</h4>
                      </div>
                      <p className={`text-gray-400 text-xs leading-relaxed ${isEven ? 'md:text-right' : ''}`}>{step.desc}</p>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-[calc(50%-2rem)]"></div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </div>
  );
}