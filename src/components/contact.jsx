import useScrollAnimation from "../hooks/useScrollAnimation.jsx";

function Contact() {
    const ref = useScrollAnimation();
    return (
        <section id="contact" ref={ref} className="scroll-section contact-section py-5 bg-light">
            <div className="container text-center">
                <h2 className="fw-bold text-primary mb-4">Get In Touch</h2>
                <p className="mb-5 text-secondary">
                    I’m available for accounting, finance, or consultancy inquiries.  
                    Whether you need assistance with financial reporting, audits, budgeting, or any accounting project, feel free to reach out.
                </p>

                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6">
                        <form className="p-4 border rounded-3 shadow-sm bg-white">
                            <div className="mb-3 text-start">
                                <label htmlFor="name" className="form-label fw-semibold">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="form-control"
                                    placeholder="Enter your name"
                                />
                            </div>

                            <div className="mb-3 text-start">
                                <label htmlFor="email" className="form-label fw-semibold">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                />
                            </div>

                            <div className="mb-3 text-start">
                                <label htmlFor="message" className="form-label fw-semibold">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="form-control"
                                    placeholder="Write your message"
                                ></textarea>
                            </div>

                            <a
                                type="submit"
                                href="mailto:shoukrysherif5@gmail.com"
                                className="btn btn-primary w-100 fw-semibold"
                            >
                                Send Message
                            </a>
                        </form>
                    </div>
                </div>

                <div className="mt-5">
                    <p className="text-secondary mb-1">Alternatively, connect with me:</p>
                    <div className="d-md-flex justify-content-center gap-4">
                        <a
                            href="mailto:kha02gh@hotmail.com"
                            className="text-primary fs-5 text-decoration-none d-block"
                        >
                            <i className="bi bi-envelope"></i> Email
                        </a>
                        <a
                            href="https://www.linkedin.com/in/khaled-samir-omar-19aa5887?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                            target="_blank"
                            rel="noreferrer"
                            className="text-primary fs-5 text-decoration-none d-block"
                        >
                            <i className="bi bi-linkedin"></i> LinkedIn
                        </a>
                        <a
                            href="tel:+96550530073"
                            className="text-primary fs-5 text-decoration-none d-block"
                        >
                            <i className="bi bi-telephone-fill"></i> +965 5053 0073
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
