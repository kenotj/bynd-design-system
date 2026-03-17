import React from 'react';
import { imgMinimalInterior, imgPremiumWhitespace } from '../assets';
import { FadeIn } from '../FadeIn';

export function BrandPrinciples() {
  return (
    <div className="flex flex-col justify-center min-h-screen px-6 md:px-12 py-20 md:py-32 max-w-5xl mx-auto">
      <FadeIn className="mb-16 md:mb-24">
        <p className="font-sans text-xs font-semibold uppercase tracking-[2px] text-[#8b8478] mb-8">Core Design Principle</p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-[#1f1d1a] leading-[1.05] tracking-tight max-w-4xl">
          The work is the hero. The interface should frame the content, not compete with it.
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-x-16 gap-y-16 md:gap-y-24">
        <div className="flex flex-col">
          <FadeIn delay={0.2}>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden mb-6 md:mb-10 bg-[#F5F1E8]">
              <img src={imgMinimalInterior} alt="Minimal Interior" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-[#1f1d1a] mb-4">Warm Editorial Minimalism</h3>
            <p className="font-sans text-[#8b8478] leading-relaxed text-lg font-light">
              We prioritize clarity, breathing room, and a serene visual hierarchy. The interface elements are understated, relying on gentle typographic contrast and ample whitespace.
            </p>
          </FadeIn>
        </div>
        
        <div className="flex flex-col md:mt-16 lg:mt-24">
          <FadeIn delay={0.4}>
            <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-6 md:mb-10 bg-[#F5F1E8]">
              <img src={imgPremiumWhitespace} alt="Premium Whitespace" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-[#1f1d1a] mb-4">Visual-first Storytelling</h3>
            <p className="font-sans text-[#8b8478] leading-relaxed text-lg font-light">
              Each section communicates one clear idea. We use simple grids, spacious margins, and tonal contrast to let the visual storytelling breathe seamlessly. Imagery always takes precedence.
            </p>
          </FadeIn>
        </div>
      </div>
    </div>
  );
}