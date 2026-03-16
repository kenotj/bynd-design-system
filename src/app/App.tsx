import React, { useEffect, useState } from 'react';
import { CoverPage } from './components/Pages/CoverPage';
import { BrandOverview } from './components/Pages/BrandOverview';
import { BrandPrinciples } from './components/Pages/BrandPrinciples';
import { LogoSystem } from './components/Pages/LogoSystem';
import { ColorSystem } from './components/Pages/ColorSystem';
import { TypographySystem } from './components/Pages/TypographySystem';
import { LayoutSpacing } from './components/Pages/LayoutSpacing';
import { UIComponents } from './components/Pages/UIComponents';
import { GlassmorphismRules } from './components/Pages/GlassmorphismRules';
import { GraphicDevices } from './components/Pages/GraphicDevices';
import { SocialMediaSystem } from './components/Pages/SocialMediaSystem';
import { PitchDeckSystem } from './components/Pages/PitchDeckSystem';
import { DoDont } from './components/Pages/DoDont';
import { motion } from 'motion/react';
import { ByndBrandmark } from './components/Logo';

const PAGES = [
  { id: 'cover', title: 'Cover', Component: CoverPage },
  { id: 'overview', title: 'Brand Overview', Component: BrandOverview },
  { id: 'principles', title: 'Brand Principles', Component: BrandPrinciples },
  { id: 'logo', title: 'Logo System', Component: LogoSystem },
  { id: 'colors', title: 'Color Palette', Component: ColorSystem },
  { id: 'typography', title: 'Typography', Component: TypographySystem },
  { id: 'layout', title: 'Layout & Spacing', Component: LayoutSpacing },
  { id: 'ui-components', title: 'UI Components', Component: UIComponents },
  { id: 'glassmorphism', title: 'Glassmorphism', Component: GlassmorphismRules },
  { id: 'graphic-devices', title: 'Graphic Devices', Component: GraphicDevices },
  { id: 'social-system', title: 'Social Media', Component: SocialMediaSystem },
  { id: 'pitch-deck', title: 'Pitch Deck', Component: PitchDeckSystem },
  { id: 'do-dont', title: 'Do / Don\'t', Component: DoDont },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('cover');

  useEffect(() => {
    const handleScroll = () => {
      const sections = PAGES.map(p => document.getElementById(p.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let currentSection = PAGES[0].id;
      for (const section of sections) {
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = section.id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#FBF9F4] min-h-screen flex selection:bg-[#6F7B5E] selection:text-white">
      {/* Sidebar Navigation */}
      <nav className="fixed left-0 top-0 bottom-0 w-64 border-r border-[#D9D1C5] border-opacity-30 bg-[#FBF9F4] z-50 hidden lg:flex flex-col justify-between py-12 px-8">
        <div>
          <div className="w-10 h-10 mb-16 cursor-pointer" onClick={() => scrollTo('cover')}>
            <ByndBrandmark fill="#1F1D1A" />
          </div>
          
          <ul className="space-y-6">
            {PAGES.map((page, index) => (
              <li key={page.id}>
                <button
                  onClick={() => scrollTo(page.id)}
                  className={`text-[13px] font-sans text-left transition-all duration-300 flex flex-col gap-1 w-full group ${
                    activeSection === page.id ? 'text-[#1F1D1A] font-medium' : 'text-[#8b8478] hover:text-[#1F1D1A]'
                  }`}
                >
                  <span className={`text-[10px] tracking-widest uppercase ${activeSection === page.id ? 'text-[#6F7B5E]' : 'text-[#D9D1C5] group-hover:text-[#8b8478]'}`}>
                    {index + 1 < 10 ? `0${index + 1}` : index + 1}
                  </span>
                  {page.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <p className="font-sans text-[10px] uppercase tracking-widest text-[#D9D1C5] leading-relaxed">
            BYND Socials<br/>V1.0 — 2026
          </p>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-64 w-full">
        {PAGES.map((page) => (
          <section key={page.id} id={page.id} className="min-h-screen relative">
            <page.Component />
            
            {/* Subtle divider between sections */}
            {page.id !== 'cover' && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-[#D9D1C5]/50 to-transparent" />
            )}
          </section>
        ))}
      </main>

      {/* Mobile progress bar instead of sidebar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#F5F1E8] z-50 lg:hidden">
        <motion.div 
          className="h-full bg-[#6F7B5E]"
          initial={{ width: '0%' }}
          animate={{ 
            width: `${((PAGES.findIndex(p => p.id === activeSection) + 1) / PAGES.length) * 100}%` 
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}