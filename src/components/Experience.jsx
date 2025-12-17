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
            className="relative min-h-screen flex items-center pt-20 bg-cover bg-center bg-no-repeat experience-bg"
            style={{
                backgroundImage: 'url(/photo_3.jpg)',
            }}
        >
            <div className="absolute inset-0 bg-navy/80 z-10"></div>

            <div className="relative z-10 section w-full">
                <h2 className="section-title">
                    Where I've Worked
                </h2>
                <div className="mt-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="mb-12">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-white">
                                        {exp.title} <span className="text-green">@ {exp.company}</span>
                                    </h3>
                                    <p className="text-slate text-sm font-sf-mono mt-1">
                                        {exp.period} • {exp.location}
                                    </p>
                                </div>
                            </div>
                            <ul className="space-y-2 mt-4">
                                {exp.responsibilities.map((resp, idx) => (
                                    <li key={idx} className="flex items-start text-light-slate">
                                        <span className="text-green mr-3 mt-1">▹</span>
                                        <span>{resp}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {exp.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs text-slate font-sf-mono px-2 py-1 bg-light-navy rounded"
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

