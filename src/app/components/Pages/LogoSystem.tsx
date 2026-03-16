import React from 'react';
import { ByndLogo, ByndBrandmark } from '../Logo';
import { FadeIn } from '../FadeIn';

export function LogoSystem() {
  return (
    <div className="flex flex-col justify-center min-h-screen px-12 py-32 max-w-5xl mx-auto">
      <FadeIn className="mb-20 max-w-2xl">
        <h2 className="font-serif text-5xl md:text-6xl text-[#1f1d1a] mb-6 tracking-tight">Logo System</h2>
        <p className="font-sans text-xl text-[#8b8478] leading-relaxed font-light">
          Our primary identifier. Elegant, perfectly proportioned, and designed to breathe. Always maintain clear space to ensure maximum impact.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mb-6">
        <FadeIn delay={0.2} className="lg:col-span-3">
          <div className="h-full bg-[#F5F1E8] rounded-3xl p-16 flex flex-col justify-center items-center border border-[#D9D1C5] border-opacity-50 relative overflow-hidden group min-h-[400px]">
            <div className="absolute inset-x-0 h-px bg-[#D9D1C5]/30 top-1/2 -translate-y-1/2" />
            <div className="absolute inset-y-0 w-px bg-[#D9D1C5]/30 left-1/2 -translate-x-1/2" />
            <p className="font-sans text-[11px] font-semibold uppercase tracking-widest text-[#8b8478] absolute top-8 left-8">Primary Logo</p>
            <div className="w-[300px] relative z-10 transition-transform duration-700 ease-out group-hover:scale-105">
              <ByndLogo fill="#1f1d1a" />
            </div>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.4} className="lg:col-span-2">
          <div className="h-full bg-[#F5F1E8] rounded-3xl p-16 flex flex-col justify-center items-center border border-[#D9D1C5] border-opacity-50 relative group min-h-[400px]">
            <div className="absolute inset-x-0 h-px bg-[#D9D1C5]/30 top-1/2 -translate-y-1/2" />
            <div className="absolute inset-y-0 w-px bg-[#D9D1C5]/30 left-1/2 -translate-x-1/2" />
            <p className="font-sans text-[11px] font-semibold uppercase tracking-widest text-[#8b8478] absolute top-8 left-8">Brandmark</p>
            <div className="w-[80px] relative z-10 transition-transform duration-700 ease-out group-hover:scale-105">
              <ByndBrandmark fill="#1f1d1a" />
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FadeIn delay={0.3}>
          <div className="bg-[#1F1D1A] rounded-3xl p-16 flex flex-col justify-center items-center relative min-h-[300px] h-full">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-widest text-[#8b8478] absolute top-8 left-8">Reversed Logo</p>
            <div className="w-[200px]">
              <ByndLogo fill="#FBF9F4" />
            </div>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.5}>
          <div className="h-full bg-transparent border border-[#D9D1C5] border-dashed rounded-3xl p-12 flex flex-col justify-center items-start relative overflow-hidden">
            <h3 className="font-serif text-3xl text-[#1f1d1a] mb-4">Clear Space</h3>
            <p className="font-sans text-[#8b8478] leading-relaxed mb-8 text-[15px]">
              The clear space around the logo ensures visual integrity across all touchpoints. It is measured by the height of the letter "n" in the wordmark.
            </p>
            
            <div className="w-full flex flex-col gap-4">
              <div className="flex flex-col gap-3 bg-[#F5F1E8] px-6 py-5 rounded-xl border border-[#D9D1C5]/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 bg-white border border-[#D9D1C5] shadow-sm flex items-center justify-center font-serif text-3xl text-[#1f1d1a]">
                    n
                  </div>
                  <span className="font-sans text-[#8b8478] text-sm uppercase tracking-widest font-semibold">= 1 Unit</span>
                </div>
                <p className="font-sans text-[#8b8478] text-sm leading-relaxed">
                  Used for standard applications like letterheads and email signatures.
                </p>
              </div>

              <div className="flex flex-col gap-3 bg-[#F5F1E8] px-6 py-5 rounded-xl border border-[#D9D1C5]/50">
                <div className="flex items-center gap-4">
                  <div className="flex gap-1 shrink-0">
                    <div className="w-12 h-12 bg-white border border-[#D9D1C5] shadow-sm flex items-center justify-center font-serif text-3xl text-[#1f1d1a]">
                      n
                    </div>
                    <div className="w-12 h-12 bg-white border border-[#D9D1C5] shadow-sm flex items-center justify-center font-serif text-3xl text-[#1f1d1a]">
                      n
                    </div>
                  </div>
                  <span className="font-sans text-[#8b8478] text-sm uppercase tracking-widest font-semibold">= 2 Units</span>
                </div>
                <p className="font-sans text-[#8b8478] text-sm leading-relaxed">
                  Used for impactful formats like proposal covers and Instagram posts.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}