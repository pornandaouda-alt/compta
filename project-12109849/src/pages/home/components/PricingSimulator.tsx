import { useState } from 'react';
import AnimatedSection from '@/components/base/AnimatedSection';

type SectorKey = 'commerce' | 'services' | 'transport' | 'btp' | 'restaurant' | 'import_export' | 'industrie' | 'profession_liberale' | 'ong' | 'autre';

interface SimulatorForm {
  sector: SectorKey;
  docVolume: string;
  employees: string;
  vatLiable: string;
  payrollWanted: string;
  financialStatements: string;
}

interface EstimateResult {
  min: number;
  max: number;
  recommendedPlan: string;
}

const sectors: { key: SectorKey; label: string; multiplier: number }[] = [
  { key: 'commerce', label: 'Commerce', multiplier: 1.0 },
  { key: 'services', label: 'Services', multiplier: 0.95 },
  { key: 'transport', label: 'Transport', multiplier: 1.05 },
  { key: 'btp', label: 'BTP', multiplier: 1.15 },
  { key: 'restaurant', label: 'Restaurant', multiplier: 1.1 },
  { key: 'import_export', label: 'Import / Export', multiplier: 1.25 },
  { key: 'industrie', label: 'Industrie', multiplier: 1.2 },
  { key: 'profession_liberale', label: 'Profession libérale', multiplier: 0.9 },
  { key: 'ong', label: 'Association / ONG', multiplier: 0.8 },
  { key: 'autre', label: 'Autre', multiplier: 1.0 },
];

const docVolumes = [
  { value: 'lt50', label: 'Moins de 50', base: 45000 },
  { value: '50-100', label: '50 à 100', base: 75000 },
  { value: '100-250', label: '100 à 250', base: 120000 },
  { value: 'gt250', label: 'Plus de 250', base: 200000 },
];

const employeeRanges = [
  { value: 'none', label: 'Aucun', mult: 1.0 },
  { value: '1-5', label: '1 à 5', mult: 1.15 },
  { value: '6-20', label: '6 à 20', mult: 1.35 },
  { value: 'gt20', label: 'Plus de 20', mult: 1.6 },
];

const yesNoOptions = [
  { value: 'no', label: 'Non' },
  { value: 'yes', label: 'Oui' },
];

const initialForm: SimulatorForm = {
  sector: 'commerce',
  docVolume: 'lt50',
  employees: 'none',
  vatLiable: 'no',
  payrollWanted: 'no',
  financialStatements: 'no',
};

function calculateEstimate(form: SimulatorForm): EstimateResult {
  const doc = docVolumes.find((d) => d.value === form.docVolume);
  const emp = employeeRanges.find((e) => e.value === form.employees);
  const sec = sectors.find((s) => s.key === form.sector);

  let base = doc ? doc.base : 50000;
  const empMult = emp ? emp.mult : 1.0;
  const secMult = sec ? sec.multiplier : 1.0;

  let total = base * empMult * secMult;

  if (form.vatLiable === 'yes') total *= 1.12;
  if (form.payrollWanted === 'yes') total += 35000;
  if (form.financialStatements === 'yes') total *= 1.1;

  const min = Math.round(total * 0.82 / 5000) * 5000;
  const max = Math.round(total * 1.22 / 5000) * 5000;

  let recommendedPlan: string;
  if (max <= 120000) {
    recommendedPlan = 'Essentiel';
  } else if (max <= 300000) {
    recommendedPlan = 'PME';
  } else {
    recommendedPlan = 'Entreprise';
  }

  return { min, max, recommendedPlan };
}

function formatNumber(n: number): string {
  return n.toLocaleString('fr-FR');
}

const WHATSAPP_NUMBER = '2250141425787';

function buildWhatsAppMessage(result: EstimateResult): string {
  const lines = [
    'Bonjour ComptaPilot Expertise,',
    '',
    `Voici mon estimation :`,
    `• Entre ${result.min.toLocaleString('fr-FR')} FCFA et ${result.max.toLocaleString('fr-FR')} FCFA par mois`,
    `• Formule recommandée : ${result.recommendedPlan}`, 
    '',
    'Pouvez-vous m\'envoyer un devis personnalisé ?',
    '',
    'Merci !',
  ];
  return encodeURIComponent(lines.join('\n'));
}

