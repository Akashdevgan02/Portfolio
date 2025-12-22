import { useState } from 'react';
import ProjectModal from './ProjectModal';

const Projects = ({ onModalStateChange }) => {
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
      liveUrl: 'http://learnsphere.cloud/',
      githubUrl: 'https://github.com/dal-dos/LearnSphere'
    },
    {
      title: 'HappiMind',
      description: 'An AI-powered virtual therapist that provides dynamic, personalized interactions and support to users.',
      highlights: [
        'Leveraged OpenAI\'s API to generate context-aware, empathetic responses for users',
        'Built the front-end using Next.js 14 with Shaden UI components',
        'Developed the database using Prisma ORM and established a serverless architecture with Supabase'
      ],
      technologies: ['Next.js 14', 'Supabase', 'Prisma', 'Shadcn/UI', 'Figma', 'Vercel'],
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
      githubUrl: 'https://github.com/Akashdevgan02/Tradetrove.git'
    },

    {
      title: 'Reinforcement Learning–Based Intrusion Detection System',
      description: 'Developed an intrusion detection system using reinforcement learning to analyze and forecast time-series data, improving the detection of anomalous and potentially malicious activity.',
      highlights: [
        'Designed and implemented a technical pipeline that included feature engineering with Principal Component Analysis (PCA) and training multivariate Hidden Markov Models (HMMs) for anomaly detection on electricity consumption datasets',
        'Evaluated and compared model performance across multiple datasets with injected anomalies, demonstrating the system\'s effectiveness in identifying and categorizing cybersecurity threats'
      ],
      technologies: ['R'],
      period: 'September 2023 – December 2023',
      image: '/project-ids.jpg',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Community Safety Application',
      description: 'Built a community safety application that enables users to submit fast, geo-tagged incident reports, encouraging local engagement and proactive safety awareness.',
      highlights: [
        'Developed a secure and streamlined report management system to improve data handling efficiency and protect sensitive user information',
        'Integrated interactive maps for real-time visualization of reported issues, allowing users to track incidents and support timely community responses'
      ],
      technologies: ['Angular', 'HTML/CSS'],
      period: 'September 2023 – December 2023',
      image: '/project-safety.jpg',
      liveUrl: '#',
      githubUrl: 'https://github.com/Akashdevgan02/Community-Safety-App'
    },
    {
      title: 'WeCare',
      description: 'A caregiver-assistive Android app designed to enhance user experience for dementia patient care.',
      highlights: [
        'Led the development of a caregiver-assistive Android application aimed at improving daily care and coordination for dementia patients.',
        'Built a secure, real-time data system using Firebase to enable efficient patient data management and caregiver communication',
        'Applied Agile development practices and Git-based collaboration to plan sprints, manage tasks, and deliver features iteratively'
      ],
      technologies: ['Java', 'Android Studio', 'Realtime Firebase', 'XML', 'Git'],
      period: 'May 2022 – August 2022',
      image: '/project-wecare.jpg',
      liveUrl: '#',
      githubUrl: 'https://github.com/Akashdevgan02/WeCare'
    },
    {
      title: 'Beelogz',
      description: 'Developed a blogging platform using HTML, CSS, and PHP to support user-generated content and knowledge sharing.',
      highlights: [
        'Implemented SQL Server for structured and secure data management, ensuring reliability and integrity of stored content',
        'Used Git for version control and collaboration, maintaining code quality and supporting efficient teamwork throughout the project lifecycle'
      ],
      technologies: ['HTML/CSS', 'PHP', 'SQL Server', 'Git'],
      period: 'May 2022 – August 2022',
      image: '/project-beelogz.jpg',
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      title: 'Rush Hour Game Solver',
      description: 'Developed a Java-based Rush Hour puzzle solver that computes efficient solutions using optimized algorithms.',
      highlights: [
        'Designed an automated solution generator to navigate game states effectively, showcasing strong problem-solving and algorithmic thinking',
        'Applied graph-theory concepts to improve solution efficiency and documented results through structured output files'
      ],
      technologies: ['Java', 'IntelliJ'],
      period: 'January 2021 – April 2021',
      image: '/project-rushhour.jpg',
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  // Notify parent component (App) when modal opens/closes to hide nav bar
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    if (onModalStateChange) {
      onModalStateChange(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    if (onModalStateChange) {
      onModalStateChange(false);
    }
  };

  return (
    <section id="projects" className="section bg-navy relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="section-title mb-4">
          Some Things I've Built
        </h2>
        {/* Responsive grid: 1 col mobile, 2 md, 3 lg, 4 xl */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => handleProjectClick(project)}
              className="group cursor-pointer rounded-xl overflow-hidden border hover:transform hover:translate-y-[-6px] transition-all duration-300 shadow-xl flex flex-col h-full"
              style={{ backgroundColor: 'rgba(79, 95, 111, 0.9)', borderColor: 'rgba(232, 220, 198, 0.3)' }}
            >
              {/* Project image container - fixed height to maintain card consistency */}
              <div className="w-full h-40 overflow-hidden bg-navy relative flex-shrink-0">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: 'rgba(106, 137, 167, 0.5)' }}>
                    <span className="text-3xl font-bold" style={{ color: '#88BDF2' }}>{project.title.charAt(0)}</span>
                  </div>
                )}
              </div>

              {/* Card content - flex-grow ensures "View Project" stays at bottom */}
              <div className="p-4 flex flex-col flex-grow">
                {/* Title limited to 2 lines with ellipsis for consistent card heights */}
                <h3 className="text-lg font-semibold text-white mb-1.5 group-hover:text-cream transition-colors line-clamp-2" style={{ color: 'var(--white)', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {project.title}
                </h3>
                <p className="text-light-slate text-xs font-sf-mono mb-2" style={{ color: 'var(--beige)' }}>
                  {project.period}
                </p>
                {/* Description uses flex-grow to push "View Project" link to bottom */}
                <p className="text-light-slate text-xs leading-relaxed line-clamp-2 flex-grow" style={{ color: 'var(--light-slate)' }}>
                  {project.description}
                </p>
                {/* View Project link always at bottom due to flex-shrink-0 and parent flex-grow */}
                <div className="mt-3 flex items-center text-xs font-sf-mono group-hover:translate-x-2 transition-transform flex-shrink-0" style={{ color: 'var(--cream)' }}>
                  View Project <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
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
