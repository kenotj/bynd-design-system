import React from 'react';
import { FadeIn } from '../FadeIn';

const COLORS = [
  { name: 'Paper White', hex: '#FBF9F4', usage: 'Background' },
  { name: 'Paper', hex: '#F5F1E8', usage: 'Alt Background' },
  { name: 'Ink', hex: '#1F1D1A', usage: 'Primary Text', lightText: true },
  { name: 'Taupe Grey', hex: '#8B8478', usage: 'Muted Text', lightText: true },
  { name: 'Stone', hex: '#D9D1C5', usage: 'Borders' },
  { name: 'Olive Sage', hex: '#6F7B5E', usage: 'Primary Accent', lightText: true },
  { name: 'Warm Bronze', hex: '#A57A4C', usage: 'Optional Accent', lightText: true },
];

export function ColorSystem() {
  return (
    <div className="flex flex-col justify-center min-h-screen px-6 md:px-12 py-20 md:py-32 max-w-5xl mx-auto">
      <FadeIn className="mb-12 md:mb-20 max-w-2xl">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1f1d1a] mb-6 tracking-tight">Color Palette</h2>
        <p className="font-sans text-xl text-[#8b8478] leading-relaxed font-light">
          Warm neutral backgrounds generously. Keep accent usage minimal and intentional. Prefer tonal contrast over bright contrast.
        </p>
      </FadeIn>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 md:gap-6">
        {COLORS.map((color, idx) => (
          <FadeIn key={color.name} delay={idx * 0.1} className="flex flex-col group cursor-default">
            <div 
              className="aspect-square rounded-2xl mb-6 border border-[#D9D1C5]/40 shadow-[0px_4px_24px_rgba(0,0,0,0.02)] transition-transform duration-500 ease-out group-hover:-translate-y-2 relative overflow-hidden"
              style={{ backgroundColor: color.hex }}
            >
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <h3 className="font-sans text-[15px] font-medium text-[#1f1d1a] mb-1">{color.name}</h3>
            <p className="font-sans text-[13px] text-[#8b8478] mb-1 tracking-wide">{color.hex}</p>
            <p className="font-sans text-[12px] text-[#8b8478] uppercase tracking-wider">{color.usage}</p>
          </FadeIn>
        ))}
      </div>

      <div className="mt-20 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <FadeIn delay={0.2} className="bg-[#F5F1E8] p-8 md:p-16 rounded-3xl flex flex-col justify-center items-start border border-[#D9D1C5]/50 hover:bg-[#FBF9F4] transition-colors duration-500">
          <p className="font-sans text-xs uppercase tracking-[2px] text-[#8b8478] mb-6 md:mb-8 font-semibold">Primary Usage</p>
          <h3 className="font-serif text-3xl md:text-4xl text-[#1f1d1a] mb-4 md:mb-6 leading-tight">Paper & Ink</h3>
          <p className="font-sans text-[#8b8478] leading-relaxed text-[15px]">
            The foundation of our brand. Generous use of Paper White and Paper provides breathing room, while Ink delivers crisp, legible typography.
          </p>
        </FadeIn>
        
        <FadeIn delay={0.4} className="bg-[#6F7B5E] p-8 md:p-16 rounded-3xl flex flex-col justify-center items-start text-[#FBF9F4] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FBF9F4] opacity-5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
          <p className="font-sans text-xs uppercase tracking-[2px] text-[#D9D1C5] mb-6 md:mb-8 font-semibold relative z-10">Accent Usage</p>
          <h3 className="font-serif text-3xl md:text-4xl mb-4 md:mb-6 leading-tight relative z-10">Olive Sage</h3>
          <p className="font-sans text-[#F5F1E8] opacity-90 leading-relaxed text-[15px] relative z-10">
            Used sparingly to draw attention or indicate interactive elements. It evokes nature, calm, and approachability.
          </p>
        </FadeIn>
      </div>
    </div>
  );
}