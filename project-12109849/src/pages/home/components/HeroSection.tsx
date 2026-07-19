import AnimatedSection from '@/components/base/AnimatedSection';
import { useState } from 'react';
import useCountUp from '@/hooks/useCountUp';

const sparkles = [
  { top: '15%', left: '8%', size: 'sm', delay: '0s', duration: '4s' },
  { top: '25%', left: '85%', size: '', delay: '1s', duration: '5s' },
  { top: '45%', left: '12%', size: 'lg', delay: '0.5s', duration: '6s' },
  { top: '65%', left: '90%', size: 'sm', delay: '2s', duration: '4s' },
  { top: '80%', left: '20%', size: '', delay: '1.5s', duration: '5s' },
  { top: '35%', left: '75%', size: 'sm', delay: '0.8s', duration: '4.5s' },
  { top: '55%', left: '5%', size: 'lg', delay: '2.5s', duration: '5.5s' },
  { top: '75%', left: '60%', size: '', delay: '3s', duration: '6s' },
  { top: '10%', left: '55%', size: 'sm', delay: '1.2s', duration: '4s' },
  { top: '50%', left: '45%', size: 'sm', delay: '0.3s', duration: '5s' },
  { top: '85%', left: '40%', size: '', delay: '2.2s', duration: '4.5s' },
  { top: '20%', left: '30%', size: 'lg', delay: '3.5s', duration: '6s' },
];

const dots = [
  { top: '18%', left: '25%' },
  { top: '40%', left: '70%' },
  { top: '60%', left: '15%' },
  { top: '78%', left: '82%' },
  { top: '30%', left: '95%' },
  { top: '88%', left: '55%' },
  { top: '12%', left: '68%' },
  { top: '48%', left: '38%' },
];

const orbs = [
  { top: '20%', left: '10%', size: '300px', color: 'rgba(16,185,129,0.04)', anim: 'orb-drift', duration: '18s' },
  { top: '55%', left: '75%', size: '250px', color: 'rgba(16,185,129,0.05)', anim: 'orb-drift-alt', duration: '22s' },
  { top: '70%', left: '20%', size: '200px', color: 'rgba(255,255,255,0.02)', anim: 'orb-drift', duration: '20s' },
  { top: '10%', left: '60%', size: '180px', color: 'rgba(16,185,129,0.03)', anim: 'orb-drift-alt', duration: '16s' },
];

const rings = [
  { top: '30%', left: '15%', size: '400px', delay: '0s' },
  { top: '60%', left: '80%', size: '350px', delay: '2s' },
  { top: '15%', left: '70%', size: '250px', delay: '4s' },
];

