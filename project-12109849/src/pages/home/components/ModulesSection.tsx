import AnimatedSection from '@/components/base/AnimatedSection';

const modules = [
  {
    title: 'Comptabilité Générale',
    desc: 'Plan comptable SYSCOHADA, journaux, grand livre, balance, lettrage et rapprochement bancaire.',
    icon: 'ri-book-open-line',
    image: 'https://readdy.ai/api/search-image?query=Dark%20elegant%20abstract%20illustration%20of%20accounting%20ledger%20with%20glowing%20emerald%20green%20lines%20on%20deep%20navy%20blue%20background%2C%20minimal%20geometric%20shapes%2C%20modern%20fintech%20style%2C%20no%20text%2C%20premium%20corporate%20aesthetic&width=600&height=600&seq=comptapilot-mod-compta-dark-01&orientation=squarish&nocache=true',
  },
  {
    title: 'Bilan & État patrimonial',
    desc: 'Actif, passif, capitaux propres, provisions, immobilisations et analyse patrimoniale complète.',
    icon: 'ri-scales-3-line',
    image: 'https://readdy.ai/api/search-image?query=Dark%20elegant%20abstract%20illustration%20of%20balance%20scale%20with%20emerald%20green%20glow%20on%20deep%20navy%20background%2C%20geometric%20shapes%2C%20modern%20fintech%20style%2C%20no%20text%2C%20premium%20corporate%20aesthetic&width=600&height=600&seq=comptapilot-mod-bilan-dark-01&orientation=squarish&nocache=true',
  },
  {
    title: 'États financiers',
    desc: 'Compte de résultat, TAFIRE, notes annexes et tableau des flux de trésorerie officiels.',
    icon: 'ri-file-chart-line',
    image: 'https://readdy.ai/api/search-image?query=Dark%20elegant%20abstract%20illustration%20of%20financial%20charts%20and%20graphs%20with%20emerald%20green%20accents%20on%20deep%20navy%20blue%20background%2C%20data%20visualization%2C%20modern%20fintech%20style%2C%20no%20text%2C%20premium%20corporate%20aesthetic&width=600&height=600&seq=comptapilot-mod-ef-dark-01&orientation=squarish&nocache=true',
  },
  {
    title: 'Facturation & Ventes',
    desc: 'Devis, factures, avoirs, relances clients et suivi des encaissements pour optimiser votre trésorerie.',
    icon: 'ri-file-list-3-line',
    image: 'https://readdy.ai/api/search-image?query=Dark%20elegant%20abstract%20illustration%20of%20invoice%20and%20sales%20documents%20with%20emerald%20green%20lines%20on%20deep%20navy%20blue%20background%2C%20minimal%20geometric%20shapes%2C%20modern%20fintech%20style%2C%20no%20text%2C%20premium%20corporate%20aesthetic&width=600&height=600&seq=comptapilot-mod-facture-dark-01&orientation=squarish&nocache=true',
  },
  {
    title: 'Banque & Trésorerie',
    desc: 'Rapprochement automatique, prévisions de trésorerie et analyse des flux pour une gestion optimale.',
    icon: 'ri-bank-card-line',
    image: 'https://readdy.ai/api/search-image?query=Dark%20elegant%20abstract%20illustration%20of%20banking%20cards%20and%20coins%20with%20emerald%20green%20glow%20on%20deep%20navy%20blue%20background%2C%20geometric%20shapes%2C%20modern%20fintech%20style%2C%20no%20text%2C%20premium%20corporate%20aesthetic&width=600&height=600&seq=comptapilot-mod-banque-dark-01&orientation=squarish&nocache=true',
  },
  {
    title: 'Gestion de la Paie',
    desc: 'Bulletins, CNPS, livre de paie, déclarations sociales et gestion des contrats de travail.',
    icon: 'ri-wallet-3-line',
    image: 'https://readdy.ai/api/search-image?query=Dark%20elegant%20abstract%20illustration%20of%20payroll%20documents%20with%20emerald%20green%20accents%20on%20deep%20navy%20blue%20background%2C%20geometric%20shapes%2C%20modern%20fintech%20style%2C%20no%20text%2C%20premium%20corporate%20aesthetic&width=600&height=600&seq=comptapilot-mod-paie-dark-01&orientation=squarish&nocache=true',
  },
];

const extraTags = [
  'Fiscalité', 'Analyse financière', 'Externalisation', 'Migration',
  'Achats', 'Stocks', 'Immobilisations', 'Clients', 'Fournisseurs',
  'Tableaux de bord',
];

export default function ModulesSection() {
  return (
    <section id="modules" className="py-20 md:py-28 bg-[#0a101c]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <AnimatedSection animation="fade-in-up" duration={700} className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 md:mb-16">
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="text-white/70 text-sm font-medium">Modules</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white max-w-xl">
              Une suite complète pour votre <span className="text-emerald-400">gestion comptable</span>
            </h2>
          </div>
          <p className="text-white/50 text-base max-w-md">
            Chaque module est interconnecté pour une expérience fluide et cohérente, du journal jusqu'aux états financiers certifiés.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m, i) => (
            <AnimatedSection key={m.title} animation="fade-in-up" delay={i * 100} duration={700} className="group cursor-default">
              <div className="relative overflow-hidden rounded-2xl bg-gray-800/40 aspect-square mb-4 border border-white/5">
                <img
                  alt={m.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={m.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent"></div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <i className={`${m.icon} text-emerald-400 text-base`}></i>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white text-base mb-1">{m.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-in-up" delay={500} duration={700} className="mt-14 text-center">
          <p className="text-white/30 text-sm mb-4">Et bien d'autres domaines couverts</p>
          <div className="flex flex-wrap justify-center gap-3">
            {extraTags.map((tag) => (
              <span
                key={tag}
                className="whitespace-nowrap px-4 py-2 rounded-full bg-white/5 border border-white/8 text-white/40 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}