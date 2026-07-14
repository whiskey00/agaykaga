import React from 'react';
import { Facebook, Mail, Instagram } from 'lucide-react';

function AboutSection() {
  const links = [
    { label: 'facebook', handle: 'facebook.com/agaykaga', href: 'https://facebook.com/agaykaga', icon: <Facebook className="w-4 h-4" /> },
    { label: 'email',    handle: 'ichacasabar@gmail.com', href: 'mailto:ichacasabar@gmail.com',   icon: <Mail className="w-4 h-4" /> },
    { label: 'instagram',handle: 'instagram.com/agaykaga',href: 'https://instagram.com/agaykaga', icon: <Instagram className="w-4 h-4" /> },
  ];

  return (
    <footer
      id="about"
      className="relative bg-white border-t border-[color:var(--gray-200)] px-6 py-20 sm:py-24"
    >
      {/* Halftone accent */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 halftone-dense opacity-40" />

      <div className="relative max-w-4xl mx-auto">
        <div className="micro-label mb-3">07 &mdash; about</div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-pixel text-4xl sm:text-5xl text-ink mb-4">
              agaykaga
            </h3>
            <p className="font-serif-longform text-[17px] leading-[1.75] text-ink/70 max-w-md">
              Filling your space with something that makes you and your loved ones smile — a sweet reminder to celebrate life&apos;s simple joys.
            </p>
          </div>

          {/* Contact */}
          <div>
            <div className="micro-label mb-4">connect</div>
            <ul className="border-t border-[color:var(--gray-200)]">
              {links.map((l) => (
                <li key={l.label} className="border-b border-[color:var(--gray-200)]">
                  <a
                    href={l.href}
                    target={l.label === 'email' ? '_self' : '_blank'}
                    rel={l.label === 'email' ? '' : 'noopener noreferrer'}
                    className="flex items-center justify-between py-3 group"
                  >
                    <span className="flex items-center gap-3 text-ink">
                      {l.icon}
                      <span className="micro-label !text-ink">{l.label}</span>
                    </span>
                    <span className="font-mono-ui text-xs text-ink/50 group-hover:text-ink transition-colors">
                      {l.handle} &nearr;
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-[color:var(--gray-200)] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="micro-label">&copy; 2025 agaykaga &mdash; handcrafted, lasting.</p>
          <p className="micro-label">made with care in the philippines</p>
        </div>
      </div>
    </footer>
  );
}

export default AboutSection;
