import { useEffect } from 'react';
import { createPortal } from 'react-dom';

/**
 * ProjectModal Component
 * Displays detailed project information in a modal overlay
 * Supports keyboard navigation (ESC to close) and prevents body scroll when open
 * Uses React Portal to render outside of section stacking contexts
 */
const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const modalContent = (
    <div
      className="fixed inset-0 flex items-center justify-center p-4 animate-fadeIn"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', zIndex: 99999 }}
      onClick={onClose}
    >
      <div
        className="relative rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slideUp shadow-2xl"
        style={{
          background: 'linear-gradient(to bottom, rgba(120, 150, 180, 1), rgba(106, 137, 167, 1))'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate hover:text-white transition-colors z-10"
          aria-label="Close modal"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {project.image && (
          <div className="w-full h-64 md:h-80 overflow-hidden rounded-t-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="p-6 md:p-8">
          <div className="mb-4">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-green text-sm md:text-base font-sf-mono mb-4">
              {project.period}
            </p>
            <p className="text-lg text-light-slate mb-6">
              {project.description}
            </p>
          </div>

          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Key Features:</h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start text-light-slate">
                    <span className="w-2 h-2 mr-3 mt-2 flex-shrink-0 rounded-sm" style={{ backgroundColor: '#88BDF2' }}></span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.technologies && project.technologies.length > 0 && (
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-slate font-sf-mono px-3 py-1 bg-navy rounded border border-lightest-navy"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t border-lightest-navy">
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                Visit Site
              </a>
            )}
            {project.githubUrl && project.githubUrl !== '#' && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View Source
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default ProjectModal;

