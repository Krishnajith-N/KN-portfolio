import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Compass, Lightbulb, TrendingUp, CheckCircle, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { PageTransition } from '../components/PageTransition';
import profilePic from '../assets/profile.jpeg';

export const About: React.FC = () => {
  return (
    <PageTransition>
      <div className="w-full pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-32">
          
          {/* ABOUT HERO HEADER & PROFILE EDITORIAL COMPOSITION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Header Column */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-mono text-brand-orange tracking-widest uppercase">
                  // THE PERSON BEHIND THE STRATEGY
                </span>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display tracking-tight text-brand-offwhite leading-none">
                  {siteConfig.about.heading}
                </h1>
              </div>

              {/* Bio Paragraphs */}
              <div className="space-y-6 text-brand-grey text-base md:text-lg leading-relaxed border-l-2 border-brand-orange/40 pl-6">
                {siteConfig.about.introParagraphs.map((para, idx) => (
                  <p key={idx} className={idx === 0 ? "text-brand-offwhite text-xl font-medium" : ""}>
                    {para}
                  </p>
                ))}
              </div>

              {/* Quick Stat Highlights */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-6 font-mono border-t border-brand-white/10">
                <div>
                  <span className="text-3xl md:text-4xl font-bold text-brand-orange font-display">1+</span>
                  <span className="text-xs text-brand-grey block mt-1">YEAR EXPERIENCE</span>
                </div>
                <div>
                  <span className="text-3xl md:text-4xl font-bold text-brand-offwhite font-display">04+</span>
                  <span className="text-xs text-brand-grey block mt-1">SELECTED CASE STUDIES</span>
                </div>
                <div>
                  <span className="text-3xl md:text-4xl font-bold text-brand-orange font-display">100%</span>
                  <span className="text-xs text-brand-grey block mt-1">CREATIVE INTENTION</span>
                </div>
              </div>

            </div>

            {/* Right Column: Editorial Profile Picture */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden border border-brand-white/15 shadow-2xl group">
                <img
                  src={profilePic}
                  alt={siteConfig.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent opacity-60" />
                
                {/* Floating Tag over image */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-brand-charcoal/90 backdrop-blur-md border border-brand-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-mono text-brand-orange block">KRISHNENDHU N.</span>
                    <span className="text-[11px] text-brand-grey font-mono">Digital Marketer</span>
                  </div>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              </div>
            </div>

          </div>

          {/* MY APPROACH SECTION */}
          <div className="space-y-16 border-t border-brand-white/10 pt-20">
            <div className="space-y-3">
              <span className="text-xs font-mono text-brand-orange tracking-widest uppercase">
                // METHODOLOGY & WORKFLOW
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-brand-offwhite">
                MY <span className="text-brand-orange">APPROACH.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {siteConfig.approach.map((item) => (
                <div
                  key={item.step}
                  className="p-8 rounded-3xl bg-brand-charcoal border border-brand-white/10 space-y-6 hover:border-brand-orange/40 transition-colors duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-mono font-bold text-brand-orange">
                      {item.step}
                    </span>
                    <span className="text-xs font-mono text-brand-grey uppercase">
                      PHASE {item.step}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-display text-brand-offwhite group-hover:text-brand-orange transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-brand-offwhite text-sm font-medium">
                    {item.description}
                  </p>

                  <p className="text-brand-grey text-xs leading-relaxed pt-2 border-t border-brand-white/10">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* EXPERIENCE TIMELINE */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-brand-white/10 pt-20">
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono text-brand-orange tracking-widest uppercase">
                // PROFESSIONAL BACKGROUND
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-brand-offwhite">
                EXPERIENCE & <span className="text-brand-orange">FOCUS.</span>
              </h2>
              <p className="text-brand-grey text-base leading-relaxed">
                Focused on strategic digital campaigns, content creation, social media growth, and building consistent visual identities for emerging brands.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-8">
              {siteConfig.experienceTimeline.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-brand-charcoal/60 border border-brand-white/10 space-y-4"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-brand-orange">
                    <span>{exp.period}</span>
                    <span className="px-2.5 py-0.5 rounded bg-brand-orange/10 border border-brand-orange/30">
                      ACTIVE ROLE
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-display text-brand-offwhite">
                    {exp.title}
                  </h3>
                  <p className="text-xs font-mono text-brand-grey">
                    {exp.organization}
                  </p>
                  <p className="text-brand-grey text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SKILLS MATRIX */}
          <div className="space-y-12 border-t border-brand-white/10 pt-20">
            <div className="space-y-3">
              <span className="text-xs font-mono text-brand-orange tracking-widest uppercase">
                // CAPABILITIES & TOOLKIT
              </span>
              <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-brand-offwhite">
                MARKETING <span className="text-brand-orange">SKILLS.</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {siteConfig.skillCategories.map((cat, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-brand-charcoal border border-brand-white/10 space-y-6">
                  <h3 className="text-xs font-mono text-brand-orange tracking-widest uppercase">
                    // {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 rounded-full bg-brand-black border border-brand-white/10 text-xs font-mono text-brand-offwhite hover:border-brand-orange hover:text-brand-orange transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WHAT I BELIEVE SECTION */}
          <div className="p-12 md:p-20 rounded-3xl bg-gradient-to-br from-brand-charcoal via-brand-black to-brand-charcoal border border-brand-white/15 text-center space-y-8 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none" />

            <span className="text-xs font-mono text-brand-orange tracking-widest uppercase relative z-10">
              // PHILOSOPHY & MINDSET
            </span>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif italic text-brand-offwhite max-w-4xl mx-auto leading-tight relative z-10">
              "{siteConfig.philosophy.statement}"
            </h2>

            <p className="text-brand-grey text-sm md:text-base max-w-xl mx-auto relative z-10">
              {siteConfig.philosophy.subtext}
            </p>

            <div className="pt-4 relative z-10">
              <Link
                to="/work"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-orange text-brand-black font-bold font-mono text-xs tracking-widest uppercase hover:bg-brand-orange-dark hover:text-brand-offwhite transition-all duration-300 shadow-xl"
                data-cursor="WORK"
              >
                <span>EXPLORE MY WORK ↗</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
};
