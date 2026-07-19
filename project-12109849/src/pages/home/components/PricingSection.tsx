import { useState } from 'react';
import AnimatedSection from '@/components/base/AnimatedSection';
import PricingCards from './PricingCards';
import PricingSimulator from './PricingSimulator';
import HonorairesCalculator from './HonorairesCalculator';
import MonthlyDeliverables from './MonthlyDeliverables';
import CollaborationTimeline from './CollaborationTimeline';
import PricingCommitments from './PricingCommitments';
import DevisFormSection from './DevisFormSection';

const WHATSAPP_NUMBER = '2250141425787';

function DevisSimulatorEmbed({ onClose }: { onClose: () => void }) {
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
      value: sector, setter: setSector,
      options: sectors.map(s => ({ value: s.value, label: s.label })),
    },
    {
      label: 'Nombre de pièces comptables / mois',
      value: docVolume, setter: setDocVolume,
      options: [
        { value: 'lt50', label: 'Moins de 50' },
        { value: '50-100', label: '50 à 100' },
        { value: '100-250', label: '100 à 250' },
        { value: 'gt250', label: 'Plus de 250' },
      ],
    },
    {
      label: 'Nombre de salariés',
      value: employees, setter: setEmployees,
      options: [
        { value: 'none', label: 'Aucun' },
        { value: '1-5', label: '1 à 5' },
        { value: '6-20', label: '6 à 20' },
        { value: 'gt20', label: 'Plus de 20' },
      ],
    },
    {
      label: 'Êtes-vous assujetti à la TVA ?',
      value: vatLiable, setter: setVatLiable,
      options: [
        { value: 'no', label: 'Non' },
        { value: 'yes', label: 'Oui' },
      ],
    },
    {
      label: 'Souhaitez-vous la gestion de la paie ?',
      value: payroll, setter: setPayroll,
      options: [
        { value: 'no', label: 'Non' },
        { value: 'yes', label: 'Oui' },
      ],
    },
    {
      label: 'Souhaitez-vous les états financiers ?',
      value: financialStmts, setter: setFinancialStmts,
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
    <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.03)] p-5 sm:p-7 md:p-10">
      <div className="flex items-center justify-between mb-6">
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
          className="text-gray-400 text-sm hover:text-gray-600 transition-colors cursor-pointer flex items-center gap-1"
        >
          <i className="ri-close-line"></i> Fermer
        </button>
      </div>

      {!result ? (
        <>
          <div className="flex gap-1 mb-6">
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
              onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
              disabled={currentStep === 0}
              className={`whitespace-nowrap px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                currentStep === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:text-[#0a1628] hover:bg-gray-50'
              }`}
            >
              <i className="ri-arrow-left-line mr-1"></i> Retour
            </button>
            <button
              type="button"
              onClick={handleNext}
              disabled={!canNext}
              className={`whitespace-nowrap px-6 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                canNext ? 'bg-[#0a1628] text-white hover:bg-[#0d1f3c] hover:shadow-lg' : 'bg-gray-100 text-gray-300 cursor-not-allowed'
              }`}
            >
              {currentStep === questions.length - 1 ? 'Calculer' : 'Suivant'}
              {canNext && <i className="ri-arrow-right-line ml-1"></i>}
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628] rounded-2xl p-5 sm:p-6 text-center mb-4 sm:mb-5">
            <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Estimation</p>
            <p className="text-white/30 text-xs mb-1">Entre</p>
            <div className="text-2xl sm:text-3xl font-heading font-bold text-white">{formatNum(result.min)} FCFA</div>
            <p className="text-white/30 text-xs my-1">et</p>
            <div className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2 sm:mb-3">{formatNum(result.max)} FCFA</div>
            <p className="text-white/50 text-xs">par mois</p>
          </div>

          <div className="bg-emerald-50 rounded-2xl p-4 mb-5 border border-emerald-100">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-7 h-7 rounded-lg bg-emerald-500 flex items-center justify-center">
                <i className="ri-star-fill text-white text-xs"></i>
              </div>
              <span className="font-heading font-bold text-sm text-[#0a1628]">Formule {result.plan}</span>
            </div>
            <p className="text-gray-400 text-xs">Cette formule correspond à votre profil.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5">
            <button
              onClick={sendWhatsApp}
              className="whitespace-nowrap flex-1 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20bd5a] transition-all cursor-pointer flex items-center justify-center gap-2 active:scale-[0.98]"
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
        </>
      )}
    </div>
  );
}

