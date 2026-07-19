import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import AnimatedSection from '@/components/base/AnimatedSection';

const team = [
  {
    name: 'Koffi Emmanuel YAO',
    role: 'Fondateur & Expert-Comptable',
    bio: 'Plus de 25 ans d\'expérience en comptabilité SYSCOHADA. Ancien Directeur Financier d\'un groupe de 500 employés, Emmanuel a fondé PiloteCompta Expertise pour apporter une comptabilité de qualité aux PME africaines.',
    image: 'https://readdy.ai/api/search-image?query=Professional%20African%20businessman%20in%20his%2050s%20wearing%20a%20dark%20navy%20suit%2C%20confident%20expression%2C%20corporate%20headshot%20on%20dark%20background%20with%20subtle%20emerald%20green%20lighting%20accent%2C%20clean%20studio%20photography%2C%20no%20text&width=400&height=500&seq=team-emmanuel&orientation=portrait',
  },
  {
    name: 'Aminata KONÉ',
    role: 'Directrice Technique & Fiscaliste',
    bio: 'Diplômée du DSC, 18 ans d\'expertise en fiscalité ivoirienne. Aminata pilote notre pôle déclarations fiscales et veille réglementaire avec une précision redoutable.',
    image: 'https://readdy.ai/api/search-image?query=Professional%20African%20businesswoman%20in%20her%2040s%20wearing%20an%20elegant%20dark%20suit%2C%20warm%20friendly%20smile%2C%20corporate%20headshot%20on%20dark%20background%20with%20subtle%20emerald%20green%20lighting%20accent%2C%20clean%20studio%20photography%2C%20no%20text&width=400&height=500&seq=team-aminata&orientation=portrait',
  },
  {
    name: 'Serge KOUAKOU',
    role: 'Responsable Paie & Social',
    bio: '15 ans de gestion de paie multi-secteurs. Serge connaît le Code du Travail ivoirien sur le bout des doigts et veille à ce que chaque bulletin soit irréprochable.',
    image: 'https://readdy.ai/api/search-image?query=Professional%20African%20man%20in%20his%20late%2030s%20wearing%20a%20smart%20navy%20blazer%2C%20approachable%20friendly%20smile%2C%20corporate%20headshot%20on%20dark%20background%20with%20subtle%20emerald%20green%20lighting%20accent%2C%20clean%20studio%20photography%2C%20no%20text&width=400&height=500&seq=team-serge&orientation=portrait',
  },
  {
    name: 'Fatou DIALLO',
    role: 'Comptable Senior — Tenue & Révision',
    bio: '10 ans d\'expérience terrain. Fatou supervise la saisie, les révisions et la clôture pour nos plus grands comptes. Rigueur absolue, zéro tolérance aux écarts.',
    image: 'https://readdy.ai/api/search-image?query=Professional%20African%20businesswoman%20in%20her%20early%2030s%20wearing%20an%20elegant%20dark%20blazer%2C%20focused%20confident%20look%2C%20corporate%20headshot%20on%20dark%20background%20with%20subtle%20emerald%20green%20lighting%20accent%2C%20clean%20studio%20photography%2C%20no%20text&width=400&height=500&seq=team-fatou&orientation=portrait',
  },
];

const values = [
  { icon: 'ri-shield-check-line', title: 'Conformité', desc: 'Nous appliquons scrupuleusement le référentiel SYSCOHADA révisé et les normes fiscales en vigueur.' },
  { icon: 'ri-eye-line', title: 'Transparence', desc: 'Vous avez un accès complet à vos données. Pas de jargon, pas de boîte noire : tout est clair et justifié.' },
  { icon: 'ri-time-line', title: 'Réactivité', desc: 'Une question ? Une urgence fiscale ? Nous répondons en moins de 4 heures, 24h/24 et 7j/7.' },
  { icon: 'ri-heart-line', title: 'Proximité', desc: 'Chaque client a un comptable dédié qui connaît son entreprise, son secteur et ses enjeux.' },
];

