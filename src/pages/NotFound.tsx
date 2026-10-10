import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';

export const NotFound: React.FC = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-32 pb-24 px-6 flex items-center justify-center text-center">
        <div className="space-y-6 max-w-md">
          <span className="text-7xl font-mono text-brand-orange font-bold">404</span>
          <h1 className="text-3xl font-bold font-display">PAGE NOT FOUND</h1>
          <p className="text-brand-grey text-sm">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-orange text-brand-black text-xs font-mono font-bold hover:bg-brand-orange-dark hover:text-brand-offwhite transition-colors"
          >
            <ArrowLeft size={16} /> RETURN TO HOME
          </Link>
        </div>
      </div>
    </PageTransition>
  );
};
