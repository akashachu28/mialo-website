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

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const solid = scrolled || mobileOpen;

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid
          ? 'border-line bg-background/80 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5">
          <Image src={brainlogo} alt="" className="h-7 w-auto opacity-80" />
          <span className="font-display text-xl font-medium tracking-[-0.02em] text-primary">
            Mialo.ai
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`border-b-2 pb-1 text-sm transition-colors ${
                isActive(item.href)
                  ? 'border-ice text-primary'
                  : 'border-transparent text-muted hover:text-primary'
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
            className="hidden rounded-lg bg-primary px-5 py-[11px] text-[14px] font-medium text-[#08090B] transition-colors hover:bg-white lg:block"
          >
            Request a demo
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            className="-mr-2 flex h-10 w-10 items-center justify-center rounded-lg text-primary transition-colors hover:bg-white/5 lg:hidden"
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
