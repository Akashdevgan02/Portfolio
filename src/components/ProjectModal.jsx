import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const ProjectModal = ({ project, isOpen, onClose }) => {
  // Handle ESC key to close modal and prevent body scroll when modal is open
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent background scrolling when modal is open
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
      {/* Stop propagation to prevent backdrop click from closing when clicking modal content */}
      <div
        className="relative rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slideUp shadow-2xl"
        style={{
          background: 'linear-gradient(to bottom, rgba(79, 95, 111, 1), rgba(56, 73, 89, 1))'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 transition-colors z-10"
          style={{ color: '#E8DCC6' }}
          onMouseEnter={(e) => e.target.style.color = '#FFFFFF'}
          onMouseLeave={(e) => e.target.style.color = '#E8DCC6'}
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
            <h3 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#FFFFFF' }}>
              {project.title}
            </h3>
            <p className="text-sm md:text-base font-sf-mono mb-4" style={{ color: '#88BDF2' }}>
              {project.period}
            </p>
            <p className="text-lg mb-6" style={{ color: '#E8DCC6' }}>
              {project.description}
            </p>
          </div>

          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-6">
              <h4 className="font-semibold mb-3" style={{ color: '#FFFFFF' }}>Key Features:</h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start" style={{ color: '#E8DCC6' }}>
                    <span className="w-2 h-2 mr-3 mt-2 flex-shrink-0 rounded-sm" style={{ backgroundColor: '#88BDF2' }}></span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {project.technologies && project.technologies.length > 0 && (
            <div className="mb-6">
              <h4 className="font-semibold mb-3" style={{ color: '#FFFFFF' }}>Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-sf-mono px-3 py-1.5 rounded border"
                    style={{
                      color: '#88BDF2',
                      backgroundColor: 'rgba(136, 189, 242, 0.15)',
                      borderColor: 'rgba(136, 189, 242, 0.4)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-4 mt-6 pt-6 border-t" style={{ borderColor: 'rgba(232, 220, 198, 0.3)' }}>
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

  // Use React Portal to render modal directly to document.body
  // This ensures the modal appears above all other content regardless of z-index stacking contexts
  return createPortal(modalContent, document.body);
};

export default ProjectModal;

