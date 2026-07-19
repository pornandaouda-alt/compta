import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import AnimatedSection from '@/components/base/AnimatedSection';

const cases = [
  {
    id: 'agroplus',
    client: 'AgroPlus CI',
    sector: 'Agro-industrie',
    location: 'Abidjan, Yopougon',
    size: '200 employés — 3,5 milliards FCFA CA',
    challenge: 'AgroPlus gérait sa comptabilité en interne avec un logiciel obsolète. Les états financiers annuels étaient systématiquement en retard, les déclarations fiscales comportaient des erreurs récurrentes, et la direction n\'avait aucune visibilité sur sa trésorerie réelle.',
    solution: 'Nous avons migré l\'intégralité de leur comptabilité vers notre plateforme, repris l\'historique sur 3 exercices, mis en place un reporting mensuel avec tableaux de bord, et pris en charge toutes leurs déclarations fiscales (TVA, CET, IS).',
    results: [
      { label: 'Délai de clôture annuelle', before: '4 mois', after: '3 semaines' },
      { label: 'Erreurs déclaratives', before: '12 / an', after: '0' },
      { label: 'Économie annuelle', before: '', after: '18M FCFA' },
      { label: 'Satisfaction DG', before: 'Faible', after: 'Très élevée' },
    ],
    testimonial: 'PiloteCompta a transformé notre relation avec les chiffres. Enfin des états financiers à temps et des déclarations sans stress.',
    testimonialAuthor: 'Marc BOHOUSSOU, Directeur Général',
    image: 'https://readdy.ai/api/search-image?query=Modern%20dark%20agro-industrial%20warehouse%20and%20silos%20at%20dusk%20with%20emerald%20green%20accent%20lighting%2C%20professional%20industrial%20photography%2C%20deep%20navy%20sky%2C%20dramatic%20atmospheric%20lighting%2C%20no%20text&width=800&height=500&seq=case-agroplus&orientation=landscape',
  },
  {
    id: 'techhub',
    client: 'TechHub Africa',
    sector: 'Technologies & SaaS',
    location: 'Abidjan, Cocody',
    size: '45 employés — 800M FCFA CA',
    challenge: 'Startup en forte croissance, TechHub Africa n\'avait jamais structuré sa comptabilité. Pas de plan comptable adapté, pas de suivi des immobilisations, et une gestion de paie chaotique avec des retards de cotisations CNPS.',
    solution: 'Nous avons mis en place un plan comptable SYSCOHADA sur mesure, régularisé l\'ensemble des arriérés CNPS, structuré le suivi des immobilisations (matériel informatique, licences), et instauré un processus de paie mensuel rigoureux.',
    results: [
      { label: 'Conformité CNPS', before: '6 mois de retard', after: 'À jour' },
      { label: 'Suivi immo', before: 'Inexistant', after: 'Complet' },
      { label: 'Temps géré / mois', before: '', after: '40 heures' },
      { label: 'Levée de fonds', before: 'Bloquée', after: 'Réussie (500M)' },
    ],
    testimonial: 'Sans PiloteCompta Expertise, notre levée de fonds aurait capoté. Les investisseurs ont adoré la rigueur de nos états financiers.',
    testimonialAuthor: 'Aïssata BAMBA, CEO & Co-fondatrice',
    image: 'https://readdy.ai/api/search-image?query=Modern%20dark%20tech%20startup%20open%20space%20office%20at%20night%20with%20emerald%20green%20ambient%20lighting%2C%20programmers%20working%2C%20sleek%20minimalist%20design%2C%20professional%20atmosphere%2C%20deep%20navy%20tones%2C%20no%20text&width=800&height=500&seq=case-techhub&orientation=landscape',
  },
  {
    id: 'clinique',
    client: 'Clinique Les Oliviers',
    sector: 'Santé',
    location: 'Abidjan, Marcory',
    size: '80 employés — 1,2 Milliard FCFA CA',
    challenge: 'La clinique avait accumulé 3 exercices de retard dans la production de ses états financiers. Les créances patients n\'étaient pas suivies, la trésorerie était tendue, et un contrôle fiscal était imminent.',
    solution: 'Nous avons rattrapé les 3 exercices en 4 mois, mis en place un suivi rigoureux des créances patients avec relance automatique, optimisé la gestion de trésorerie, et préparé l\'intégralité du dossier pour le contrôle fiscal.',
    results: [
      { label: 'Retard comptable', before: '3 exercices', after: 'Résorbé' },
      { label: 'Créances recouvrées', before: '', after: '180M FCFA' },
      { label: 'Contrôle fiscal', before: 'Redouté', after: 'Aucun redressement' },
      { label: 'Trésorerie', before: 'Critique', after: 'Stabilisée' },
    ],
    testimonial: 'Ils ont rattrapé 3 ans de retard en 4 mois et nous ont sauvés d\'un redressement fiscal. Du jamais vu.',
    testimonialAuthor: 'Dr Alain KOUASSI, Directeur Médical',
    image: 'https://readdy.ai/api/search-image?query=Modern%20dark%20private%20hospital%20clinic%20exterior%20at%20night%20with%20emerald%20green%20accent%20lighting%2C%20elegant%20architecture%2C%20professional%20atmosphere%2C%20deep%20navy%20sky%2C%20no%20text&width=800&height=500&seq=case-clinique&orientation=landscape',
  },
  {
    id: 'logistrans',
    client: 'LogiTrans SA',
    sector: 'Transport & Logistique',
    location: 'Abidjan, Port-Bouët',
    size: '350 employés — 8 Milliards FCFA CA',
    challenge: 'Groupe de transport avec 4 filiales, LogiTrans avait une comptabilité éclatée entre plusieurs cabinets. Consolidation impossible, reporting groupe inexistant, et des problèmes récurrents de TVA sur les opérations de transport international.',
    solution: 'Nous avons unifié la comptabilité des 4 filiales sur une plateforme unique, mis en place une consolidation mensuelle automatique, optimisé le traitement de la TVA transport, et créé un reporting groupe sur mesure pour le conseil d\'administration.',
    results: [
      { label: 'Consolidation', before: 'Impossible', after: 'Mensuelle auto' },
      { label: 'Optimisation TVA', before: '', after: '45M FCFA / an' },
      { label: 'Reporting DG', before: 'Inexistant', after: 'En temps réel' },
      { label: 'Délai clôture groupe', before: '6 mois', after: '4 semaines' },
    ],
    testimonial: 'Avoir un interlocuteur unique pour nos 4 filiales et des comptes consolidés chaque mois a changé notre gouvernance.',
    testimonialAuthor: 'Jean-Marc EKRA, Président Directeur Général',
    image: 'https://readdy.ai/api/search-image?query=Modern%20dark%20logistics%20warehouse%20and%20container%20port%20at%20night%20with%20emerald%20green%20accent%20lighting%2C%20cargo%20trucks%2C%20professional%20industrial%20photography%2C%20deep%20navy%20sky%2C%20no%20text&width=800&height=500&seq=case-logistrans&orientation=landscape',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#070d1a] overflow-hidden">
          <div className="absolute inset-0">
            <img
              alt="Études de cas PiloteCompta Expertise"
              className="w-full h-full object-cover opacity-20"
              src="https://readdy.ai/api/search-image?query=Abstract%20dark%20navy%20blue%20background%20with%20flowing%20wave%20lines%20and%20subtle%20glowing%20emerald%20green%20accents%2C%20smooth%20gradient%20curves%2C%20premium%20fintech%20aesthetic%2C%20deep%20space%20atmosphere%2C%20elegant%20geometric%20patterns%2C%20no%20text&width=1920&height=800&seq=cases-hero-dark&orientation=landscape"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#070d1a]/50 via-transparent to-[#070d1a]/80"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
            <AnimatedSection animation="fade-in-up" duration={800} className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <span className="text-emerald-400 text-sm font-medium">Études de cas</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Des <span className="text-emerald-400">résultats</span> qui parlent d'eux-mêmes
              </h1>
              <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
                Découvrez comment nous avons aidé des entreprises de tous secteurs à transformer leur gestion comptable et à atteindre la conformité SYSCOHADA.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Case studies */}
        <section className="py-20 md:py-28 bg-[#0a101c]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="space-y-20 md:space-y-28">
              {cases.map((c, i) => (
                <div key={c.id} id={c.id} className="scroll-mt-24">
                  <AnimatedSection
                    animation={i % 2 === 0 ? 'slide-right' : 'slide-left'}
                    duration={800}
                    className="flex flex-col lg:flex-row gap-10 lg:gap-16"
                  >
                    {/* Image */}
                    <div className="w-full lg:w-5/12">
                      <div className="rounded-2xl overflow-hidden border border-white/8">
                        <img
                          alt={c.client}
                          className="w-full h-64 md:h-80 object-cover"
                          src={c.image}
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="w-full lg:w-7/12">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold">{c.sector}</span>
                        <span className="px-3 py-1 rounded-full bg-white/5 text-white/40 text-xs">{c.location}</span>
                      </div>
                      <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-2">{c.client}</h2>
                      <p className="text-white/30 text-sm mb-6">{c.size}</p>

                      <div className="space-y-5">
                        <div>
                          <h3 className="flex items-center gap-2 text-orange-400 text-sm font-semibold uppercase tracking-wider mb-2">
                            <i className="ri-error-warning-line"></i> Le défi
                          </h3>
                          <p className="text-white/50 text-sm leading-relaxed">{c.challenge}</p>
                        </div>

                        <div>
                          <h3 className="flex items-center gap-2 text-emerald-400 text-sm font-semibold uppercase tracking-wider mb-2">
                            <i className="ri-lightbulb-line"></i> Notre solution
                          </h3>
                          <p className="text-white/50 text-sm leading-relaxed">{c.solution}</p>
                        </div>
                      </div>

                      {/* Results table */}
                      <div className="mt-6 p-5 rounded-2xl bg-white/[0.03] border border-white/5">
                        <h3 className="text-white font-semibold text-sm mb-4">Résultats</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                          {c.results.map((r, j) => (
                            <div key={j} className="text-center">
                              <p className="text-white/30 text-xs mb-1">{r.label}</p>
                              {r.before && (
                                <p className="text-white/20 text-xs line-through mb-1">{r.before}</p>
                              )}
                              <p className="text-emerald-400 font-heading font-bold text-lg">
                                {r.after}
                                {r.before ? '' : ''}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="mt-5 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                        <i className="ri-double-quotes-l text-emerald-400/30 text-xl mb-2 block"></i>
                        <p className="text-white/60 text-sm italic leading-relaxed mb-2">« {c.testimonial} »</p>
                        <p className="text-white/30 text-xs">{c.testimonialAuthor}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-[#070d1a]">
          <div className="absolute inset-0">
            <img
              alt="Devenez notre prochain succès"
              className="w-full h-full object-cover opacity-15"
              src="https://readdy.ai/api/search-image?query=Premium%20modern%20dark%20corporate%20office%20interior%20at%20night%20with%20warm%20ambient%20lighting%2C%20large%20windows%2C%20navy%20blue%20and%20emerald%20green%20accents%2C%20sophisticated%20executive%20workspace%2C%20dramatic%20lighting%2C%20no%20text&width=1920&height=600&seq=cases-cta-dark&orientation=landscape"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#070d1a]/85 via-[#070d1a]/75 to-[#070d1a]/85"></div>
          <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 text-center">
            <AnimatedSection animation="fade-in-up" duration={800}>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
                Votre <span className="text-emerald-400">success story</span> commence ici
              </h2>
              <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
                Chaque entreprise est unique. Parlons de vos besoins et construisons ensemble la solution qui vous correspond.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="whitespace-nowrap px-8 py-4 bg-emerald-500 text-white font-semibold text-base rounded-xl hover:bg-emerald-400 transition-all duration-200 cursor-pointer"
                >
                  Demander un devis
                </a>
                <a
                  href="/services"
                  className="whitespace-nowrap px-8 py-4 bg-white/8 text-white font-semibold text-base rounded-xl border border-white/15 hover:bg-white/15 transition-all duration-200 cursor-pointer"
                >
                  Nos services
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}