import React from 'react';
import { MessageCircle, Instagram, Mail } from 'lucide-react';

function HowToOrder() {
  const steps = [
    {
      number: '01',
      title: 'browse our collection',
      description: 'Explore our fuzzy wire flowers and find the perfect pieces for your space.',
    },
    {
      number: '02',
      title: 'contact us',
      description: 'Reach out via Facebook Messenger, Instagram DM, or email to place your order.',
    },
    {
      number: '03',
      title: 'customize & confirm',
      description: 'Discuss your preferences, get a quote, and confirm your order details with us.',
    },
    {
      number: '04',
      title: 'enjoy your flowers',
      description: 'Receive your handcrafted fuzzy wire flowers and enjoy their lasting beauty.',
    },
  ];

  const contactMethods = [
    {
      platform: 'facebook messenger',
      icon: <MessageCircle className="w-4 h-4" />,
      link: 'https://facebook.com/agaykaga',
      handle: 'facebook.com/agaykaga',
    },
    {
      platform: 'instagram dm',
      icon: <Instagram className="w-4 h-4" />,
      link: 'https://instagram.com/agaykaga',
      handle: 'instagram.com/agaykaga',
    },
    {
      platform: 'email',
      icon: <Mail className="w-4 h-4" />,
      link: 'mailto:ichacasabar@gmail.com',
      handle: 'ichacasabar@gmail.com',
    },
  ];

  return (
    <section id="how-to-order" className="py-20 sm:py-24 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="micro-label mb-3">06 &mdash; how to order</div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl text-ink mb-4 leading-tight">
            getting your flowers is simple.
          </h2>
          <p className="font-serif-longform text-[17px] leading-[1.75] text-ink/70 max-w-xl mx-auto">
            Four steps between you and a bouquet that never fades.
          </p>
        </div>

        {/* Steps — hairline-divided grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[color:var(--gray-200)] mb-16">
          {steps.map((step) => (
            <div
              key={step.number}
              className="border-r border-b border-[color:var(--gray-200)] p-6"
            >
              <div className="micro-label mb-4">{step.number}</div>
              <h3 className="text-base text-ink mb-2 font-medium">
                {step.title}
              </h3>
              <p className="text-sm text-ink/60 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Contact block */}
        <div className="card-bryl p-6 sm:p-8">
          <div className="text-center mb-8">
            <div className="micro-label mb-3">ready to order</div>
            <h3 className="text-xl sm:text-2xl text-ink mb-2">
              pick a channel &mdash; we&apos;ll take it from there.
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-l border-[color:var(--gray-200)]">
            {contactMethods.map((m) => (
              <a
                key={m.platform}
                href={m.link}
                target={m.platform === 'email' ? '_self' : '_blank'}
                rel={m.platform === 'email' ? '' : 'noopener noreferrer'}
                className="group flex flex-col gap-2 p-5 border-r border-b border-[color:var(--gray-200)] hover:bg-[color:var(--gray-50)] transition-colors"
              >
                <div className="flex items-center gap-2 text-ink">
                  {m.icon}
                  <span className="micro-label !text-ink">{m.platform}</span>
                </div>
                <span className="font-mono-ui text-xs text-ink/60 group-hover:text-ink transition-colors truncate">
                  {m.handle} &nearr;
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-[color:var(--gray-200)] text-center">
            <p className="micro-label mb-1">response time &mdash; 2 to 4 hours</p>
            <p className="micro-label">custom orders &mdash; welcome</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToOrder;
