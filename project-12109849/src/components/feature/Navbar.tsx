import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Services', href: '/services' },
  { label: 'Études de cas', href: '/etudes-de-cas' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Tarifs', href: '/#tarifs' },
  { label: 'FAQ', href: '/#faq' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.mobile-menu-container')) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith('/#')) {
      const id = href.substring(2);
      if (!isHome) {
        window.location.href = '/' + href.substring(1);
        return;
      }
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isDark = isHome && !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isDark
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          <Link
            to="/"
            onClick={scrollToTop}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <i className="ri-calculator-line text-white text-lg"></i>
            </div>
            <span className={`font-heading text-lg font-bold tracking-tight transition-colors duration-300 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Pilote<span className="text-emerald-500">Compta Expertise</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  if (link.href.startsWith('/#')) {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }
                }}
                className={`text-sm font-medium transition-colors duration-200 hover:text-emerald-400 ${isDark ? 'text-white/70' : 'text-gray-600'}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="/contact"
              className={`whitespace-nowrap px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                isDark
                  ? 'bg-emerald-500 text-white hover:bg-emerald-400'
                  : 'bg-emerald-500 text-white hover:bg-emerald-600'
              }`}
            >
              Demander un devis
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden w-9 h-9 rounded-lg flex items-center justify-center ${isDark ? 'text-white/70' : 'text-gray-600'}`}
            aria-label="Menu"
          >
            <i className={`text-xl ${mobileOpen ? 'ri-close-line' : 'ri-menu-line'}`}></i>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mobile-menu-container md:hidden bg-white border-b border-gray-100 px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                if (link.href.startsWith('/#')) {
                  e.preventDefault();
                  handleNavClick(link.href);
                }
              }}
              className="text-gray-700 hover:text-emerald-500 text-sm font-medium py-2 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-emerald-500 text-white hover:bg-emerald-600 transition-colors"
          >
            Demander un devis
          </a>
        </div>
      )}
    </nav>
  );
}