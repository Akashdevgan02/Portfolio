/**
 * Hero Component
 * Landing section with fixed background image and parallax effect
 */
const Hero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center pt-20 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: 'url(/photo_2.jpg)',
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="absolute inset-0 bg-navy/80"></div>

            <div className="relative z-10 section w-full">
                <div className="w-full">
                    <p className="section-subtitle">Hi, my name is</p>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                        Akash Devgan.
                    </h1>
                    <h2 className="text-4xl md:text-6xl font-bold text-lightest-slate mb-6">
                        I build things for the web.
                    </h2>
                    <p className="text-lg md:text-xl text-light-slate max-w-2xl mb-8">
                        I'm a software developer specializing in building exceptional digital experiences.
                        Currently focused on creating accessible, human-centered products using modern web technologies.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#contact"
                            className="btn"
                        >
                            Get In Touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

