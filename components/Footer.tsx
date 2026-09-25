import Link from "next/link";
import Image from "next/image";
import { Container } from "./ui";

const EXPLORE_LINKS = [
  { label: "Home", href: "/" },
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/solution" },
  { label: "Industries", href: "/industries" },
  // { label: "Intelligence Domain", href: "/intelligence-domain" },
  { label: "Company", href: "/company" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-background">
      {/* CTA Section */}
      

      {/* Footer Content */}
      <div className="border-t border-line relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-75 w-full max-w-190 -translate-x-1/2"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(108,147,255,0.14), transparent 70%)",
          }}
        />
        <Container className="py-16 relative">
          {/* Grid Layout - 3 columns on desktop */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            {/* Column 1: Logo & Message */}
            <div className="lg:col-span-4">
              <Link href="/" className="inline-flex items-center group">
                <div className="flex h-12  items-center justify-center rounded-lg  transition-colors overflow-hidden">
                  <Image 
                    src="/images/mialoLogo.png" 
                    alt="Mialo Logo" 
                    width={100}
                    height={60}
                    className="object-contain"
                  />
                </div>
                {/* <span className="text-xl font-semibold text-primary">Mialo</span> */}
              </Link>
              <p className="mt-4 text-[14px] leading-[1.6] text-muted max-w-[280px]">
                Edge intelligence layer for real world operations
              </p>
            </div>

            {/* Column 2: Explore */}
            <div className="lg:col-span-4">
              <h3 className="mb-4 text-[14px] font-semibold uppercase tracking-wider text-primary">
                Explore
              </h3>
              <ul className="space-y-3">
                {EXPLORE_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-muted transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact */}
            <div className="lg:col-span-4">
              <h3 className="mb-4 text-[14px] font-semibold uppercase tracking-wider text-primary">
                Contact
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:Sales@mialotech.com"
                    className="text-[14px] text-muted transition-colors hover:text-primary"
                  >
                    Sales@mialotech.com
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919731426165"
                    className="text-[14px] text-muted transition-colors hover:text-primary"
                  >
                    +91 9731426165
                  </a>
                </li>
                <li className="text-[14px] leading-[1.6] text-muted">
                  1st Floor, Hustlehub Tech Park
                  <br />
                  208, 27th Main Rd, ITI Layout, Sector 2, HSR Layout
                  <br />
                  Bengaluru, Karnataka 560102
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section: Social Links & Copyright */}
          <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-line pt-8 sm:flex-row">
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-line-2 text-muted transition-all hover:border-line hover:bg-raise hover:text-primary"
                aria-label="LinkedIn"
              >
                <Image 
                  src="/images/icons/linkedin_ic.svg" 
                  alt="LinkedIn" 
                  width={18}
                  height={18}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </a>
              <a
                href="https://wa.me/919731426165"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-line-2 text-muted transition-all hover:border-line hover:bg-raise hover:text-primary"
                aria-label="WhatsApp"
              >
                <Image 
                  src="/images/icons/whatsapp_ic.svg" 
                  alt="WhatsApp" 
                  width={18}
                  height={18}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-line-2 text-muted transition-all hover:border-line hover:bg-raise hover:text-primary"
                aria-label="Facebook"
              >
                <Image 
                  src="/images/icons/facebook_ic.svg" 
                  alt="Facebook" 
                  width={18}
                  height={18}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-line-2 text-muted transition-all hover:border-line hover:bg-raise hover:text-primary"
                aria-label="Instagram"
              >
                <Image 
                  src="/images/icons/insta_ic.svg" 
                  alt="Instagram" 
                  width={18}
                  height={18}
                  className="opacity-70 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-[13px] text-muted">
              © {new Date().getFullYear()} Mialo.ai. All rights reserved.
            </p>
          </div>
          
        </Container>
      </div>
    </footer>
  );
}
