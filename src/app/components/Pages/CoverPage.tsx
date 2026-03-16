import React from 'react';
import { ByndLogo, ByndBrandmark } from '../Logo';
import { FadeIn } from '../FadeIn';
import { motion } from 'motion/react';

export function CoverPage() {
  const scrollToNext = () => {
    document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-12 py-24 w-full relative overflow-hidden bg-[#FBF9F4]">
      {/* Decorative large brandmark in background */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[800px] h-[800px]"
      >
        <ByndBrandmark fill="#1F1D1A" />
      </motion.div>

      <div className="max-w-3xl mx-auto flex flex-col items-center text-center relative z-10">
        <FadeIn delay={0.1}>
          <p className="font-sans text-xs font-semibold uppercase tracking-[2.5px] text-[#8b8478] mb-16">
            Brand Style Guide
          </p>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <div className="w-[300px] md:w-[400px] mb-16">
            <ByndLogo fill="#1F1D1A" />
          </div>
        </FadeIn>
        
        <FadeIn delay={0.5}>
          <div className="w-16 h-px bg-[#D9D1C5] mb-12 mx-auto"></div>
        </FadeIn>
        
        <FadeIn delay={0.7}>
          <p className="font-serif text-3xl md:text-4xl text-[#1f1d1a] leading-relaxed italic max-w-2xl text-[#1f1d1a]/90">
            "The interface is not the subject, but the frame. Every element serves the story."
          </p>
        </FadeIn>
        
        <FadeIn delay={1.2}>
          <button 
            onClick={scrollToNext}
            className="mt-32 w-12 h-12 flex items-center justify-center rounded-full border border-[#D9D1C5] text-[#8b8478] hover:bg-[#1F1D1A] hover:text-[#FBF9F4] hover:border-[#1F1D1A] transition-all duration-300 animate-bounce cursor-pointer group"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4L12 20M12 20L6 14M12 20L18 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </FadeIn>
      </div>
    </div>
  );
}