export default function PricingSection() {
  const [showDevisSimulator, setShowDevisSimulator] = useState(false);

  return (
    <section id="tarifs" className="py-24 md:py-32 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* SECTION 1 — Nos offres */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200/70 mb-6 shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
            <span className="text-emerald-600 text-sm font-semibold tracking-wide">NOS OFFRES</span>
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] mb-4 sm:mb-5 leading-tight">
            Nos offres d'accompagnement comptable
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-3 sm:mb-4">
            Des prestations adaptées à la taille de votre entreprise, dans le respect du SYSCOHADA.
          </p>
          <p className="text-gray-300 text-xs sm:text-sm max-w-xl mx-auto leading-relaxed px-2">
            Les honoraires peuvent évoluer selon le volume de pièces comptables, le nombre de salariés, les obligations fiscales et la complexité de votre activité.
          </p>
        </div>

        {/* 3 Cartes Premium */}
        <div className="mb-16">
          <PricingCards />
        </div>

        {/* Bande — Vous ne savez pas quelle formule choisir ? */}
        <AnimatedSection animation="fade-in-up" duration={600} className="mb-20 md:mb-24">
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100/80 shadow-[0_2px_20px_rgba(0,0,0,0.03)] p-5 sm:p-7 md:p-10">
            <div className="flex flex-col md:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <i className="ri-question-answer-line text-emerald-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#0a1628] mb-2">
                    Vous ne savez pas quelle formule choisir ?
                  </h3>
                  <p className="text-gray-400 text-sm max-w-lg">
                    Nos experts étudient gratuitement votre activité afin de vous proposer la formule la plus adaptée.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full md:w-auto flex-shrink-0">
                <a
                  href="/contact"
                  className="whitespace-nowrap px-6 py-3 bg-emerald-500 text-white font-semibold text-sm rounded-xl hover:bg-emerald-600 transition-all duration-200 cursor-pointer flex items-center gap-2 hover:shadow-lg hover:shadow-emerald-500/25 active:scale-[0.98]"
                >
                  <i className="ri-calendar-line"></i>
                  Prendre rendez-vous
                </a>
                <button
                  onClick={() => setShowDevisSimulator(true)}
                  className="whitespace-nowrap px-6 py-3 bg-[#0a1628] text-white font-semibold text-sm rounded-xl hover:bg-[#0d1f3c] transition-all duration-200 cursor-pointer flex items-center gap-2 hover:shadow-lg hover:shadow-[#0a1628]/20 active:scale-[0.98]"
                >
                  <i className="ri-calculator-line"></i>
                  Demander un devis
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Devis Simulator Inline */}
        {showDevisSimulator && (
          <AnimatedSection animation="fade-in-up" duration={500} className="mb-20 md:mb-24 max-w-xl mx-auto">
            <DevisSimulatorEmbed onClose={() => setShowDevisSimulator(false)} />
          </AnimatedSection>
        )}

        {/* SECTION 2 — Comment sont calculés nos honoraires */}
        <AnimatedSection animation="fade-in-up" duration={600} className="mb-20 md:mb-24">
          <HonorairesCalculator />
        </AnimatedSection>

        {/* SECTION 3 — Simulateur */}
        <AnimatedSection animation="fade-in-up" duration={600} className="mb-20 md:mb-24">
          <PricingSimulator />
        </AnimatedSection>

        {/* SECTION 4 — Ce que vous recevez chaque mois */}
        <AnimatedSection animation="fade-in-up" duration={600} className="mb-20 md:mb-24">
          <MonthlyDeliverables />
        </AnimatedSection>

        {/* SECTION 5 — Notre méthode de travail */}
        <AnimatedSection animation="fade-in-up" duration={600} className="mb-20 md:mb-24">
          <CollaborationTimeline />
        </AnimatedSection>

        {/* SECTION 6 — Pourquoi choisir ComptaPilot */}
        <AnimatedSection animation="fade-in-up" duration={600} className="mb-20 md:mb-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200/70 mb-5 shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
              <span className="text-emerald-600 text-sm font-semibold tracking-wide">CONFIANCE</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#0a1628] mb-3">
              Pourquoi choisir ComptaPilot ?
            </h2>
          </div>
          <PricingCommitments />
        </AnimatedSection>

        {/* SECTION 7 — Demandez votre devis personnalisé */}
        <AnimatedSection animation="fade-in-up" duration={600}>
          <DevisFormSection />
        </AnimatedSection>
      </div>
    </section>
  );
}