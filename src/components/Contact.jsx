/**
 * Contact Component
 * Contact information and call-to-action section
 */
const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="text-center max-w-2xl mx-auto">
                <h2 className="section-title">Get In Touch</h2>
                <p className="text-light-slate text-lg mb-8">
                    I'm currently looking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12">
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
                        className="text-green hover:text-white transition-colors duration-200"
                    >
                        LinkedIn
                    </a>
                </div>
                <div className="text-center text-slate text-sm font-sf-mono">
                    <p>Phone: +918284051201</p>
                    <p className="mt-2">WhatsApp: +17789954279</p>
                    <p className="mt-2">Email: akdevgan02@gmail.com</p>
                </div>
                <div className="mt-12 pt-8 border-t border-lightest-navy">
                    <p className="text-slate text-sm font-sf-mono">
                        Designed & Built by Akash Devgan
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;

