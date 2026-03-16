import React from 'react';
import { FadeIn } from '../FadeIn';

export function LayoutSpacing() {
  return (
    <div className="flex flex-col justify-center min-h-screen px-12 py-32 max-w-5xl mx-auto">
      <FadeIn className="mb-24">
        <h2 className="font-serif text-5xl md:text-6xl text-[#1f1d1a] mb-8 leading-[1.1] max-w-4xl tracking-tight">
          Layout & Spacing
        </h2>
        <p className="font-sans text-[20px] leading-relaxed text-[#8b8478] font-light max-w-3xl">
          Our layout approach relies on spacious margins, modular grids, and visual-first hierarchy. We use negative space deliberately to let our content breathe and maintain a refined, editorial presence.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <FadeIn delay={0.2} className="flex flex-col gap-6">
          <div className="aspect-[4/3] bg-[#F5F1E8] rounded-3xl border border-[#D9D1C5] border-opacity-50 flex items-center justify-center p-8 relative overflow-hidden">
            {/* Grid visualization */}
            <div className="absolute inset-0 grid grid-cols-4 gap-4 p-8 opacity-20">
              <div className="bg-[#D9D1C5] rounded-lg"></div>
              <div className="bg-[#D9D1C5] rounded-lg"></div>
              <div className="bg-[#D9D1C5] rounded-lg"></div>
              <div className="bg-[#D9D1C5] rounded-lg"></div>
            </div>
            
            <div className="relative z-10 w-full h-full bg-[#1F1D1A] rounded-xl flex items-center justify-center">
              <span className="font-sans text-[11px] uppercase tracking-widest text-[#FBF9F4]">Modular Grid</span>
            </div>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-[#1f1d1a] mb-2">Simple Modular Grids</h3>
            <p className="font-sans text-[15px] text-[#8b8478] leading-relaxed">
              We employ a 4-column or 12-column grid system depending on the canvas. This provides underlying structure while allowing for flexible, asymmetrical arrangements.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} className="flex flex-col gap-6">
          <div className="aspect-[4/3] bg-[#F5F1E8] rounded-3xl border border-[#D9D1C5] border-opacity-50 flex items-center justify-center p-12 relative overflow-hidden">
            {/* Margins visualization */}
            <div className="absolute inset-0 border-[24px] border-[#D9D1C5] border-opacity-20 rounded-3xl"></div>
            <div className="w-full h-full border border-dashed border-[#1F1D1A] border-opacity-30 rounded-lg flex items-center justify-center bg-white bg-opacity-50 backdrop-blur-sm relative z-10">
              <span className="font-sans text-[11px] uppercase tracking-widest text-[#1F1D1A]">Spacious Margins</span>
            </div>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-[#1f1d1a] mb-2">Generous Margins</h3>
            <p className="font-sans text-[15px] text-[#8b8478] leading-relaxed">
              Large, protective margins are mandatory. They act as a frame, drawing focus inward and elevating the perceived value of the content inside.
            </p>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={0.6} className="mt-24 bg-[#1F1D1A] rounded-3xl p-12 md:p-16 flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6">
          <h3 className="font-serif text-3xl md:text-4xl text-[#FBF9F4]">Visual-First Hierarchy</h3>
          <p className="font-sans text-[16px] text-[#D9D1C5] leading-relaxed max-w-lg">
            Imagery always leads. Typography supports. We never overcrowd the frame with copy, allowing the visual story to dominate the first impression. Secondary details should recede gracefully.
          </p>
        </div>
        <div className="flex-1 w-full flex justify-end">
          <div className="w-full max-w-sm aspect-[3/4] bg-[#FBF9F4] bg-opacity-5 rounded-2xl border border-[#D9D1C5] border-opacity-20 p-6 flex flex-col">
            <div className="w-full flex-1 bg-[#D9D1C5] bg-opacity-20 rounded-xl mb-6"></div>
            <div className="w-3/4 h-6 bg-[#D9D1C5] bg-opacity-20 rounded mb-3"></div>
            <div className="w-1/2 h-4 bg-[#D9D1C5] bg-opacity-10 rounded"></div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
