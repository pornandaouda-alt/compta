import { useState, useRef } from 'react';
import AnimatedSection from '@/components/base/AnimatedSection';

const sectors = [
  'Commerce',
  'Services',
  'Transport',
  'BTP',
  'Restaurant',
  'Import / Export',
  'Industrie',
  'Profession libérale',
  'Association / ONG',
  'Autre',
];

const uploadTypes = [
  { icon: 'ri-file-list-3-line', label: 'Factures' },
  { icon: 'ri-bank-line', label: 'Relevés bancaires' },
  { icon: 'ri-scales-3-line', label: 'Balance' },
  { icon: 'ri-book-open-line', label: 'Grand Livre' },
  { icon: 'ri-file-chart-line', label: 'États financiers' },
  { icon: 'ri-attachment-line', label: 'Autres documents' },
];

export default function DevisFormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError('');
    setIsSubmitting(true);

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    const honeypot = formData.get('company_alt') as string;
    if (honeypot && honeypot.trim() !== '') {
      setSubmitted(true);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('https://readdy.ai/api/form/d9ctok564bc39gr2ppb0', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      const responseText = await response.text();
      let parsed;
      try {
        parsed = JSON.parse(responseText);
      } catch {
        parsed = null;
      }

      const serverMsg = parsed?.meta?.message || parsed?.message || parsed?.meta?.detail || responseText;

      if (response.ok && parsed?.code === 'OK') {
        setSubmitted(true);
        setFiles([]);
      } else {
        if (serverMsg.includes('spam') || serverMsg.includes('form data is spam')) {
          setSubmitted(true);
        } else {
          setFormError(serverMsg || 'Une erreur est survenue. Veuillez réessayer.');
        }
      }
    } catch {
      setFormError('Impossible d\'envoyer le formulaire. Vérifiez votre connexion et réessayez.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <AnimatedSection animation="fade-in-up" duration={500}>
        <div className="max-w-xl mx-auto bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.03)] p-6 sm:p-10 text-center">
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-5">
            <i className="ri-check-line text-emerald-500 text-3xl"></i>
          </div>
          <h4 className="font-heading text-xl font-bold text-[#0a1628] mb-2">Merci !</h4>
          <p className="text-gray-400 text-sm max-w-md mx-auto mb-6">
            Nous analyserons gratuitement votre demande et vous transmettrons un devis personnalisé sous 24 à 48 heures.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/contact"
              className="whitespace-nowrap px-6 py-3.5 bg-emerald-500 text-white font-semibold text-sm rounded-xl hover:bg-emerald-600 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-emerald-500/25 active:scale-[0.98]"
            >
              <i className="ri-calendar-line"></i>
              Prendre rendez-vous
            </a>
            <button
              onClick={() => setSubmitted(false)}
              className="whitespace-nowrap px-6 py-3.5 bg-[#0a1628] text-white font-semibold text-sm rounded-xl hover:bg-[#0d1f3c] transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#0a1628]/20 active:scale-[0.98]"
            >
              <i className="ri-mail-send-line"></i>
              Envoyer une autre demande
            </button>
          </div>
        </div>
      </AnimatedSection>
    );
  }

  return (
    <div>
      <div className="text-center mb-10">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-gray-200 mb-5 shadow-[0_1px_4px_rgba(0,0,0,0.02)]">
          <span className="text-emerald-600 text-sm font-semibold tracking-wide">DEVIS</span>
        </div>
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#0a1628] mb-3">
          Demandez votre devis personnalisé
        </h3>
        <p className="text-gray-400 text-sm max-w-xl mx-auto">
          Complétez le formulaire ci-dessous. Nous étudierons votre dossier et vous répondrons sous 24 à 48 heures.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <form
          onSubmit={handleSubmit}
          data-readdy-form
          className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.03)] p-5 sm:p-7 md:p-10 space-y-4 sm:space-y-5"
        >
          {/* Honeypot */}
          <input
            type="text"
            name="company_alt"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            readOnly
            className="honeypot-field"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="devis-nom" className="block text-xs font-semibold text-gray-500 mb-1.5">
                Nom <span className="text-red-400">*</span>
              </label>
              <input
                id="devis-nom"
                name="name"
                type="text"
                required
                placeholder="Votre nom"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-[#0a1628] placeholder:text-gray-300 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-50 transition-all"
              />
            </div>
            <div>
              <label htmlFor="devis-entreprise" className="block text-xs font-semibold text-gray-500 mb-1.5">
                Entreprise
              </label>
              <input
                id="devis-entreprise"
                name="company"
                type="text"
                placeholder="Nom de votre entreprise"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-[#0a1628] placeholder:text-gray-300 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-50 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="devis-telephone" className="block text-xs font-semibold text-gray-500 mb-1.5">
                Téléphone <span className="text-red-400">*</span>
              </label>
              <input
                id="devis-telephone"
                name="phone"
                type="tel"
                required
                placeholder="+225 XX XX XX XX XX"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-[#0a1628] placeholder:text-gray-300 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-50 transition-all"
              />
            </div>
            <div>
              <label htmlFor="devis-email" className="block text-xs font-semibold text-gray-500 mb-1.5">
                Email <span className="text-red-400">*</span>
              </label>
              <input
                id="devis-email"
                name="email"
                type="email"
                required
                placeholder="votre@email.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-[#0a1628] placeholder:text-gray-300 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-50 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="devis-secteur" className="block text-xs font-semibold text-gray-500 mb-1.5">
                Secteur d'activité <span className="text-red-400">*</span>
              </label>
              <select
                id="devis-secteur"
                name="sector"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-[#0a1628] focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-50 transition-all appearance-none cursor-pointer"
              >
                <option value="">Sélectionnez...</option>
                {sectors.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="devis-salaries" className="block text-xs font-semibold text-gray-500 mb-1.5">
                Nombre de salariés <span className="text-red-400">*</span>
              </label>
              <select
                id="devis-salaries"
                name="employees"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-[#0a1628] focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-50 transition-all appearance-none cursor-pointer"
              >
                <option value="">Sélectionnez...</option>
                <option value="0">Aucun</option>
                <option value="1-5">1 à 5</option>
                <option value="6-20">6 à 20</option>
                <option value="21-50">21 à 50</option>
                <option value="50+">Plus de 50</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="devis-pieces" className="block text-xs font-semibold text-gray-500 mb-1.5">
              Nombre approximatif de pièces comptables par mois <span className="text-red-400">*</span>
            </label>
            <select
              id="devis-pieces"
              name="monthly_docs"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-[#0a1628] focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-50 transition-all appearance-none cursor-pointer"
            >
              <option value="">Sélectionnez...</option>
              <option value="lt50">Moins de 50</option>
              <option value="50-100">50 à 100</option>
              <option value="100-250">100 à 250</option>
              <option value="gt250">Plus de 250</option>
            </select>
          </div>

          <div>
            <label htmlFor="devis-message" className="block text-xs font-semibold text-gray-500 mb-1.5">
              Message
            </label>
            <textarea
              id="devis-message"
              name="message"
              rows={4}
              maxLength={500}
              placeholder="Décrivez brièvement vos besoins..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-[#0a1628] placeholder:text-gray-300 focus:outline-none focus:border-emerald-400 focus:ring-4 focus:ring-emerald-50 transition-all resize-none"
            ></textarea>
          </div>

          {/* File upload */}
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-2">
              Documents à joindre (facultatif)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3">
              {uploadTypes.map((type) => (
                <div key={type.label} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 border border-gray-100">
                  <i className={`${type.icon} text-gray-400 text-sm`}></i>
                  <span className="text-xs text-gray-500">{type.label}</span>
                </div>
              ))}
            </div>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-gray-200 rounded-xl p-5 text-center hover:border-emerald-300 transition-all duration-200 cursor-pointer"
            >
              <i className="ri-upload-cloud-2-line text-gray-300 text-2xl block mb-1"></i>
              <span className="text-gray-400 text-xs">Cliquez pour téléverser vos documents</span>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept=".pdf,.xlsx,.xls,.docx,.doc,.png,.jpg,.jpeg"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
            {files.length > 0 && (
              <div className="mt-3 space-y-2">
                {files.map((file, i) => (
                  <div key={i} className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-2.5">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                        <i className="ri-file-line text-emerald-500 text-sm"></i>
                      </div>
                      <span className="text-sm text-[#0a1628] truncate">{file.name}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(i)}
                      className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer flex-shrink-0"
                    >
                      <i className="ri-close-line text-sm"></i>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {formError && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-sm text-red-600">
              {formError}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="whitespace-nowrap w-full py-4 rounded-xl bg-emerald-500 text-white font-semibold text-sm hover:bg-emerald-600 hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 active:scale-[0.98] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <i className="ri-loader-4-line animate-spin"></i>
                Envoi en cours...
              </span>
            ) : (
              <span className="flex items-center justify-center gap-2">
                <i className="ri-mail-send-line"></i>
                Envoyer ma demande
              </span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}