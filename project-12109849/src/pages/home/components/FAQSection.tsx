import { useState } from 'react';
import AnimatedSection from '@/components/base/AnimatedSection';

const faqs = [
  {
    q: 'Quels documents dois-je fournir pour la tenue de ma comptabilité ?',
    a: 'Nous avons besoin de vos factures d\'achat et de vente, relevés bancaires, bulletins de paie, contrats, et tout document justificatif de vos opérations. Nous vous fournissons une liste détaillée lors de notre premier rendez-vous.',
  },
  {
    q: 'Comment transmettre mes pièces comptables ?',
    a: 'Vous pouvez nous transmettre vos documents par email, via notre espace client sécurisé, ou par messagerie instantanée (WhatsApp). Tout est entièrement dématérialisé et sécurisé.',
  },
  {
    q: 'Travaillez-vous entièrement à distance ?',
    a: 'Oui, notre service est 100% dématérialisé. Vous n\'avez pas besoin de vous déplacer. Nous traitons vos pièces en temps réel depuis nos bureaux et vous livrons les documents par voie électronique.',
  },
  {
    q: 'Quel est le délai de traitement de ma comptabilité ?',
    a: 'Le délai dépend du volume de vos pièces, mais en général nous tenons votre comptabilité à jour en temps réel ou sous 48h maximum pour les petits volumes.',
  },
  {
    q: 'Comment se déroule la collaboration ?',
    a: 'Nous vous assignons un comptable dédié. Après une analyse de votre activité, nous collectons vos pièces, traitons votre comptabilité, effectuons un contrôle qualité, puis vous remettons les états financiers et tableaux de bord.',
  },
  {
    q: 'Puis-je conserver mon logiciel actuel ?',
    a: 'Oui, nous pouvons travailler avec votre logiciel actuel ou vous accompagner dans la migration vers une solution plus adaptée. Nous restons flexibles sur les outils.',
  },
  {
    q: 'Comment protéger vos données ?',
    a: 'La sécurité est notre priorité absolue. Toutes les données sont chiffrées et stockées sur des serveurs sécurisés. Un historique complet trace tous les accès et modifications.',
  },
  {
    q: 'Intervenez-vous partout en Côte d\'Ivoire ?',
    a: 'Oui, notre service étant entièrement dématérialisé, nous accompagnons des clients dans toute la Côte d\'Ivoire et au-delà, dans tous les pays de la zone OHADA.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#0a101c]">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        <AnimatedSection animation="fade-in-up" duration={700} className="text-center mb-14 md:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <span className="text-emerald-400 text-sm font-medium">FAQ</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Questions <span className="text-emerald-400">fréquentes</span>
          </h2>
          <p className="text-white/50 text-base">Tout ce que vous devez savoir sur notre service de tenue comptable.</p>
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <AnimatedSection key={i} animation="fade-in-up" delay={i * 60} duration={500}>
                <div className="bg-gray-900/50 rounded-2xl border border-white/5 overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left cursor-pointer"
                  >
                    <span className="font-heading font-semibold text-white text-sm md:text-base pr-4">
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                        isOpen ? 'bg-emerald-500 text-white' : 'bg-white/5 text-white/50'
                      }`}
                    >
                      <i className={`ri-${isOpen ? 'subtract' : 'add'}-line text-lg`}></i>
                    </div>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{ maxHeight: isOpen ? '300px' : '0px' }}
                  >
                    <p className="text-white/50 text-sm leading-relaxed px-5 md:px-6 pb-5 md:pb-6">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}