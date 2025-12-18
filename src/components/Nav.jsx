import { useState, useEffect } from 'react';

/**
 * Nav Component
 * Fixed navigation bar with scroll-based background change and mobile menu
 */
const Nav = ({ isModalOpen = false }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const heroHeight = window.innerHeight; // Hero section is min-h-screen

            // Show nav when scrolled past hero section
            setIsVisible(scrollY > heroHeight * 0.8);
            setIsScrolled(scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        // Check initial state
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#work' },
        { name: 'Contact', href: '#contact' },
    ];

    // Hide nav when modal is open
    const shouldShowNav = isVisible && !isModalOpen;

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${shouldShowNav ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
                } ${isScrolled ? 'shadow-2xl border-b' : ''}`}
            style={isScrolled ? {
                backgroundColor: 'rgba(56, 73, 89, 0.98)',
                borderBottomColor: 'rgba(232, 220, 198, 0.2)'
            } : { backgroundColor: 'transparent' }}
        >
            <div className="max-w-6xl mx-auto px-6 py-5">
                <div className="flex items-center justify-between">
                    <a href="#hero" className="font-sf-mono text-2xl font-bold transition-all duration-300 hover:scale-110 inline-block" style={{ color: '#E8DCC6' }}>
                        AD
                    </a>
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="nav-link"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="flex items-center gap-4">
                        <a
                            href="/Akash_Devgan_Resume_India.pdf"
                            className="btn hidden md:block"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                        </a>
                        <button
                            className="md:hidden text-green focus:outline-none"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                            style={{ color: '#E8DCC6' }}
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
                                {isMobileMenuOpen ? (
                                    <path d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-lightest-navy">
                        <div className="rounded-lg shadow-xl mt-2 p-4" style={{ backgroundColor: 'rgba(56, 73, 89, 0.98)' }}>
                            <div className="flex flex-col space-y-2">
                                {navItems.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="text-white text-lg font-medium py-3 px-4 hover:bg-light-navy hover:text-green rounded transition-all duration-200"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                                <a
                                    href="/Akash_Devgan_Resume_India.pdf"
                                    className="btn mt-2 text-center"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Resume
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Nav;

