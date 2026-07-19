import AnimatedSection from '@/components/base/AnimatedSection';

const factors = [
  {
    icon: 'ri-file-list-3-line',
    title: 'Volume de pièces comptables',
    desc: 'Le nombre de factures d\'achat, de vente et de transactions bancaires traitées chaque mois influence directement le temps de traitement.',
  },
  {
    icon: 'ri-team-line',
    title: 'Nombre de salariés',
    desc: 'La gestion de la paie, des déclarations sociales et des charges patronales évolue proportionnellement à l\'effectif de votre entreprise.',
  },
  {
    icon: 'ri-government-line',
    title: 'Obligations fiscales',
    desc: 'Votre régime fiscal (TVA, impôts sur les sociétés, patente) et vos échéances déclaratives déterminent la charge de travail.',
  },
  {
    icon: 'ri-puzzle-line',
    title: 'Complexité de l\'activité',
    desc: 'Les spécificités de votre secteur, l\'existence de plusieurs établissements ou la consolidation multi-entités sont prises en compte.',
  },
];

export default function HonorairesCalculator() {
  return (
    <div>
      <div className="text-center mb-10">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 mb-5 shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
          <span className="text-emerald-600 text-sm font-semibold tracking-wide">TRANSPARENCE</span>
        </div>
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#0a1628] mb-3">
          Comment sont calculés nos honoraires ?
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-10">
        {factors.map((item, i) => (
          <AnimatedSection
            key={item.title}
            animation="fade-in-up"
            delay={i * 80}
            duration={500}
          >
            <div className="group h-full bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center mb-4 group-hover:bg-emerald-100 group-hover:scale-110 transition-all duration-300">
                <i className={`${item.icon} text-emerald-600 text-lg`}></i>
              </div>
              <h4 className="font-heading text-sm font-bold text-[#0a1628] mb-2">{item.title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] p-6 md:p-8 text-center">
        <p className="text-gray-600 text-sm leading-relaxed">
          Chaque entreprise est différente. Nos honoraires sont établis en fonction de votre organisation afin de vous proposer un accompagnement adapté et transparent.
        </p>
      </div>
    </div>
  );
}