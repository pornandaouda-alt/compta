import { useEffect } from 'react';

interface DemoModalProps {
  open: boolean;
  onClose: () => void;
}

const demoFeatures = [
  { icon: 'ri-book-open-line', title: 'Tenue comptable SYSCOHADA', desc: 'Saisie, journaux, grand livre, balance générale — le tout conforme au plan comptable révisé.' },
  { icon: 'ri-scales-3-line', title: 'Bilan & États financiers', desc: 'Bilan, compte de résultat, TAFIRE et annexes élaborés avec rigueur.' },
  { icon: 'ri-bank-card-line', title: 'Déclarations fiscales', desc: 'TVA, CET, IS/BIC et déclarations sociales gérées dans les délais.' },
  { icon: 'ri-wallet-3-line', title: 'Gestion de la paie', desc: 'Bulletins, CNPS, contrat de travail : une paie sans erreur.' },
];

export default function DemoModal({ open, onClose }: DemoModalProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

      <div
        className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0a101c] border border-white/10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors cursor-pointer z-20"
        >
          <i className="ri-close-line text-white text-lg"></i>
        </button>

        {/* Header */}
        <div className="relative px-8 md:px-12 pt-12 md:pt-16 pb-8 text-center overflow-hidden rounded-t-3xl">
          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/15 border border-emerald-500/25 mb-6">
              <i className="ri-play-circle-line text-emerald-400"></i>
              <span className="text-emerald-400 text-sm font-medium">Découvrez PiloteCompta Expertise en action</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Votre comptabilité,{' '}
              <span className="text-emerald-400">simplifiée</span>
            </h2>
            <p className="text-white/50 text-base max-w-lg mx-auto">
              Voici un aperçu de ce que nous pouvons faire pour vous. Chaque module est pensé pour vous faire gagner du temps et assurer votre conformité SYSCOHADA.
            </p>
          </div>
        </div>

        {/* Demo features grid */}
        <div className="px-8 md:px-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {demoFeatures.map((f, i) => (
              <div
                key={i}
                className="group p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-emerald-500/30 transition-all duration-300 cursor-default"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                    <i className={`${f.icon} text-emerald-400 text-lg`}></i>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-sm mb-1">{f.title}</h3>
                    <p className="text-white/40 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <div className="mx-8 md:mx-12 mb-8 p-6 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-transparent border border-emerald-500/15">
          <div className="flex flex-col sm:flex-row items-center justify-around gap-6">
            <div className="text-center">
              <div className="text-2xl font-heading font-bold text-white">10 000+</div>
              <div className="text-white/40 text-xs mt-1">Entreprises accompagnées</div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-white/10"></div>
            <div className="text-center">
              <div className="text-2xl font-heading font-bold text-white">8</div>
              <div className="text-white/40 text-xs mt-1">Modules disponibles</div>
            </div>
            <div className="hidden sm:block w-px h-10 bg-white/10"></div>
            <div className="text-center">
              <div className="text-2xl font-heading font-bold text-white">99,9%</div>
              <div className="text-white/40 text-xs mt-1">Satisfaction client</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="px-8 md:px-12 pb-12 md:pb-16 text-center">
          <p className="text-white/40 text-sm mb-6">Convaincu ? Passons à l'étape suivante.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="whitespace-nowrap px-8 py-4 bg-emerald-500 text-white font-semibold text-base rounded-xl hover:bg-emerald-400 transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              Demander un devis personnalisé
            </a>
            <button
              onClick={onClose}
              className="whitespace-nowrap px-8 py-4 bg-white/5 text-white/70 font-medium text-base rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-200 cursor-pointer"
            >
              Fermer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}