import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  onSelect?: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rX = ((y - centerY) / centerY) * -8;
    const rY = ((x - centerX) / centerX) * 8;

    setRotateX(rX);
    setRotateY(rY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const handleClick = (e: React.MouseEvent) => {
    if (onSelect) {
      e.preventDefault();
      onSelect(project);
    }
  };

  return (
    <motion.div
      style={{
        perspective: 1000,
      }}
      className="w-full"
    >
      <Link
        to={`/work#${project.id}`}
        onClick={handleClick}
        data-cursor="VIEW PROJECT"
        className="block group"
      >
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          animate={{
            rotateX: rotateX,
            rotateY: rotateY,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="relative bg-brand-charcoal rounded-3xl overflow-hidden border border-brand-white/10 group-hover:border-brand-orange/50 transition-colors duration-500 shadow-xl"
        >
          {/* Card Media Container */}
          <div className="relative aspect-[16/10] overflow-hidden bg-brand-black">
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            {/* Dark gradient overlay for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent" />

            {/* Top Badges */}
            <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
              <span className="px-3 py-1 rounded-full bg-brand-black/80 backdrop-blur-md border border-brand-white/15 text-[11px] font-mono text-brand-orange tracking-wider uppercase">
                {project.categoryLabel}
              </span>
              {project.isSample && (
                <span className="px-2.5 py-1 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-[10px] font-mono text-brand-orange tracking-widest uppercase">
                  CONCEPT PROJECT
                </span>
              )}
            </div>

            {/* Floating Year Tag */}
            <div className="absolute bottom-4 right-4 text-xs font-mono text-brand-grey bg-brand-black/70 px-2.5 py-1 rounded-md backdrop-blur-sm">
              {project.year}
            </div>
          </div>

          {/* Card Meta Content */}
          <div className="p-6 md:p-8 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl md:text-2xl font-bold font-display tracking-tight text-brand-offwhite group-hover:text-brand-orange transition-colors">
                {project.title}
              </h3>
              <span className="p-2.5 rounded-full bg-brand-black border border-brand-white/10 text-brand-offwhite group-hover:bg-brand-orange group-hover:text-brand-black group-hover:rotate-45 transition-all duration-300 shrink-0">
                <ArrowUpRight size={20} />
              </span>
            </div>

            <p className="text-brand-grey text-xs md:text-sm line-clamp-2 leading-relaxed">
              {project.description}
            </p>

            {/* Tag Badges */}
            <div className="pt-2 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono text-brand-grey px-2 py-0.5 rounded bg-brand-black/60 border border-brand-white/5"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.div>
  );
};
