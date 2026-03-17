import React from "react";
import { FadeIn } from "../FadeIn";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { ByndLogo } from "../Logo";

export function SocialMediaSystem() {
  return (
    <div className="flex flex-col justify-center min-h-screen px-6 md:px-12 py-20 md:py-32 max-w-5xl mx-auto">
      <FadeIn className="mb-16 md:mb-24">
        <div className="inline-block px-4 py-1 rounded-full border border-[#6F7B5E] text-[#6F7B5E] text-[11px] font-medium tracking-widest uppercase mb-4 md:mb-6">
          Application 01
        </div>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1f1d1a] mb-6 md:mb-8 leading-[1.1] max-w-4xl tracking-tight">
          Social Media System
        </h2>
        <p className="font-sans text-lg md:text-[20px] leading-relaxed text-[#8b8478] font-light max-w-3xl">
          The core output of BYND Socials. A structured but
          flexible framework for reel covers, carousels, and
          stories that feels cohesive and unmistakably premium.
        </p>
      </FadeIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16 md:mb-24">
        {/* Reel Covers */}
        <FadeIn delay={0.2} className="flex flex-col gap-8">
          <div>
            <h3 className="font-serif text-2xl text-[#1f1d1a] mb-2">
              Reel Covers
            </h3>
            <p className="font-sans text-[14px] text-[#8b8478]">
              Centered typography on low-contrast imagery.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[9/16] bg-[#1F1D1A] relative overflow-hidden group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1659095012540-8269e6fef69f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZGl0b3JpYWwlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NzMyNTE1MjJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Reel Cover 1"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                <h4 className="font-serif text-2xl text-white tracking-tight">
                  Summer
                  <br />
                  Editorial
                </h4>
              </div>
            </div>
            <div className="aspect-[9/16] bg-[#1F1D1A] relative overflow-hidden group">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1575424908740-e08177cffd5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwYWVzdGhldGljJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzczMjUxNTIyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Reel Cover 2"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                <h4 className="font-serif text-2xl text-white tracking-tight italic">
                  Behind
                  <br />
                  The Scenes
                </h4>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Story Frames */}
        <FadeIn delay={0.3} className="flex flex-col gap-8">
          <div>
            <h3 className="font-serif text-2xl text-[#1f1d1a] mb-2">
              Story Frames
            </h3>
            <p className="font-sans text-[14px] text-[#8b8478]">
              Minimalist borders and strict margin adherence.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[9/16] bg-[#F5F1E8] border border-[#D9D1C5] p-3 relative">
              <div className="w-full h-full bg-[#1F1D1A] relative overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1689004624325-6edf074228dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMHJlZWwlMjBjb3ZlcnxlbnwxfHx8fDE3NzMyNTE1MjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Story Frame 1"
                  className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute bottom-6 left-0 right-0 text-center">
                  <span className="bg-white text-[#1F1D1A] text-[10px] font-sans tracking-widest uppercase px-3 py-1.5 rounded-full">
                    New Arrival
                  </span>
                </div>
              </div>
            </div>
            <div className="aspect-[9/16] bg-[#1F1D1A] p-3 relative flex flex-col justify-between">
              <div className="text-white text-center mt-8">
                <span className="text-[10px] font-sans tracking-widest uppercase text-[#8b8478]">
                  Studio Notes
                </span>
                <h4 className="font-serif text-3xl mt-4">
                  Volume 04
                </h4>
              </div>
              <div className="w-full aspect-square bg-[#F5F1E8] mb-8 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1717518213374-2b26b816e005?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJtJTIwbmV1dHJhbCUyMHRvbmVzfGVufDF8fHx8MTc3MzI1MTUyM3ww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Story Frame 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Carousel Covers */}
      <FadeIn delay={0.4}>
        <div className="flex flex-col gap-6 w-full">
          <div>
            <h3 className="font-serif text-2xl text-[#1f1d1a] mb-2">
              Carousel Progression
            </h3>
            <p className="font-sans text-[14px] text-[#8b8478]">
              Sequential storytelling using negative space and
              continuous lines.
            </p>
          </div>
          <div className="w-full bg-[#F5F1E8] p-6 md:p-12 overflow-x-auto overflow-y-hidden hide-scrollbar border border-[#D9D1C5]">
            <div className="flex gap-4 min-w-max">
              {[1, 2, 3, 4].map((slide) => (
                <div
                  key={slide}
                  className="w-[300px] aspect-square bg-white border border-[#D9D1C5] flex flex-col relative overflow-hidden"
                >
                  <div className="p-6 pb-0 flex justify-between items-center">
                    <div className="w-8">
                      <ByndLogo fill="#1F1D1A" />
                    </div>
                    <span className="text-[#8b8478] text-[10px] font-sans">
                      {slide}/4
                    </span>
                  </div>
                  <div className="flex-1 flex items-center justify-center p-8">
                    {slide === 1 && (
                      <h4 className="font-serif text-3xl text-center text-[#1F1D1A]">
                        The Art of Restraint
                      </h4>
                    )}
                    {slide === 2 && (
                      <div className="w-full h-full relative">
                        <ImageWithFallback
                          src="https://images.unsplash.com/photo-1602128110234-2d11c0aaadfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc3MzE0MjM4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
                          alt="slide 2"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    {slide === 3 && (
                      <p className="font-sans text-[14px] text-[#8b8478] leading-relaxed text-center">
                        Silence in design allows the actual
                        message to breathe. We strip away the
                        unnecessary until only the essential
                        remains.
                      </p>
                    )}
                    {slide === 4 && (
                      <div className="w-full h-full relative bg-[#1F1D1A] flex items-center justify-center -mx-8 -mb-8 mt-4">
                        <span className="text-white text-[12px] font-sans uppercase tracking-widest border border-white px-6 py-2 rounded-full">
                          Explore
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}