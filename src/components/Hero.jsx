import { useState, useEffect } from 'react';

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile devices to switch background-attachment from 'fixed' to 'scroll'
    // Mobile browsers (especially iOS Safari) have poor support for fixed backgrounds
    // which causes performance issues and visual glitches
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center"
        >
            {/* Fixed background image with parallax effect on desktop, scroll on mobile */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url(/photo_2.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: isMobile ? 'scroll' : 'fixed',
                    filter: 'brightness(0.4)', // Darken image to improve text readability
                }}
            ></div>

            <div className="relative z-10 w-full min-h-screen flex items-center justify-center py-12 md:py-16 lg:py-20">
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
                    <div className="flex flex-col justify-center lg:justify-end px-6 md:px-12 lg:px-16">
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

                    <div className="flex flex-col justify-center lg:justify-end px-6 md:px-12 lg:px-16">
                        <nav className="flex flex-col gap-4 md:gap-6 lg:gap-8 lg:-ml-8">
                            {[
                                { name: 'ABOUT', href: '#about' },
                                { name: 'EXPERIENCE', href: '#experience' },
                                { name: 'PROJECTS', href: '#projects' },
                                { name: 'CONTACT', href: '#contact' },
                                { name: 'RESUME', href: '/Akash_Devgan_Resume_India.pdf', target: '_blank', rel: 'noopener noreferrer' }
                            ].map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    target={item.target}
                                    rel={item.rel}
                                    className="text-6xl lg:text-7xl xl:text-8xl font-serif font-light tracking-wide hover:opacity-70 hover:italic transition-all duration-300"
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

