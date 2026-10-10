import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown, Sparkles, ChevronRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { projectsData, Project } from '../data/projects';
import { Hero3D } from '../components/Hero3D';
import { HorizontalScrollSection } from '../components/HorizontalScrollSection';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { PageTransition } from '../components/PageTransition';

export const Home: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const navigate = useNavigate();

  const featuredProjects = projectsData.slice(0, 3);

  return (
    <PageTransition>
      <div className="w-full">
        {/* HERO SECTION */}
        <section className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 flex flex-col justify-between overflow-hidden">
          
          {/* Subtle Background Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[140px] pointer-events-none" />

          {/* Main Hero Container */}
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-auto">
            
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7 space-y-8 z-10">
              
              {/* Top Tag */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-charcoal border border-brand-white/10 text-xs font-mono text-brand-orange"
              >
                <Sparkles size={14} className="animate-spin-slow" />
                <span>{siteConfig.role.toUpperCase()}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                <span className="text-brand-grey">{siteConfig.experienceYears}</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl sm:text-6xl md:text-7xl font-bold font-display tracking-tight text-brand-offwhite leading-[1.05]"
              >
                {siteConfig.hero.headlineLine1} <br />
                <span className="text-brand-orange text-stroke-orange font-extrabold">
                  {siteConfig.hero.headlineLine2}
                </span> <br />
                {siteConfig.hero.headlineLine3}
              </motion.h1>

              {/* Supporting Copy */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-brand-grey max-w-2xl leading-relaxed"
              >
                {siteConfig.hero.supportingCopy}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="pt-4 flex flex-wrap items-center gap-4"
              >
                <Link
                  to="/work"
                  data-cursor="PORTFOLIO"
                  className="px-8 py-4 rounded-full bg-brand-orange text-brand-black font-bold font-mono text-xs tracking-widest uppercase flex items-center gap-3 hover:bg-brand-orange-dark hover:text-brand-offwhite transition-all duration-300 shadow-[0_0_30px_rgba(244,163,64,0.3)] hover:scale-105"
                >
                  <span>{siteConfig.hero.ctaPrimary}</span>
                </Link>

                <Link
                  to="/contact"
                  data-cursor="CONTACT"
                  className="px-8 py-4 rounded-full bg-brand-charcoal border border-brand-white/15 text-brand-offwhite font-bold font-mono text-xs tracking-widest uppercase hover:border-brand-orange hover:text-brand-orange transition-all duration-300"
                >
                  <span>{siteConfig.hero.ctaSecondary}</span>
                </Link>
              </motion.div>

            </div>

            {/* Right Column: 3D Interactive Hero Canvas */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="lg:col-span-5 relative z-10 flex items-center justify-center"
            >
              <Hero3D />
            </motion.div>

          </div>

          {/* Hero Bottom Bar & Scroll Indicator */}
          <div className="max-w-7xl mx-auto w-full pt-12 flex items-center justify-between text-xs font-mono text-brand-grey border-t border-brand-white/10 z-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              <span>BASED IN INDIA / REMOTE</span>
            </div>

            <div className="flex items-center gap-3 animate-bounce">
              <span>SCROLL TO EXPLORE</span>
              <ArrowDown size={14} className="text-brand-orange" />
            </div>
          </div>

        </section>

        {/* SIGNATURE HORIZONTAL SCROLL STORYTELLING */}
        <HorizontalScrollSection />

        {/* FEATURED WORK PREVIEW SECTION */}
        <section className="py-32 px-6 md:px-12 bg-brand-black border-t border-brand-white/10">
          <div className="max-w-7xl mx-auto space-y-16">
            
            {/* Section Heading */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-brand-white/10 pb-8">
              <div className="space-y-3">
                <span className="text-xs font-mono text-brand-orange tracking-widest uppercase">
                  // SELECTED CASE STUDIES
                </span>
                <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight text-brand-offwhite">
                  FEATURED <span className="text-brand-orange">PROJECTS.</span>
                </h2>
              </div>

              <Link
                to="/work"
                className="inline-flex items-center gap-2 text-xs font-mono text-brand-orange hover:text-brand-offwhite transition-colors group"
                data-cursor="ALL WORK"
              >
                <span>VIEW ALL PROJECTS</span>
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onSelect={(p) => setSelectedProject(p)}
                />
              ))}
            </div>

            {/* Bottom Work CTA */}
            <div className="text-center pt-8">
              <Link
                to="/work"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-charcoal border border-brand-white/15 text-xs font-mono text-brand-offwhite font-bold tracking-widest hover:border-brand-orange hover:text-brand-orange transition-all duration-300"
              >
                <span>EXPLORE ALL CASE STUDIES</span>
                <ChevronRight size={16} />
              </Link>
            </div>

          </div>
        </section>

        {/* CLOSING BOLD STATEMENT SECTION */}
        <section className="py-32 px-6 md:px-12 bg-brand-charcoal text-center relative overflow-hidden border-t border-brand-white/10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-brand-orange to-transparent" />
          
          <div className="max-w-4xl mx-auto space-y-8 relative z-10">
            <span className="text-xs font-mono text-brand-orange tracking-widest uppercase">
              // READY FOR IMPACT?
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold font-display tracking-tight text-brand-offwhite leading-none">
              YOUR NEXT BIG IDEA <br />
              <span className="text-brand-orange">STARTS HERE.</span>
            </h2>
            <p className="text-brand-grey text-base md:text-xl max-w-xl mx-auto">
              Whether you need strategic social direction, campaign storytelling, or brand communication that resonates, let's talk.
            </p>

            <div className="pt-4">
              <Link
                to="/contact"
                data-cursor="CONNECT"
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-brand-orange text-brand-black font-bold font-mono text-sm tracking-widest uppercase hover:bg-brand-orange-dark hover:text-brand-offwhite transition-all duration-300 shadow-[0_0_40px_rgba(244,163,64,0.4)] hover:scale-105"
              >
                <span>LET'S WORK TOGETHER ↗</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onNextProject={(next) => setSelectedProject(next)}
          allProjects={projectsData}
        />
      </div>
    </PageTransition>
  );
};
