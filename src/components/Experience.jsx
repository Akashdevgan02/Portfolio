/**
 * Experience Component
 * Displays work experience with background image
 */
const Experience = () => {
    const experiences = [
        {
            title: 'PHP Developer - Intern',
            company: 'KVR Technology',
            location: 'Amritsar, India',
            period: 'May 2021 – August 2021',
            responsibilities: [
                'Engineered a PHP and MySQL web application, improving business process efficiency for clients by optimizing database queries and implementing modular code.',
                'Collaborated on a PHP project, enhancing features and user experience through AJAX for asynchronous updates and integrating third-party APIs, leading to greater client satisfaction.',
                'Developed RESTful APIs to streamline data exchange between client-side and server-side components, improving application performance and scalability.',
                'Implemented robust security measures, including data validation and encryption, to protect sensitive client information and ensure compliance with industry standards.'
            ],
            technologies: ['PHP', 'MySQL', 'AJAX', 'RESTful APIs', 'JavaScript']
        }
    ];

    return (
        <section
            id="experience"
            className="relative min-h-screen flex items-center pt-20"
        >
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url(/photo_3.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                    filter: 'brightness(0.4)',
                }}
            ></div>

            <div className="relative z-10 section w-full">
                <h2 className="section-title mb-12" style={{ color: '#FFFFFF' }}>
                    Where I've Worked
                </h2>
                <div className="mt-8 space-y-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="border rounded-xl p-6 md:p-8 transition-all duration-300" style={{ backgroundColor: 'rgba(56, 73, 89, 0.95)', borderColor: 'rgba(232, 220, 198, 0.5)' }}>
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                                <div>
                                    <h3 className="text-2xl font-semibold mb-2" style={{ color: '#FFFFFF' }}>
                                        {exp.title} <span style={{ color: '#88BDF2' }}>@ {exp.company}</span>
                                    </h3>
                                    <p className="text-sm font-sf-mono" style={{ color: '#BDDDFC' }}>
                                        {exp.period} • {exp.location}
                                    </p>
                                </div>
                            </div>
                            <ul className="space-y-3 mt-6">
                                {exp.responsibilities.map((resp, idx) => (
                                    <li key={idx} className="flex items-start leading-relaxed" style={{ color: '#FFFFFF' }}>
                                        <span className="w-2 h-2 mr-4 mt-2 flex-shrink-0 rounded-sm" style={{ backgroundColor: '#88BDF2' }}></span>
                                        <span>{resp}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t" style={{ borderColor: 'rgba(232, 220, 198, 0.3)' }}>
                                {exp.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs font-sf-mono px-3 py-1.5 rounded-full"
                                        style={{
                                            color: '#88BDF2',
                                            backgroundColor: 'rgba(136, 189, 242, 0.2)',
                                            border: '1px solid rgba(136, 189, 242, 0.4)'
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;

