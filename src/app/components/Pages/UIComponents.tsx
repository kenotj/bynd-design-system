import React from "react";
import { FadeIn } from "../FadeIn";
import { ArrowRight, Search, Plus } from "lucide-react";

export function UIComponents() {
  return (
    <div className="flex flex-col justify-center min-h-screen px-6 md:px-12 py-20 md:py-32 max-w-5xl mx-auto">
      <FadeIn className="mb-16 md:mb-24">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1f1d1a] mb-6 md:mb-8 leading-[1.1] max-w-4xl tracking-tight">
          UI Components
        </h2>
        <p className="font-sans text-lg md:text-[20px] leading-relaxed text-[#8b8478] font-light max-w-3xl">
          Our interface is defined by restraint. Pill-shaped
          buttons, delicate 1px Stone borders, and soft
          interactive states create a tactile yet digital
          experience. Functionality should feel effortless, not
          mechanical.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Buttons & Links */}
        <FadeIn delay={0.2} className="space-y-12">
          <div>
            <h3 className="font-serif text-2xl text-[#1f1d1a] mb-6">
              Buttons
            </h3>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-start sm:items-center p-6 md:p-8 bg-white border border-[#D9D1C5] rounded-3xl">
              <button className="px-6 py-3 w-full sm:w-auto bg-[#1F1D1A] text-white rounded-full font-sans text-[13px] hover:bg-[#6F7B5E] transition-colors duration-300 flex items-center justify-center gap-2">
                Primary Button <ArrowRight size={14} />
              </button>

              <button className="px-6 py-3 w-full sm:w-auto bg-transparent border border-[#D9D1C5] text-[#1F1D1A] rounded-full font-sans text-[13px] hover:bg-[#F5F1E8] transition-colors duration-300">
                Secondary Button
              </button>

              <button className="px-6 py-3 bg-transparent text-[#8b8478] rounded-full font-sans text-[13px] hover:text-[#1F1D1A] hover:bg-[#F5F1E8] transition-all duration-300">
                Ghost Button
              </button>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl text-[#1f1d1a] mb-6">
              Text Links
            </h3>
            <div className="flex flex-col gap-6 p-6 md:p-8 bg-white border border-[#D9D1C5] rounded-3xl items-start">
              <a className="font-sans text-[14px] text-[#1F1D1A] border-b border-[#1F1D1A] pb-[2px] hover:text-[#6F7B5E] hover:border-[#6F7B5E] transition-colors duration-300 inline-flex items-center gap-2 cursor-pointer">
                Standard inline link
              </a>
              <a className="font-sans text-[13px] text-[#8b8478] uppercase tracking-widest hover:text-[#1F1D1A] transition-colors duration-300 inline-flex items-center gap-2">
                Navigational link <ArrowRight size={14} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl text-[#1f1d1a] mb-6">
              Tags
            </h3>
            <div className="flex flex-wrap gap-3 p-6 md:p-8 bg-white border border-[#D9D1C5] rounded-3xl">
              <span className="px-4 py-1.5 border border-[#D9D1C5] rounded-full text-[11px] font-sans uppercase tracking-widest text-[#8b8478] bg-[#F5F1E8]">
                Editorial
              </span>
              <span className="px-4 py-1.5 border border-[#D9D1C5] rounded-full text-[11px] font-sans uppercase tracking-widest text-[#8b8478] hover:bg-[#F5F1E8] transition-colors cursor-pointer">
                Campaign
              </span>
              <span className="px-4 py-1.5 border border-[#D9D1C5] rounded-full text-[11px] font-sans uppercase tracking-widest text-[#8b8478] hover:bg-[#F5F1E8] transition-colors cursor-pointer flex items-center gap-1">
                Add Filter <Plus size={12} />
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Inputs & Cards */}
        <FadeIn delay={0.4} className="space-y-12">
          <div>
            <h3 className="font-serif text-2xl text-[#1f1d1a] mb-6">
              Inputs
            </h3>
            <div className="flex flex-col gap-6 p-6 md:p-8 bg-white border border-[#D9D1C5] rounded-3xl">
              <div className="flex flex-col gap-2 w-full">
                <label className="font-sans text-[12px] uppercase tracking-widest text-[#8b8478] ml-4">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="hello@byndsocials.com"
                  className="w-full px-6 py-4 bg-transparent border border-[#D9D1C5] rounded-full font-sans text-[14px] text-[#1F1D1A] focus:outline-none focus:border-[#1F1D1A] transition-colors placeholder:text-[#D9D1C5]"
                />
              </div>

              <div className="relative w-full mt-2">
                <Search
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-[#8b8478]"
                  size={16}
                />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-14 pr-6 py-4 bg-[#F5F1E8] border border-transparent rounded-full font-sans text-[14px] text-[#1F1D1A] focus:outline-none focus:border-[#D9D1C5] focus:bg-white transition-all placeholder:text-[#8b8478]"
                />
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-2xl text-[#1f1d1a] mb-6">
              Floating Cards
            </h3>
            <div className="p-6 md:p-8 bg-[#F5F1E8] border border-[#D9D1C5] border-opacity-50 rounded-3xl flex items-center justify-center">
              <div className="bg-white border border-[#D9D1C5] rounded-2xl p-6 w-full max-w-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-shadow duration-500 cursor-pointer">
                <span className="text-[10px] font-sans uppercase tracking-widest text-[#8b8478] block mb-3">
                  Case Study
                </span>
                <h4 className="font-serif text-xl text-[#1F1D1A] mb-2">
                  The Art of Subtlety
                </h4>
                <p className="font-sans text-[13px] text-[#8b8478] leading-relaxed mb-4">
                  How restraint in digital design creates room
                  for deeper brand connections.
                </p>
                <div className="flex items-center text-[12px] font-sans text-[#1F1D1A] gap-2">
                  Read more <ArrowRight size={12} />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}