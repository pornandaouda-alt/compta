import { useState } from 'react';
import AnimatedSection from '@/components/base/AnimatedSection';

interface PricingCardData {
  id: string;
  name: string;
  badge?: string;
  price: string;
  priceLabel: string;
  idealForLabel: string;
  idealFor: string[];
  features: string[];
  cta: string;
  ctaAction: 'simulator' | 'contact' | 'whatsapp';
  highlighted: boolean;
}

const WHATSAPP_NUMBER = '2250141425787';

const offers: PricingCardData[] = [
  {
    id: 'essentiel',
    name: 'Essentiel',
    price: '75 000 FCFA',
    priceLabel: '/ mois',
    idealForLabel: 'Idéal pour',
    idealFor: ['Auto-entrepreneurs', 'Commerçants', 'Professions libérales', 'Très petites entreprises'],
    features: [
      'Tenue comptable',
      'Saisie des pièces',
      'Journaux comptables',
      'Grand Livre',
      'Balance',
      'Balance auxiliaire',
      'Rapprochement bancaire',
      'Déclarations fiscales courantes',
      'Assistance comptable',
      'Support par email',
    ],
    cta: 'Demander un devis',
    ctaAction: 'simulator',
    highlighted: false,
  },
  {
    id: 'pme',
    name: 'PME',
    badge: 'Le plus populaire',
    price: '150 000 FCFA',
    priceLabel: '/ mois',
    idealForLabel: 'Idéal pour',
    idealFor: ['PME', 'Startups', 'Associations'],
    features: [
      'Tout le plan Essentiel',
      'Révision comptable',
      'Gestion de la paie',
      'Déclarations CNPS',
      'Déclarations fiscales',
      'États financiers SYSCOHADA',
      'Analyse financière',
      'Rendez-vous mensuel',
      'Assistance prioritaire',
    ],
    cta: 'Prendre rendez-vous',
    ctaAction: 'contact',
    highlighted: true,
  },
  {
    id: 'entreprise',
    name: 'Entreprise',
    price: 'Sur devis',
    priceLabel: '',
    idealForLabel: 'Idéal pour',
    idealFor: ['Grandes entreprises', 'Entreprises multisites', 'Organisations à forte volumétrie'],
    features: [
      'Tenue comptable complète',
      'Gestion de plusieurs comptes bancaires',
      'États financiers',
      'Tableaux de bord personnalisés',
      'Reporting financier',
      'Accompagnement personnalisé',
      'Réunions périodiques',
      'Responsable dédié',
    ],
    cta: 'Nous contacter',
    ctaAction: 'whatsapp',
    highlighted: false,
  },
];

