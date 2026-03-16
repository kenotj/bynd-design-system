import React from 'react';
import { FadeIn } from '../FadeIn';
import { CheckCircle2, XCircle } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function GlassmorphismRules() {
  return (
    <div className="flex flex-col justify-center min-h-screen px-12 py-32 max-w-5xl mx-auto">
      <FadeIn className="mb-24">
        <h2 className="font-serif text-5xl md:text-6xl text-[#1f1d1a] mb-8 leading-[1.1] max-w-4xl tracking-tight">
          Glassmorphism Rules
        </h2>
        <p className="font-sans text-[20px] leading-relaxed text-[#8b8478] font-light max-w-3xl">
          We use glassmorphism sparingly to create delicate digital overlays. It is never decorative—it exists to ensure legibility while maintaining context of the content beneath. Our execution is strictly controlled.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
        {/* The Rule */}
        <FadeIn delay={0.2} className="flex flex-col gap-6">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden relative group flex items-center justify-center p-8">
            <ImageWithFallback src="https://images.unsplash.com/photo-1550505193-8646b96b3490?q=80&w=2940&auto=format&fit=crop" alt="Abstract gradient background" className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 mix-blend-multiply transition-transform duration-700 group-hover:scale-105" />
            
            {/* The Overlay */}
            <div className="relative z-10 w-80 h-[180px] p-6 rounded-2xl border border-[#D9D1C5]/30 bg-white/40 backdrop-blur-[12px] shadow-[0_8px_32px_rgba(0,0,0,0.05)] flex flex-col justify-between">
              <span className="font-sans text-[10px] uppercase tracking-widest text-[#8B8478] mb-4 block">System Overlay</span>
              <div>
                <h3 className="font-serif text-xl md:text-2xl text-[#1F1D1A] mb-2 leading-tight">Delicate Blur & Opacity</h3>
                <p className="font-sans text-[13px] md:text-[14px] text-[#8B8478] leading-relaxed max-w-sm">
                  The ideal setting is a 12px blur with 10% to 15% opacity, paired with a delicate 1px border.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-[#1f1d1a] mb-2">The Golden Ratio</h3>
            <p className="font-sans text-[15px] text-[#8b8478] leading-relaxed">
              Never exceed a 12px blur radius or 15% opacity for light backgrounds. The goal is a frosted, subtle separation—never a heavy, opaque block.
            </p>
          </div>
        </FadeIn>

        {/* The Application */}
        <FadeIn delay={0.4} className="flex flex-col gap-6">
          <div className="aspect-[4/3] bg-[#F5F1E8] rounded-3xl border border-[#D9D1C5] border-opacity-50 p-8 flex items-center justify-center relative overflow-hidden">
            {/* Mock UI Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#A57A4C] opacity-20 rounded-full blur-2xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#6F7B5E] opacity-20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10 w-80 h-[180px] p-6 bg-white/40 backdrop-blur-md border border-[#D9D1C5]/30 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.05)] flex flex-col justify-between">
              <div className="w-10 h-10 rounded-full bg-[#6F7B5E]/30 mb-6 border border-[#6F7B5E]/10"></div>
              <div className="w-3/4 h-2 bg-[#1F1D1A]/10 rounded-full mb-3"></div>
              <div className="w-1/2 h-2 bg-[#1F1D1A]/5 rounded-full"></div>
            </div>
          </div>
          <div>
            <h3 className="font-serif text-2xl text-[#1f1d1a] mb-2">Contextual Application</h3>
            <p className="font-sans text-[15px] text-[#8b8478] leading-relaxed">
              Use on floating navigation bars, modal overlays, or image captions. It should always sit over complex or colorful backgrounds to activate the effect.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Do's and Don'ts */}
      <FadeIn delay={0.6}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 md:p-12 bg-white border border-[#D9D1C5] rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle2 className="text-[#6F7B5E]" size={24} />
              <h3 className="font-serif text-2xl text-[#1f1d1a]">Do</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[#8b8478] font-sans text-[15px] leading-relaxed">
                <span className="text-[#6F7B5E] mt-1">•</span> Keep opacity between 10-15%.
              </li>
              <li className="flex items-start gap-3 text-[#8b8478] font-sans text-[15px] leading-relaxed">
                <span className="text-[#6F7B5E] mt-1">•</span> Use a delicate 1px semi-transparent border to define the edge.
              </li>
              <li className="flex items-start gap-3 text-[#8b8478] font-sans text-[15px] leading-relaxed">
                <span className="text-[#6F7B5E] mt-1">•</span> Apply over photography or complex patterns.
              </li>
              <li className="flex items-start gap-3 text-[#8b8478] font-sans text-[15px] leading-relaxed">
                <span className="text-[#6F7B5E] mt-1">•</span> Ensure text contrast is accessible (WCAG AAA).
              </li>
            </ul>
          </div>
          
          <div className="p-8 md:p-12 bg-[#F5F1E8] border border-[#D9D1C5] rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <XCircle className="text-[#A57A4C]" size={24} />
              <h3 className="font-serif text-2xl text-[#1f1d1a]">Don't</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[#8b8478] font-sans text-[15px] leading-relaxed">
                <span className="text-[#A57A4C] mt-1">•</span> Exceed 12px blur radius. It looks muddy.
              </li>
              <li className="flex items-start gap-3 text-[#8b8478] font-sans text-[15px] leading-relaxed">
                <span className="text-[#A57A4C] mt-1">•</span> Stack multiple glassmorphism layers.
              </li>
              <li className="flex items-start gap-3 text-[#8b8478] font-sans text-[15px] leading-relaxed">
                <span className="text-[#A57A4C] mt-1">•</span> Apply over solid flat colors—it loses its optical effect.
              </li>
              <li className="flex items-start gap-3 text-[#8b8478] font-sans text-[15px] leading-relaxed">
                <span className="text-[#A57A4C] mt-1">•</span> Use thick, solid borders on glass panels.
              </li>
            </ul>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