export default function PricingSimulator() {
  const [form, setForm] = useState<SimulatorForm>(initialForm);
  const [result, setResult] = useState<EstimateResult | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const estimateResult = calculateEstimate(form);
    setResult(estimateResult);
  };

  const handleReset = () => {
    setForm(initialForm);
    setResult(null);
  };

  const handleWhatsApp = () => {
    if (!result) return;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage(result)}`, '_blank');
  };

  const selectClass = 'w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-[#0a1628] focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-50 transition-all appearance-none cursor-pointer';

  return (
    <div>
      <div className="text-center mb-10">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 mb-5 shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
          <span className="text-emerald-600 text-sm font-semibold tracking-wide">SIMULATEUR</span>
        </div>
        <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-[#0a1628] mb-3">
          Estimez gratuitement vos honoraires comptables
        </h3>
        <p className="text-gray-400 text-xs sm:text-sm md:text-base max-w-xl mx-auto">
          Répondez à quelques questions et obtenez une estimation personnalisée en moins de 30 secondes.
        </p>
      </div>

      {!result ? (
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.03)] p-5 sm:p-7 md:p-10 space-y-4 sm:space-y-5">
            {/* Q1 - Secteur */}
            <div>
              <label className="block text-sm font-semibold text-[#0a1628] mb-2">
                1. Secteur d'activité
              </label>
              <select
                value={form.sector}
                onChange={(e) => setForm((prev) => ({ ...prev, sector: e.target.value as SectorKey }))}
                className={selectClass}
              >
                {sectors.map((s) => (
                  <option key={s.key} value={s.key}>{s.label}</option>
                ))}
              </select>
            </div>

            {/* Q2 - Volume */}
            <div>
              <label className="block text-sm font-semibold text-[#0a1628] mb-2">
                2. Nombre approximatif de pièces comptables par mois
              </label>
              <select
                value={form.docVolume}
                onChange={(e) => setForm((prev) => ({ ...prev, docVolume: e.target.value }))}
                className={selectClass}
              >
                {docVolumes.map((dv) => (
                  <option key={dv.value} value={dv.value}>{dv.label}</option>
                ))}
              </select>
            </div>

            {/* Q3 - Salariés */}
            <div>
              <label className="block text-sm font-semibold text-[#0a1628] mb-2">
                3. Nombre de salariés
              </label>
              <select
                value={form.employees}
                onChange={(e) => setForm((prev) => ({ ...prev, employees: e.target.value }))}
                className={selectClass}
              >
                {employeeRanges.map((er) => (
                  <option key={er.value} value={er.value}>{er.label}</option>
                ))}
              </select>
            </div>

            {/* Q4 - TVA */}
            <div>
              <label className="block text-sm font-semibold text-[#0a1628] mb-2">
                4. Êtes-vous assujetti à la TVA ?
              </label>
              <select
                value={form.vatLiable}
                onChange={(e) => setForm((prev) => ({ ...prev, vatLiable: e.target.value }))}
                className={selectClass}
              >
                {yesNoOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>

            {/* Q5 - Paie */}
            <div>
              <label className="block text-sm font-semibold text-[#0a1628] mb-2">
                5. Souhaitez-vous que nous réalisions également la paie ?
              </label>
              <select
                value={form.payrollWanted}
                onChange={(e) => setForm((prev) => ({ ...prev, payrollWanted: e.target.value }))}
                className={selectClass}
              >
                {yesNoOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>

            {/* Q6 - États financiers */}
            <div>
              <label className="block text-sm font-semibold text-[#0a1628] mb-2">
                6. Souhaitez-vous que nous préparions vos états financiers ?
              </label>
              <select
                value={form.financialStatements}
                onChange={(e) => setForm((prev) => ({ ...prev, financialStatements: e.target.value }))}
                className={selectClass}
              >
                {yesNoOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="whitespace-nowrap w-full py-4 rounded-xl bg-[#0a1628] text-white font-semibold text-sm hover:bg-[#0d1f3c] hover:shadow-lg hover:shadow-[#0a1628]/20 transition-all duration-300 active:scale-[0.98] cursor-pointer mt-6"
            >
              Obtenir mon estimation
            </button>
          </form>
        </div>
      ) : (
        <AnimatedSection animation="fade-in-up" duration={500}>
          <div className="max-w-xl mx-auto">
            {/* Result card */}
            <div className="bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628] rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-10 text-center mb-5 sm:mb-6">
              <p className="text-white/40 text-xs mb-2 sm:mb-3 uppercase tracking-wider">Votre estimation</p>
              <p className="text-white/30 text-sm mb-1">Entre</p>
              <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-white mb-1">
                {formatNumber(result.min)} FCFA
              </div>
              <p className="text-white/30 text-sm mb-1">et</p>
              <div className="text-2xl sm:text-3xl md:text-5xl font-heading font-bold text-white mb-3 sm:mb-4">
                {formatNumber(result.max)} FCFA
              </div>
              <p className="text-white/50 text-sm">par mois</p>
            </div>

            {/* Recommendation card */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border-2 border-emerald-500 shadow-[0_8px_40px_rgba(16,185,129,0.12)] p-5 sm:p-6 md:p-8 mb-5 sm:mb-6">
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">Notre recommandation</p>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
                  <i className="ri-star-fill text-white text-lg"></i>
                </div>
                <h4 className="font-heading text-xl font-bold text-[#0a1628]">Formule {result.recommendedPlan}</h4>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Cette formule correspond à votre entreprise compte tenu de votre volume de pièces comptables et des prestations souhaitées.
              </p>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Elle comprend notamment :</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                {['Tenue comptable', 'Déclarations fiscales', 'Gestion de la paie', 'États financiers', 'Accompagnement personnalisé'].map((item) => (
                  <span key={item} className="flex items-center gap-2 text-sm text-gray-600">
                    <i className="ri-check-line text-emerald-500"></i> {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <p className="text-center text-gray-300 text-xs mb-6 px-4">
              Cette estimation est donnée à titre indicatif. Un devis définitif vous sera communiqué gratuitement après l'étude de votre dossier.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <button
                onClick={handleWhatsApp}
                className="whitespace-nowrap flex-1 py-3.5 bg-[#25D366] text-white font-semibold text-sm rounded-xl hover:bg-[#20bd5a] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#25D366]/25 active:scale-[0.98]"
              >
                <i className="ri-whatsapp-line text-lg"></i>
                Envoyer sur WhatsApp
              </button>
              <a
                href="/contact"
                className="whitespace-nowrap flex-1 py-3.5 bg-[#0a1628] text-white font-semibold text-sm rounded-xl hover:bg-[#0d1f3c] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#0a1628]/20 active:scale-[0.98]"
              >
                <i className="ri-file-text-line"></i>
                Demander un devis personnalisé
              </a>
            </div>

            {/* Restart */}
            <div className="text-center">
              <button
                onClick={handleReset}
                className="whitespace-nowrap text-gray-400 text-sm hover:text-emerald-600 transition-colors cursor-pointer flex items-center gap-2 mx-auto"
              >
                <i className="ri-refresh-line"></i>
                Refaire une estimation
              </button>
            </div>
          </div>
        </AnimatedSection>
      )}
    </div>
  );
}