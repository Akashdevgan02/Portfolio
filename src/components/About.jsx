/**
 * About Component
 * Displays personal information, background, and technical skills
 */
const About = () => {
    const skills = [
        'C', 'C++', 'C#', 'Java', 'Python', 'JavaScript', 'TypeScript',
        'HTML/CSS', 'SQL', 'PHP', 'XML', 'React', 'Angular', 'Node.js',
        'Express.js', 'PostgreSQL', 'MongoDB', 'WebGL', 'SQL Server',
        'Firebase', 'jQuery', '.NET', 'Git', 'Google Cloud Platform',
        'Firebase Firestore', 'Android Studio', 'VS Code', 'IntelliJ', 'Xcode'
    ];

    return (
        <section id="about" className="section">
            <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
                <div className="flex-1 order-2 md:order-1">
                    <h2 className="section-title">
                        About Me
                    </h2>
                    <div className="space-y-4 text-light-slate">
                        <p>
                            Hello! I'm Akash, a software developer based in Burnaby, BC, who enjoys building
                            things that live on the internet. I develop exceptional websites and applications
                            that provide intuitive, pixel-perfect user experiences.
                        </p>
                        <p>
                            I recently completed my Bachelor of Science in Computing Science at Simon Fraser University,
                            where I gained a strong foundation in computer science principles and modern web development.
                        </p>
                        <p>
                            Here are a few technologies I've been working with recently:
                        </p>
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
                            {skills.map((skill, index) => (
                                <li key={index} className="flex items-center text-sm">
                                    <span className="text-green mr-2">▹</span>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="flex-shrink-0 w-full md:w-auto order-1 md:order-2 flex justify-center md:justify-start">
                    <div className="w-48 h-48 md:w-64 md:h-64 border-2 border-green rounded-lg relative group">
                        <div className="absolute inset-0 bg-green/10 rounded-lg transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                        <div className="absolute inset-0 rounded-lg z-10 overflow-hidden">
                            <img
                                src="/photo.jpg"
                                alt="Akash Devgan"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

