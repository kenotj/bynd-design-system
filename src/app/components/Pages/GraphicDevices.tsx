import React from 'react';
import { FadeIn } from '../FadeIn';
import { CornerUpLeft, CornerDownRight, Activity } from 'lucide-react';

export function GraphicDevices() {
  return (
    <div className="flex flex-col justify-center min-h-screen px-12 py-32 max-w-5xl mx-auto relative overflow-hidden">
      {/* Background Graphic Devices */}
      <div className="absolute top-12 left-12 w-4 h-4 border-t border-l border-[#D9D1C5] opacity-50" />
      <div className="absolute top-12 right-12 w-4 h-4 border-t border-r border-[#D9D1C5] opacity-50" />
      <div className="absolute bottom-12 left-12 w-4 h-4 border-b border-l border-[#D9D1C5] opacity-50" />
      <div className="absolute bottom-12 right-12 w-4 h-4 border-b border-r border-[#D9D1C5] opacity-50" />
      
      <FadeIn className="mb-24 relative z-10">
        <h2 className="font-serif text-5xl md:text-6xl text-[#1f1d1a] mb-8 leading-[1.1] max-w-4xl tracking-tight">
          Graphic Devices
        </h2>
        <p className="font-sans text-[20px] leading-relaxed text-[#8b8478] font-light max-w-3xl">
          We use functional, recurring graphic devices to guide the eye and segment content without adding decorative noise. These subtle framing elements provide structural support to our layout.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
        {/* Thin Dividers */}
        <FadeIn delay={0.2} className="flex flex-col gap-6">
          <div className="aspect-square bg-white border border-[#D9D1C5] rounded-3xl flex flex-col justify-center p-8 relative">
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#8b8478] mb-8 block">01 / Divider</span>
            <div className="w-full h-px bg-[#D9D1C5] my-auto" />
            <div className="mt-8">
              <h3 className="font-serif text-2xl text-[#1f1d1a] mb-2">Thin Dividers</h3>
              <p className="font-sans text-[13px] text-[#8b8478] leading-relaxed">
                A 1px hairline stroke in Stone (#D9D1C5). Used to separate sections logically. Never heavy or colored.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Corner Markers */}
        <FadeIn delay={0.4} className="flex flex-col gap-6">
          <div className="aspect-square bg-[#F5F1E8] border border-[#D9D1C5] border-opacity-50 rounded-3xl flex flex-col justify-center p-8 relative">
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#8b8478] mb-8 block">02 / Marker</span>
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#8b8478]" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#8b8478]" />
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#8b8478]" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#8b8478]" />
              <div className="w-16 h-16 bg-[#D9D1C5] opacity-20" />
            </div>
            <div className="mt-8">
              <h3 className="font-serif text-2xl text-[#1f1d1a] mb-2">Corner Markers</h3>
              <p className="font-sans text-[13px] text-[#8b8478] leading-relaxed">
                Small structural crosshairs used to denote interactive areas or frame hero imagery.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Framing Lines */}
        <FadeIn delay={0.6} className="flex flex-col gap-6">
          <div className="aspect-square bg-[#1F1D1A] rounded-3xl flex flex-col justify-center p-8 relative">
            <span className="font-sans text-[10px] uppercase tracking-widest text-[#8b8478] mb-8 block">03 / Frame</span>
            <div className="w-full h-full border border-[#D9D1C5] border-opacity-20 flex items-center justify-center p-4">
               <div className="w-full h-full border border-dashed border-[#D9D1C5] border-opacity-10 flex items-center justify-center">
                 <Activity size={24} className="text-[#FBF9F4] opacity-30" />
               </div>
            </div>
            <div className="mt-8">
              <h3 className="font-serif text-2xl text-[#FBF9F4] mb-2">Subtle Framing</h3>
              <p className="font-sans text-[13px] text-[#D9D1C5] leading-relaxed">
                A restrained box model that encapsulates information density without overwhelming the layout.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Philosophy Section */}
      <FadeIn delay={0.8} className="mt-24 bg-white p-12 md:p-16 border border-[#D9D1C5] rounded-3xl flex flex-col md:flex-row gap-12 items-center relative z-10">
        <div className="flex-1 space-y-6">
          <h3 className="font-serif text-3xl md:text-4xl text-[#1f1d1a]">Support, Never Decorate</h3>
          <p className="font-sans text-[16px] text-[#8b8478] leading-relaxed max-w-lg">
            Our graphic devices are quiet. They guide the user's eye and delineate space. If an element isn't actively communicating hierarchy or structure, it is decorative noise and should be removed.
          </p>
        </div>
        <div className="flex-1 w-full flex justify-end">
           <div className="w-full max-w-sm aspect-[4/3] bg-[#F5F1E8] border border-[#D9D1C5] p-8 flex flex-col justify-between rounded-xl relative">
             <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-[#1F1D1A]" />
             <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-[#1F1D1A]" />
             <div className="w-full border-b border-[#D9D1C5] pb-4 mb-4 flex justify-between">
               <span className="font-sans text-[10px] text-[#8b8478] uppercase">Header</span>
               <span className="font-sans text-[10px] text-[#8b8478] uppercase">Data</span>
             </div>
             <div className="w-full flex-1 border border-dashed border-[#D9D1C5] flex items-center justify-center">
               <span className="font-serif text-[18px] text-[#1F1D1A] italic">Content</span>
             </div>
           </div>
        </div>
      </FadeIn>
    </div>
  );
}
