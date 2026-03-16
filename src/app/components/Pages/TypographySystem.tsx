import React from 'react';
import { FadeIn } from '../FadeIn';

export function TypographySystem() {
  return (
    <div className="flex flex-col justify-center min-h-screen px-12 py-32 max-w-5xl mx-auto">
      <FadeIn className="mb-24 max-w-2xl">
        <h2 className="font-serif text-5xl md:text-6xl text-[#1f1d1a] mb-6 tracking-tight">Typography Direction</h2>
        <p className="font-sans text-xl text-[#8b8478] leading-relaxed font-light">
          An editorial serif for headlines and a clean modern sans-serif for body text. Headlines feel elegant and intelligent. Body text feels clear, calm, and approachable.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div className="flex flex-col gap-16">
          <FadeIn delay={0.2}>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-widest text-[#8b8478] mb-8">Serif — Cormorant Garamond</p>
            <div className="text-[120px] font-serif text-[#1f1d1a] leading-none mb-8">Aa</div>
            <p className="font-serif text-3xl text-[#1f1d1a] italic leading-snug">Warm editorial minimalism and quiet confidence.</p>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <p className="font-sans text-[11px] font-semibold uppercase tracking-widest text-[#8b8478] mb-8">Sans — DM Sans</p>
            <div className="text-[120px] font-sans text-[#1f1d1a] tracking-tight leading-none mb-8">Aa</div>
            <p className="font-sans text-xl text-[#1f1d1a] font-light leading-relaxed">
              Every section should feel intentional and calm. We use soft warm neutrals, spacious layouts, restrained typography, and subtle premium UI.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.6} className="bg-[#F5F1E8] rounded-3xl p-16 flex flex-col justify-center border border-[#D9D1C5] border-opacity-50 h-full">
          <div className="space-y-16">
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#8b8478]">Display / Cormorant Garamond Medium</p>
                <p className="font-sans text-[10px] font-semibold tracking-widest text-[#C4B9A8]">64px</p>
              </div>
              <h1 className="font-serif text-5xl md:text-[64px] text-[#1f1d1a] leading-[1.05] tracking-tight">The work is the hero.</h1>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#8b8478]">H1 / Cormorant Garamond Medium</p>
                <p className="font-sans text-[10px] font-semibold tracking-widest text-[#C4B9A8]">36px</p>
              </div>
              <h2 className="font-serif text-4xl text-[#1f1d1a] leading-[1.1]">Visual-first storytelling</h2>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#8b8478]">H2 / DM Sans Medium</p>
                <p className="font-sans text-[10px] font-semibold tracking-widest text-[#C4B9A8]">24px</p>
              </div>
              <h3 className="font-sans text-2xl text-[#1f1d1a] font-medium leading-[1.3] tracking-tight">Core Design Principles</h3>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#8b8478]">Body / DM Sans Light</p>
                <p className="font-sans text-[10px] font-semibold tracking-widest text-[#C4B9A8]">18px</p>
              </div>
              <p className="font-sans text-lg text-[#1f1d1a] font-light leading-relaxed">
                A calm, refined, and human creative partner. Approachable, sophisticated, and quietly confident.
              </p>
            </div>
            
            <div className="flex flex-wrap items-end gap-12 pt-4">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#8b8478]">Button / DM Sans Medium</p>
                  <p className="font-sans text-[10px] font-semibold tracking-widest text-[#C4B9A8] ml-4">13px</p>
                </div>
                <button className="inline-flex items-center justify-center px-8 py-3.5 bg-[#1f1d1a] text-[#FBF9F4] rounded-full font-sans text-[13px] font-medium tracking-wide hover:bg-[#8b8478] transition-colors duration-300">
                  Primary Action
                </button>
              </div>
              
              <div>
                <div className="flex items-center justify-between mb-4">
                  <p className="font-sans text-[10px] font-semibold uppercase tracking-widest text-[#8b8478]">Label / DM Sans Semibold</p>
                  <p className="font-sans text-[10px] font-semibold tracking-widest text-[#C4B9A8] ml-4">12px</p>
                </div>
                <p className="font-sans text-xs font-semibold uppercase tracking-[1.5px] text-[#8b8478]">
                  Brand Style Guide
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}