function DevisSimulatorModal({ onClose }: { onClose: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [sector, setSector] = useState('');
  const [docVolume, setDocVolume] = useState('');
  const [employees, setEmployees] = useState('');
  const [vatLiable, setVatLiable] = useState('');
  const [payroll, setPayroll] = useState('');
  const [financialStmts, setFinancialStmts] = useState('');
  const [result, setResult] = useState<{ min: number; max: number; plan: string } | null>(null);

  const sectors = [
    { value: 'commerce', label: 'Commerce', mult: 1.0 },
    { value: 'services', label: 'Services', mult: 0.95 },
    { value: 'transport', label: 'Transport', mult: 1.05 },
    { value: 'btp', label: 'BTP', mult: 1.15 },
    { value: 'restaurant', label: 'Restaurant', mult: 1.1 },
    { value: 'import_export', label: 'Import / Export', mult: 1.25 },
    { value: 'industrie', label: 'Industrie', mult: 1.2 },
    { value: 'profession_liberale', label: 'Profession libérale', mult: 0.9 },
    { value: 'ong', label: 'Association / ONG', mult: 0.8 },
    { value: 'autre', label: 'Autre', mult: 1.0 },
  ];

  const questions = [
    {
      label: "Secteur d'activité",
      value: sector,
      setter: setSector,
      options: sectors.map(s => ({ value: s.value, label: s.label })),
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
        { value: 'no', label: 'Non' },
        { value: 'yes', label: 'Oui' },
      ],
    },
    {
      label: 'Souhaitez-vous la gestion de la paie ?',
      value: payroll,
      setter: setPayroll,
      options: [
        { value: 'no', label: 'Non' },
        { value: 'yes', label: 'Oui' },
      ],
    },
    {
      label: 'Souhaitez-vous les états financiers ?',
      value: financialStmts,
      setter: setFinancialStmts,
      options: [
        { value: 'no', label: 'Non' },
        { value: 'yes', label: 'Oui' },
      ],
    },
  ];

  const calculate = () => {
    const sec = sectors.find(s => s.value === sector);
    const docMap: Record<string, number> = { lt50: 45000, '50-100': 75000, '100-250': 120000, gt250: 200000 };
    const empMap: Record<string, number> = { none: 1.0, '1-5': 1.15, '6-20': 1.35, gt20: 1.6 };

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
                    setTimeout(() => setCurrentStep(next + 1), 250);
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

export default function PricingCards() {
  const [simulatorOpen, setSimulatorOpen] = useState(false);

  const handleCta = (action: 'simulator' | 'contact' | 'whatsapp') => {
    if (action === 'simulator') {
      setSimulatorOpen(true);
    } else if (action === 'whatsapp') {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
    } else {
      window.location.href = '/contact';
    }
  };

  return (
    <>
      {simulatorOpen && <DevisSimulatorModal onClose={() => setSimulatorOpen(false)} />}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch max-w-5xl mx-auto">
        {offers.map((offer, i) => (
          <AnimatedSection
            key={offer.id}
            animation="fade-in-up"
            delay={i * 120}
            duration={700}
            className="h-full"
          >
            <div
              className={`relative flex flex-col h-full rounded-2xl p-6 transition-all duration-500 group ${
                offer.highlighted
                  ? 'bg-white border-2 border-emerald-500 shadow-[0_8px_40px_rgba(16,185,129,0.12)] scale-[1.03] lg:scale-[1.04] z-10'
                  : 'bg-white border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1'
              }`}
            >
              {offer.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap bg-emerald-500 text-white shadow-lg shadow-emerald-500/25">
                  {offer.badge}
                </div>
              )}

              <div className="mb-4">
                <h3 className="font-heading text-xl font-bold text-[#0a1628] mb-1">
                  {offer.name}
                </h3>
              </div>

              <div className="mb-5">
                <span className="text-xs text-gray-400 block mb-1">À partir de</span>
                <span className={`font-heading font-bold ${
                  offer.price.includes('devis') ? 'text-xl sm:text-2xl' : 'text-2xl sm:text-3xl lg:text-4xl'
                } ${
                  offer.highlighted ? 'text-emerald-600' : 'text-[#0a1628]'
                }`}>
                  {offer.price}
                </span>
                {offer.priceLabel && (
                  <span className="text-gray-400 text-sm ml-1">{offer.priceLabel}</span>
                )}
              </div>

              <div className="mb-5 pb-5 border-b border-gray-100">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{offer.idealForLabel}</p>
                <div className="flex flex-wrap gap-1.5">
                  {offer.idealFor.map((item) => (
                    <span
                      key={item}
                      className="inline-block px-2.5 py-1 rounded-full bg-gray-50 text-gray-600 text-xs font-medium border border-gray-100"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Comprend</p>
              <ul className="space-y-2.5 mb-6 flex-grow">
                {offer.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      offer.highlighted ? 'bg-emerald-100' : 'bg-gray-50'
                    }`}>
                      <i className={`ri-check-line text-xs ${
                        offer.highlighted ? 'text-emerald-600' : 'text-emerald-500'
                      }`}></i>
                    </div>
                    <span className="text-sm text-gray-600 leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleCta(offer.ctaAction)}
                className={`whitespace-nowrap w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer ${
                  offer.highlighted
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25 active:scale-[0.98]'
                    : 'bg-[#0a1628] text-white hover:bg-[#0d1f3c] hover:shadow-lg hover:shadow-[#0a1628]/20 active:scale-[0.98]'
                }`}
              >
                {offer.cta}
              </button>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </>
  );
}