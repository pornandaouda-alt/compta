import AnimatedSection from '@/components/base/AnimatedSection';

const commitments = [
  {
    icon: 'ri-file-check-line',
    title: 'Comptabilité conforme au SYSCOHADA',
    desc: 'Application rigoureuse du plan comptable OHADA révisé et respect des normes en vigueur dans l\'espace OHADA.',
  },
  {
    icon: 'ri-timer-line',
    title: 'Respect des délais',
    desc: 'Vos déclarations fiscales et états financiers sont livrés dans les délais légaux, systématiquement.',
  },
  {
    icon: 'ri-lock-line',
    title: 'Confidentialité garantie',
    desc: 'Vos données financières sont protégées par des protocoles de sécurité renforcés et une stricte politique de confidentialité.',
  },
  {
    icon: 'ri-user-heart-line',
    title: 'Accompagnement personnalisé',
    desc: 'Un expert connaît votre dossier et vous apporte des conseils adaptés à votre secteur d\'activité.',
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Documents sécurisés',
    desc: 'Vos états financiers et pièces comptables sont chiffrés et stockés sur des serveurs hautement sécurisés.',
  },
  {
    icon: 'ri-cloud-line',
    title: 'Travail entièrement dématérialisé',
    desc: 'Échangez vos documents via notre plateforme sécurisée. Zéro papier, zéro déplacement.',
  },
  {
    icon: 'ri-user-star-line',
    title: 'Interlocuteur unique',
    desc: 'Un collaborateur dédié suit votre dossier de bout en bout pour une relation de confiance durable.',
  },
  {
    icon: 'ri-customer-service-2-line',
    title: 'Assistance réactive',
    desc: 'Une équipe disponible par téléphone, email et visioconférence pour répondre à vos questions rapidement.',
  },
];

export default function PricingCommitments() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {commitments.map((item, i) => (
          <AnimatedSection
            key={item.title}
            animation="fade-in-up"
            delay={i * 60}
            duration={500}
          >
            <div className="group h-full bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center mb-4 group-hover:bg-emerald-100 group-hover:scale-110 transition-all duration-300">
                <i className={`${item.icon} text-emerald-600 text-lg`}></i>
              </div>
              <h4 className="font-heading text-sm font-bold text-[#0a1628] mb-2">{item.title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}