import useScrollAnimation from "../hooks/useScrollAnimation.jsx";

function Experience() {
    const ref = useScrollAnimation();

    const experiences = [
        {
            role: "Financial Manager",
            company: "Warba Capital Holding Co.",
            location: "Kuwait City",
            period: "February 2022 – Present",
        },
        {
            role: "Account Manager",
            company: "EPO GULF SPECIALITIES CO.",
            location: "Kuwait City",
            period: "December 2015 – May 2020",
        },
        {
            role: "Senior Accountant",
            company: "Al-Enma'a Real Estate Co.",
            location: "Kuwait City",
            period: "October 2010 – December 2015",
        },
        {
            role: "Accountant",
            company: "Al-Bisher & Al-Kazmi Group",
            location: "Kuwait City",
            period: "May 2004 – October 2010",
        },
        {
            role: "Accountant",
            company: "Swiftel International Group",
            location: "Kuwait City",
            period: "September 2001 – April 2004",
        },
    ];

    return (
        <section id="experience" ref={ref} className="scroll-section experience-section py-5 bg-light">
            <div className="container text-center">
                <h2 className="fw-bold text-primary mb-5">Work Experience</h2>

                <div className="row justify-content-center g-4">
                    {experiences.map((exp, index) => (
                        <div key={index} className="col-md-6 col-lg-4">
                            <div className="card shadow-sm border-0 p-4 scroll-animate h-100">
                                <h5 className="fw-bold text-primary mb-2">{exp.role}</h5>
                                <p className="text-secondary mb-1">{exp.company}</p>
                                <p className="text-secondary mb-2">{exp.location}</p>
                                <small className="text-muted">{exp.period}</small>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
