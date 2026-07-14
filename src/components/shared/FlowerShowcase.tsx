import React from 'react';
import { motion } from 'framer-motion';
import f1 from '../../images/sample_flowers/1.png';
import f2 from '../../images/sample_flowers/2.png';
import f3 from '../../images/sample_flowers/3.png';
import f4 from '../../images/sample_flowers/4.png';
import f5 from '../../images/sample_flowers/5.png';
import f6 from '../../images/sample_flowers/6.png';
import f7 from '../../images/sample_flowers/7.png';
import f8 from '../../images/sample_flowers/8.png';

type Flower = {
  src: string;
  name: string;
  tag: string;
  description: string;
};

const flowers: Flower[] = [
  {
    src: f1,
    name: 'peony bloom',
    tag: 'signature',
    description:
      'Layered petals coiled by hand. A quiet centerpiece that keeps its shape season after season, never dropping a leaf.',
  },
  {
    src: f2,
    name: 'twist rose',
    tag: 'romantic',
    description:
      'Fuzzy wire wound tight into a classic rose silhouette. Anchors a bouquet the way a well-set stanza anchors a poem.',
  },
  {
    src: f3,
    name: 'dahlia coil',
    tag: 'sculptural',
    description:
      'Concentric rings that fan outward like a paper lantern. The one guests reach for and never quite put back.',
  },
  {
    src: f4,
    name: 'wild daisy',
    tag: 'everyday',
    description:
      'The friendly one. Small enough to sit on a desk, sturdy enough to survive being loved a little too hard.',
  },
  {
    src: f5,
    name: 'tulip stem',
    tag: 'minimal',
    description:
      'A single closed bud on a long slender wire. Buy one, buy three &mdash; either way it earns its vase.',
  },
  {
    src: f6,
    name: 'chrysanthemum',
    tag: 'statement',
    description:
      'Every petal individually spun. The bloom you build a whole arrangement around and then step back to admire.',
  },
  {
    src: f7,
    name: 'sunbud',
    tag: 'warm',
    description:
      'A cheerful little face with a deep golden core. Reads across a room without ever raising its voice.',
  },
  {
    src: f8,
    name: 'lily calla',
    tag: 'elegant',
    description:
      'Long, poised, and confident. The one you put in the front window when guests are on their way.',
  },
];

const [featured, ...rest] = flowers;

const FlowerShowcase: React.FC = () => {
  return (
    <section id="gallery" className="bg-white py-20 sm:py-24 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-end justify-between gap-6 border-b border-[color:var(--gray-200)] pb-8 mb-14 sm:mb-20">
          <div>
            <div className="micro-label mb-3">04 &mdash; the gallery</div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-ink leading-[1.05] max-w-xl">
              every stem, up close.
            </h2>
          </div>
          <div className="micro-label hidden sm:block text-right">
            {String(flowers.length).padStart(2, '0')} pieces<br />
            <span className="text-ink/50">shown at scale</span>
          </div>
        </div>

        {/* Featured — huge image + editorial meta */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-24"
        >
          <div className="lg:col-span-8 relative h-[440px] sm:h-[560px] lg:h-[680px] bg-[color:var(--gray-50)] rounded-2xl border border-[color:var(--gray-200)] overflow-hidden group">
            <div className="pointer-events-none absolute inset-0 halftone opacity-30" />
            <img
              src={featured.src}
              alt={featured.name}
              className="relative w-full h-full object-contain p-8 sm:p-12 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute top-5 left-5 chip chip-inverted">
              featured
            </div>
            <div className="absolute bottom-5 right-5 micro-label !text-ink/60">
              01 / {String(flowers.length).padStart(2, '0')}
            </div>
          </div>

          <aside className="lg:col-span-4 flex flex-col justify-end lg:pb-6">
            <div className="micro-label mb-3">{featured.tag}</div>
            <h3 className="font-pixel text-4xl sm:text-5xl text-ink leading-[0.95] mb-6">
              {featured.name}
            </h3>
            <div className="rule w-12 mb-6" />
            <p className="font-serif-longform text-[17px] leading-[1.75] text-ink/70">
              {featured.description}
            </p>
            <button className="btn-secondary mt-8 self-start inline-flex items-center gap-2">
              enquire &rarr;
            </button>
          </aside>
        </motion.article>

        {/* Alternating full-height rows */}
        <div>
          {rest.map((f, i) => {
            const reversed = i % 2 === 1;
            return (
              <motion.article
                key={f.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 border-t border-[color:var(--gray-200)] py-14 sm:py-20 ${
                  reversed ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Big image */}
                <div className="lg:col-span-7 relative h-[420px] sm:h-[540px] lg:h-[620px] bg-[color:var(--gray-50)] rounded-2xl border border-[color:var(--gray-200)] overflow-hidden group">
                  <div
                    className={`pointer-events-none absolute inset-0 ${
                      reversed ? 'halftone-corner' : 'halftone'
                    } opacity-25`}
                  />
                  <img
                    src={f.src}
                    alt={f.name}
                    className="relative w-full h-full object-contain p-6 sm:p-10 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute bottom-5 left-5 micro-label !text-ink/60">
                    {String(i + 2).padStart(2, '0')} / {String(flowers.length).padStart(2, '0')}
                  </div>
                </div>

                {/* Meta */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <div className="micro-label mb-3">{f.tag}</div>
                  <h3 className="font-pixel text-3xl sm:text-4xl md:text-5xl text-ink leading-[0.95] mb-5">
                    {f.name}
                  </h3>
                  <div className="rule w-12 mb-5" />
                  <p
                    className="font-serif-longform text-[17px] leading-[1.75] text-ink/70"
                    dangerouslySetInnerHTML={{ __html: f.description }}
                  />
                  <div className="mt-6 flex items-center gap-4">
                    <span className="chip">handmade to order</span>
                    <a
                      href="#how-to-order"
                      className="micro-label hover:text-ink transition-colors"
                    >
                      enquire &nearr;
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Footer strip */}
        <div className="mt-16 pt-6 border-t border-[color:var(--gray-200)] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="micro-label">
            every piece &mdash; hand-coiled, one at a time
          </p>
          <a
            href="#product-showcase"
            className="micro-label hover:text-ink transition-colors"
          >
            browse the full catalogue &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default FlowerShowcase;
