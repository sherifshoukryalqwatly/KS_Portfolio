function Footer() {
    return (
        <footer className="bg-light text-center text-secondary pt-5 pb-3 border-top">
            <div className="container">
                <p className="mb-2">
                    &copy; 2026 <span className="fw-semibold text-primary">Sherif Shukri</span> | Full-Stack Developer
                </p>
                <p className="mb-3">
                    <a href="mailto:shoukrysherif5@gmail.com" className="text-primary text-decoration-none me-3">
                        <i className="bi bi-envelope-fill me-1"></i>Email
                    </a>
                    <a href="https://www.linkedin.com/in/sherif-shukrii-08085022a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noreferrer" className="text-primary text-decoration-none me-3">
                        <i className="bi bi-linkedin me-1"></i>LinkedIn
                    </a>
                    <a href="tel:+201110317344" className="text-primary text-decoration-none">
                        <i className="bi bi-telephone-fill me-1"></i>+20 1110317344
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
