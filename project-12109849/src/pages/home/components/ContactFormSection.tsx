import { useState, FormEvent } from 'react';
import AnimatedSection from '@/components/base/AnimatedSection';

export default function ContactFormSection() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const honeypot = formData.get('company_alt');
    if (honeypot && String(honeypot).trim() !== '') {
      setStatus('success');
      return;
    }

    try {
      const response = await fetch('https://readdy.ai/api/form/d9cs3vl64bc39gr2pol0', {
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
      if (!response.ok || parsed?.code !== 'OK' || serverMsg?.toLowerCase().includes('spam')) {
        setStatus('error');
        setErrorMsg(serverMsg || 'Une erreur est survenue. Veuillez réessayer.');
        return;
      }
      setStatus('success');
      form.reset();
    } catch {
      setStatus('error');
      setErrorMsg('Erreur de connexion. Veuillez réessayer.');
    }
  };

  return (
    <section id="demo" className="py-20 md:py-28 bg-gray-950">
      <div className="max-w-2xl mx-auto px-4 md:px-6">
        <AnimatedSection animation="fade-in-up" duration={700} className="text-center mb-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
            <span className="text-emerald-400 text-sm font-medium">Démonstration</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Demandez un <span className="text-emerald-400">devis personnalisé</span>
          </h2>
          <p className="text-white/50 text-base">
            Nos experts analysent vos besoins et vous proposent une solution adaptée à votre activité.
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-in-up" delay={200} duration={700}>
          <form
            data-readdy-form="true"
            onSubmit={handleSubmit}
            className="bg-gray-900/50 rounded-2xl p-8 md:p-10 border border-white/5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
              <div>
                <label htmlFor="demo-nom" className="block text-white/70 text-sm font-medium mb-2">
                  Nom complet
                </label>
                <input
                  id="demo-nom"
                  required
                  name="name"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-white/20"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label htmlFor="demo-entreprise" className="block text-white/70 text-sm font-medium mb-2">
                  Entreprise
                </label>
                <input
                  id="demo-entreprise"
                  required
                  name="company"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-white/20"
                  placeholder="Votre entreprise"
                />
              </div>
            </div>

            <div className="mb-5">
              <label htmlFor="demo-email" className="block text-white/70 text-sm font-medium mb-2">
                Email professionnel
              </label>
              <input
                id="demo-email"
                required
                type="email"
                name="email"
                className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-white/20"
                placeholder="votre@entreprise.com"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="demo-tel" className="block text-white/70 text-sm font-medium mb-2">
                Téléphone
              </label>
              <input
                id="demo-tel"
                type="tel"
                name="phone"
                className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors placeholder:text-white/20"
                placeholder="+225 XX XX XX XX XX"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="demo-message" className="block text-white/70 text-sm font-medium mb-2">
                Message (optionnel)
              </label>
              <textarea
                id="demo-message"
                name="message"
                rows={3}
                maxLength={500}
                className="w-full px-4 py-3 bg-gray-800/50 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-emerald-500/50 transition-colors resize-none placeholder:text-white/20"
                placeholder="Décrivez brièvement vos besoins..."
              ></textarea>
            </div>

            <input
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              readOnly
              className="contact-form-hp"
              name="company_alt"
            />

            {status === 'success' && (
              <p className="text-emerald-400 text-sm mb-4">Merci ! Votre demande a été envoyée avec succès. Nous vous recontactons sous 24h.</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm mb-4">{errorMsg}</p>
            )}

            <button
              type="submit"
              className="whitespace-nowrap w-full py-3.5 bg-emerald-500 text-white font-semibold text-sm rounded-xl hover:bg-emerald-400 transition-colors cursor-pointer"
            >
              Envoyer ma demande
            </button>
          </form>
        </AnimatedSection>
      </div>
    </section>
  );
}