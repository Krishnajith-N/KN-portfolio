import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { projectsData } from '../data/projects';
import { PageTransition } from '../components/PageTransition';
import { ProjectModal } from '../components/ProjectModal';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <PageTransition>
        <div className="min-h-screen pt-32 pb-24 px-6 flex items-center justify-center text-center">
          <div className="space-y-6 max-w-md">
            <span className="text-5xl font-mono text-brand-orange font-bold">404</span>
            <h1 className="text-3xl font-bold font-display">CASE STUDY NOT FOUND</h1>
            <p className="text-brand-grey text-sm">
              The project case study you requested could not be located.
            </p>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-orange text-brand-black text-xs font-mono font-bold"
            >
              <ArrowLeft size={16} /> RETURN TO ALL WORK
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="pt-24">
        <ProjectModal
          project={project}
          onClose={() => navigate('/work')}
          onNextProject={(next) => navigate(`/work/${next.id}`)}
          allProjects={projectsData}
        />
      </div>
    </PageTransition>
  );
};
