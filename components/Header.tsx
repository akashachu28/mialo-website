'use client'
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import brainlogo from '../public/images/brainLogo.png'

export default function Header() {
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const industries = [
    { name: 'Retail', href: '/industries/retail' },
    { name: 'BFSI', href: '/industries/bfsi' },
    { name: 'Logistics', href: '/industries/logistics' },
    { name: 'Security', href: '/industries/security' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Hospitality', href: '/industries/hospitality' },
    { name: 'Agriculture', href: '/industries/agriculture' },
    { name: 'Manufacturing', href: '/industries/manufacturing' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIndustriesOpen(false);
      }
    }

    if (industriesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [industriesOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-6 w-full">
      <div 
        ref={dropdownRef}
        className="max-w-7xl mx-auto border border-gray-400/30 backdrop-blur-sm rounded-xl overflow-hidden transition-all duration-300"
        style={{ height: industriesOpen ? 'auto' : '60px' }}
      >
        {/* Top Navigation Bar */}
        <div className="flex h-15 items-center justify-between px-8">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-1">
              <Image src={brainlogo} alt="Logo" className='h-7 w-full opacity-80'/>
              <span className="text-2xl font-normal tracking-tight" style={{ fontFamily: 'Boska, serif' }}>
                Mialo.ai
              </span>
            </Link>
          </div>
          
          <nav className="flex items-center gap-10">
            {/* Platform with active indicator */}
            <Link 
              href="/platform" 
              className={`text-sm tracking-wide transition-colors hover:text-primary/70 text-primary/90 flex items-center gap-1 pb-1 ${
                pathname === '/platform' ? 'border-b-2 border-blue-400' : ''
              }`}
            >
              Platform
            </Link>
            
            <Link 
              href="/intelligence-domain" 
              className={`text-sm tracking-wide transition-colors hover:text-primary/70 text-primary/90 flex items-center gap-1 pb-1 ${
                pathname === '/intelligence-domain' ? 'border-b-2 border-blue-400' : ''
              }`}
            >
              Intelligence Domain
            </Link>

            <button
              onMouseEnter={() => setIndustriesOpen(true)}
              className="text-sm tracking-wide transition-colors hover:text-primary/70 text-primary/90 flex items-center gap-1"
            >
              Industries
            </button>

            {/* Solutions with active indicator */}
            <Link 
              href="/solutions" 
              className={`text-sm tracking-wide transition-colors hover:text-primary/70 text-primary/90 flex items-center gap-1 pb-1 ${
                pathname === '/solutions' ? 'border-b-2 border-blue-400' : ''
              }`}
            >
              Solutions
            </Link>

            {/* Company with active indicator */}
            <Link 
              href="/company" 
              className={`text-sm tracking-wide transition-colors hover:text-primary/70 text-primary/90 pb-1 ${
                pathname === '/company' ? 'border-b-2 border-blue-400' : ''
              }`}
            >
              Company
            </Link>
          </nav>

          <div>
            <Link 
              href="/demo"
              className="px-6 py-2.5 bg-primary/80 text-black text-sm font-medium rounded-xl hover:bg-primary/90 transition-colors"
            >
              Request a demo
            </Link>
          </div>
        </div>

        {/* Expanded Dropdown Content */}
        {/* {industriesOpen && (
          <div className="border-t border-white/10">
            <div className="grid grid-cols-4 gap-2 px-8 py-6">
              {industries.map((industry) => (
                <button
                  key={industry.name}
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(`Clicked: ${industry.name}`);
                  }}
                  className="text-left px-4 py-3 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors rounded-lg"
                >
                  {industry.name}
                </button>
              ))}
            </div>
          </div>
        )} */}
      </div>
    </header>
  );
}
