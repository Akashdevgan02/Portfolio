const About = () => {
    const skillsByCategory = {
        'Frontend': ['HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Angular', 'WebGL', 'jQuery'],
        'Backend': ['C', 'C++', 'C#', 'Java', 'Python', 'PHP', 'Node.js', 'Express.js', '.NET'],
        'Databases': ['SQL', 'PostgreSQL', 'MongoDB', 'SQL Server', 'Firebase', 'Firebase Firestore'],
        'Tools & Platforms': ['Git', 'Google Cloud Platform', 'Android Studio', 'VS Code', 'IntelliJ', 'Xcode', 'XML']
    };

    return (
        <section id="about" className="bg-navy relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 py-12 md:py-16 lg:py-20">
                <div className="relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 items-start">
                        <div className="lg:col-span-3">
                            <div className="mb-4">
                                <h2 className="text-3xl md:text-4xl font-bold mb-1.5" style={{ color: '#FFFFFF' }}>
                                    About Me
                                </h2>
                                <p className="text-base md:text-lg font-light mb-4" style={{ color: '#BDDDFC' }}>
                                    Software developer passionate about building exceptional digital experiences
                                </p>
                            </div>

                            <div className="space-y-4 leading-normal">
                                <p className="text-base md:text-lg" style={{ color: '#BDDDFC' }}>
                                    I'm Akash. A software developer who enjoys building things carefully and with intention.
                                </p>
                                <p className="text-base md:text-lg" style={{ color: '#BDDDFC' }}>
                                    I've always been drawn to how ideas turn into systems — how small decisions in structure, logic, or design shape the way something behaves over time. What began as curiosity gradually became a habit of building, breaking, and refining until things make sense together.
                                </p>
                                <p className="text-base md:text-lg" style={{ color: '#BDDDFC' }}>
                                    Studying Computing Science gave me a strong foundation in how software works beneath the surface, but what keeps me engaged is applying that knowledge in practical ways. I enjoy working across the stack, understanding how different parts connect, and thinking about how early choices affect long-term maintainability.
                                </p>
                                <p className="text-base md:text-lg" style={{ color: '#BDDDFC' }}>
                                    I'm most comfortable with problems that don't have obvious answers — where progress comes from exploring trade-offs, asking the right questions, and iterating thoughtfully. I care about writing clear code, designing structured systems, and building applications that feel intuitive rather than forced.
                                </p>
                                <p className="text-base md:text-lg" style={{ color: '#BDDDFC' }}>
                                    What matters most to me is building things that are real and useful — not for the sake of complexity, but because they solve a problem cleanly and do what they're meant to do.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            <div className="space-y-4">
                                <div className="w-full">
                                    <div className="rounded-2xl border-2 overflow-hidden shadow-xl" style={{ borderColor: 'rgba(245, 230, 211, 0.5)', backgroundColor: 'rgba(79, 95, 111, 0.3)' }}>
                                        <img
                                            src="/photo.jpg"
                                            alt="Akash Devgan"
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                </div>

                                <div className="rounded-xl border p-5" style={{ backgroundColor: 'rgba(79, 95, 111, 0.9)', borderColor: 'rgba(232, 220, 198, 0.3)' }}>
                                    <h3 className="text-sm font-sf-mono mb-3 uppercase tracking-wider" style={{ color: '#88BDF2' }}>
                                        Quick Facts
                                    </h3>
                                    <ul className="space-y-2.5">
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 mr-3 mt-1.5 flex-shrink-0 rounded-sm" style={{ backgroundColor: '#88BDF2' }}></span>
                                            <div>
                                                <span className="text-xs font-sf-mono uppercase" style={{ color: '#88BDF2' }}>Location</span>
                                                <p className="text-sm mt-0.5" style={{ color: '#BDDDFC' }}>Burnaby, BC, Canada</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 mr-3 mt-1.5 flex-shrink-0 rounded-sm" style={{ backgroundColor: '#88BDF2' }}></span>
                                            <div>
                                                <span className="text-xs font-sf-mono uppercase" style={{ color: '#88BDF2' }}>Education</span>
                                                <p className="text-sm mt-0.5" style={{ color: '#BDDDFC' }}>B.Sc. Computing Science, SFU</p>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="w-2 h-2 mr-3 mt-1.5 flex-shrink-0 rounded-sm" style={{ backgroundColor: '#88BDF2' }}></span>
                                            <div>
                                                <span className="text-xs font-sf-mono uppercase" style={{ color: '#88BDF2' }}>Role</span>
                                                <p className="text-sm mt-0.5" style={{ color: '#BDDDFC' }}>Full Stack Developer</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 md:mt-12">
                        <h3 className="text-2xl md:text-3xl font-bold mb-5" style={{ color: '#FFFFFF' }}>
                            Technologies I Work With
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                            {Object.entries(skillsByCategory).map(([category, skills]) => (
                                <div
                                    key={category}
                                    className="rounded-xl border p-5"
                                    style={{
                                        backgroundColor: 'rgba(79, 95, 111, 0.9)',
                                        borderColor: 'rgba(232, 220, 198, 0.3)'
                                    }}
                                >
                                    <h4 className="text-sm font-sf-mono mb-3 uppercase tracking-wider" style={{ color: '#88BDF2' }}>
                                        {category}
                                    </h4>
                                    <ul className="space-y-1.5">
                                        {skills.map((skill, index) => (
                                            <li key={index} className="flex items-center text-sm" style={{ color: '#BDDDFC' }}>
                                                <span className="w-2 h-2 mr-2 flex-shrink-0 rounded-sm" style={{ backgroundColor: '#88BDF2' }}></span>
                                                <span>{skill}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

