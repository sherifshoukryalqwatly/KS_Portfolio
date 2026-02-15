import useScrollAnimation from "../hooks/useScrollAnimation.jsx";

function About() {
    const ref = useScrollAnimation();
    return (
        <section id="about" ref={ref} className="scroll-section about-section py-5 bg-white">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left side — Image */}
                    <div className="col-md-5 text-center mb-4 mb-md-0">
                        <img
                            src="myPhoto.jpg" // place your image inside public/images
                            alt="Khaled Samir"
                            className="img-fluid rounded-circle shadow-sm about-img border border-3 border-primary"
                            width="250"
                            height="250"
                        />
                    </div>

                    {/* Right side — Text */}
                    <div className="col-md-7">
                        <h2 className="fw-bold text-primary mb-3">About Me</h2>
                        <p className="text-secondary fs-5">
                            Hi! I’m <span className="fw-semibold text-primary">Khaled Samir</span>,  
                            an experienced <span className="fw-semibold text-primary">Accountant </span>  
                            with expertise in <span className="fw-semibold">full-cycle accounting, financial reporting, budgeting, and cost control</span>.  
                        </p>
                        <p className="text-secondary fs-5">
                            Skilled in <span className="badge bg-primary me-2">Oracle E-Business Suite R12</span>
                            <span className="badge bg-primary me-2">Accounts Payable</span>
                            <span className="badge bg-primary me-2">Accounts Receivable</span>
                            <span className="badge bg-primary me-2">General Ledger</span>
                            <span className="badge bg-primary me-2">Bank Reconciliation</span>
                            <span className="badge bg-primary">Month-end Closing</span>
                        </p>
                        <p className="text-secondary fs-5">
                            Meticulous and committed to <span className="fw-semibold text-primary">accuracy, compliance</span>, and  
                            supporting <span className="fw-semibold text-primary">management decision-making</span>.  
                            My goal is to ensure financial integrity while driving operational efficiency.
                        </p>

                        <div className="mt-4 d-flex flex-wrap gap-3">
                            <a 
                                href="https://drive.google.com/file/d/1BEq8a6Bn3WwZydQCObdQEXbN76DasxNP/view?usp=drive_link" 
                                className="btn btn-outline-primary btn-lg"
                                target="_blank"
                            >
                                My Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
