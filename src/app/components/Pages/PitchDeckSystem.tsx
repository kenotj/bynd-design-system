import React from "react";
import { FadeIn } from "../FadeIn";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ByndLogo, ByndBrandmark } from "../Logo";

export function PitchDeckSystem() {
  return (
    <div className="flex flex-col justify-center min-h-screen px-12 py-32 max-w-5xl mx-auto">
      <FadeIn className="mb-24">
        <div className="inline-block px-4 py-1 rounded-full border border-[#6F7B5E] text-[#6F7B5E] text-[11px] font-medium tracking-widest uppercase mb-6">
          Application 02
        </div>
        <h2 className="font-serif text-5xl md:text-6xl text-[#1f1d1a] mb-8 leading-[1.1] max-w-4xl tracking-tight">
          Pitch Deck System
        </h2>
        <p className="font-sans text-[20px] leading-relaxed text-[#8b8478] font-light max-w-3xl">
          Client presentations should feel like editorial
          magazines. Wide margins, strictly structured grids,
          and a deliberate rhythm between text-heavy slides and
          expansive visual breaks.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
        {/* Cover Slide */}
        <FadeIn delay={0.2} className="flex flex-col gap-4">
          <h3 className="font-sans text-[11px] tracking-widest uppercase text-[#8b8478]">
            01. Cover Slide
          </h3>
          <div className="aspect-[16/9] bg-[#F5F1E8] border border-[#D9D1C5] p-8 flex flex-col justify-between relative shadow-sm">
            <div className="flex justify-between items-start">
              <div className="w-8">
                <ByndLogo fill="#1F1D1A" />
              </div>
              <span className="font-sans text-[10px] uppercase tracking-widest text-[#8b8478]">
                Q4 Strategy Proposal
              </span>
            </div>
            <div>
              <h4 className="font-serif text-[#1F1D1A] max-w-[80%] leading-[1.1] mb-4 text-[32px]">
                Social Architecture for the Modern Luxury Brand
              </h4>
              <p className="font-sans text-[12px] text-[#8b8478] max-w-[60%]">
                Prepared for Aura Botanicals. Oct 2026.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Divider Slide */}
        <FadeIn delay={0.3} className="flex flex-col gap-4">
          <h3 className="font-sans text-[11px] tracking-widest uppercase text-[#8b8478]">
            02. Section Divider
          </h3>
          <div className="relative w-full aspect-[16/9]">
            <div className="absolute inset-0 bg-[#F5F1E8] border border-[#D9D1C5] p-8 flex flex-col justify-between shadow-sm overflow-hidden">
              <div className="flex justify-between items-start pb-2">
                <div className="w-8">
                  <ByndLogo fill="#1F1D1A" />
                </div>
                <span className="font-sans text-[10px] uppercase tracking-widest text-[#8b8478]">
                  Section 02
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-[24px] text-[#8b8478] font-light mb-4 leading-none">
                  02
                </span>
                <div className="w-full h-px bg-[#D9D1C5] mb-4" />
                <h4 className="font-serif text-5xl text-[#1F1D1A] leading-[1.1]">
                  Creative
                  <br />
                  Direction
                </h4>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 9:16 Showcase Slide */}
        <FadeIn delay={0.4} className="flex flex-col gap-4">
          <h3 className="font-sans text-[11px] tracking-widest uppercase text-[#8b8478]">
            03. Showcase Slide
          </h3>
          <div className="relative w-full aspect-[16/9]">
            <div className="absolute inset-0 bg-[#FBF9F4] border border-[#D9D1C5] flex overflow-hidden">
              <div className="flex-1 flex flex-col justify-between p-8 min-w-0 border-r border-[#D9D1C5]">
                <div className="pt-4">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-[#8b8478] mb-4 block">
                    Concept 01
                  </span>
                  <div className="w-8 h-px bg-[#D9D1C5] mb-6" />
                  <h4 className="font-serif text-[#1F1D1A] mb-4 leading-[1.1] tracking-tight text-[24px]">
                    The Morning Ritual
                  </h4>
                  <p className="font-sans text-[#8b8478] leading-relaxed max-w-[90%] text-[8px]">
                    A slow-paced, atmospheric reel focusing on
                    texture, natural light, and ambient sound
                    design. No voiceover, just the authentic
                    audio of the environment.
                  </p>
                </div>
              </div>
              <div className="h-full aspect-[9/16] bg-[#F5F1E8] relative flex-shrink-0">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1717518213374-2b26b816e005?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJtJTIwbmV1dHJhbCUyMHRvbmVzfGVufDF8fHx8MTc3MzI1MTUyM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Video Concept"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Metrics Slide */}
        <FadeIn delay={0.5} className="flex flex-col gap-4">
          <h3 className="font-sans text-[11px] tracking-widest uppercase text-[#8b8478]">
            04. Metrics & Data
          </h3>
          <div className="relative w-full aspect-[16/9]">
            <div className="absolute inset-0 bg-[#FBF9F4] border border-[#D9D1C5] p-5 lg:p-6 flex flex-col justify-between shadow-sm overflow-hidden">
              <h4 className="font-serif text-lg lg:text-xl text-[#1F1D1A]">
                Campaign Performance
              </h4>

              <div className="grid grid-cols-3 gap-3 lg:gap-6 mt-2 lg:mt-4">
                <div className="border-t border-[#D9D1C5] pt-2 lg:pt-4">
                  <span className="font-serif text-xl lg:text-3xl text-[#1F1D1A]">
                    2.4M
                  </span>
                  <p className="font-sans text-[8px] lg:text-[10px] uppercase tracking-widest text-[#8b8478] mt-1 lg:mt-2">
                    Total Reach
                  </p>
                </div>
                <div className="border-t border-[#D9D1C5] pt-2 lg:pt-4">
                  <span className="font-serif text-xl lg:text-3xl text-[#1F1D1A]">
                    +45%
                  </span>
                  <p className="font-sans text-[8px] lg:text-[10px] uppercase tracking-widest text-[#8b8478] mt-1 lg:mt-2 line-clamp-1">
                    Engagement Rate
                  </p>
                </div>
                <div className="border-t border-[#D9D1C5] pt-2 lg:pt-4">
                  <span className="font-serif text-xl lg:text-3xl text-[#1F1D1A]">
                    142K
                  </span>
                  <p className="font-sans text-[8px] lg:text-[10px] uppercase tracking-widest text-[#8b8478] mt-1 lg:mt-2">
                    Link Clicks
                  </p>
                </div>
              </div>

              <div className="flex-1 w-full mt-4 lg:mt-6 relative min-h-0"></div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}