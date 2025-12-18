/**
 * Contact Component
 * Contact information and call-to-action section with background image
 */
const Contact = () => {
    return (
        <section
            id="contact"
            className="relative min-h-screen flex items-center pt-20"
        >
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url(/photo_4.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                    filter: 'brightness(0.4)',
                }}
            ></div>

            <div className="relative z-10 section w-full">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="section-title mb-6">
                        Get In Touch
                    </h2>
                    <p className="text-light-slate text-lg md:text-xl mb-12 leading-relaxed">
                        I'm currently looking for new opportunities, my inbox is always open.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="border rounded-2xl p-8 md:p-12 mb-12" style={{ backgroundColor: 'rgba(79, 95, 111, 0.9)', borderColor: 'rgba(232, 220, 198, 0.4)' }}>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
                            <a
                                href="mailto:akdevgan02@gmail.com"
                                className="btn"
                            >
                                Say Hello
                            </a>
                            <a
                                href="https://linkedin.com/in/akash-devgan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-light-slate hover:text-green px-10 py-4 border-2 border-lightest-navy/30 rounded-full hover:border-green hover:bg-lightest-navy/10 transition-all duration-300 font-calibre font-medium text-base"
                            >
                                LinkedIn
                            </a>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div className="p-4 rounded-lg border" style={{ backgroundColor: 'rgba(79, 95, 111, 0.9)', borderColor: 'rgba(232, 220, 198, 0.2)' }}>
                                <p className="text-green text-xs font-sf-mono mb-2" style={{ color: 'var(--cream)' }}>PHONE</p>
                                <p className="text-light-slate text-sm" style={{ color: 'var(--light-slate)' }}>+918284051201</p>
                            </div>
                            <div className="p-4 rounded-lg border" style={{ backgroundColor: 'rgba(79, 95, 111, 0.9)', borderColor: 'rgba(232, 220, 198, 0.2)' }}>
                                <p className="text-green text-xs font-sf-mono mb-2" style={{ color: 'var(--cream)' }}>WHATSAPP</p>
                                <p className="text-light-slate text-sm" style={{ color: 'var(--light-slate)' }}>+17789954279</p>
                            </div>
                            <div className="p-4 rounded-lg border" style={{ backgroundColor: 'rgba(79, 95, 111, 0.9)', borderColor: 'rgba(232, 220, 198, 0.2)' }}>
                                <p className="text-green text-xs font-sf-mono mb-2" style={{ color: 'var(--cream)' }}>EMAIL</p>
                                <p className="text-light-slate text-sm" style={{ color: 'var(--light-slate)' }}>akdevgan02@gmail.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-beige/20" style={{ borderColor: 'rgba(232, 220, 198, 0.2)' }}>
                        <p className="text-light-slate text-sm font-sf-mono" style={{ color: 'var(--light-slate)' }}>
                            Designed & Built by <span className="text-green" style={{ color: 'var(--cream)' }}>Akash Devgan</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

