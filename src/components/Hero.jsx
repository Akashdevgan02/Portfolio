/**
 * Hero Component
 * Landing section with modern gradient design
 */
const Hero = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center"
        >
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url(/photo_2.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                    filter: 'brightness(0.4)',
                }}
            ></div>

            <div className="relative z-10 w-full min-h-screen flex items-center justify-center py-12 md:py-16 lg:py-20">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2">
                    {/* Left Side - Personal Info */}
                    <div className="flex flex-col justify-end px-6 md:px-12 lg:px-16">
                        {/* Name and Info */}
                        <div className="flex flex-col">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wider uppercase" style={{ color: '#FFFFFF', letterSpacing: '0.1em', fontFamily: '"Inter", sans-serif' }}>
                                AKASH DEVGAN
                            </h1>
                            <p className="text-base md:text-lg mb-4 font-light" style={{ color: '#E8DCC6', fontFamily: '"Inter", sans-serif' }}>
                                Software Developer / Full Stack Developer
                            </p>
                            <p className="text-sm md:text-base font-light pb-0" style={{ color: '#BDDDFC', fontFamily: '"Inter", sans-serif' }}>
                                Currently looking for new opportunities. Available for freelance and full-time positions.
                            </p>
                        </div>
                    </div>

                    {/* Right Side - Navigation */}
                    <div className="flex flex-col justify-end px-6 md:px-12 lg:px-16">
                        <nav className="flex flex-col gap-6 lg:gap-8 -ml-4 md:-ml-6 lg:-ml-8">
                            {[
                                { name: 'ABOUT', href: '#about' },
                                { name: 'EXPERIENCE', href: '#experience' },
                                { name: 'PROJECTS', href: '#work' },
                                { name: 'CONTACT', href: '#contact' },
                                { name: 'RESUME', href: '/Akash_Devgan_Resume_India.pdf', target: '_blank', rel: 'noopener noreferrer' }
                            ].map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target={item.target}
                                    rel={item.rel}
                                    className="text-6xl md:text-7xl lg:text-8xl font-serif font-light tracking-wide hover:opacity-70 hover:italic transition-all duration-300"
                                    style={{
                                        color: '#E8DCC6',
                                        fontFamily: '"Playfair Display", Georgia, serif'
                                    }}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

