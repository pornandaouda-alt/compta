import useCountUp from '@/hooks/useCountUp';
import AnimatedSection from '@/components/base/AnimatedSection';

interface StatData {
  id: string;
  label: string;
  value: number;
  suffix: string;
  prefix: string;
}

const stats: StatData[] = [
  { id: 'companies', label: 'Entreprises accompagnées', value: 1200, suffix: '+', prefix: '' },
  { id: 'dossiers', label: 'Dossiers traités par an', value: 8500, suffix: '', prefix: '' },
  { id: 'etats', label: 'États financiers réalisés', value: 3200, suffix: '', prefix: '' },
  { id: 'declarations', label: 'Déclarations fiscales déposées', value: 15000, suffix: '', prefix: '' },
  { id: 'satisfaction', label: 'Taux de satisfaction', value: 98, suffix: '%', prefix: '' },
  { id: 'delai', label: 'Temps moyen de traitement (jours)', value: 5, suffix: '', prefix: '' },
];

function StatCard({ stat, index }: { stat: StatData; index: number }) {
  const { display, hovered, onMouseEnter, onMouseLeave } = useCountUp({
    target: stat.value,
    suffix: stat.suffix,
    prefix: stat.prefix,
    duration: 1800,
  });

  return (
    <AnimatedSection animation="fade-in-up" delay={index * 80} duration={500}>
      <div
        className="group relative bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 cursor-default"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className={`text-3xl md:text-4xl font-heading font-bold mb-2 transition-all duration-300 ${
          hovered ? 'text-emerald-500 scale-110' : 'text-[#0a1628]'
        }`}>
          {display}
        </div>
        <p className={`text-sm font-medium transition-colors duration-300 ${
          hovered ? 'text-[#0a1628]' : 'text-gray-400'
        }`}>
          {stat.label}
        </p>
      </div>
    </AnimatedSection>
  );
}

export default function PricingWhyUs() {
  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
        {stats.map((stat, i) => (
          <StatCard key={stat.id} stat={stat} index={i} />
        ))}
      </div>
      <p className="text-center text-gray-300 text-xs mt-6">
        Ces indicateurs sont mis à jour en temps réel depuis notre back-office.
      </p>
    </div>
  );
}