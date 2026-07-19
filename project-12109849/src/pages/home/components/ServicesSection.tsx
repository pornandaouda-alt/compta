import AnimatedSection from '@/components/base/AnimatedSection';

const services = [
  {
    icon: 'ri-book-open-line',
    title: 'Tenue comptable complète',
    desc: 'Saisie comptable, plan comptable SYSCOHADA, journaux, grand livre, balance, rapprochements bancaires, lettrage et régularisations.',
    tag: 'Essentiel',
  },
  {
    icon: 'ri-article-line',
    title: 'Bilan & État patrimonial',
    desc: 'Élaboration du bilan comptable complet : actif immobilisé, stocks, créances, dettes, capitaux propres, provisions et résultat.',
    tag: 'Bilan',
    tagColor: 'emerald',
  },
  {
    icon: 'ri-file-chart-line',
    title: 'États financiers SYSCOHADA',
    desc: 'Compte de résultat, TAFIRE, notes annexes détaillées et tableau des flux de trésorerie selon le format SYSCOHADA révisé.',
    tag: 'Officiel',
    tagColor: 'emerald',
  },
  {
    icon: 'ri-bank-card-line',
    title: 'Déclarations fiscales',
    desc: 'TVA, CET, Impôt sur les bénéfices, TSE et toutes les déclarations diverses conformes à la législation fiscale ivoirienne.',
  },
  {
    icon: 'ri-wallet-3-line',
    title: 'Gestion de la paie',
    desc: 'Bulletins de paie, CNPS, livre de paie, déclarations sociales et gestion des contrats de travail selon la législation en vigueur.',
  },
  {
    icon: 'ri-bar-chart-grouped-line',
    title: 'Analyse financière',
    desc: 'SIG, ratios financiers, rentabilité, liquidité, solvabilité et commentaires détaillés pour piloter votre entreprise.',
  },
  {
    icon: 'ri-upload-cloud-2-line',
    title: 'Externalisation comptable',
    desc: 'Nous devenons votre service comptable externalisé et gérons l\'intégralité de votre comptabilité de A à Z.',
  },
  {
    icon: 'ri-database-2-line',
    title: 'Migration & paramétrage',
    desc: 'Migration depuis votre ancien logiciel comptable, paramétrage du plan comptable et formation de vos équipes.',
  },
];

export default function ServicesSection() {
  return (
    <section id="features" className="py-20 md:py-28 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <AnimatedSection animation="fade-in-up" duration={700} className="text-center mb-14 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <span className="text-emerald-400 text-sm font-medium">Fonctionnalités</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Tout ce dont vous avez besoin, <span className="text-emerald-400">au même endroit</span>
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-2xl mx-auto">
            Une prestation complète qui couvre l'ensemble du cycle comptable, de la saisie jusqu'aux états financiers certifiés.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {services.map((s, i) => (
            <AnimatedSection
              key={s.title}
              animation="fade-in-up"
              delay={i * 80}
              duration={600}
            >
              <div
                className="group bg-gray-900/60 rounded-2xl p-6 border border-white/5 hover:bg-emerald-500 hover:border-emerald-500 transition-all duration-300 hover:scale-[1.02] cursor-default"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 group-hover:bg-white/20 flex items-center justify-center mb-5 transition-colors duration-300">
                  <i className={`${s.icon} text-emerald-400 group-hover:text-white text-xl transition-colors duration-300`}></i>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-heading font-semibold text-white group-hover:text-white text-base transition-colors duration-300">
                    {s.title}
                  </h3>
                  {s.tag && (
                    <span
                      className={`text-xs font-medium px-2 py-0.5 rounded-full transition-colors duration-300 ${
                        s.tagColor === 'emerald'
                          ? 'bg-emerald-500/20 text-emerald-400 group-hover:bg-white/20 group-hover:text-white'
                          : 'bg-emerald-500/20 text-emerald-400 group-hover:bg-white/20 group-hover:text-white'
                      }`}
                    >
                      {s.tag}
                    </span>
                  )}
                </div>
                <p className="text-white/50 text-sm leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                  {s.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}