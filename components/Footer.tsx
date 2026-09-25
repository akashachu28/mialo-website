import Link from "next/link";
import { Container } from "./ui";
import {  Phone } from "lucide-react";

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
              <Link href="/" className="inline-flex items-center gap-2 group">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-pista/10 text-pista transition-colors group-hover:bg-pista/20">
                  <span className="text-xl font-bold">✦</span>
                </div>
                <span className="text-xl font-semibold text-primary">Mialo</span>
              </Link>
              <p className="mt-4 text-[14px] leading-[1.6] text-muted max-w-[280px]">
                The intelligence layer for enterprise operations. Turning operational signals into intelligent action.
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
                    href="mailto:info@mialo.ai"
                    className="text-[14px] text-muted transition-colors hover:text-primary"
                  >
                    info@mialo.ai
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+1234567890"
                    className="text-[14px] text-muted transition-colors hover:text-primary"
                  >
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="text-[14px] leading-[1.6] text-muted">
                  123 Business Street
                  <br />
                  San Francisco, CA 94105
                  <br />
                  United States
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
                {/* <Linkedin size={18} /> */}
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-line-2 text-muted transition-all hover:border-line hover:bg-raise hover:text-primary"
                aria-label="WhatsApp"
              >
                <Phone size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-line-2 text-muted transition-all hover:border-line hover:bg-raise hover:text-primary"
                aria-label="Facebook"
              >
                {/* <Facebook size={18} /> */}
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-line-2 text-muted transition-all hover:border-line hover:bg-raise hover:text-primary"
                aria-label="Twitter"
              >
                {/* <Twitter size={18} /> */}
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
