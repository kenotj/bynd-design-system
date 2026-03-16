import React from "react";
import { FadeIn } from "../FadeIn";
import { ByndLogo } from "../Logo";

export function DoDont() {
  return (
    <div className="flex flex-col justify-center min-h-screen px-12 py-32 max-w-5xl mx-auto">
      <FadeIn className="mb-24">
        <div className="inline-block px-4 py-1 rounded-full border border-[#6F7B5E] text-[#6F7B5E] text-[11px] font-medium tracking-widest uppercase mb-6">
          Guidelines
        </div>
        <h2 className="font-serif text-5xl md:text-6xl text-[#1f1d1a] mb-8 leading-[1.1] max-w-4xl tracking-tight">
          Do / Don't
        </h2>
        <p className="font-sans text-[20px] leading-relaxed text-[#8b8478] font-light max-w-3xl">
          Rules for preserving the integrity of the BYND Socials
          brand. The difference between premium and generic
          often comes down to spacing, restraint, and avoiding
          over-design.
        </p>
      </FadeIn>

      <div className="space-y-24">
        {/* Logo Misuse */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F5F1E8] p-12 flex flex-col items-center justify-center border-t-4 border-[#6F7B5E] relative">
              <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-[10px] font-sans font-medium uppercase tracking-widest text-[#6F7B5E]">
                Do
              </div>
              <div className="w-28">
                <ByndLogo fill="#1F1D1A" />
              </div>
              <p className="mt-8 text-center font-sans text-[13px] text-[#8b8478] max-w-[200px]">
                Use the logo in its original proportions with
                ample clear space.
              </p>
            </div>

            <div className="bg-[#F5F1E8] p-12 flex flex-col items-center justify-center border-t-4 border-[#C84B31] relative">
              <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-[10px] font-sans font-medium uppercase tracking-widest text-[#C84B31]">
                Don't
              </div>
              <div className="w-28 scale-y-150">
                <ByndLogo fill="#1F1D1A" />
              </div>
              <p className="mt-8 text-center font-sans text-[13px] text-[#8b8478] max-w-[200px]">
                Never stretch, compress, or alter the tracking
                of the wordmark.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Typography */}
        <FadeIn delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#FBF9F4] p-12 border border-[#D9D1C5] border-t-4 border-t-[#6F7B5E] relative flex flex-col justify-center">
              <div className="absolute top-4 left-4 bg-white border border-[#D9D1C5] px-3 py-1 rounded-full text-[10px] font-sans font-medium uppercase tracking-widest text-[#6F7B5E]">
                Do
              </div>
              <h4 className="font-serif text-3xl text-[#1F1D1A] mb-4 leading-tight">
                Quiet
                <br />
                Confidence.
              </h4>
              <p className="font-sans text-[13px] text-[#8b8478] leading-relaxed">
                Pair large, tight-tracked serif headings with
                small, widely-tracked sans-serif supporting
                text.
              </p>
            </div>

            <div className="bg-[#FBF9F4] p-12 border border-[#D9D1C5] border-t-4 border-t-[#C84B31] relative flex flex-col justify-center">
              <div className="absolute top-4 left-4 bg-white border border-[#D9D1C5] px-3 py-1 rounded-full text-[10px] font-sans font-medium uppercase tracking-widest text-[#C84B31]">
                Don't
              </div>
              <h4 className="font-sans font-bold text-2xl text-[#1F1D1A] mb-4">
                QUIET CONFIDENCE.
              </h4>
              <p className="font-serif text-[18px] text-[#1F1D1A] leading-tight">
                Do not use bold sans-serifs for headings or
                serifs for body copy. Avoid center alignment for
                long paragraphs.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Cluttered Layouts */}
        <FadeIn delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1F1D1A] p-12 border-t-4 border-[#6F7B5E] relative flex items-center justify-center">
              <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-sans font-medium uppercase tracking-widest text-white">
                Do
              </div>
              <div className="w-full max-w-[200px] h-[200px] bg-[#2A2825] border border-white/10 relative p-[0px] mx-[0px] my-[8px]">
                <div className="absolute bottom-4 left-4 w-1/2 h-1 bg-white/20"></div>
              </div>
              <p className="absolute bottom-8 text-center font-sans text-[13px] text-[#D9D1C5]">
                Embrace negative space. Let imagery breathe.
              </p>
            </div>

            <div className="bg-[#1F1D1A] p-12 border-t-4 border-[#C84B31] relative flex items-center justify-center">
              <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-sans font-medium uppercase tracking-widest text-[#ff8a75]">
                Don't
              </div>
              <div className="w-full max-w-[280px] h-[200px] bg-[#2A2825] border border-white/10 p-4 flex flex-wrap gap-2 content-start mx-[0px] my-[16px]">
                <div className="w-16 h-16 bg-white/20"></div>
                <div className="w-24 h-16 bg-white/20"></div>
                <div className="w-full h-8 bg-white/20"></div>
                <div className="w-12 h-12 bg-white/20"></div>
                <div className="w-12 h-12 bg-white/20 rounded-full"></div>
              </div>
              <p className="absolute bottom-8 text-center font-sans text-[13px] text-[#D9D1C5]">
                Overcrowd the canvas or fill every available
                corner.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Excessive Glassmorphism */}
        <FadeIn delay={0.5}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#D9D1C5] p-12 border-t-4 border-[#6F7B5E] relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1602128110234-2d11c0aaadfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MzE0MjM4M3ww&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center mix-blend-multiply"></div>
              <div className="absolute top-4 left-4 bg-white/80 px-3 py-1 rounded-full text-[10px] font-sans font-medium uppercase tracking-widest text-[#6F7B5E] z-10">
                Do
              </div>

              <div className="w-32 h-12 bg-white/30 backdrop-blur-md border border-white/40 rounded-full flex items-center justify-center shadow-sm z-10">
                <span className="text-[#1F1D1A] text-[12px] font-sans tracking-widest uppercase">
                  Subtle UI
                </span>
              </div>
            </div>

            <div className="bg-[#D9D1C5] p-12 border-t-4 border-[#C84B31] relative flex items-center justify-center overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1602128110234-2d11c0aaadfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MzE0MjM4M3ww&ixlib=rb-4.1.0&q=80&w=1080')] bg-cover bg-center mix-blend-multiply"></div>
              <div className="absolute top-4 left-4 bg-white/80 px-3 py-1 rounded-full text-[10px] font-sans font-medium uppercase tracking-widest text-[#C84B31] z-10">
                Don't
              </div>

              <div className="w-48 h-32 bg-white/60 backdrop-blur-xl border-4 border-white/80 rounded-3xl flex flex-col items-center justify-center shadow-2xl z-10 gap-2">
                <div className="w-24 h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-md opacity-80"></div>
                <div className="w-32 h-2 bg-black/20 rounded-full"></div>
                <span className="text-black font-bold">
                  Too Much Glass
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}