const milestones = [
  { year: '2000', title: 'Création du cabinet', desc: 'Emmanuel YAO ouvre son cabinet d\'expertise comptable à Abidjan-Plateau.' },
  { year: '2008', title: '100 clients', desc: 'Le cabinet franchit le cap des 100 entreprises accompagnées.' },
  { year: '2015', title: 'Lancement PiloteCompta Expertise', desc: 'Digitalisation de l\'offre : naissance de la marque PiloteCompta Expertise avec des outils modernes.' },
  { year: '2020', title: 'Certification ISO 9001', desc: 'Notre processus qualité est certifié ISO 9001 pour la tenue comptable.' },
  { year: '2024', title: 'Intelligence Artificielle', desc: 'Intégration de l\'IA pour automatiser les tâches répétitives et améliorer la précision.' },
  { year: '2026', title: '10 000 clients', desc: 'PiloteCompta Expertise devient le partenaire comptable de référence en Afrique de l\'Ouest.' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#070d1a] overflow-hidden">
          <div className="absolute inset-0">
            <img
              alt="À propos PiloteCompta Expertise"
              className="w-full h-full object-cover opacity-20"
              src="https://readdy.ai/api/search-image?query=Abstract%20dark%20navy%20blue%20background%20with%20flowing%20wave%20lines%20and%20subtle%20glowing%20emerald%20green%20accents%2C%20smooth%20gradient%20curves%2C%20premium%20fintech%20aesthetic%2C%20deep%20space%20atmosphere%2C%20elegant%20geometric%20patterns%2C%20no%20text&width=1920&height=800&seq=about-hero-dark&orientation=landscape"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#070d1a]/50 via-transparent to-[#070d1a]/80"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
            <AnimatedSection animation="fade-in-up" duration={800} className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <span className="text-emerald-400 text-sm font-medium">Qui sommes-nous</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                L'histoire d'un <span className="text-emerald-400">engagement</span>
              </h1>
              <p className="text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
                Depuis 2000, nous accompagnons les entreprises africaines dans leur conformité comptable SYSCOHADA. Notre mission : vous libérer de la charge administrative pour que vous vous concentriez sur votre croissance.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Story / Timeline */}
        <section className="py-20 md:py-28 bg-[#0a101c]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <AnimatedSection animation="fade-in-up" duration={800} className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Notre histoire</h2>
              <p className="text-white/40 text-base max-w-xl mx-auto">
                Plus de 25 ans d'évolution au service de la comptabilité africaine.
              </p>
            </AnimatedSection>

            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/8 md:-translate-x-px"></div>
              {milestones.map((m, i) => {
                const isLeft = i % 2 === 0;
                return (
                  <AnimatedSection
                    key={m.year}
                    animation={isLeft ? 'slide-right' : 'slide-left'}
                    delay={i * 100}
                    duration={700}
                    className={`relative flex items-start gap-8 mb-12 last:mb-0 md:w-1/2 ${isLeft ? 'md:pr-12 md:ml-0 md:mr-auto' : 'md:pl-12 md:ml-auto md:mr-0'} pl-12 md:pl-0`}
                  >
                    <div className="absolute left-4 md:left-1/2 top-2 w-3 h-3 rounded-full bg-emerald-500 -translate-x-1/2 ring-4 ring-[#0a101c] z-10"></div>
                    <div className={`w-full p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/20 transition-all duration-300 ${isLeft ? 'md:text-right' : ''}`}>
                      <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-2">{m.year}</span>
                      <h3 className="text-white font-semibold text-base mb-1">{m.title}</h3>
                      <p className="text-white/40 text-sm leading-relaxed">{m.desc}</p>
                    </div>
                  </AnimatedSection>
                );
              })}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 md:py-28 bg-[#070d1a]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <AnimatedSection animation="fade-in-up" duration={800} className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Nos valeurs</h2>
              <p className="text-white/40 text-base max-w-xl mx-auto">
                Ce qui guide chacune de nos décisions et chacun de nos dossiers.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v, i) => (
                <AnimatedSection key={v.title} animation="fade-in-up" delay={i * 100} duration={700} className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-emerald-500/20 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-5 group-hover:bg-emerald-500/20 transition-colors">
                    <i className={`${v.icon} text-emerald-400 text-xl`}></i>
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2">{v.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{v.desc}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 md:py-28 bg-[#0a101c]">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <AnimatedSection animation="fade-in-up" duration={800} className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">Notre équipe</h2>
              <p className="text-white/40 text-base max-w-xl mx-auto">
                Des professionnels passionnés, entièrement dédiés à votre réussite.
              </p>
            </AnimatedSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map((m, i) => (
                <AnimatedSection key={m.name} animation="fade-in-up" delay={i * 120} duration={700} className="group">
                  <div className="rounded-2xl overflow-hidden border border-white/5 bg-white/[0.02] hover:border-emerald-500/25 transition-all duration-300">
                    <div className="relative overflow-hidden h-64">
                      <img
                        alt={m.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        src={m.image}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a101c] via-transparent to-transparent"></div>
                    </div>
                    <div className="p-5">
                      <h3 className="text-white font-semibold text-base mb-1">{m.name}</h3>
                      <p className="text-emerald-400 text-xs font-medium mb-3">{m.role}</p>
                      <p className="text-white/40 text-xs leading-relaxed">{m.bio}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-[#070d1a]">
          <div className="absolute inset-0">
            <img
              alt="Rejoignez PiloteCompta Expertise"
              className="w-full h-full object-cover opacity-15"
              src="https://readdy.ai/api/search-image?query=Premium%20modern%20dark%20corporate%20office%20interior%20at%20night%20with%20warm%20ambient%20lighting%2C%20large%20windows%2C%20navy%20blue%20and%20emerald%20green%20accents%2C%20sophisticated%20executive%20workspace%2C%20dramatic%20lighting%2C%20no%20text&width=1920&height=600&seq=about-cta-dark&orientation=landscape"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#070d1a]/85 via-[#070d1a]/75 to-[#070d1a]/85"></div>
          <div className="relative z-10 max-w-3xl mx-auto px-4 md:px-6 text-center">
            <AnimatedSection animation="fade-in-up" duration={800}>
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
                Prêt à nous confier votre <span className="text-emerald-400">comptabilité</span> ?
              </h2>
              <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
                Rejoignez les 10 000 entreprises qui nous font déjà confiance.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="/contact"
                  className="whitespace-nowrap px-8 py-4 bg-emerald-500 text-white font-semibold text-base rounded-xl hover:bg-emerald-400 transition-all duration-200 cursor-pointer"
                >
                  Nous contacter
                </a>
                <a
                  href="/services"
                  className="whitespace-nowrap px-8 py-4 bg-white/8 text-white font-semibold text-base rounded-xl border border-white/15 hover:bg-white/15 transition-all duration-200 cursor-pointer"
                >
                  Voir nos services
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