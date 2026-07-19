import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen text-center px-4 bg-[#070d1a]">
      <h1 className="absolute bottom-0 text-9xl md:text-[12rem] font-black text-white/[0.03] select-none pointer-events-none z-0">
        404
      </h1>
      <div className="relative z-10">
        <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <i className="ri-error-warning-line text-emerald-400 text-3xl"></i>
        </div>
        <h1 className="text-2xl md:text-3xl font-bold text-white mb-3">Page introuvable</h1>
        <p className="text-white/40 text-base max-w-md mx-auto mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <Link
          to="/"
          className="whitespace-nowrap inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-semibold text-sm rounded-xl hover:bg-emerald-400 transition-colors cursor-pointer"
        >
          <i className="ri-arrow-left-line"></i>
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}