function StatCard({ value, suffix, label, highlighted = false }: { value: number; suffix: string; label: string; highlighted?: boolean }) {
  const { display, hovered, onMouseEnter, onMouseLeave } = useCountUp({
    target: value,
    suffix,
    duration: 1500,
  });

  return (
    <div
      className={`px-6 py-3 text-center group cursor-default ${highlighted ? 'relative' : ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {highlighted && (
        <div className="absolute inset-0 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 -mx-1"></div>
      )}
      <div
        className={`relative text-2xl md:text-3xl font-heading font-bold transition-all duration-500 ${
          highlighted
            ? 'text-emerald-400 scale-110'
            : hovered
              ? 'text-emerald-400 scale-110'
              : 'text-white'
        }`}
        style={{
          textShadow: highlighted ? '0 0 30px rgba(16,185,129,0.4)' : hovered ? '0 0 30px rgba(16,185,129,0.4)' : 'none',
        }}
      >
        {highlighted && '+'}{display}
      </div>
      <div className={`relative text-sm mt-1 transition-colors duration-300 ${highlighted ? 'text-emerald-400/70 font-medium' : hovered ? 'text-emerald-400/60' : 'text-white/50'}`}>
        {label}
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [showSimulator, setShowSimulator] = useState(false);

  return (
    <>
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#070d1a]">
        <div className="absolute inset-0">
          <img
            alt="Background"
            className="w-full h-full object-cover opacity-40"
            src="https://readdy.ai/api/search-image?query=Abstract%20dark%20navy%20blue%20background%20with%20flowing%20wave%20lines%20and%20subtle%20glowing%20emerald%20green%20accents%2C%20smooth%20gradient%20curves%2C%20premium%20fintech%20aesthetic%2C%20particle%20dots%2C%20deep%20space%20atmosphere%2C%20elegant%20geometric%20patterns%2C%20dark%20mode%20UI%20background%2C%20no%20text%2C%204k%20quality&width=1920&height=1080&seq=comptapilot-dark-hero-v2&orientation=landscape&nocache=true"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#070d1a]/60 via-[#070d1a]/40 to-[#070d1a]/80"></div>

        {orbs.map((o, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full blur-3xl"
            style={{
              top: o.top,
              left: o.left,
              width: o.size,
              height: o.size,
              background: `radial-gradient(circle, ${o.color}, transparent 70%)`,
              animation: `${o.anim} ${o.duration} ease-in-out infinite`,
            }}
          />
        ))}

        {rings.map((r, i) => (
          <div
            key={`ring-${i}`}
            className="absolute rounded-full border border-emerald-500/10"
            style={{
              top: r.top,
              left: r.left,
              width: r.size,
              height: r.size,
              animation: `ring-pulse ${6 + i * 2}s ease-in-out ${r.delay} infinite`,
              marginLeft: `-${parseInt(r.size) / 2}px`,
              marginTop: `-${parseInt(r.size) / 2}px`,
            }}
          />
        ))}

        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(16,185,129,0.3), transparent)',
            backgroundSize: '200% 100%',
            animation: 'shimmer 4s ease-in-out infinite',
          }}
        ></div>

        {sparkles.map((s, i) => (
          <div
            key={i}
            className={`sparkle sparkle-${s.size}`}
            style={{
              top: s.top,
              left: s.left,
              animationDelay: s.delay,
              animationDuration: s.duration,
            }}
          />
        ))}

        {dots.map((d, i) => (
          <div
            key={`dot-${i}`}
            className="sparkle sparkle-dot"
            style={{
              top: d.top,
              left: d.left,
              animationDelay: `${i * 0.6}s`,
              animationDuration: `${3 + i * 0.5}s`,
              background: '#6ee7b7',
            }}
          />
        ))}

        <AnimatedSection animation="fade-in-up" duration={900} className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-6 text-center pt-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-500/25 mb-8 backdrop-blur-sm">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
            <span className="text-emerald-400 text-sm font-medium">Nouveau — Propulsé par l'IA</span>
          </div>

          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Votre partenaire de confiance{' '}
            <span className="block">pour une comptabilité conforme</span>
            <span className="text-emerald-400"> au SYSCOHADA</span>.
          </h1>

          <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
            Confiez votre comptabilité, votre fiscalité, votre paie et vos états financiers à des professionnels qui vous accompagnent à chaque étape de la vie de votre entreprise.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <a
              href="https://wa.me/2250141425787"
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap w-full sm:w-auto px-8 py-4 bg-emerald-500 text-white font-semibold text-base rounded-xl hover:bg-emerald-400 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              Contactez-nous
            </a>
            <button
              onClick={() => setShowSimulator(true)}
              className="whitespace-nowrap w-full sm:w-auto px-8 py-4 bg-white/8 text-white font-semibold text-base rounded-xl border border-white/15 hover:bg-white/15 hover:border-emerald-500/30 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group"
            >
              <i className="ri-file-list-3-line text-lg group-hover:text-emerald-400 transition-colors"></i>
              Demander un devis
            </button>
          </div>

          <AnimatedSection animation="fade-in-up" delay={400} duration={800} className="mt-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-0">
              <StatCard value={50} suffix="" label="Entreprises" highlighted />
              <div className="hidden sm:block w-px h-12 bg-white/15"></div>
              <StatCard value={8} suffix="" label="ans d'expérience" highlighted />
              <div className="hidden sm:block w-px h-12 bg-white/15"></div>
              <StatCard value={99.9} suffix="%" label="Disponibilité" />
              <div className="hidden sm:block w-px h-12 bg-white/15"></div>
              <StatCard value={24} suffix="h/24" label="Soutien" />
            </div>
          </AnimatedSection>
        </AnimatedSection>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <i className="ri-arrow-down-line text-white/30 text-2xl"></i>
        </div>
      </section>

      {showSimulator && (
        <HeroDevisModal onClose={() => setShowSimulator(false)} />
      )}
    </>
  );
}

function HeroDevisModal({ onClose }: { onClose: () => void }) {
  const WHATSAPP_NUMBER = '2250141425787';

  const [currentStep, setCurrentStep] = useState(0);
  const [sector, setSector] = useState('');
  const [docVolume, setDocVolume] = useState('');
  const [employees, setEmployees] = useState('');
  const [vatLiable, setVatLiable] = useState('');
  const [payroll, setPayroll] = useState('');
  const [financialStmts, setFinancialStmts] = useState('');
  const [result, setResult] = useState<{ min: number; max: number; plan: string } | null>(null);

  const sectors = [
    { key: 'commerce', label: 'Commerce', mult: 1.0 },
    { key: 'services', label: 'Services', mult: 0.95 },
    { key: 'transport', label: 'Transport', mult: 1.05 },
    { key: 'btp', label: 'BTP', mult: 1.15 },
    { key: 'restaurant', label: 'Restaurant', mult: 1.1 },
    { key: 'import_export', label: 'Import / Export', mult: 1.25 },
    { key: 'industrie', label: 'Industrie', mult: 1.2 },
    { key: 'profession_liberale', label: 'Profession libérale', mult: 0.9 },
    { key: 'ong', label: 'Association / ONG', mult: 0.8 },
    { key: 'autre', label: 'Autre', mult: 1.0 },
  ];

  const questions = [
    {
      label: 'Secteur d\'activité',
      value: sector,
      setter: setSector,
      options: sectors.map(s => ({ value: s.key, label: s.label })),
    },
    {
      label: 'Nombre de pièces comptables / mois',
      value: docVolume,
      setter: setDocVolume,
      options: [
        { value: 'lt50', label: 'Moins de 50' },
        { value: '50-100', label: '50 à 100' },
        { value: '100-250', label: '100 à 250' },
        { value: 'gt250', label: 'Plus de 250' },
      ],
    },
    {
      label: 'Nombre de salariés',
      value: employees,
      setter: setEmployees,
      options: [
        { value: 'none', label: 'Aucun' },
        { value: '1-5', label: '1 à 5' },
        { value: '6-20', label: '6 à 20' },
        { value: 'gt20', label: 'Plus de 20' },
      ],
    },
    {
      label: 'Êtes-vous assujetti à la TVA ?',
      value: vatLiable,
      setter: setVatLiable,
      options: [
        { value: 'yes', label: 'Oui' },
        { value: 'no', label: 'Non' },
      ],
    },
    {
      label: 'Souhaitez-vous la gestion de la paie ?',
      value: payroll,
      setter: setPayroll,
      options: [
        { value: 'yes', label: 'Oui' },
        { value: 'no', label: 'Non' },
      ],
    },
    {
      label: 'Souhaitez-vous les états financiers ?',
      value: financialStmts,
      setter: setFinancialStmts,
      options: [
        { value: 'yes', label: 'Oui' },
        { value: 'no', label: 'Non' },
      ],
    },
  ];

  const calculate = () => {
    const sec = sectors.find(s => s.key === sector);
    const docMap: Record<string, number> = { 'lt50': 45000, '50-100': 75000, '100-250': 120000, 'gt250': 200000 };
    const empMap: Record<string, number> = { 'none': 1.0, '1-5': 1.15, '6-20': 1.35, 'gt20': 1.6 };

    let base = docMap[docVolume] || 50000;
    let total = base * (empMap[employees] || 1.0) * (sec?.mult || 1.0);
    if (vatLiable === 'yes') total *= 1.12;
    if (payroll === 'yes') total += 35000;
    if (financialStmts === 'yes') total *= 1.1;

    const min = Math.round(total * 0.82 / 5000) * 5000;
    const max = Math.round(total * 1.22 / 5000) * 5000;

    let plan = max <= 120000 ? 'Essentiel' : max <= 300000 ? 'PME' : 'Entreprise';
    setResult({ min, max, plan });
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      calculate();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(prev => prev - 1);
  };

  const sendWhatsApp = () => {
    if (!result) return;
    const lines = [
      'Bonjour ComptaPilot Expertise,',
      '',
      'Voici mon estimation :',
      `• Entre ${result.min.toLocaleString('fr-FR')} FCFA et ${result.max.toLocaleString('fr-FR')} FCFA par mois`,
      `• Formule recommandée : ${result.plan}`,
      '',
      'Pouvez-vous m\'envoyer un devis personnalisé ?',
      '',
      'Merci !',
    ];
    const msg = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  const formatNum = (n: number) => n.toLocaleString('fr-FR');

  const currentQ = questions[currentStep];
  const canNext = currentQ.value !== '';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <AnimatedSection animation="fade-in-up" duration={400} className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                <i className="ri-calculator-line text-emerald-600"></i>
              </div>
              <span className="font-heading font-bold text-[#0a1628] text-sm">
                {result ? 'Votre estimation' : 'Estimation rapide'}
              </span>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors cursor-pointer"
            >
              <i className="ri-close-line"></i>
            </button>
          </div>

          {!result ? (
            <div className="p-4 sm:p-6">
              <div className="flex gap-1 mb-5 sm:mb-6">
                {questions.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                      i < currentStep ? 'bg-emerald-500' : i === currentStep ? 'bg-emerald-300' : 'bg-gray-100'
                    }`}
                  ></div>
                ))}
              </div>

              <label className="block text-sm font-semibold text-[#0a1628] mb-3">
                {currentStep + 1}. {currentQ.label}
              </label>
              <select
                value={currentQ.value}
                onChange={(e) => {
                  currentQ.setter(e.target.value);
                  const next = questions.findIndex(q => q.setter === currentQ.setter);
                  if (next < questions.length - 1 && e.target.value) {
                    setTimeout(() => setCurrentStep(next + 1), 200);
                  }
                }}
                className="w-full px-4 py-3.5 rounded-xl border border-gray-200 bg-gray-50 text-sm text-[#0a1628] focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-50 transition-all appearance-none cursor-pointer"
              >
                <option value="">Sélectionnez...</option>
                {currentQ.options.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>

              <div className="flex items-center justify-between mt-6">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                    currentStep === 0
                      ? 'text-gray-300 cursor-not-allowed'
                      : 'text-gray-500 hover:text-[#0a1628] hover:bg-gray-50'
                  }`}
                >
                  <i className="ri-arrow-left-line mr-1"></i> Retour
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!canNext}
                  className={`whitespace-nowrap px-6 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                    canNext
                      ? 'bg-[#0a1628] text-white hover:bg-[#0d1f3c] hover:shadow-lg'
                      : 'bg-gray-100 text-gray-300 cursor-not-allowed'
                  }`}
                >
                  {currentStep === questions.length - 1 ? 'Calculer' : 'Suivant'}
                  {canNext && <i className="ri-arrow-right-line ml-1"></i>}
                </button>
              </div>

              <div className="flex justify-center gap-1.5 mt-4">
                {questions.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrentStep(i)}
                    className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                      i === currentStep ? 'bg-emerald-500 w-4' : 'bg-gray-200 hover:bg-gray-300'
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          ) : (
            <div className="p-4 sm:p-6">
              <div className="bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628] rounded-2xl p-5 sm:p-6 text-center mb-4 sm:mb-5">
                <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Estimation</p>
                <p className="text-white/30 text-xs mb-1">Entre</p>
                <div className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  {formatNum(result.min)} FCFA
                </div>
                <p className="text-white/30 text-xs my-1">et</p>
                <div className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2 sm:mb-3">
                  {formatNum(result.max)} FCFA
                </div>
                <p className="text-white/50 text-xs">par mois</p>
              </div>

              <div className="bg-emerald-50 rounded-2xl p-4 mb-5 border border-emerald-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center">
                    <i className="ri-star-fill text-white text-xs"></i>
                  </div>
                  <span className="font-heading font-bold text-sm text-[#0a1628]">Formule {result.plan}</span>
                </div>
                <p className="text-gray-400 text-xs">
                  Cette formule correspond à votre profil compte tenu de votre volume de pièces et des services souhaités.
                </p>
              </div>

              <p className="text-gray-300 text-xs text-center mb-5">
                Estimation indicative. Un devis définitif vous sera communiqué après étude de votre dossier.
              </p>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <button
                  onClick={sendWhatsApp}
                  className="whitespace-nowrap flex-1 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20bd5a] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 hover:shadow-lg active:scale-[0.98]"
                >
                  <i className="ri-whatsapp-line text-lg"></i>
                  Envoyer sur WhatsApp
                </button>
                <button
                  onClick={() => { setResult(null); setCurrentStep(0); }}
                  className="whitespace-nowrap px-4 py-3 rounded-xl border border-gray-200 text-gray-500 text-sm font-medium hover:bg-gray-50 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <i className="ri-refresh-line"></i>
                  Refaire
                </button>
              </div>
            </div>
          )}
        </div>
      </AnimatedSection>
    </div>
  );
}