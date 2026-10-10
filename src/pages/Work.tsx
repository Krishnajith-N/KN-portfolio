import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Filter, Quote, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { projectsData, Project } from '../data/projects';
import { testimonialsData, Testimonial } from '../data/testimonials';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectModal } from '../components/ProjectModal';
import { PageTransition } from '../components/PageTransition';

export const Work: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  const location = useLocation();

  // Check if hash matches project id e.g. /work#social-media-strategy
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const match = projectsData.find((p) => p.id === id);
      if (match) setSelectedProject(match);
    }
  }, [location.hash]);

  const categories = ['ALL', 'SOCIAL MEDIA', 'CONTENT', 'BRANDING', 'CAMPAIGNS'];

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'ALL') return true;
    return project.category === activeFilter;
  });

  const nextTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonialIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <PageTransition>
      <div className="w-full pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-24">
          
          {/* WORK PAGE HEADER */}
          <div className="space-y-8 max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-orange animate-ping" />
              <span className="text-xs font-mono text-brand-orange tracking-widest uppercase">
                // CASE STUDIES & PORTFOLIO
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-display tracking-tight text-brand-offwhite leading-[1.05]">
              SELECTED WORK. <br />
              <span className="text-brand-orange">THOUGHTFUL STRATEGY.</span> <br />
              CREATIVE EXECUTION.
            </h1>

            <p className="text-brand-grey text-base sm:text-lg md:text-xl leading-relaxed">
              A collection of ideas, campaigns, and digital experiences exploring how brands can connect with their audiences.
            </p>
          </div>

          {/* CATEGORY FILTER BAR */}
          <div className="flex flex-wrap items-center gap-3 border-b border-brand-white/10 pb-6">
            <div className="flex items-center gap-2 text-xs font-mono text-brand-grey mr-4 hidden sm:flex">
              <Filter size={14} />
              <span>FILTER BY:</span>
            </div>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-widest transition-all duration-300 ${
                  activeFilter === cat
                    ? 'bg-brand-orange text-brand-black font-bold shadow-[0_0_20px_rgba(244,163,64,0.3)]'
                    : 'bg-brand-charcoal text-brand-grey hover:text-brand-offwhite hover:border-brand-white/20 border border-brand-white/10'
                }`}
                data-cursor="FILTER"
              >
                {cat}
              </button>
            ))}
          </div>

          {/* PROJECTS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProjectCard
                    project={project}
                    onSelect={(p) => setSelectedProject(p)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* TESTIMONIALS SECTION */}
          <div className="pt-24 border-t border-brand-white/10 space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div className="space-y-3">
                <span className="text-xs font-mono text-brand-orange tracking-widest uppercase">
                  // FEEDBACK & COLLABORATION
                </span>
                <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight text-brand-offwhite">
                  WORDS FROM THE PEOPLE <br />
                  <span className="text-brand-orange">I WORK WITH.</span>
                </h2>
              </div>

              {/* Slider Navigation Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-brand-charcoal border border-brand-white/10 text-brand-offwhite hover:border-brand-orange hover:text-brand-orange transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-brand-charcoal border border-brand-white/10 text-brand-offwhite hover:border-brand-orange hover:text-brand-orange transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Testimonial Quote Card */}
            <div className="relative p-8 md:p-16 rounded-3xl bg-brand-charcoal border border-brand-white/10 overflow-hidden shadow-2xl">
              <Quote size={80} className="absolute -top-4 -right-4 text-brand-white/[0.04] pointer-events-none" />

              <div className="space-y-8 relative z-10 max-w-4xl">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-[10px] font-mono text-brand-orange tracking-widest uppercase">
                    SAMPLE CLIENT FEEDBACK PLACEHOLDER
                  </span>
                </div>

                <p className="text-2xl md:text-3xl font-serif italic text-brand-offwhite leading-relaxed">
                  "{testimonialsData[activeTestimonialIndex].quote}"
                </p>

                <div className="pt-6 border-t border-brand-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs">
                  <div>
                    <span className="text-brand-orange font-bold block text-sm">
                      {testimonialsData[activeTestimonialIndex].author}
                    </span>
                    <span className="text-brand-grey">
                      {testimonialsData[activeTestimonialIndex].role} — {testimonialsData[activeTestimonialIndex].company}
                    </span>
                  </div>
                  <div className="text-brand-grey">
                    PROJECT: <span className="text-brand-offwhite">{testimonialsData[activeTestimonialIndex].relatedProject}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

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
