import { useState } from 'react';
import ProjectModal from './ProjectModal';

/**
 * Projects Component
 * Displays a grid of project cards with modal functionality for detailed views
 */
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: 'LearnSphere',
      description: 'A comprehensive learning platform built with microservices architecture, featuring a responsive UI and zero-trust security model.',
      highlights: [
        'Implemented a responsive and interactive user interface using React.js and Vite',
        'Adopted a zero-trust security model and implemented JWT for secure microservice communication',
        'Designed and deployed a microservices architecture using Node.js and Express, achieving service autonomy'
      ],
      technologies: ['React.js', 'Express.js', 'Firebase Firestore', 'Google Cloud App Engine', 'JWT'],
      period: 'February 2024 – April 2024',
      image: '/project-learnsphere.jpg',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'HappiMind',
      description: 'An AI-powered virtual therapist that provides dynamic, personalized interactions and support to users.',
      highlights: [
        'Created an AI-powered virtual therapist that provides dynamic, personalized interactions',
        'Built the front-end using Next.js 14 with Shaden UI components',
        'Developed the database using Prisma ORM and established a serverless architecture with Supabase'
      ],
      technologies: ['Next.js 14', 'Supabase', 'Prisma', 'Shaden', 'Figma', 'Vercel'],
      period: 'February 2024 – March 2024',
      image: '/project-happimind.jpg',
      liveUrl: 'https://happimind.vercel.app',
      githubUrl: '#'
    },
    {
      title: 'TradeTrove',
      description: 'A responsive trading platform with server-side rendering, featuring secure authentication and optimized database management.',
      highlights: [
        'Created a responsive and dynamic user interface using React with server-side rendering',
        'Integrated Firebase Authentication for secure login and user data management',
        'Developed and managed a PostgreSQL database hosted on Google Cloud Platform'
      ],
      technologies: ['React', 'Express.js', 'PostgreSQL', 'Firebase Authentication', 'Google Cloud Platform'],
      period: 'January 2024 – April 2024',
      image: '/project-tradetrove.jpg',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'WeCare',
      description: 'A caregiver-assistive Android app designed to enhance user experience for dementia patient care.',
      highlights: [
        'Led a team to develop a caregiver-assistive Android app',
        'Implemented Realtime Firebase for efficient and secure data handling',
        'Applied Agile practices and Git for project management'
      ],
      technologies: ['Java', 'Android Studio', 'Realtime Firebase', 'XML', 'Git'],
      period: 'May 2022 – August 2022',
      image: '/project-wecare.jpg',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="work" className="section">
      <h2 className="section-title">
        Some Things I've Built
      </h2>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => handleProjectClick(project)}
            className="group cursor-pointer bg-light-navy rounded-lg overflow-hidden hover:transform hover:translate-y-[-5px] transition-all duration-300"
          >
            <div className="w-full h-48 overflow-hidden bg-navy">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-green text-2xl font-bold">{project.title.charAt(0)}</span>
                </div>
              )}
            </div>

            <div className="p-4">
              <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-green transition-colors">
                {project.title}
              </h3>
              <p className="text-slate text-sm font-sf-mono">
                {project.period}
              </p>
            </div>
          </div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default Projects;
