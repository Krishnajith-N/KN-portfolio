import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Lightbulb, Compass, TrendingUp } from 'lucide-react';
import { useReducedMotion } from '../hooks/useReducedMotion';

export const HorizontalScrollSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Transform vertical scroll progress into horizontal translation
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-66.66%']);

  const panels = [
    {
      number: '01',
      title: 'STRATEGY',
      tagline: 'Every strong brand begins with a clear direction.',
      description: 'Understanding audience mindsets, market positioning, and brand messaging before launching campaigns.',
      icon: Compass,
      bgColor: 'bg-brand-black',
      accentColor: 'text-brand-orange',
      badgeText: 'POSITIONING & ANCHORS',
    },
    {
      number: '02',
      title: 'STORYTELLING',
      tagline: 'Content that gives people a reason to care.',
      description: 'Crafting compelling visual and copy narratives that turn passive scrollers into passionate brand supporters.',
      icon: Lightbulb,
      bgColor: 'bg-brand-charcoal',
      accentColor: 'text-brand-offwhite',
      badgeText: 'NARRATIVE & CONTENT',
    },
    {
      number: '03',
      title: 'GROWTH',
      tagline: 'Creative thinking designed to move brands forward.',
      description: 'Combining creative intuition with continuous optimization to build scalable digital marketing momentum.',
      icon: TrendingUp,
      bgColor: 'bg-[#121212]',
      accentColor: 'text-brand-orange',
      badgeText: 'ANALYTICS & CONVERSION',
    },
  ];

  if (prefersReduced) {
    return (
      <section className="py-24 px-6 md:px-12 bg-brand-black border-t border-brand-white/10">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4">
            <span className="text-xs font-mono text-brand-orange tracking-widest uppercase">// SIGNATURE FRAMEWORK</span>
            <h2 className="text-4xl md:text-6xl font-bold font-display">CREATIVITY MEETS STRATEGY.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {panels.map((panel) => (
              <div key={panel.number} className="p-8 rounded-2xl bg-brand-charcoal border border-brand-white/10 space-y-6">
                <span className="text-5xl font-mono font-bold text-brand-orange">{panel.number}</span>
                <h3 className="text-2xl font-bold font-display">{panel.title}</h3>
                <p className="text-xl text-brand-offwhite">{panel.tagline}</p>
                <p className="text-sm text-brand-grey">{panel.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-brand-black">
      {/* Sticky Fullscreen Container */}
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        {/* Section Header */}
        <div className="px-6 md:px-12 pt-8 pb-4 max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-ping" />
            <span className="text-xs font-mono text-brand-orange tracking-widest uppercase">// SIGNATURE EXPERIENCE</span>
          </div>
          <span className="text-xs font-mono text-brand-grey hidden sm:inline-block">SCROLL TO UNFOLD →</span>
        </div>

        {/* Title Bar */}
        <div className="px-6 md:px-12 pb-6 max-w-7xl mx-auto w-full">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight text-brand-offwhite">
            CREATIVITY MEETS <span className="text-brand-orange">STRATEGY.</span>
          </h2>
        </div>

        {/* Horizontally Translating Track */}
        <div className="w-full overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex w-[300vw] h-[60vh] md:h-[65vh]"
          >
            {panels.map((panel) => {
              const IconComponent = panel.icon;
              return (
                <div
                  key={panel.number}
                  className="w-[100vw] h-full px-6 md:px-12 flex items-center"
                >
                  <div className="w-full h-full max-w-6xl mx-auto p-8 md:p-12 rounded-3xl bg-brand-charcoal/90 border border-brand-white/10 flex flex-col justify-between relative overflow-hidden shadow-2xl group hover:border-brand-orange/40 transition-colors duration-500">
                    
                    {/* Background Subtle Number Overlay */}
                    <div className="absolute right-4 bottom-0 text-[180px] md:text-[260px] font-bold font-mono text-brand-white/[0.03] select-none pointer-events-none leading-none">
                      {panel.number}
                    </div>

                    {/* Top Row */}
                    <div className="flex items-center justify-between z-10">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl md:text-5xl font-mono font-bold text-brand-orange">
                          {panel.number}
                        </span>
                        <div className="h-6 w-[1px] bg-brand-white/20" />
                        <span className="text-xs font-mono tracking-widest text-brand-grey uppercase">
                          {panel.badgeText}
                        </span>
                      </div>
                      <div className="p-3 rounded-full bg-brand-black border border-brand-white/10 text-brand-orange group-hover:scale-110 transition-transform">
                        <IconComponent size={28} />
                      </div>
                    </div>

                    {/* Middle Content */}
                    <div className="space-y-4 max-w-3xl z-10 my-auto">
                      <h3 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-brand-offwhite">
                        {panel.title}
                      </h3>
                      <p className="text-2xl md:text-3xl font-serif italic text-brand-orange leading-snug">
                        "{panel.tagline}"
                      </p>
                      <p className="text-brand-grey text-base md:text-lg max-w-2xl leading-relaxed">
                        {panel.description}
                      </p>
                    </div>

                    {/* Bottom Action Line */}
                    <div className="pt-6 border-t border-brand-white/10 flex items-center justify-between text-xs font-mono text-brand-grey z-10">
                      <span>PHASE {panel.number} ARCHITECTURE</span>
                      <span className="flex items-center gap-2 text-brand-orange group-hover:translate-x-2 transition-transform">
                        EXPLORE METHODOLOGY <ArrowRight size={16} />
                      </span>
                    </div>

                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Progress Bar Indicator */}
        <div className="px-6 md:px-12 pt-6 max-w-7xl mx-auto w-full">
          <div className="w-full h-1 bg-brand-white/10 rounded-full overflow-hidden">
            <motion.div
              style={{ scaleX: scrollYProgress, transformOrigin: '0%' }}
              className="h-full bg-brand-orange"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
