import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070d1a]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <i className="ri-calculator-line text-white text-lg"></i>
              </div>
              <span className="font-heading text-lg font-bold tracking-tight text-white">
                Pilote<span className="text-emerald-500">Compta Expertise</span>
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed mb-8 max-w-sm">
              Le premier copilote IA pour la comptabilité SYSCOHADA. Automatisez, pilotez et faites grandir votre entreprise en toute conformité.
            </p>
            <form
              data-readdy-form="true"
              id="newsletter-footer"
              action="https://readdy.ai/api/form/d9csla6dn0rfb35c5prg"
              method="POST"
              className="max-w-sm"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const formData = new FormData(form);
                const honeypot = formData.get('website_alt');
                if (honeypot && String(honeypot).trim() !== '') return;
                try {
                  await fetch(form.getAttribute('action') || '', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
                  });
                  const emailInput = form.querySelector('input[name="email"]') as HTMLInputElement;
                  if (emailInput) emailInput.value = '';
                  alert('Merci ! Vous êtes bien inscrit à notre newsletter.');
                } catch {
                  alert('Une erreur est survenue. Veuillez réessayer.');
                }
              }}
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-grow">
                  <input
                    type="email"
                    name="email"
                    placeholder="votre@email.com"
                    required
                    className="w-full bg-transparent border-b border-white/10 text-white text-sm py-3 px-0 focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-white/20"
                  />
                  <input
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    readOnly
                    className="contact-form-hp"
                    name="website_alt"
                  />
                </div>
                <button
                  type="submit"
                  className="whitespace-nowrap px-6 py-3 bg-white text-gray-900 font-semibold text-sm rounded-xl hover:bg-gray-100 transition-colors cursor-pointer flex items-center gap-2"
                >
                  S'abonner
                  <i className="ri-arrow-right-line text-base"></i>
                </button>
              </div>
            </form>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-heading font-semibold text-white text-sm mb-5">Navigation</h4>
            <div className="flex flex-col gap-3">
              <a href="/services" className="text-white/40 text-sm hover:text-emerald-400 transition-colors underline underline-offset-4">Services</a>
              <a href="/etudes-de-cas" className="text-white/40 text-sm hover:text-emerald-400 transition-colors underline underline-offset-4">Études de cas</a>
              <a href="/a-propos" className="text-white/40 text-sm hover:text-emerald-400 transition-colors underline underline-offset-4">À propos</a>
              <a href="/#tarifs" className="text-white/40 text-sm hover:text-emerald-400 transition-colors underline underline-offset-4">Tarifs</a>
              <a href="/blog" className="text-white/40 text-sm hover:text-emerald-400 transition-colors underline underline-offset-4">Blog</a>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-heading font-semibold text-white text-sm mb-5">Contact</h4>
                <div className="flex flex-col gap-3">
                  <a href="tel:+2252722445566" className="text-white/40 text-sm hover:text-emerald-400 transition-colors">+225 27 22 44 55 66</a>
                  <a href="mailto:contact@pilotecompta.com" className="text-white/40 text-sm hover:text-emerald-400 transition-colors">contact@pilotecompta.com</a>
                </div>
              </div>
              <div>
                <h4 className="font-heading font-semibold text-white text-sm mb-5">Siège</h4>
                <p className="text-white/40 text-sm leading-relaxed">
                  Immeuble Latrille, 8e étage<br />
                  Plateau, Boulevard de la République<br />
                  Abidjan, Côte d'Ivoire
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <a href="https://linkedin.com/company/pilotecompta" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-emerald-400 transition-colors cursor-pointer" aria-label="LinkedIn">
                <i className="ri-linkedin-fill text-lg"></i>
              </a>
              <a href="https://twitter.com/pilotecompta" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-emerald-400 transition-colors cursor-pointer" aria-label="Twitter">
                <i className="ri-twitter-x-fill text-lg"></i>
              </a>
              <a href="https://facebook.com/pilotecompta" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-emerald-400 transition-colors cursor-pointer" aria-label="Facebook">
                <i className="ri-facebook-fill text-lg"></i>
              </a>
              <a href="https://instagram.com/pilotecompta" target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-emerald-400 transition-colors cursor-pointer" aria-label="Instagram">
                <i className="ri-instagram-line text-lg"></i>
              </a>
            </div>
            <p className="text-white/20 text-xs text-center">
              &copy; {currentYear} PiloteCompta Expertise. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/mentions-legales" className="text-white/30 text-xs hover:text-emerald-400 transition-colors underline underline-offset-4">
                Mentions légales
              </Link>
              <Link to="/conditions-generales" className="text-white/30 text-xs hover:text-emerald-400 transition-colors underline underline-offset-4">
                CGV
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}