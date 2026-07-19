import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import AnimatedSection from '@/components/base/AnimatedSection';

export default function CGVPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-[#070d1a] overflow-hidden">
          <div className="absolute inset-0">
            <img
              alt="Conditions Générales"
              className="w-full h-full object-cover opacity-15"
              src="https://readdy.ai/api/search-image?query=Abstract%20dark%20navy%20blue%20background%20with%20flowing%20wave%20lines%20and%20subtle%20glowing%20emerald%20green%20accents%2C%20smooth%20gradient%20curves%2C%20premium%20fintech%20aesthetic%2C%20deep%20space%20atmosphere%2C%20elegant%20geometric%20patterns%2C%20no%20text&width=1920&height=600&seq=cgv-hero-dark&orientation=landscape"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-[#070d1a]/60 via-transparent to-[#070d1a]/80"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
            <AnimatedSection animation="fade-in-up" duration={800} className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <span className="text-emerald-400 text-sm font-medium">Conditions contractuelles</span>
              </div>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Conditions Générales{' '}
                <span className="text-emerald-400">de Vente</span>
              </h1>
            </AnimatedSection>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 md:py-28 bg-[#0a101c]">
          <div className="max-w-3xl mx-auto px-4 md:px-6">
            <AnimatedSection animation="fade-in-up" duration={700} className="max-w-none">
              <div className="space-y-12">
                {/* Préambule */}
                <div>
                  <h2 className="font-heading text-2xl font-bold text-white mb-4">Préambule</h2>
                  <div className="bg-white/[0.03] rounded-2xl border border-white/5 p-6">
                    <p className="text-white/50 text-sm leading-relaxed">
                      Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre <strong className="text-white/80">PiloteCompta SARL</strong>, ci-après dénommée « le Prestataire », et toute personne physique ou morale souhaitant bénéficier de ses services de tenue comptable, ci-après dénommée « le Client ». Toute commande de prestation implique l'acceptation sans réserve des présentes CGV.
                    </p>
                  </div>
                </div>

                {/* Article 1 - Objet */}
                <div>
                  <h2 className="font-heading text-2xl font-bold text-white mb-4">Article 1 — Objet</h2>
                  <div className="bg-white/[0.03] rounded-2xl border border-white/5 p-6">
                    <p className="text-white/50 text-sm leading-relaxed">
                      Les présentes CGV ont pour objet de définir les modalités de prestation des services de tenue comptable, déclarations fiscales, gestion de paie, élaboration d'états financiers et tout autre service proposé par PiloteCompta SARL à ses clients professionnels.
                    </p>
                  </div>
                </div>

                {/* Article 2 - Prestations */}
                <div>
                  <h2 className="font-heading text-2xl font-bold text-white mb-4">Article 2 — Nature des prestations</h2>
                  <div className="bg-white/[0.03] rounded-2xl border border-white/5 p-6 space-y-3">
                    <p className="text-white/50 text-sm leading-relaxed">
                      PiloteCompta SARL propose les prestations suivantes :
                    </p>
                    <ul className="text-white/50 text-sm space-y-2 list-disc list-inside">
                      <li>Tenue comptable complète selon le référentiel SYSCOHADA révisé</li>
                      <li>Élaboration des états financiers annuels (Bilan, Compte de résultat, TAFIRE, Notes annexes)</li>
                      <li>Déclarations fiscales courantes (TVA, CET, IS/BIC, TSE)</li>
                      <li>Gestion de la paie et déclarations sociales (CNPS)</li>
                      <li>Analyse financière et tableaux de bord</li>
                      <li>Externalisation complète du service comptable</li>
                      <li>Migration et paramétrage de systèmes comptables</li>
                    </ul>
                    <p className="text-white/50 text-sm leading-relaxed">
                      Le détail exact des prestations confiées est précisé dans la lettre de mission signée entre les parties.
                    </p>
                  </div>
                </div>

                {/* Article 3 - Devis et honoraires */}
                <div>
                  <h2 className="font-heading text-2xl font-bold text-white mb-4">Article 3 — Devis et honoraires</h2>
                  <div className="bg-white/[0.03] rounded-2xl border border-white/5 p-6 space-y-3">
                    <p className="text-white/50 text-sm leading-relaxed">
                      Chaque prestation fait l'objet d'un devis préalable, établi gratuitement après analyse du dossier du Client. Le devis précise :
                    </p>
                    <ul className="text-white/50 text-sm space-y-2 list-disc list-inside">
                      <li>La nature et l'étendue des prestations</li>
                      <li>Le montant des honoraires mensuels ou forfaitaires</li>
                      <li>Les modalités de facturation et de paiement</li>
                      <li>La durée de la mission</li>
                    </ul>
                    <p className="text-white/50 text-sm leading-relaxed">
                      Les honoraires sont exprimés en Francs CFA (FCFA). Sauf mention contraire, ils s'entendent hors taxes. La TVA applicable est facturée en sus au taux en vigueur.
                    </p>
                    <p className="text-white/50 text-sm leading-relaxed">
                      Le simulateur de devis disponible sur le site fournit une estimation indicative. Seul le devis formalisé signé par les deux parties a valeur contractuelle.
                    </p>
                  </div>
                </div>

                {/* Article 4 - Modalités de paiement */}
                <div>
                  <h2 className="font-heading text-2xl font-bold text-white mb-4">Article 4 — Modalités de paiement</h2>
                  <div className="bg-white/[0.03] rounded-2xl border border-white/5 p-6 space-y-3">
                    <p className="text-white/50 text-sm leading-relaxed">
                      Les honoraires sont payables mensuellement, à réception de facture, par virement bancaire, chèque ou Mobile Money. Le délai de paiement est de 15 jours à compter de la date d'émission de la facture.
                    </p>
                    <p className="text-white/50 text-sm leading-relaxed">
                      Tout retard de paiement entraîne l'application de pénalités de retard au taux d'intérêt légal en vigueur, sans qu'une mise en demeure préalable ne soit nécessaire.
                    </p>
                  </div>
                </div>

                {/* Article 5 - Obligations du Client */}
                <div>
                  <h2 className="font-heading text-2xl font-bold text-white mb-4">Article 5 — Obligations du Client</h2>
                  <div className="bg-white/[0.03] rounded-2xl border border-white/5 p-6 space-y-3">
                    <p className="text-white/50 text-sm leading-relaxed">
                      Le Client s'engage à :
                    </p>
                    <ul className="text-white/50 text-sm space-y-2 list-disc list-inside">
                      <li>Fournir l'ensemble des pièces comptables nécessaires à la tenue de sa comptabilité dans les délais convenus</li>
                      <li>Transmettre des documents authentiques, complets et lisibles</li>
                      <li>Informer le Prestataire de tout changement significatif dans son activité (création de filiale, changement de régime fiscal, etc.)</li>
                      <li>S'acquitter des honoraires dans les délais impartis</li>
                    </ul>
                  </div>
                </div>

                {/* Article 6 - Obligations du Prestataire */}
                <div>
                  <h2 className="font-heading text-2xl font-bold text-white mb-4">Article 6 — Obligations du Prestataire</h2>
                  <div className="bg-white/[0.03] rounded-2xl border border-white/5 p-6 space-y-3">
                    <p className="text-white/50 text-sm leading-relaxed">
                      PiloteCompta SARL s'engage à :
                    </p>
                    <ul className="text-white/50 text-sm space-y-2 list-disc list-inside">
                      <li>Traiter la comptabilité du Client conformément au référentiel SYSCOHADA révisé et aux normes professionnelles en vigueur</li>
                      <li>Respecter les délais convenus dans la lettre de mission</li>
                      <li>Garantir la confidentialité absolue de l'ensemble des informations et documents confiés par le Client</li>
                      <li>Informer le Client de toute anomalie ou irrégularité constatée dans les pièces transmises</li>
                      <li>Assurer une obligation de moyens dans le cadre de ses missions</li>
                    </ul>
                  </div>
                </div>

                {/* Article 7 - Confidentialité */}
                <div>
                  <h2 className="font-heading text-2xl font-bold text-white mb-4">Article 7 — Confidentialité</h2>
                  <div className="bg-white/[0.03] rounded-2xl border border-white/5 p-6">
                    <p className="text-white/50 text-sm leading-relaxed">
                      PiloteCompta SARL s'engage à respecter la plus stricte confidentialité concernant l'ensemble des informations commerciales, comptables, financières et fiscales du Client. Cette obligation de confidentialité s'étend à l'ensemble des collaborateurs du Prestataire et survit à la fin de la relation contractuelle.
                    </p>
                  </div>
                </div>

                {/* Article 8 - Durée et résiliation */}
                <div>
                  <h2 className="font-heading text-2xl font-bold text-white mb-4">Article 8 — Durée et résiliation</h2>
                  <div className="bg-white/[0.03] rounded-2xl border border-white/5 p-6 space-y-3">
                    <p className="text-white/50 text-sm leading-relaxed">
                      La relation contractuelle est conclue pour une durée indéterminée à compter de la signature de la lettre de mission. Chaque partie peut y mettre fin à tout moment par lettre recommandée avec accusé de réception, sous réserve d'un préavis de 30 jours.
                    </p>
                    <p className="text-white/50 text-sm leading-relaxed">
                      En cas de résiliation, le Prestataire s'engage à transmettre au Client ou au nouveau prestataire désigné l'ensemble des documents comptables et balances de clôture dans un délai raisonnable.
                    </p>
                  </div>
                </div>

                {/* Article 9 - Responsabilité */}
                <div>
                  <h2 className="font-heading text-2xl font-bold text-white mb-4">Article 9 — Responsabilité</h2>
                  <div className="bg-white/[0.03] rounded-2xl border border-white/5 p-6">
                    <p className="text-white/50 text-sm leading-relaxed">
                      La responsabilité de PiloteCompta SARL est engagée dans le cadre d'une obligation de moyens. Le Prestataire ne saurait être tenu responsable des conséquences liées à la fourniture par le Client de documents incomplets, inexacts ou falsifiés, ni des décisions de l'administration fiscale.
                    </p>
                  </div>
                </div>

                {/* Article 10 - Litiges */}
                <div>
                  <h2 className="font-heading text-2xl font-bold text-white mb-4">Article 10 — Loi applicable et règlement des litiges</h2>
                  <div className="bg-white/[0.03] rounded-2xl border border-white/5 p-6">
                    <p className="text-white/50 text-sm leading-relaxed">
                      Les présentes CGV sont soumises au droit ivoirien. En cas de litige relatif à leur interprétation ou exécution, les parties s'efforceront de trouver une solution amiable avant toute action judiciaire. À défaut d'accord, les tribunaux d'Abidjan seront seuls compétents.
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