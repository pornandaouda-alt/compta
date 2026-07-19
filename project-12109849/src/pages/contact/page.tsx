import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';
import AnimatedSection from '@/components/base/AnimatedSection';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#070d1a]">
        <section className="pt-32 pb-20">
          <div className="max-w-2xl mx-auto px-6 md:px-10">
            <AnimatedSection animation="fade-in-up" duration={700}>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                <span className="text-emerald-400 text-sm font-medium">Contact</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Contactez-nous
              </h1>
              <p className="text-white/50 text-lg mb-10">
                Notre équipe vous répond sous 24h. Remplissez le formulaire ci-dessous ou contactez-nous directement.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200} duration={700}>
              <div className="bg-gray-900/50 rounded-2xl p-8 md:p-10 border border-white/5 mb-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-3">
                      <i className="ri-phone-line text-emerald-400 text-lg"></i>
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">Téléphone</h3>
                    <a href="tel:+2252722445566" className="text-white/50 text-sm hover:text-emerald-400 transition-colors">+225 27 22 44 55 66</a>
                  </div>
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-3">
                      <i className="ri-mail-line text-emerald-400 text-lg"></i>
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">Email</h3>
                    <a href="mailto:contact@pilotecompta.com" className="text-white/50 text-sm hover:text-emerald-400 transition-colors">contact@pilotecompta.com</a>
                  </div>
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-3">
                      <i className="ri-map-pin-line text-emerald-400 text-lg"></i>
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">Adresse</h3>
                    <p className="text-white/50 text-sm">Immeuble Latrille, 8e étage<br />Plateau, Abidjan</p>
                  </div>
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-3">
                      <i className="ri-time-line text-emerald-400 text-lg"></i>
                    </div>
                    <h3 className="text-white font-semibold text-sm mb-1">Horaires</h3>
                    <p className="text-white/50 text-sm">Lun - Ven : 8h00 - 18h00<br />Support 24/7 en ligne</p>
                  </div>
                </div>

                <a
                  href="/#demo"
                  className="whitespace-nowrap w-full inline-flex items-center justify-center gap-2 py-3.5 bg-emerald-500 text-white font-semibold text-sm rounded-xl hover:bg-emerald-400 transition-colors cursor-pointer"
                >
                  <i className="ri-send-plane-line"></i>
                  Envoyer un message
                </a>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}