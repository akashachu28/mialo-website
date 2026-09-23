'use client'
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import brainlogo from '../public/images/brainLogo.png';

const NAV: { name: string; href: string }[] = [
  { name: 'Platform', href: '/platform' },
  { name: 'Intelligence Domain', href: '/intelligence-domain' },
  { name: 'Industries', href: '/industries' },
  { name: 'Solutions', href: '/solution' },
  { name: 'Company', href: '/company' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDarkText, setIsDarkText] = useState(false);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(href + '/');

  // Close the mobile menu when the route changes (React's "reset state on prop
  // change" pattern — runs during render, no effect needed).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setMobileOpen(false);
  }

  // Solid bar once the page is scrolled
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Detect light/dark sections using scroll position
  useEffect(() => {
    const checkHeaderTheme = () => {
      const sections = document.querySelectorAll('[data-header-theme]');
      const headerHeight = 64; // Height of header in pixels
      const scrollY = window.scrollY;
      
      let isOnLightSection = false;
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = rect.top + scrollY;
        const sectionBottom = sectionTop + rect.height;
        
        // Check if header is over this section
        const headerPosition = scrollY + headerHeight;
        
        if (headerPosition >= sectionTop && headerPosition <= sectionBottom) {
          const theme = section.getAttribute('data-header-theme');
          if (theme === 'light') {
            isOnLightSection = true;
          }
        }
      });
      
      setIsDarkText(isOnLightSection);
    };

    checkHeaderTheme();
    window.addEventListener('scroll', checkHeaderTheme, { passive: true });
    
    return () => window.removeEventListener('scroll', checkHeaderTheme);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const solid = scrolled || mobileOpen;
  const textColor = isDarkText ? 'text-gray-800' : 'text-white';
  const borderColor = isDarkText ? 'border-gray-800' : 'border-white';
  // const bgColor = isDarkText ? 'bg-white' : 'bg-transparent';

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-muted/0 transition-colors duration-300 ${
        solid
          ? 'border-line bg-background/0 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
      style={{fontFamily: "var(--font-manrope), sans-serif"}}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8">
        {/* Logo */}
        <Link 
          href="/" 
          className="flex items-center gap-1.5"
          onClick={(e) => {
            // If already on home page, scroll to top smoothly
            if (pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <Image src={brainlogo} alt="" className="h-7 w-auto opacity-80" />
          <span className={`font-display text-xl font-medium tracking-[-0.02em] ${textColor} transition-colors duration-300`}>
            Mialo.ai
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`border-b-2 pb-1 text-[17px] transition-colors duration-300 ${
                isActive(item.href)
                  ? `${borderColor} ${textColor}`
                  : `border-transparent ${textColor} hover:opacity-70`
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Link
            href="/demo"
            className={`hidden px-5 py-[11px] text-[14px] font-medium  transition-all duration-300 hover:opacity-80 lg:block`}
            style={{
              clipPath: "polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)",
              borderWidth: '1px',
              borderStyle: 'solid',
              color: isDarkText ? '#fff' : '#08090B',
              borderColor: isDarkText ? '#6C93FF' : '#C6FF6D',
              backgroundColor:  isDarkText ? '#6C93FF' : '#C6FF6D'
            }}
          >
            Request a demo
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className={`-mr-2 flex h-10 w-10 items-center justify-center rounded-lg ${textColor} transition-all duration-300 lg:hidden`}
            style={{
              backgroundColor: isDarkText ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.1)'
            }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
    </header>

      {/* Mobile menu — sibling of <header> so its backdrop-blur doesn't
          become the containing block for this fixed panel */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-background px-6 py-4 lg:hidden">
          <nav className="flex flex-col divide-y divide-line">
            {NAV.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`py-4 text-[15px] ${
                  isActive(item.href) ? 'text-primary' : 'text-muted'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <Link
            href="/demo"
            className="mt-6 block rounded-lg bg-primary px-5 py-3 text-center text-sm font-medium text-[#08090B]"
          >
            Request a demo
          </Link>
        </div>
      )}
    </>
  );
}
