import { useState, useEffect } from 'react';

const Nav = ({ isModalOpen = false }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const heroHeight = window.innerHeight;

            // Show nav bar after scrolling past 80% of hero section height
            // This keeps the hero section clean while providing navigation when needed
            setIsVisible(scrollY > heroHeight * 0.8);
            // Add background and shadow when scrolled past 50px for visual feedback
            setIsScrolled(scrollY > 50);

            // Detect which section is currently in view for active state highlighting
            // A section is considered active when its top is above 100px from viewport top
            // and its bottom is below 100px (section is in the middle of viewport)
            const sections = ['about', 'experience', 'projects', 'contact'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            setActiveSection(currentSection || '');
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial scroll position on mount

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'About', href: '#about', id: 'about' },
        { name: 'Experience', href: '#experience', id: 'experience' },
        { name: 'Projects', href: '#projects', id: 'projects' },
        { name: 'Contact', href: '#contact', id: 'contact' },
    ];

    // Hide nav when modal is open to prevent z-index conflicts and maintain focus
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
                        Akash Devgan
                    </a>
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="nav-link"
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
                            className="md:hidden focus:outline-none"
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
                    <div className="md:hidden mt-4 pb-4 border-t" style={{ borderColor: 'rgba(232, 220, 198, 0.15)' }}>
                        <div className="mt-3 flex flex-col space-y-1">
                            {navItems.map((item) => {
                                const isActive = activeSection === item.id;
                                return (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={`relative py-3 px-4 font-sf-mono transition-all duration-200 ${isActive
                                            ? 'text-lg font-semibold'
                                            : 'text-base font-medium'
                                            }`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        style={{
                                            color: isActive ? '#88BDF2' : '#E8DCC6',
                                            borderLeft: isActive ? '2px solid #88BDF2' : '2px solid transparent',
                                            paddingLeft: isActive ? '14px' : '16px'
                                        }}
                                        onMouseEnter={(e) => {
                                            if (!isActive) {
                                                e.target.style.color = '#88BDF2';
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (!isActive) {
                                                e.target.style.color = '#E8DCC6';
                                            }
                                        }}
                                    >
                                        {item.name}
                                    </a>
                                );
                            })}
                            <a
                                href="/Akash_Devgan_Resume_India.pdf"
                                className="btn mt-4 text-center"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Resume
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Nav;

