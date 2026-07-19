import Navbar from '@/components/feature/Navbar';
import Footer from '@/components/feature/Footer';

const articles = [
  {
    category: 'SYSCOHADA',
    title: 'Comprendre le nouveau SYSCOHADA révisé : les changements clés',
    desc: 'Le SYSCOHADA révisé apporte des modifications importantes au plan comptable. Découvrez les impacts sur votre tenue de comptabilité.',
    date: '15 juillet 2026',
    readTime: '5 min',
    image: 'https://readdy.ai/api/search-image?query=Dark%20elegant%20abstract%20finance%20and%20accounting%20editorial%20illustration%20with%20emerald%20green%20accents%20on%20deep%20navy%20background%2C%20modern%20fintech%20style%2C%20no%20text%2C%20premium%20corporate%20aesthetic&width=600&height=340&seq=blog-thumb-01&orientation=landscape&nocache=true',
  },
  {
    category: 'Fiscalité',
    title: 'Comment optimiser votre fiscalité en toute légalité',
    desc: 'Stratégies et conseils pratiques pour réduire votre charge fiscale tout en respectant la législation ivoirienne.',
    date: '10 juillet 2026',
    readTime: '7 min',
    image: 'https://readdy.ai/api/search-image?query=Dark%20elegant%20abstract%20tax%20optimization%20concept%20with%20emerald%20green%20accents%20on%20deep%20navy%20background%2C%20modern%20fintech%20style%2C%20no%20text%2C%20premium%20corporate%20aesthetic&width=600&height=340&seq=blog-thumb-02&orientation=landscape&nocache=true',
  },
  {
    category: 'Finance',
    title: 'Les ratios financiers essentiels pour piloter votre entreprise',
    desc: 'Rentabilité, liquidité, solvabilité : maîtrisez les indicateurs qui comptent vraiment pour la santé financière de votre business.',
    date: '5 juillet 2026',
    readTime: '6 min',
    image: 'https://readdy.ai/api/search-image?query=Dark%20elegant%20abstract%20financial%20ratios%20and%20KPI%20dashboard%20with%20emerald%20green%20accents%20on%20deep%20navy%20background%2C%20modern%20fintech%20style%2C%20no%20text%2C%20premium%20corporate%20aesthetic&width=600&height=340&seq=blog-thumb-03&orientation=landscape&nocache=true',
  },
];

export default function Blog() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-20 bg-[#070d1a]">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <span className="text-xs font-semibold tracking-widest uppercase text-emerald-400 mb-4 block">
            Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ressources & Actualités
          </h1>
          <p className="text-white/50 text-lg mb-10">
            Articles, analyses et conseils pour les professionnels de la comptabilité et les dirigeants.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <div key={article.title} className="bg-gray-900/50 rounded-2xl border border-white/5 overflow-hidden group cursor-default">
                <div className="aspect-video bg-gray-800/50 overflow-hidden">
                  <img
                    alt={article.title}
                    className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                    src={article.image}
                  />
                </div>
                <div className="p-6">
                  <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider">{article.category}</span>
                  <h3 className="text-white font-semibold text-base mt-2 mb-3">
                    {article.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {article.desc}
                  </p>
                  <div className="mt-4 pt-4 border-t border-white/5">
                    <span className="text-white/30 text-xs">{article.date} · {article.readTime} de lecture</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}