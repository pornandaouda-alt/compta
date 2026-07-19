import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import AnimatedSection from '@/components/base/AnimatedSection';

const modules = [
  {
    icon: 'ri-book-open-line',
    title: 'Tenue comptable complète',
    subtitle: 'Le cœur de notre expertise',
    desc: 'Nous assurons l\'intégralité de votre tenue comptable selon les normes SYSCOHADA révisées. De la saisie des écritures jusqu\'à la clôture des comptes, chaque étape est rigoureusement exécutée.',
    features: [
      'Saisie comptable quotidienne ou périodique',
      'Respect du plan comptable SYSCOHADA révisé',
      'Tenue des journaux auxiliaires et centralisateurs',
      'Élaboration du grand livre général',
      'Balance générale des comptes',
      'Balance auxiliaire clients et fournisseurs',
      'Rapprochements bancaires mensuels',
      'Lettrage et pointage des comptes',
      'Écritures de régularisation et d\'inventaire',
      'Clôture des comptes annuels',
    ],
    image: 'https://readdy.ai/api/search-image?query=Dark%20elegant%20modern%20accounting%20workspace%20with%20organized%20ledgers%2C%20emerald%20green%20subtle%20accents%20on%20deep%20navy%20background%2C%20professional%20financial%20documents%2C%20sophisticated%20composition%2C%20no%20text%2C%20premium%20fintech%20editorial%20style&width=800&height=600&seq=services-compta-dark-01&orientation=landscape&nocache=true',
  },
  {
    icon: 'ri-scales-3-line',
    title: 'Bilan & État patrimonial',
    subtitle: 'Votre patrimoine décrypté',
    desc: 'Nous élaborons votre bilan comptable complet avec une précision chirurgicale. Actif immobilisé, stocks, créances, dettes, capitaux propres et provisions : chaque poste est justifié et analysé.',
    features: [
      'Élaboration du bilan actif complet',
      'Élaboration du bilan passif détaillé',
      'Analyse des capitaux propres et résultats',
      'Justification des postes d\'actif immobilisé',
      'Évaluation et provision des stocks',
      'Analyse des créances et dépréciations',
      'Détail des dettes et emprunts',
      'Calcul des provisions réglementées',
      'Revue de la répartition du résultat',
      'Attestation de bilan pour tiers',
    ],
    image: 'https://readdy.ai/api/search-image?query=Dark%20elegant%20abstract%20balance%20scale%20with%20emerald%20green%20glow%20on%20deep%20navy%20background%2C%20geometric%20shapes%2C%20modern%20fintech%20style%2C%20no%20text%2C%20premium%20corporate%20aesthetic&width=800&height=600&seq=services-bilan-dark-01&orientation=landscape&nocache=true',
  },
  {
    icon: 'ri-file-chart-line',
    title: 'États financiers SYSCOHADA',
    subtitle: 'Clarté et conformité',
    desc: 'Nous produisons vos états financiers annuels conformément au référentiel SYSCOHADA. Compte de résultat, TAFIRE et notes annexes, chaque document est rigoureusement élaboré.',
    features: [
      'Compte de résultat par nature',
      'Tableau des Flux de Trésorerie (TAFIRE)',
      'Notes annexes détaillées et justifiées',
      'Tableau de variation des capitaux propres',
      'État des immobilisations et amortissements',
      'État des provisions et dépréciations',
      'Rapport de gestion annuel',
      'Liasse fiscale complète',
      'Certification et visa des états',
    ],
    image: 'https://readdy.ai/api/search-image?query=Dark%20elegant%20financial%20charts%20and%20graphs%20with%20emerald%20green%20accents%20on%20deep%20navy%20blue%20background%2C%20data%20visualization%2C%20modern%20fintech%20style%2C%20no%20text%2C%20premium%20corporate%20aesthetic&width=800&height=600&seq=services-ef-dark-01&orientation=landscape&nocache=true',
  },
  {
    icon: 'ri-bank-card-line',
    title: 'Déclarations fiscales',
    subtitle: 'Conformité garantie',
    desc: 'Nous gérons l\'ensemble de vos obligations déclaratives fiscales. TVA, CET, impôt sur les bénéfices, et toutes vos déclarations sont préparées et déposées dans les délais légaux.',
    features: [
      'Déclaration de TVA mensuelle',
      'Déclaration de la Contribution des Entreprises (CET)',
      'Déclaration de la Taxe sur les Salaires (TSE)',
      'Déclaration de l\'Impôt sur les Bénéfices (IS/BIC)',
      'Déclarations sociales (CNPS, retraite)',
      'Déclarations statistiques',
      'Veille fiscale et alertes réglementaires',
      'Optimisation fiscale légale',
      'Assistance en cas de contrôle fiscal',
    ],
    image: 'https://readdy.ai/api/search-image?query=Dark%20elegant%20tax%20declaration%20concept%20with%20forms%20and%20calculator%2C%20emerald%20green%20accents%20on%20deep%20navy%20background%2C%20geometric%20abstract%20elements%2C%20modern%20fintech%20style%2C%20no%20text%2C%20premium%20corporate%20aesthetic&width=800&height=600&seq=services-fiscal-dark-01&orientation=landscape&nocache=true',
  },
  {
    icon: 'ri-wallet-3-line',
    title: 'Gestion de la paie',
    subtitle: 'Rigueur et confidentialité',
    desc: 'Externalisez votre gestion de paie en toute sérénité. Bulletins, déclarations sociales, CNPS : nous prenons tout en charge avec une confidentialité absolue.',
    features: [
      'Établissement des bulletins de paie mensuels',
      'Calcul des cotisations CNPS employeur et employé',
      'Tenue du livre de paie réglementaire',
      'Déclarations sociales périodiques',
      'Gestion des congés payés',
      'Élaboration des contrats de travail',
      'Gestion des acomptes et avances sur salaire',
      'Attestations et certificats de travail',
      'Déclarations de fin d\'exercice',
    ],
    image: 'https://readdy.ai/api/search-image?query=Dark%20elegant%20payroll%20documents%20and%20salary%20management%20with%20emerald%20green%20accents%20on%20deep%20navy%20background%2C%20geometric%20shapes%2C%20modern%20fintech%20style%2C%20no%20text%2C%20premium%20corporate%20aesthetic&width=800&height=600&seq=services-paie-dark-01&orientation=landscape&nocache=true',
  },
  {
    icon: 'ri-bar-chart-grouped-line',
    title: 'Analyse financière',
    subtitle: 'Pilotez votre entreprise',
    desc: 'Au-delà des chiffres, nous vous aidons à comprendre votre performance financière. SIG, ratios, rentabilité : des indicateurs clairs pour des décisions éclairées.',
    features: [
      'Calcul des Soldes Intermédiaires de Gestion (SIG)',
      'Analyse de la capacité d\'autofinancement (CAF)',
      'Calcul du Fonds de Roulement (FR)',
      'Analyse du Besoin en Fonds de Roulement (BFR)',
      'Ratios de rentabilité (ROE, ROA, marge)',
      'Ratios de liquidité et solvabilité',
      'Ratios de structure financière',
      'Commentaires financiers détaillés',
      'Tableaux de bord de pilotage',
    ],
    image: 'https://readdy.ai/api/search-image?query=Dark%20elegant%20financial%20analysis%20charts%20and%20KPI%20dashboard%20with%20emerald%20green%20accents%20on%20deep%20navy%20background%2C%20data%20visualization%2C%20modern%20fintech%20style%2C%20no%20text%2C%20premium%20corporate%20aesthetic&width=800&height=600&seq=services-analyse-dark-01&orientation=landscape&nocache=true',
  },
  {
    icon: 'ri-upload-cloud-2-line',
    title: 'Externalisation comptable',
    subtitle: 'Votre service comptable externalisé',
    desc: 'Nous devenons votre département comptable. Vous vous concentrez sur votre activité, nous gérons l\'intégralité de votre comptabilité avec la même rigueur qu\'un service interne.',
    features: [
      'Prise en charge complète de votre comptabilité',
      'Comptable dédié disponible en permanence',
      'Reporting mensuel personnalisé',
      'Participation aux comités de direction',
      'Gestion de la relation avec les commissaires aux comptes',
      'Archivage sécurisé de vos documents',
      'Formation de vos équipes internes',
      'Optimisation des processus comptables',
      'Scalabilité selon votre croissance',
    ],
    image: 'https://readdy.ai/api/search-image?query=Dark%20elegant%20outsourcing%20partnership%20concept%20with%20handshake%20over%20documents%2C%20emerald%20green%20accents%20on%20deep%20navy%20background%2C%20modern%20fintech%20style%2C%20no%20text%2C%20premium%20corporate%20aesthetic&width=800&height=600&seq=services-externalisation-dark-01&orientation=landscape&nocache=true',
  },
  {
    icon: 'ri-database-2-line',
    title: 'Migration & paramétrage',
    subtitle: 'Transition en douceur',
    desc: 'Vous changez de logiciel ou de cabinet ? Nous assurons la migration complète de vos données comptables et le paramétrage de votre nouvel environnement.',
    features: [
      'Diagnostic de votre système comptable actuel',
      'Extraction et nettoyage des données',
      'Migration vers votre nouveau logiciel',
      'Paramétrage du plan comptable SYSCOHADA',
      'Reprise des balances et historiques',
      'Configuration des journaux et modèles',
      'Tests de cohérence et validation',
      'Formation de vos équipes au nouveau système',
      'Support post-migration',
    ],
    image: 'https://readdy.ai/api/search-image?query=Dark%20elegant%20data%20migration%20concept%20with%20digital%20arrows%20and%20documents%2C%20emerald%20green%20accents%20on%20deep%20navy%20background%2C%20modern%20fintech%20style%2C%20no%20text%2C%20premium%20corporate%20aesthetic&width=800&height=600&seq=services-migration-dark-01&orientation=landscape&nocache=true',
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero Banner */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#070d1a] overflow-hidden">
          <div className="absolute inset-0">
            <img
              alt="Services PiloteCompta Expertise"
              className="w-full h-full object-cover opacity-20"
              src="https://readdy.ai/api/search-image?query=Abstract%20dark%20navy%20blue%20background%20with%20flowing%20wave%20lines%20and%20subtle%20glowing%20emerald%20green%20accents%2C%20smooth%20gradient%20curves%2C%20premium%20fintech%20aesthetic%2C%20deep%20space%20atmosphere%2C%20elegant%20geometric%20patterns%2C%20dark%20mode%20UI%20background%2C%20no%20text%2C%204k%20quality&width=1920&height=800&seq=services-hero-dark-01&orientation=landscape&nocache=true"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#070d1a]/50 via-transparent to-[#070d1a]/80"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
            <AnimatedSection animation="fade-in-up" duration={800} className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <span className="text-emerald-400 text-sm font-medium">Nos services</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Une expertise complète en <span className="text-emerald-400">tenue de comptabilité</span>
              </h1>
              <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
                Découvrez l'ensemble de nos prestations. Chaque module est conçu pour répondre aux exigences du SYSCOHADA et vous offrir une gestion comptable irréprochable.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Modules détaillés */}
        <section className="py-20 md:py-28 bg-[#0a101c]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="space-y-24 md:space-y-32">
              {modules.map((mod, i) => {
                const isEven = i % 2 === 0;
                return (
                  <div key={mod.title} id={`service-${i}`} className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
                    <AnimatedSection
                      animation={isEven ? 'slide-right' : 'fade-in-up'}
                      duration={800}
                      className={`w-full lg:w-1/2 ${isEven ? '' : 'lg:order-2'}`}
                    >
                      <div className="relative">
                        <div className="rounded-2xl overflow-hidden border border-white/8">
                          <img
                            alt={mod.title}
                            className="w-full h-auto object-cover"
                            src={mod.image}
                          />
                        </div>
                        <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl bg-emerald-500/5 -z-10 border border-emerald-500/10"></div>
                      </div>
                    </AnimatedSection>

                    <AnimatedSection
                      animation="fade-in-up"
                      delay={200}
                      duration={800}
                      className={`w-full lg:w-1/2 ${isEven ? '' : 'lg:order-1'}`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                          <i className={`${mod.icon} text-emerald-400 text-lg`}></i>
                        </div>
                        <span className="text-emerald-400 text-sm font-semibold uppercase tracking-wider">{mod.subtitle}</span>
                      </div>
                      <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
                        {mod.title}
                      </h2>
                      <p className="text-white/50 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
                        {mod.desc}
                      </p>

                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {mod.features.map((f, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <i className="ri-check-line text-emerald-400 text-xs"></i>
                            </div>
                            <span className="text-white/60 text-sm leading-relaxed">{f}</span>
                          </li>
                        ))}
                      </ul>
                    </AnimatedSection>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-[#070d1a]">
          <div className="absolute inset-0">
            <img
              alt="Contact PiloteCompta Expertise"
              className="w-full h-full object-cover opacity-15"
              src="https://readdy.ai/api/search-image?query=Premium%20modern%20dark%20corporate%20office%20interior%20at%20night%20with%20warm%20ambient%20lighting%2C%20large%20windows%2C%20navy%20blue%20and%20emerald%20green%20accents%2C%20sophisticated%20executive%20workspace%2C%20dramatic%20lighting%2C%20no%20text&width=1920&height=600&seq=services-cta-dark-01&orientation=landscape&nocache=true"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#070d1a]/85 via-[#070d1a]/75 to-[#070d1a]/85"></div>
          <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 text-center">
            <AnimatedSection animation="fade-in-up" duration={800}>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
                Prêt à nous confier votre <span className="text-emerald-400">comptabilité</span> ?
              </h2>
              <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
                Discutons de vos besoins. Nous vous proposerons une solution sur mesure, adaptée à votre activité et à votre budget.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="whitespace-nowrap px-8 py-4 bg-emerald-500 text-white font-semibold text-base rounded-xl hover:bg-emerald-400 transition-all duration-200 cursor-pointer"
                >
                  Demander un devis
                </a>
                <a
                  href="/#tarifs"
                  className="whitespace-nowrap px-8 py-4 bg-white/8 text-white font-semibold text-base rounded-xl border border-white/15 hover:bg-white/15 transition-all duration-200 cursor-pointer"
                >
                  Voir les tarifs
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