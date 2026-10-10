import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2, AlertTriangle, Layers, Target, Compass, Sparkles } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onNextProject?: (nextProject: Project) => void;
  allProjects?: Project[];
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onNextProject,
  allProjects = [],
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[90] flex items-center justify-center overflow-y-auto bg-brand-black/95 backdrop-blur-2xl p-0 md:p-6">
        
        {/* Backdrop Close Click */}
        <div className="fixed inset-0" onClick={onClose} />

        {/* Modal Window Container */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.96 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full max-w-5xl h-full md:h-[92vh] bg-brand-charcoal border border-brand-white/10 md:rounded-3xl shadow-2xl overflow-y-auto z-10 custom-scrollbar flex flex-col"
        >
          {/* Fixed Header Bar inside Modal */}
          <div className="sticky top-0 z-50 px-6 md:px-10 py-5 bg-brand-charcoal/90 backdrop-blur-md border-b border-brand-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-xs font-mono text-brand-orange tracking-wider uppercase">
                {project.categoryLabel}
              </span>
              <span className="text-xs font-mono text-brand-grey hidden sm:inline-block">
                // CASE STUDY DETAIL
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-brand-black border border-brand-white/10 text-brand-offwhite hover:text-brand-orange hover:border-brand-orange transition-all"
              aria-label="Close case study"
              data-cursor="CLOSE"
            >
              <X size={20} />
            </button>
          </div>

          {/* Modal Main Content Body */}
          <div className="p-6 md:p-12 space-y-16">
            
            {/* 1. Project Title & Hero Header */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-orange">
                <span>PROJECT ARCHITECTURE</span>
                <span>•</span>
                <span>{project.year}</span>
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display tracking-tight leading-tight">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl font-serif italic text-brand-orange">
                "{project.subtitle}"
              </p>
            </div>

            {/* Hero Image View */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-brand-white/10 bg-brand-black shadow-2xl">
              <img
                src={project.heroImage}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
            </div>

            {/* 2. Project Overview Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 p-8 rounded-2xl bg-brand-black/60 border border-brand-white/10">
              <div className="md:col-span-8 space-y-3">
                <h3 className="text-xs font-mono text-brand-orange tracking-widest uppercase flex items-center gap-2">
                  <Layers size={16} /> 01. OVERVIEW
                </h3>
                <p className="text-brand-offwhite text-base md:text-lg leading-relaxed">
                  {project.details.overview}
                </p>
              </div>
              <div className="md:col-span-4 space-y-4 border-t md:border-t-0 md:border-l border-brand-white/10 pt-4 md:pt-0 md:pl-8">
                <div>
                  <span className="text-xs font-mono text-brand-grey block">CATEGORY</span>
                  <span className="text-sm font-semibold">{project.categoryLabel}</span>
                </div>
                <div>
                  <span className="text-xs font-mono text-brand-grey block">YEAR</span>
                  <span className="text-sm font-semibold">{project.year}</span>
                </div>
                <div>
                  <span className="text-xs font-mono text-brand-grey block">STATUS</span>
                  <span className="text-xs font-mono text-brand-orange">CONCEPT SAMPLE SPEC</span>
                </div>
              </div>
            </div>

            {/* 3. Context & 4. Challenge */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 rounded-2xl bg-brand-black/40 border border-brand-white/10 space-y-4">
                <h3 className="text-xs font-mono text-brand-orange tracking-widest uppercase flex items-center gap-2">
                  <Target size={16} /> 02. BUSINESS CONTEXT
                </h3>
                <p className="text-brand-grey text-sm md:text-base leading-relaxed">
                  {project.details.context}
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-brand-black/40 border border-brand-white/10 space-y-4">
                <h3 className="text-xs font-mono text-brand-orange tracking-widest uppercase flex items-center gap-2">
                  <AlertTriangle size={16} /> 03. THE MARKETING CHALLENGE
                </h3>
                <p className="text-brand-grey text-sm md:text-base leading-relaxed">
                  {project.details.challenge}
                </p>
              </div>
            </div>

            {/* 5. Target Audience & 6. Strategy */}
            <div className="space-y-8">
              <div className="p-8 rounded-2xl bg-brand-black/80 border border-brand-white/10 space-y-4">
                <h3 className="text-xs font-mono text-brand-orange tracking-widest uppercase flex items-center gap-2">
                  <Compass size={16} /> 04. TARGET AUDIENCE & INSIGHT
                </h3>
                <p className="text-brand-offwhite text-base md:text-lg leading-relaxed">
                  {project.details.targetAudience}
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-brand-black/80 border border-brand-white/10 space-y-4">
                <h3 className="text-xs font-mono text-brand-orange tracking-widest uppercase flex items-center gap-2">
                  <Sparkles size={16} /> 05. STRATEGY & REASONING
                </h3>
                <p className="text-brand-offwhite text-base md:text-lg leading-relaxed">
                  {project.details.strategy}
                </p>
              </div>
            </div>

            {/* 7. Creative Direction & Deliverables */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              <div className="md:col-span-6 p-8 rounded-2xl bg-brand-black/40 border border-brand-white/10 space-y-4">
                <h3 className="text-xs font-mono text-brand-orange tracking-widest uppercase">
                  06. CREATIVE DIRECTION
                </h3>
                <p className="text-brand-grey text-sm md:text-base leading-relaxed">
                  {project.details.creativeDirection}
                </p>
              </div>

              <div className="md:col-span-6 p-8 rounded-2xl bg-brand-black/40 border border-brand-white/10 space-y-4">
                <h3 className="text-xs font-mono text-brand-orange tracking-widest uppercase">
                  07. KEY DELIVERABLES
                </h3>
                <ul className="space-y-3">
                  {project.details.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-brand-offwhite">
                      <CheckCircle2 size={16} className="text-brand-orange shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 8. Results Placeholder (Strict compliance: clearly marked placeholder) */}
            <div className="p-8 rounded-2xl bg-brand-orange/10 border border-brand-orange/40 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-orange uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
                <span>08. CAMPAIGN PERFORMANCE & RESULTS</span>
              </div>
              <p className="font-mono text-sm md:text-base text-brand-orange font-medium">
                {project.details.resultsPlaceholder}
              </p>
              <p className="text-xs text-brand-grey">
                * Note: Test performance metrics will be populated with actual client analytics upon campaign completion.
              </p>
            </div>

            {/* 9. Reflection */}
            <div className="p-8 rounded-2xl bg-brand-black/40 border border-brand-white/10 space-y-3">
              <h3 className="text-xs font-mono text-brand-grey tracking-widest uppercase">
                09. STRATEGIC REFLECTION & LESSONS LEARNED
              </h3>
              <p className="text-brand-grey text-sm md:text-base italic">
                "{project.details.reflection}"
              </p>
            </div>

            {/* 10. Navigation to Next Project */}
            {nextProject && onNextProject && (
              <div className="pt-8 border-t border-brand-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-xs font-mono text-brand-grey block">NEXT CASE STUDY</span>
                  <h4 className="text-xl font-bold font-display text-brand-offwhite">
                    {nextProject.title}
                  </h4>
                </div>

                <button
                  onClick={() => onNextProject(nextProject)}
                  className="px-6 py-3.5 rounded-full bg-brand-orange text-brand-black font-bold text-xs font-mono tracking-widest flex items-center gap-3 hover:bg-brand-orange-dark hover:text-brand-offwhite transition-all shadow-lg"
                  data-cursor="NEXT WORK"
                >
                  <span>EXPLORE NEXT CASE STUDY</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            )}

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
