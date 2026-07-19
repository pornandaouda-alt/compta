import AnimatedSection from '@/components/base/AnimatedSection';

const deliverables = [
  { icon: 'ri-book-3-line', label: 'Journaux comptables' },
  { icon: 'ri-book-open-line', label: 'Grand Livre' },
  { icon: 'ri-book-2-line', label: 'Balance' },
  { icon: 'ri-scales-3-line', label: 'Balance auxiliaire' },
  { icon: 'ri-file-text-line', label: 'Déclarations fiscales' },
  { icon: 'ri-file-chart-line', label: 'États financiers\n(selon la période)' },
  { icon: 'ri-bar-chart-2-line', label: 'Tableau de bord\nfinancier' },
];

export default function MonthlyDeliverables() {
  return (
    <div>
      <div className="text-center mb-10">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 mb-5 shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
          <span className="text-emerald-600 text-sm font-semibold tracking-wide">LIVRABLES</span>
        </div>
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#0a1628] mb-3">
          Ce que vous recevez chaque mois
        </h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4 max-w-5xl mx-auto">
        {deliverables.map((item, i) => (
          <AnimatedSection
            key={item.label}
            animation="fade-in-up"
            delay={i * 60}
            duration={500}
          >
            <div className="group bg-white rounded-2xl p-5 text-center border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 cursor-default h-full flex flex-col items-center justify-center">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <i className={`${item.icon} text-lg`}></i>
              </div>
              <p className="text-sm font-medium text-[#0a1628] leading-tight whitespace-pre-line">{item.label}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}