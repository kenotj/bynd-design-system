import React from "react";
import {
  imgCinematicPortrait,
  imgCalmWorkspace,
} from "../assets";
import { FadeIn } from "../FadeIn";

const DESCRIPTORS = [
  "Warm",
  "Friendly",
  "Intelligent",
  "Trustworthy",
  "Minimal",
  "Premium",
  "Visual-first",
];

const DOS = [
  "Warm neutral backgrounds generously",
  "Tonal contrast over bright contrast",
  "Generous whitespace and simple grids",
  "Cinematic, thoughtful imagery",
  "Understated, premium UI elements",
];

const DONTS = [
  "Cold blues or harsh blacks",
  "Loud gradients or heavy shadows",
  "Geometric, futuristic, or corporate fonts",
  "Dense layouts or cluttered sections",
  "Over-designed interfaces",
];

export function BrandOverview() {
  return (
    <div className="flex flex-col justify-center min-h-screen px-12 py-32 max-w-5xl mx-auto">
      <FadeIn className="mb-24">
        <h2 className="font-serif text-5xl md:text-6xl text-[#1f1d1a] mb-10 leading-[1.1] max-w-4xl tracking-tight">
          A creative content agency. We are a calm, refined, and
          human creative partner. Approachable, sophisticated,
          and quietly confident.
        </h2>
        <div className="flex flex-wrap gap-3">
          {DESCRIPTORS.map((desc) => (
            <div
              key={desc}
              className="px-5 py-2 rounded-full border border-[#D9D1C5] font-sans text-[13px] tracking-wide text-[#8b8478] bg-transparent"
            >
              {desc}
            </div>
          ))}
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mx-[0px] mt-[0px] mb-[96px]">
        <FadeIn
          delay={0.2}
          className="aspect-[4/3] rounded-3xl overflow-hidden bg-[#F5F1E8]"
        >
          <img
            src={imgCinematicPortrait}
            alt="Cinematic Portrait"
            className="w-full h-full object-cover"
          />
        </FadeIn>
        <FadeIn
          delay={0.4}
          className="aspect-[4/3] rounded-3xl overflow-hidden bg-[#F5F1E8]"
        >
          <img
            src={imgCalmWorkspace}
            alt="Calm Workspace"
            className="w-full h-full object-cover"
          />
        </FadeIn>
      </div>

      <FadeIn
        delay={0.2}
        className="grid grid-cols-1 md:grid-cols-2 gap-16 bg-[#F5F1E8] p-12 md:p-16 rounded-3xl border border-[#D9D1C5] border-opacity-50"
      >
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-8 rounded-full bg-[#6F7B5E] text-[#FBF9F4] flex items-center justify-center text-sm font-medium">
              ✓
            </div>
            <h3 className="font-serif text-3xl text-[#1f1d1a]">
              Do
            </h3>
          </div>
          <ul className="space-y-4">
            {DOS.map((item) => (
              <li
                key={item}
                className="font-sans text-[#8b8478] text-[15px] flex items-start gap-4"
              >
                <span className="text-[#6F7B5E] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-8 rounded-full bg-[#1F1D1A] text-[#FBF9F4] flex items-center justify-center text-sm font-medium">
              ✕
            </div>
            <h3 className="font-serif text-3xl text-[#1f1d1a]">
              Don't
            </h3>
          </div>
          <ul className="space-y-4">
            {DONTS.map((item) => (
              <li
                key={item}
                className="font-sans text-[#8b8478] text-[15px] flex items-start gap-4"
              >
                <span className="text-[#1F1D1A] mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </div>
  );
}