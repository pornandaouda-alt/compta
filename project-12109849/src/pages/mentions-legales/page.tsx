import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import AnimatedSection from '@/components/base/AnimatedSection';

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-[#070d1a] overflow-hidden">
          <div className="absolute inset-0">
            <img
              alt="Mentions légales"
              className="w-full h-full object-cover opacity-15"
              src="https://readdy.ai/api/search-image?query=Abstract%20dark%20navy%20blue%20background%20with%20flowing%20wave%20lines%20and%20subtle%20glowing%20emerald%20green%20accents%2C%20smooth%20gradient%20curves%2C%20premium%20fintech%20aesthetic%2C%20deep%20space%20atmosphere%2C%20elegant%20geometric%20patterns%2C%20no%20text&width=1920&height=600&seq=legal-hero-dark&orientation=landscape"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#070d1a]/60 via-transparent to-[#070d1a]/80"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
            <AnimatedSection animation="fade-in-up" duration={800} className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <span className="text-emerald-400 text-sm font-medium">Informations légales</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Mentions <span className="text-emerald-400">légales</span>
              </h1>
            </AnimatedSection>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 md:py-28 bg-[#0a101c]">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <AnimatedSection animation="fade-in-up" duration={700} className="prose prose-invert prose-emerald max-w-none">
              <div className="space-y-12">
                {/* Éditeur */}
                <div>
                  <h2 className="font-heading text-2xl font-bold text-white mb-4">1. Éditeur du site</h2>
                  <div className="bg-white/[0.03] rounded-2xl border border-white/5 p-6 space-y-3">
                    <p className="text-white/50 text-sm leading-relaxed">
                      Le site internet <strong className="text-white/80">pilotecompta.com</strong> est édité par :
                    </p>
                    <ul className="text-white/50 text-sm space-y-2">
                      <li><strong className="text-white/80">Raison sociale :</strong> PiloteCompta SARL</li>
                      <li><strong className="text-white/80">Forme juridique :</strong> Société à Responsabilité Limitée (SARL)</li>
                      <li><strong className="text-white/80">Capital social :</strong> 10 000 000 FCFA</li>
                      <li><strong className="text-white/80">RCCM :</strong> CI-ABJ-03-2000-B12-00458</li>
                      <li><strong className="text-white/80">CC :</strong> 2000458P</li>
                      <li><strong className="text-white/80">N° Compte contribuable :</strong> 0200458P</li>
                      <li><strong className="text-white/80">Siège social :</strong> Immeuble Latrille, 8e étage, Plateau, Boulevard de la République, Abidjan, Côte d'Ivoire</li>
                      <li><strong className="text-white/80">Téléphone :</strong> +225 27 22 44 55 66</li>
                      <li><strong className="text-white/80">Email :</strong> contact@pilotecompta.com</li>
                    </ul>
                  </div>
                </div>

                {/* Directeur de publication */}
                <div>
                  <h2 className="font-heading text-2xl font-bold text-white mb-4">2. Directeur de la publication</h2>
                  <div className="bg-white/[0.03] rounded-2xl border border-white/5 p-6">
                    <p className="text-white/50 text-sm leading-relaxed">
                      Le directeur de la publication est <strong className="text-white/80">Monsieur Koffi Emmanuel YAO</strong>, en sa qualité de Gérant de la société PiloteCompta SARL.
                    </p>
                  </div>
                </div>

                {/* Hébergement */}
                <div>
                  <h2 className="font-heading text-2xl font-bold text-white mb-4">3. Hébergement</h2>
                  <div className="bg-white/[0.03] rounded-2xl border border-white/5 p-6 space-y-3">
                    <p className="text-white/50 text-sm leading-relaxed">
                      Le site est hébergé par :
                    </p>
                    <ul className="text-white/50 text-sm space-y-2">
                      <li><strong className="text-white/80">Hébergeur :</strong> Readdy.ai</li>
                      <li><strong className="text-white/80">Site web :</strong> https://readdy.ai</li>
                    </ul>
                  </div>
                </div>

                {/* Propriété intellectuelle */}
                <div>
                  <h2 className="font-heading text-2xl font-bold text-white mb-4">4. Propriété intellectuelle</h2>
                  <div className="bg-white/[0.03] rounded-2xl border border-white/5 p-6">
                    <p className="text-white/50 text-sm leading-relaxed">
                      L'ensemble du contenu présent sur le site <strong className="text-white/80">pilotecompta.com</strong> (textes, images, logos, marques, graphismes, icônes) est protégé par les lois en vigueur sur la propriété intellectuelle. Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans autorisation écrite préalable de PiloteCompta SARL.
                    </p>
                  </div>
                </div>

                {/* Données personnelles */}
                <div>
                  <h2 className="font-heading text-2xl font-bold text-white mb-4">5. Données personnelles</h2>
                  <div className="bg-white/[0.03] rounded-2xl border border-white/5 p-6 space-y-4">
                    <p className="text-white/50 text-sm leading-relaxed">
                      Conformément à la Loi n°2013-450 du 19 juin 2013 relative à la protection des données à caractère personnel en Côte d'Ivoire, vous disposez d'un droit d'accès, de rectification, d'opposition et de suppression des données vous concernant.
                    </p>
                    <p className="text-white/50 text-sm leading-relaxed">
                      Pour exercer ces droits, vous pouvez nous contacter à l'adresse suivante : <strong className="text-white/80">contact@pilotecompta.com</strong> ou par courrier à l'adresse du siège social.
                    </p>
                    <p className="text-white/50 text-sm leading-relaxed">
                      Les informations collectées via nos formulaires sont exclusivement destinées au traitement de vos demandes et ne sont en aucun cas transmises à des tiers.
                    </p>
                  </div>
                </div>

                {/* Cookies */}
                <div>
                  <h2 className="font-heading text-2xl font-bold text-white mb-4">6. Cookies</h2>
                  <div className="bg-white/[0.03] rounded-2xl border border-white/5 p-6">
                    <p className="text-white/50 text-sm leading-relaxed">
                      Le site pilotecompta.com peut utiliser des cookies techniques nécessaires à son bon fonctionnement. Ces cookies ne collectent aucune donnée personnelle et sont automatiquement supprimés à la fermeture de votre navigateur. En poursuivant votre navigation, vous acceptez l'utilisation de ces cookies.
                    </p>
                  </div>
                </div>

                {/* Responsabilité */}
                <div>
                  <h2 className="font-heading text-2xl font-bold text-white mb-4">7. Limitation de responsabilité</h2>
                  <div className="bg-white/[0.03] rounded-2xl border border-white/5 p-6">
                    <p className="text-white/50 text-sm leading-relaxed">
                      PiloteCompta SARL s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, PiloteCompta SARL ne saurait être tenue responsable des erreurs, omissions ou résultats pouvant être obtenus par un usage inapproprié de ces informations. Les estimations fournies par le simulateur de devis sont indicatives et ne constituent pas un engagement contractuel.
                    </p>
                  </div>
                </div>

                {/* Droit applicable */}
                <div>
                  <h2 className="font-heading text-2xl font-bold text-white mb-4">8. Droit applicable</h2>
                  <div className="bg-white/[0.03] rounded-2xl border border-white/5 p-6">
                    <p className="text-white/50 text-sm leading-relaxed">
                      Les présentes mentions légales sont régies par le droit ivoirien. En cas de litige, les tribunaux d'Abidjan seront seuls compétents.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}